
import React from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';

import axios from 'axios';

import Video from './Video';
import Login from '../auth/Login';

class VideoBattle extends React.Component {

    constructor() {

        super()
        this.state = {

            videos: [],
            canVote: true

        };

    }

    vote = async (index) => {

        try {

            await axios.post(`http://localhost:5000/taste/vote/${this.state.videos[index].videoId}`);

            const videos = this.state.videos.slice();
            videos[index].votes = parseInt(videos[index].votes) + 1;

            this.setState({

                canVote: false,
                videos: videos

            });

        } catch (err) {

            alert(err);

        }

    }

    getVideos = async () => {

        try {

            const result = await axios.get(`http://localhost:5000/video/${this.props.match.params.category}`);
            const videos = result.data;

            // alert(videos.length)

            const video1Index = Math.floor(Math.random() * videos.length);
            let video2Index;

            do {

                video2Index = Math.floor(Math.random() * videos.length);

            } while (video1Index === video2Index || videos[video1Index].user === videos[video2Index].user);

            // alert(videos[video1Index].user);
            // alert(videos[video2Index].user);

            this.setState({

                videos: [

                    videos[video1Index],
                    videos[video2Index]

                ]

            });

        } catch (err) {

            alert(err);

        }

    }

    refresh = () => {

        window.location.reload();

    }

    goHome = () => {

        window.location = '/taste';

    }

    render() {

        if (!localStorage.getItem('loggedIn')) return <Login />;

        if (this.state.videos.length === 0) return (

            <div className={'ui active red text loader'}>Loading videos...</div>

        )

        else return (

            <div>

                <Grid centered stackable style={{ margin: '125px 0 0 -200px' }}>

                    <Grid.Row>

                        <Grid.Column width={4} floated={'left'}>
                            <Video video={this.state.videos[0]}
                                index={0}
                                vote={this.vote}
                                canVote={this.state.canVote} />
                        </Grid.Column>

                        <Grid.Column width={4} floated={'right'} >
                            <Video video={this.state.videos[1]}
                                index={1}
                                vote={this.vote}
                                canVote={this.state.canVote} />
                        </Grid.Column>

                    </Grid.Row>

                </Grid >

                <br />
                <br />
                <br />
                <br />



                {this.state.canVote ? null :

                    <div>

                        <Button style={{ margin: '0 0 0 450px' }} color={'red'} icon labelPosition='left' onClick={this.refresh}>
                            <Icon name='redo' />
                            PLay again
                        </Button>

                        <br />
                        <br />

                        <Button style={{ margin: '0 0 0 415px' }} color={'red'} icon labelPosition='left' onClick={this.goHome}>
                            <Icon name='home' />
                            Pick another category
                        </Button>

                    </div>

                }









            </div>

        );

    }

    componentDidMount = () => {

        this.getVideos();

    }

}

export default VideoBattle;

