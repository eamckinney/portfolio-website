import React, { Component } from 'react';

class Connect extends Component {


    render() {
        return(
            <footer className="site-footer">
                <div className="row">
                    <div className="col" id="Connect">
                        <div className="third-block">
                            <div className="connect py-4 text-center">
                                <h1 className="text-center">Let's Connect.</h1>
                                <p className="text-center">
                                    You can reach me at <a href="mailto:emily.a.mckinney@gmail.com">emily.a.mckinney@gmail.com</a>.
                                    <br/><br/>
                                </p>
                            
                                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/emily-mckinney-427a2779/" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-social fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-github" href="https://github.com/eamckinney" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-social fa-github"></i></a>
                                <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/emily.a.mckinney/" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-social fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-3" id="Challenge">
                        <p className="text-center">
                            You've made it to the end. But have you seen all there is to see? Take another look. Or three.
                        </p>
                        <p className="text-center" style={{fontSize: '.8em'}}>
                            &copy; 2021 Emily McKinney. All rights reserved. This site was built by hand.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
    
    
}

export default Connect;