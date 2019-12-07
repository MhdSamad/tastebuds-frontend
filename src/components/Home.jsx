
import React from 'react';
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import { Container, Menu, Sidebar, Segment, Icon, Header, Image, Grid } from 'semantic-ui-react';

import VideoBattle from './taste/VideoBattle';
import CategoryList from './taste/CategoryList';
import AddVideo from './make/AddVideo';
import Account from './make/Account';

import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';

class Home extends React.Component {

    render() {

        const activeItem = 'home';

        return (

            <Container fluid >

                <Router>

                    <Grid columns={2} >

                        <Grid.Column width={4}>
                            <Menu vertical style={{ height: '500vh' }} color={'red'} inverted>

                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={() => { window.location = '/' }}
                                >
                                    <Header as='h4' textAlign={'center'} style={{ color: '#FFFFFF' }}>TASTEBUDS</Header>
                                </Menu.Item>

                                <Menu.Item
                                    name='taste'
                                    active={activeItem === 'taste'}
                                    onClick={() => { window.location = '/taste' }}
                                >
                                    <Header as='h4' textAlign={'left'} style={{ color: '#FFFFFF' }}>Taste</Header>
                                </Menu.Item>

                                <Menu.Item
                                    name='make'
                                    active={activeItem === 'make'}
                                    onClick={() => { window.location = '/make' }}
                                >
                                    <Header as='h4' textAlign={'left'} style={{ color: '#FFFFFF' }}>Make</Header>
                                </Menu.Item>

                                <hr />

                                {localStorage.getItem('loggedIn') ?

                                    <Menu.Item
                                        name='logout'
                                        active={activeItem === 'logout'}
                                        onClick={() => { window.location = '/logout' }}
                                    >
                                        <Header as='h4' textAlign={'left'} style={{ color: '#FFFFFF' }}>Logout</Header>
                                    </Menu.Item>

                                    :

                                    <div>

                                        <Menu.Item
                                            name='login'
                                            active={activeItem === 'login'}
                                            onClick={() => { window.location = '/login' }}
                                        >
                                            <Header as='h4' textAlign={'left'} style={{ color: '#FFFFFF' }}>Login</Header>
                                        </Menu.Item>

                                        <Menu.Item
                                            name='signup'
                                            active={activeItem === 'signup'}
                                            onClick={() => { window.location = '/signup' }}
                                        >
                                            <Header as='h4' textAlign={'left'} style={{ color: '#FFFFFF' }}>Sign up</Header>
                                        </Menu.Item>

                                    </div>

                                }



                            </Menu>
                        </Grid.Column>

                        {/* Content */}
                        <Grid.Column>

                            <Switch>

                                <Route exact path={'/'}>

                                    <Header as={'h1'} style={{ margin: '50px 0 0 0' }} color={'red'}>Welcome to Tastebuds.</Header>
                                    <Header as={'h1'} color={'red'}>See how much your tastes are shared.</Header>

                                </Route>

                                <Route exact path={'/taste'}>

                                    <CategoryList />

                                </Route>

                                <Route path={'/taste/:category'} component={VideoBattle} />

                                <Route exact path={'/make'}>

                                    <AddVideo />

                                </Route>

                                <Route path={'/account/:username'} component={Account} />

                                <Route exact path={'/login'}>

                                    <Login />

                                </Route>

                                <Route exact path={'/signup'}>

                                    <Signup />

                                </Route>

                                <Route exact path={'/logout'}>

                                    <Logout />

                                </Route>

                            </Switch>

                        </Grid.Column>

                    </Grid>

                </Router>

            </Container>

        );

    }

}

export default Home;
