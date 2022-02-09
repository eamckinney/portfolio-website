import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from './NavComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Connect from './ConnectComponent';
import RouteFilter from './RouteFilterComponent.js';
import HundredDays from './HundredDaysComponent.js';


class Main extends Component {
    render() {
        return (
            <div>
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
                    <Route path='/betaforbeta' component={RouteFilter} />
                    <Route path='/100daysofcode' component={HundredDays} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);