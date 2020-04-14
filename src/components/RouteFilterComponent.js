/*

TO DO:

- add AND v. OR options (for style filters) using cool slidy bar bubble thing
- add filters: stars, type, grade, 2nd level location
- sort by: stars, type, grade, style, location, name (alphabetical)
- load in more data. maybe add new field to filter by "within 60 miles of ___" instead of state

*/




import React, { Component } from 'react';
import { Form, Label, Divider, Rating } from 'semantic-ui-react';
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


class RouteFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            geography: '', 
            filters: [], 
            submittedGeo: '', 
            submittedFilters: '',
            filteredRoutes: [],
            type: 'Sport'
        };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { geography, filters, type } = this.state;
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
        

        this.setState({ filteredRoutes: routes });
    }
    
    render() {

        const { geography, filters, submittedGeo, submittedFilters, type } = this.state;

        return(
            <div className="routeFilterPage" id="Top">
                <div className="text-center mb-4">
                    <Link to="/home" className="text-center"><Button className="btn-outline-dark">Back to Home</Button></Link>
                </div>
                
                <div className="container appStyle">
                    <div className="row styled">
                        <div className="col text-center">
                            <h3>RouteFinder - powered by Mountain Project</h3>
                        </div>
                    </div>
                    <div className="row styled">
                        <div className="col">
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
                                
                                <Form.Button content='Submit'/>
                            </Form>
                        </div>
                    </div>
                    <div className="row styled">
                        <div className="col">
                            <Divider inverted />
                            <h3>Get climbing!</h3>
                            <p>Once you have clicked submit above, you can click the climb names below to go to the Mountain Project page.</p>
                            <p><strong>Filtered Routes: {this.state.filteredRoutes.length}</strong></p>
                            <Divider inverted /><br/>
                            <div style={{color: "white"}}>
                                {this.state.filteredRoutes.map(route => {
                                    return(
                                        <div key={route.id}>
                                            <h5><a className="routeName" target="_blank" rel="noopener noreferrer" href={route.url}>{route.name}</a> <Rating defaultRating={ (Math.round(route.stars)) - 1} maxRating={4} disabled /></h5>
                                            <Label.Group color="yellow">
                                                {route.style.map(style => {
                                                    return(
                                                        <Label>{style}</Label>
                                                    );
                                                })}
                                            </Label.Group>
                                            <p><em>{route.desc}</em></p>
                                            <ul>
                                                <li><strong>Location:</strong> {route.location[1]} - {route.location[2]}</li>
                                                <li><strong>Type:</strong> {route.type}</li>
                                                <li><strong>Grade:</strong> {route.rating}</li>
                                                <li><strong>Stars:</strong> {((route.stars*10) - 10)/10}</li>
                                            </ul>
                                            <br/>
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