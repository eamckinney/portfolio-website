import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './NavComponent';
import Home from './HomeComponent';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Home />
            </React.Fragment>
        );
    }

}

export default Main;

//<div id="bg">
//<img src="img/bg.JPG" alt="Emily in Red Rock Canyon Conservation Area, Nevada"/>
//</div>