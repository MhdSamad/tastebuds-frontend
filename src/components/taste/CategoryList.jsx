import React from 'react'
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import axios from 'axios';

import { Icon, Item, Header, Container } from 'semantic-ui-react'
import Category from './Category'
import Login from '../auth/Login';

class CategoryList extends React.Component {

    constructor() {

        super();
        this.state = {

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

    render() {

        if (!localStorage.getItem('loggedIn')) return <Login />;

        if (this.state.categories.length === 0) return (

            <div>
                <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>Select a category:</Header>
                <hr />
                <div className={'ui active red text loader'}>Loading categories...</div>
            </div>

        );

        else return (

            <div>

                <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>Select a category:</Header>
                <hr />

                <Item.Group divided>

                    {this.state.categories.map((category) => {

                        return <Category name={category.name} image={category.image} />;

                    })}

                </Item.Group>



            </ div>

        );

    }

    componentDidMount = () => {

        this.getCategories();

    }

}

export default CategoryList