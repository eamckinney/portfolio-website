import React from 'react';

function Contact() {
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
                        
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/emily-mckinney-427a2779/" target="_blank"><i className="fa fa-lg fa-social fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-github" href="https://github.com/eamckinney" target="_blank"><i className="fa fa-lg fa-social fa-github"></i></a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/emily.a.mckinney/" target="_blank"><i className="fa fa-lg fa-social fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;