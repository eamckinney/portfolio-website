import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText,
    Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { PROJECTS } from '../shared/projects';

import { Link } from "react-router-dom";


class RenderProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }
    
    toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

    render() {
        

        return(
            <React.Fragment>
                <Card className={`project-box project${this.props.project.id}`}>
                    <CardBody>
                        <CardTitle>{this.props.project.name}</CardTitle>
                        <CardText>{this.props.project.description}</CardText>
                        <Button className="btn-outline-light" onClick={this.toggleModal}>See More</Button>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} contentClassName={`project${this.props.project.id}`}>
                    <ModalHeader toggle={this.toggleModal}>{this.props.project.name}</ModalHeader>
                    <ModalBody>
                        <p>{this.props.project.longDescription}</p>
                        <img
                            className="image"
                            src={this.props.project.image}
                            width="400"
                            alt="no image"
                            />
                        <br />
                        <Link to={this.props.project.url}><Button className="btn-outline-light">Check it out</Button></Link>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
};



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            isModalOpen: false
        };
    }


    render() {

        const projects = this.state.projects.map(project => {
            return(
                <div key={project.id} className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <RenderProject project={project} />
                </div>
            );
        });

        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col second-block px-5">
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
                        <div className="row">
                            <div className="col first-block-scroll">
                                <div className="text-center mx-auto mb-5" id="scroll-about">
                                    <a href="#Connect"><p style={{fontSize: "12px"}} data-aos="fade-up" data-aos-duration="2000">Scroll<br /><i class="fa fa-lg fa-angle-double-down" /></p></a>
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