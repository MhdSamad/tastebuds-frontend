
import React from 'react';
import axios from 'axios';

import { Header, Button, Icon, Grid, Label } from 'semantic-ui-react';

class Video extends React.Component {

    vote = async () => {

        if (!this.props.canVote)
            return;

        this.props.vote(this.props.index);

    }

    render() {

        return (

            <div>

                <Grid.Row>

                    <iframe title={this.props.video.videoId} width={'600'} height={'400'}
                        src={`https://www.youtube.com/embed/${this.props.video.videoId}`}>
                    </iframe>
                </Grid.Row>


                <Grid.Row columns={3}>

                    {this.props.inAccount ?

                        <div>
                            <Header>Category:{this.props.video.category}</Header>
                            <br />
                        </div> :

                        <Grid.Column>
                            <Button color={'red'} icon labelPosition='left' onClick={this.vote}>
                                <Icon name='thumbs up outline' />
                                Vote
                        </Button>
                        </Grid.Column>

                    }



                    {this.props.canVote || this.props.inAccount ? null :

                        <div>

                            <br />

                            <Grid.Column>
                                <a href={`/account/${this.props.video.user}`}> <Header>User: {this.props.video.user}</Header></a>
                            </Grid.Column>

                            <br />

                            <Grid.Column>
                                <Header >Votes: {this.props.video.votes}</Header>
                            </Grid.Column>

                        </div>

                    }

                </Grid.Row>

            </div>

        );

    }

}

export default Video;

