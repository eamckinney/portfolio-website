import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './NavComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Home />
                <About />
                <Projects />
            </React.Fragment>
        );
    }
}

export default Main;