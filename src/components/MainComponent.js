import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from './homepage/NavComponent';
import Home from './homepage/HomeComponent';
import About from './homepage/AboutComponent';
import Projects from './homepage/ProjectsComponent';
import Connect from './homepage/ConnectComponent';
import RouteFilter from './projects/RouteFilter/RouteFilterComponent.js';
import HundredDays from './projects/Logbook/HundredDaysComponent.js';


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
                    <Route path='/equilo' component={() => {
                        window.location.href = 'https://app.equilo.io/#/';
                        return null;
                        }} />
                    <Route path='/jennifer-bertram' component={() => {
                        window.location.href = 'https://www.jenniferbertram.com/';
                        return null;
                        }} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);