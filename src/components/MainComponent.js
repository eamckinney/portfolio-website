import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './NavComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Connect from './ConnectComponent';
import RouteFilter from './RouteFilterComponent.js';


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/home' render={() => 
                        <React.Fragment>
                            <Navigation />
                            <Home />
                            <About />
                            <Projects />
                            <Connect />
                        </React.Fragment>
                    } />
                    <Route path='/routefilter' component={RouteFilter} />
                    <Redirect to='/home' />
                </Switch>
                
               
            </React.Fragment>
        );
    }
}

export default Main;