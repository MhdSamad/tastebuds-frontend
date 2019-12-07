import React from 'react'
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import axios from 'axios';

import { Icon, Item, Header, Container, Form, Checkbox, Button, Select } from 'semantic-ui-react';

class Signup extends React.Component {

    constructor() {

        super();
        this.state = {

            username: '',
            password: ''

        };

    }

    handleUsername = (e) => {

        this.setState({

            username: e.target.value

        });

    }

    handlePassword = (e) => {

        this.setState({

            password: e.target.value

        });


    }

    signup = async () => {

        try {

            await axios.post('http://localhost:5000/signup', {

                username: this.state.username,
                password: this.state.password,

            });

            localStorage.setItem('loggedIn', true);
            localStorage.setItem('username', this.state.username);

            window.location = '/taste';

        } catch (err) {

            alert(err);

        }


    }

    render() {

        return (

            <div>

                <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>Sign up</Header>
                <hr />

                <Form onSubmit={this.signup} method={'POST'}>
                    <Form.Field>
                        <label>Username:</label>
                        <input placeholder='Username' required onChange={this.handleUsername} />
                    </Form.Field>


                    <Form.Field>
                        <label>Password:</label>
                        <input type={'password'} placeholder='Password' required onChange={this.handlePassword} />
                    </Form.Field>

                    <Button type='submit'>Sign up</Button>

                </Form>

            </ div >

        );

    }

}

export default Signup