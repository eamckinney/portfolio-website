import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../RouteFilter.css';
import routesData from "../shared/mn_routes.json"; 

const routeOptions = [
    { key: 'crimpy', text: 'Crimpy', value: 'crimp' },
    { key: 'faceClimbing', text: 'Face Climbing', value: 'face climb' },
    { key: 'smallHolds', text: 'Small Holds', value: 'small holds' },
    { key: 'technical', text: 'Technical', value: 'technical' },
    { key: 'balancey', text: 'Balancey', value: 'balanc' },
    { key: 'slabby', text: 'Slabby', value: 'slab' },
    { key: 'slopey', text: 'Slopey', value: 'slop' },
    { key: 'crack', text: 'Crack Climbing', value: 'crack' },
    { key: 'juggy', text: 'Juggy', value: 'jug' },
    { key: 'overhung', text: 'Overhung', value: 'overhang' },
    { key: 'roof', text: 'Roof', value: 'roof' },
    { key: 'pumpy', text: 'Pumpy', value: 'pump' },
    { key: 'powerful', text: 'Powerful', value: 'power' },
    { key: 'bigHolds', text: 'Big Holds', value: 'big holds' },
    { key: 'undercling', text: 'Underclings', value: 'undercling' }
]

const geoOptions = [
    { key: 'minnesota', text: 'Minnesota', value: 'Minnesota' },
    { key: 'wisconsin', text: 'Wisconsin', value: 'Wisconsin' }
]

let routes = routesData;
let routeFilters = [];


class RouteFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            geography: '', 
            filters: [], 
            submittedGeo: '', 
            submittedFilters: '',
            filteredRoutes: []
        };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { geography, filters } = this.state;
        this.setState({ submittedGeo: geography, submittedFilters: filters });

        let f;
        for (f in filters) {
            const filterName = filters[f];
            routes = routesData.filter(obj => (obj.desc.includes(filterName) && obj.location.includes(geography)));
        }

        this.setState({ filteredRoutes: routes });
    }
    
    render() {

        const { geography, filters, submittedGeo, submittedFilters } = this.state;

        return(
            <React.Fragment>
                <div className="container-fluid">
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
                                <Form.Button content='Submit'/>
                            </Form>
                        </div>
                    </div>
                    <div className="row styled">
                        <div className="col">
                            <hr style={{borderColor: "white"}} />
                            <h3>Get climbing!</h3>
                            <p>Once you have clicked submit above, you can click the climb names below to go to the Mountain Project page.</p>
                            <div style={{color: "white"}}>
                                {this.state.filteredRoutes.map(route => {
                                    return(
                                        <div key={route.id}>
                                            <h5><a target="_blank" href={route.url}>{route.name}</a></h5>
                                            <ul>
                                                <li>Location: {route.location[1]} - {route.location[2]}</li>
                                                <li>Type: {route.type}</li>
                                                <li>Grade: {route.rating}</li>
                                                <li>Stars: {route.stars}</li>
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    
        );
    }
    
}

export default RouteFilter;