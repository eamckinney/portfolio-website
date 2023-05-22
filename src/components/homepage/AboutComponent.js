import React, { Component} from 'react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "semantic-ui-css/semantic.min.css";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRooOpen: false
        };
    }

    toggleRoo = () => {
		this.setState({
			isRooOpen: !this.state.isRooOpen,
        });
        
    };
    
    render() {

        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row" id="About">
                        <div className="col first-block">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="text-right" data-aos="fade-up" data-aos-duration="1000">About<br/>Me</h1>
                                </div>
                                <div className="col-sm-6">
                                    <p className="text-left" data-aos="fade-up" data-aos-duration="1000">
                                        I am passionate about <b>solving puzzles and tackling new challenges.</b> 
                                        <br/><br/>
                                        Right now, that is taking shape by: <br/>
                                        <ul>
                                            <li>Writing code as a web and app develope<span id="roo-about" className='secret' onClick={this.toggleRoo}>roo</span>, focusing on impactful & memorable design, seamless & interactive user experience, and clarity</li>
                                            <li>Helping companies understand how people make decisions (and how brands can leverage that information) as a quantitative brand strategist</li>
                                            <li>Fiddling around with JavaScript, React, React Native, APIs, and data visualization for fun. </li>
                                        </ul>                                        
                                        <a href="#Connect">Drop me a line.</a> I hope to hear from you.
                                        <br/><br/>
                                        <div className="mb-2">
                                            <b>Some of my skills include:</b>
                                        </div>
                                        <div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>JavaScript</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>React</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>React Native</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>Vue</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>HTML</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>CSS</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>Python</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>R</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#7F8FA3", color: "#fff9f5"}}>SPSS</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Web Development</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Data Analysis</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Quantitative Brand Strategy</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Data Viz</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Web Scraping</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#81B29A", color: "#fff9f5"}}>Product Management</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Communication</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Problem Solving</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Resourcefulness</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Curiosity</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Collaboration</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Empathy</div>
                                            <div className="ui label tiny mb-2" style={{backgroundColor: "#E07A5F", color: "#fff9f5"}}>Dependability</div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>          
                    </div>
                    <div className="row">
                        <div className="col first-block-scroll">
                            <div className="text-center mx-auto mb-5" id="scroll-about">
                                <a href="#Projects"><p style={{fontSize: "12px"}} data-aos="fade-up" data-aos-duration="2000">Scroll<br /><i class="fa fa-lg fa-angle-double-down" /></p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isRooOpen} toggle={this.toggleRoo} contentClassName='roo'>
                    <ModalHeader toggle={this.toggleRoo}>You found me!</ModalHeader>
                    <ModalBody>
                        My name is Roo, and I am Emily's dog! When I saw her website, I told her I liked it, but really I thought that she could use some extra flair (aka ME). So here I am! But shhh, don't tell her so that we can all just enjoy how cute I am. 
                        <br /><br />
                        <b>I love to get scratches behind my ears when my mom is working; can you find all of the other places I've hidden myself while she was petting me?</b>
                        <br /><br />
                        <img
                            className="image"
                            src="/img/roo.jpg"
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

export default About;


