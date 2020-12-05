import React, { Component } from "react";
import { Rating, Icon } from "semantic-ui-react";
import { SKILLS } from '../shared/skills';


class RenderSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <p>
                {this.props.skill.name}
            </p>
        );
    }

}

class RenderLevel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                {this.props.skill.level}
            </p>
        );
    }

}

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: SKILLS,
            isModalOpen: false
        };
    }
    render() {

        const skills = this.state.skills.map(skill => {
            return(
                <div key={skill.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <RenderSkill skill={skill} />
                </div>
            );
        });

        const levels = this.state.skills.map(skill => {
            return(
                <div key={skill.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <RenderLevel skill={skill} />
                </div>
            )
        })

        return(
            <div className="container-fluid">
                <div className="row" id="Skills">
                    <div className="col skills-block">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="text-right" data-aos="fade-up" data-aos-duration="1000">Skills</h1>
                            </div>
                            <div className="col-sm-2">
                                <p className="text-right">
                                    {skills}
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <p>
                                    {levels}
                                </p>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        );
    }

}

export default Skills;