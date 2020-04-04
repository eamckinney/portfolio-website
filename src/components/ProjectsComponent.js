import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, CardHeader,
    Button } from "reactstrap";
import { PROJECTS } from '../shared/projects'

function RenderProject( {project} ) {
    return(
        <Card id={`project${project.id}`} className="project-box">
            <CardBody>
                <CardTitle>{project.name}</CardTitle>
                <CardText>{project.description}</CardText>
                <Button className="btn-outline-light">See More</Button>
            </CardBody>
        </Card>
    );
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {

        const projects = this.state.projects.map(project => {
            return(
                <div key={project.id} className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <RenderProject project={project} />
                </div>
            );
        });

        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col second-block px-5">
                        <hr />
                        <div class="row" id="Projects">
                            <div class="col-md-5 mx-4 order-md-last">
                                <div class="mt-5 align-items-center">
                                    <h1 class="text-left" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
                                    <p class="text-left" data-aos="fade-up" data-aos-duration="1000">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">                                
                                <div class="row">
                                    {projects}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;