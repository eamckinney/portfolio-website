import React, { Component } from "react";
import { Card, CardTitle, CardBody,
    Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { PROJECTS } from '../shared/projects';
import { Link } from "react-router-dom";


class RenderProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
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
                <Card className={`project-box project${this.props.project.id}`} onClick={this.toggleModal}>
                    <CardBody>
                        <CardTitle>{this.props.project.name}</CardTitle>
                        {this.props.project.description}
                        <Button className="btn-outline-light" onClick={this.toggleModal}>See More</Button>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} contentClassName={`project${this.props.project.id}`}>
                    <ModalHeader toggle={this.toggleModal}>{this.props.project.name}</ModalHeader>
                    <ModalBody>
                        {this.props.project.longDescription}
                        <img
                            className="image"
                            src={this.props.project.image}
                            width="100%"
                            alt="no image"
                            class="center"
                            />
                        <br />
                        <Link to={this.props.project.url}><Button className="btn-outline-light center">{this.props.project.buttonText}</Button></Link>
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
            isModalOpen: false,
            isRooOpen: false
        };
    }

    toggleRoo = () => {
		this.setState({
			isRooOpen: !this.state.isRooOpen,
        });

        if (this.state.isRooOpen) {
            
        }
        
    };

    render() {

        const projectsLeftCol = this.state.projects.slice(0, 2).map(project => {
            return(
                <div key={project.id} className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <RenderProject project={project} />
                </div>
            );
        });

        const projectsRightCol = this.state.projects.slice(2, 4).map(project => {
            return(
                <div key={project.id} className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <RenderProject project={project} />
                </div>
            );
        });

        return(
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col second-block px-5">
                            <div class="row" id="Projects">
                                <div class="col-md-5 mx-4 order-md-last">
                                    <div class="mt-5 align-items-center">
                                        <h1 class="text-left" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
                                        <p class="text-left" data-aos="fade-up" data-aos-duration="1000">
                                            Here are a couple of projects I'm working on. 
                                            I've been feeding my obsession with climbing by pulling data from Mountain Project and adding some fun features to better search for routes,
                                            dabbling with d3.js to play with data visualizations, 
                                            working with a local nonprofit to develop an architectural design tool for water,
                                            and trying to save my houseplants from myself. <br/><br/>
                                            Want to know more or chat about a new project? <a href="#Connect">Let's connect.</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-3">                                
                                    <div class="row">
                                        {projectsLeftCol}
                                    </div>
                                </div>
                                <div class="col-md-3">                                
                                    <div class="row">
                                        {projectsRightCol}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col first-block-scroll">
                                    <div className="text-center mx-auto mb-5" id="scroll-about">
                                        <a href="#Connect"><p style={{fontSize: "12px"}} data-aos="fade-up" data-aos-duration="2000">Sc<span className='secret' onClick={this.toggleRoo}>roo</span>ll<br /><i class="fa fa-lg fa-angle-double-down" /></p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isRooOpen} toggle={this.toggleRoo} contentClassName='roo'>
                    <ModalHeader toggle={this.toggleRoo}>You found me!</ModalHeader>
                    <ModalBody>
                        My name is Roo, and I am Emily's dog! When I saw her website, I told her I liked it, but really I thought that she could use some extra flair (aka ME). So here I am! But shhh, don't tell her so that we can all just enjoy how cute I am. 
                        <br /><br />
                        <b>I love to go swimming and playing fetch outside; can you find all of the other places I've hidden myself while my mom was looking for the ball that I "couldn't find"?</b>
                        <br /><br />
                        <img
                            className="image"
                            src="/img/rooswim.jpg"
                            width="100%"
                            alt="no image"
                            class="center"
                            />
                        <br />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Projects;