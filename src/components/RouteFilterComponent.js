import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText }from 'reactstrap';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../RouteFilter.css';


function RouteFilter(props) {
    const options = [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' }
    ]
    
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
                        <h5>First, choose your route style.</h5>
                        <Dropdown
                            placeholder='Route Style'
                            fluid
                            multiple
                            search
                            selection
                            options={options}
                        />
                    </div>
                </div>
            </div>
        
        
        </React.Fragment>

    );
}

export default RouteFilter;