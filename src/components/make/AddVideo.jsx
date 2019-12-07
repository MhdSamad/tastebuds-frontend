import React from 'react'
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import axios from 'axios';

import { Icon, Item, Header, Container, Form, Checkbox, Button, Select } from 'semantic-ui-react'
import Login from '../auth/Login';

class AddVideo extends React.Component {

    constructor() {

        super();
        this.state = {

            url: '',
            category: '',
            categories: []

        };

    }

    getCategories = async () => {

        try {

            const result = await axios.get('http://localhost:5000/categories');
            this.setState({

                categories: result.data

            });

        } catch (err) {

            alert(err);

        }

    }

    handleURL = (e) => {

        this.setState({

            url: e.target.value

        });

    }

    handleCategory = (e, { value }) => {

        this.setState({

            category: value

        });


    }

    addVideo = async () => {

        try {

            await axios.post('http://localhost:5000/video', {

                username: localStorage.getItem('username'),
                url: this.state.url,
                category: this.state.category


            });

            alert('Video added sucessfully');

        } catch (err) {

            alert(err);

        }


    }

    render() {

        if (!localStorage.getItem('loggedIn')) return <Login />;

        return (

            <div>

                <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>Make a taste:</Header>
                <hr />

                <Form onSubmit={this.addVideo} method={'POST'}>
                    <Form.Field>
                        <label>Youtube URL:</label>
                        <input placeholder='Youtube URL' required onChange={this.handleURL} />
                    </Form.Field>


                    <Form.Field>
                        <label>Category:</label>
                        <Select placeholder='Select video category' required options={
                            this.state.categories.map((category) => {

                                return { key: category.name, value: category.name, text: category.name };

                            })
                        } onChange={this.handleCategory} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>

                </Form>

            </ div >

        );

    }

    componentDidMount = () => {

        this.getCategories();

    }

}

export default AddVideo