import React from 'react'
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import axios from 'axios';

import { Icon, Item, Header, Container, Form, Checkbox, Button, Select, Card, Image } from 'semantic-ui-react'
import Video from '../taste/Video';
import Login from '../auth/Login';

class Account extends React.Component {

    constructor() {

        super();
        this.state = {

            points: 0,
            rank: 0,

            videos: []

        };

    }

    getStats = async () => {

        try {

            const result = await axios.get('http://localhost:5000/stats');
            const pointsArray = result.data;

            let points;
            let rank = 0;
            let index = -1;

            do {

                index++;
                rank++;
                points = pointsArray[index];

            } while (points._id !== this.props.match.params.username);

            this.setState({

                points: points.points,
                rank: rank

            });

        } catch (err) {

            alert(err);

        }

    }

    getVideos = async () => {

        try {

            const result = await axios.get(`http://localhost:5000/videos/${this.props.match.params.username}`);
            const videos = result.data;

            this.setState({

                videos: videos.map((video) => <Video video={video} inAccount={true} />)

            });

        } catch (err) {

            alert(err);

        }

    }

    render() {

        if (!localStorage.getItem('loggedIn')) return <Login />;

        return (

            <div>

                <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>{this.props.match.params.username}'s profile</Header>
                <hr />

                <Card>
                    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                    <Card.Content>

                        <Card.Header>Rank {this.state.rank}</Card.Header>


                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {this.state.points} Votes
                        </a>
                    </Card.Content>
                </Card>

                {this.state.videos}


            </ div >

        );

    }

    componentDidMount = () => {

        this.getStats();
        this.getVideos();

    }

}

export default Account