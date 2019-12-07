import React from 'react'
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import axios from 'axios';

import { Icon, Item, Header, Container, Form, Checkbox, Button, Select } from 'semantic-ui-react'
import Home from '../Home';

class Logout extends React.Component {

    componentWillMount() {

        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');

        window.location = '/';

    }

}

export default Logout