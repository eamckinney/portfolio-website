import React from 'react';
import { Link } from 'react-router-dom';

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
                                    I am a person of many interests. A curious person, I'd say. "Spirited." I'm interested in people and how they think.
                                    I wonder about how one's subconscious affects their decision-making. I like to think about design and 
                                    communication. What are the different ways to communicate the same idea? Which ones work better? Why?
                                    <br/><br/>
                                    I have a fascination with data. How can we use data to make better decisions, without losing sight of
                                    the people who live behind them? What is the balance between automation and customization? The numbers
                                    and the story?
                                    <br/><br/>
                                    I like to think about the world. My place in it, my purpose. (I bet I'll be thinking on that one for a while.)
                                    While I am a thinker, in my heart of hearts, I am practical. A planner. What are we trying to do? How do we 
                                    get from here to there? How can we learn and improve along the way? Ok? Let's go.
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