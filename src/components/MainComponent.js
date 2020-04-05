import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './NavComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Connect from './ConnectComponent';


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Home />
                <About />
                <Projects />
                <Connect />
            </React.Fragment>
        );
    }
}

export default Main;