import React from 'react';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col intro-block pb-3" id="Home">
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <h1 className="text-left main-heading pl-5">Hi.<br />I'm Emily.</h1>
                        <div>
                            <p className="sub-heading pl-5" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">I am a web developer, designer, and data enthusiast.</p>
                            <p className="sub-heading pl-5 pb-5" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="1000">Thanks for coming.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col intro-block pb-5 pt-5">
                </div>
            </div>
            <div className="row">
                <div className="col intro-block pb-5 pt-5">
                    <div className="text-center mx-auto" id="scroll">
                        <a href="#About">Scroll<br /><i class="fa fa-lg fa-angle-double-down" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;