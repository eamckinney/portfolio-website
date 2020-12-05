import React from 'react';


function About() {
    
        return(
            <div className="container-fluid">
                <div className="row" id="About">
                    <div className="col first-block">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="text-right" data-aos="fade-up" data-aos-duration="1000">About<br/>Me</h1>
                            </div>
                            <div className="col-sm-6">
                                <p className="text-left" data-aos="fade-up" data-aos-duration="1000">
                                    What do people even write in these sections? How do I tell you about myself without sounding arrogant or cliché?
                                    I will try to keep it simple. 
                                    <br/><br/>
                                    At the center of who I am, <b>I really like to solve puzzles and learn new things.</b> Right now, that is taking 
                                    shape by learning how to write Python code and be a project manager at a gender research + tech startup called Equilo,
                                    by helping companies understand how people make decisions as a freelance quantitative brand strategist, and 
                                    by fiddling around with JavaScript, React, APIs, and machine learning "for fun."
                                    <br/><br/>
                                    I will leave it at that. If you're intrigued, drop me a line. I'd rather chat with you 
                                    than give everything away on this website, anyway. I hope to hear from you.
                                </p>
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row">
                    <div className="col first-block-scroll">
                        <div className="text-center mx-auto" id="scroll-about">
                            <a href="#Projects"><p style={{fontSize: "12px"}} data-aos="fade-up" data-aos-duration="2000">Scroll<br /><i class="fa fa-lg fa-angle-double-down" /></p></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default About;