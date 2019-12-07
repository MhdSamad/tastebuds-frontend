
import React from 'react';
import {

    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

import { Grid, Item, Icon, Header } from 'semantic-ui-react';

class Category extends React.Component {

    render() {

        // alert(this.props.image)

        return (

            <Item>

                <Item.Image size='small' src={this.props.image} />
                <Item.Content verticalAlign='middle'>
                    <Header style={{ margin: '0 0 0 60' }} as={'h1'}>
                        <a style={{ color: '#db2828' }} href={`http://localhost:3000/taste/${this.props.name}`}>{this.props.name}</a>
                    </Header>
                </Item.Content>

            </Item>


        );

    }

}

export default Category;

