import React, { Component, useState, useEffect } from "react";
import { Card, CardTitle, CardBody,
    Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { PROJECTS } from '../../shared/projects';
import { Link } from "react-router-dom";
import "../../App.css";


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
        
        const skills = this.props.project.skills.map(skill => {
            return(
                <div key={skill} className="ui label tiny" style={{backgroundColor: "#fff9f5", color: this.props.project.color}}>{skill}</div>
            );
        });

        

        return(
            <React.Fragment>
                <Card className={`project-box project${this.props.project.id}`} onClick={this.toggleModal}>
                    <CardBody>
                        <CardTitle>{this.props.project.name}</CardTitle>
                        <div className="mb-2">
                            {skills}
                        </div>
                        {this.props.project.description}
                        <Button className="btn-outline-light" onClick={this.toggleModal}><i class={this.props.project.icon + " mr-2"} />See more.</Button>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} contentClassName={`project${this.props.project.id} wide-modal`}>
                    <ModalHeader toggle={this.toggleModal} contentClassName="modal-title"><i class={this.props.project.icon + " mr-3"} />{this.props.project.name}</ModalHeader>
                    <ModalBody>
                        {this.props.project.longDescription}
                        <img
                            className="image"
                            src={this.props.project.image}
                            height="450px"
                            alt="project screenshot"
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
            isRooOpen: false,
            logbookDays: 0
        };
    }

    toggleRoo = () => {
		this.setState({
			isRooOpen: !this.state.isRooOpen,
        });

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
                                <div class="col">
                                    {/*<div className="row">
                                        <div class="col-md-5 mx-4 order-md-last">
                                        </div>
                                        <div class="col-md-6"> 
                                            <div key='hundredDays' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                                <Link to="/100daysofcode">
                                                    <Card className={`project-box hundred`}>
                                                        <CardBody>
                                                            <CardTitle>100 Days of Code Challenge</CardTitle>
                                                            On February 3, 2022, I began my #100DaysOfCode.
                                                            <Link to="/100daysofcode"><Button className="btn-outline-light ml-3">Check out my logbook.</Button></Link>
                                                        </CardBody>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>*/}
                                    <div class="row">
                                        <div class="col-md-5 mx-4 order-md-last">
                                            <div class="mt-5 align-items-center">
                                                <h1 class="text-left" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
                                                <p class="text-left" data-aos="fade-up" data-aos-duration="1000">
                                                    Here are a couple of projects I've worked on. 
                                                    I worked at a gender research startup to build an app to help achieve better outcomes for women internationally,
                                                    I have played around with climbing data from Mountain Project by adding some fun features to better search for routes,
                                                    I have helped several small businesses and nonprofit organizations communicate their missions impactfully on the web, 
                                                    and am trying to save my houseplants from myself. <br/><br/>
                                                    {/*Recently, I have started a #100DaysOfCode challenge! See what I'm learning by taking a look at <Link to="/100daysofcode">my logbook.</Link><br/><br/>*/}
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
                                    
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col" style={{margin: '5em 10em 10em 10em'}}>
                                    <h1 className="text-center" data-aos="fade-up" data-aos-duration="1000">Testimonials</h1>
                                    <div className="text-center mx-auto" style={{fontSize: "14px", marginTop: '4em'}} data-aos="fade-up" data-aos-duration="1000">
                                        <p>
                                            <em>"Exceeding all expectations, Emily redesigned our home page and created a new 40th Anniversary page for our website. She contributed great ideas on how to improve the functionality of our website to make it easier to navigate as well as more visually appealing.  Her additions/improvements to the site created a new and compelling way for us to share our organization’s history and mission. Through the process of multiple plugin and theme upgrades, Emily coordinated with the appropriate team members to ensure smooth and safe upgrades, all while meeting deadlines. With her strong communication skills, she asked all the right questions and explained things in a way that someone who is not tech-savvy could easily understand. Emily is a most skilled and creative web developer and I can’t say enough about how much I enjoyed working with her on this project."</em>
                                        </p>
                                        <p><b> - Annie Pulaski, My Brother's Table</b></p>
                                    </div>
                                    <div className="text-center mx-auto" style={{fontSize: "14px", marginTop: '4em'}} data-aos="fade-up" data-aos-duration="1000">
                                        <p>
                                            <em>"Emily thoughtfully and masterfully translated my business and my personality into a website with a beautiful color palate, a functionality that's easy to navigate and update, and a design that will carry me forward in my growing business. With just a few questions to answer and copy to write, I was able to convey my needs and she delivered a website that will serve my needs for years to come."</em>
                                        </p>
                                        <p><b> - Jennifer Bertram, MSW, LISW</b></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col first-block-scroll">
                                    <div className="text-center mx-auto mb-5" id="scroll-about">
                                        <a href="#Connect"><p style={{fontSize: "12px"}} data-aos="fade-up" data-aos-duration="2000">Sc<span id="roo-projects" className='secret' onClick={this.toggleRoo}>roo</span>ll<br /><i class="fa fa-lg fa-angle-double-down" /></p></a>
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
                            alt="cute dog"
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