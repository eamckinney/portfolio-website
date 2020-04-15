/*

TO DO:

- add AND v. OR options (for style filters) using cool slidy bar bubble thing
- add filters: stars, type, grade, 2nd level location
- multi-level sort?
- load in more data. maybe add new field to filter by "within 60 miles of ___" instead of state
- summary of the data pulled: # of routes, locations, average # of stars within location...

*/

import React, { Component, useEffect } from 'react';
import { Form, Label, Divider, Rating, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import '../RouteFilter.css';
import routesData from "../shared/mn_routes_array.json";

const routeOptions = [
    { key: 'crimpy', text: 'Crimpy', value: 'crimpy' },
    { key: 'faceClimbing', text: 'Face Climbing', value: 'faceClimbing' },
    { key: 'smallHolds', text: 'Small Holds', value: 'smallHolds' },
    { key: 'technical', text: 'Technical', value: 'technical' },
    { key: 'balancey', text: 'Balancey', value: 'balancey' },
    { key: 'slabby', text: 'Slabby', value: 'slabby' },
    { key: 'slopey', text: 'Slopey', value: 'slopey' },
    { key: 'crack', text: 'Crack Climbing', value: 'crack' },
    { key: 'juggy', text: 'Juggy', value: 'juggy' },
    { key: 'overhung', text: 'Overhung', value: 'overhung' },
    { key: 'roof', text: 'Roof', value: 'roof' },
    { key: 'pumpy', text: 'Pumpy', value: 'pumpy' },
    { key: 'powerful', text: 'Powerful', value: 'powerful' },
    { key: 'bigHolds', text: 'Big Holds', value: 'bigHolds' },
    { key: 'undercling', text: 'Underclings', value: 'undercling' }
]

const geoOptions = [
    { key: 'minnesota', text: 'Minnesota', value: 'Minnesota' },
    { key: 'wisconsin', text: 'Wisconsin', value: 'Wisconsin' }
]

let routes = routesData;

function compareValues(key) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      let varA;
      let varB;

      if (key === "rating") {
        varA = (a[key].indexOf("1") === 2)
            ? a[key].toUpperCase() : a[key].replace(".",".0").toUpperCase();
        varB = (b[key].indexOf("1") === 2)
            ? b[key].toUpperCase() : b[key].replace(".",".0").toUpperCase();

      } else if (key === "location" ) {
          varA = a[key][1].concat(" ", a[key][2]).toUpperCase();
          varB = b[key][1].concat(" ", b[key][2]).toUpperCase();

      } else {
        varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      }
  
      console.log(varA, varB);

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (key === "stars") ? comparison * -1 : comparison;
    };
  }


class RouteFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            geography: '', 
            filters: [], 
            submittedGeo: '', 
            submittedFilters: '',
            filteredRoutes: [],
            type: 'Sport',
            sort: 'name'
        };
    }


    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { geography, filters, type, sort } = this.state;
        this.setState({ submittedGeo: geography, submittedFilters: filters });

        routes = routesData;

        if (geography.length > 0) {
            routes = routes.filter(obj => obj.location.includes(geography));
        }

        if (filters.length > 0) {
            for (let i in filters) {
                const filterName = filters[i];
                routes = routes.filter(obj => (obj.style.includes(filterName)));
            }
        }

        if (type.length > 0) {
            routes = routes.filter(obj => obj.type.includes(type));
        }

        if (sort.length > 0) {
            routes = routes.sort(compareValues(sort))
        }
        

        this.setState({ filteredRoutes: routes });
    }
    
    render() {

        const { geography, filters, submittedGeo, submittedFilters, type, sort } = this.state;
        window.scrollTo(0, 0);

        return(
            <div className="routeFilterPage" id="Top">
                <div className="container mb-4 pl-0">
                    <div className="row">
                        <div className="col">
                            <h2 className="appTitle mb-0">RouteFinder</h2>
                            <h3 className="appTitle mt-0 mb-3">Powered by Mountain Project, created by Emily McKinney</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="/home" className="text-center"><Button className="btn-outline-dark">Back to Home</Button></Link>
                        </div>
                    </div>
                </div>
                
                <div className="container appStyle">
                    <div className="row styled">
                        <div className="col mt-3">
                            <Form inverted onSubmit={this.handleSubmit}>
                                <Form.Select
                                    fluid
                                    label='First, choose where you want to climb.'
                                    placeholder='Geography'
                                    options={geoOptions}
                                    name='geography'
                                    value={geography}
                                    onChange={this.handleChange}
                                />
                                <Form.Dropdown
                                    label='Next, choose your route style.'
                                    placeholder='Route Style'
                                    fluid
                                    multiple
                                    search
                                    selection
                                    options={routeOptions}
                                    name='filters'
                                    value={filters}
                                    onChange={this.handleChange}
                                />
                                <Form.Group inline>
                                    <label>Type of Climb: </label>
                                    <Form.Radio
                                    label='Sport'
                                    name='type'
                                    value='Sport'
                                    checked={type === 'Sport'}
                                    onChange={this.handleChange}
                                    />
                                    <Form.Radio
                                    label='Trad'
                                    name='type'
                                    value='Trad'
                                    checked={type === 'Trad'}
                                    onChange={this.handleChange}
                                    />
                                    <Form.Radio
                                    label='Boulder'
                                    name='type'
                                    value='Boulder'
                                    checked={type === 'Boulder'}
                                    onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Divider hidden />
                                <Divider horizontal>
                                    <Header as='h4' style={{ color: "white" }}>
                                        SORT
                                    </Header>
                                </Divider>
                                <Divider hidden />
                                <Form.Group className="sortGroup">
                                    <Form.Radio
                                    className="sort"
                                    toggle
                                    label='Name'
                                    name='sort'
                                    value='name'
                                    checked={sort === 'name'}
                                    onChange={this.handleChange}
                                    /> 
                                    <Form.Radio
                                    className="sort"
                                    toggle
                                    label='Location'
                                    name='sort'
                                    value='location'
                                    checked={sort === 'location'}
                                    onChange={this.handleChange}
                                    /> 
                                    <Form.Radio
                                    className="sort"
                                    toggle
                                    label='Grade'
                                    name='sort'
                                    value='rating'
                                    checked={sort === 'rating'}
                                    onChange={this.handleChange}
                                    /> 
                                    <Form.Radio
                                    className="sort"
                                    toggle
                                    label='Stars'
                                    name='sort'
                                    value='stars'
                                    checked={sort === 'stars'}
                                    onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Divider hidden />
                                <div className="text-center">
                                    <Form.Button content='Submit'/>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="row styled">
                        <div className="col">
                            <Divider inverted />
                            <div className="text-center">
                                <h3>Get climbing!</h3>
                                <p>Once you have clicked submit above, you can click the climb names below to go to the Mountain Project page.</p>
                                <h3><strong>Filtered Routes: {this.state.filteredRoutes.length}</strong></h3>
                            </div>                            
                            <Divider hidden /><Divider hidden />
                            <div style={{color: "white"}}>
                                {this.state.filteredRoutes.map(route => {
                                    return(
                                        <div key={route.id}>
                                            <a className="routeName" target="_blank" rel="noopener noreferrer" href={route.url}>{route.name}</a> <Rating defaultRating={ (Math.round(route.stars)) - 1} maxRating={4} disabled />
                                            <p className="routeLocation"><strong>Location:</strong> {route.location[1]} - {route.location[2]}</p>
                                            <p> <Label.Group>
                                                <Label circular>{route.type}</Label>
                                                <Label circular>{route.rating}</Label>
                                                {route.style.map(style => {
                                                    return(
                                                        <Label color="yellow">{style}</Label>
                                                    );
                                                })}
                                            </Label.Group> </p>
                                            <p><em>{route.desc}</em></p>
                                            <Divider hidden /><Divider hidden />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center mt-4">
                    <a href="#Top" className="text-center"><Button className="btn-outline-dark">Back to Top</Button></a>
                </div>
            </div>
    
        );
    }
    
}

export default RouteFilter;


/* 

<div className="row styled">
    <div className="col">
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ type }, null, 2)}</pre>
    </div>
</div>

*/