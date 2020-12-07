import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,
	Modal, ModalHeader, ModalBody } from "reactstrap";
import ReactGA from 'react-ga';
//importing zenscroll makes all target link scrolling smooth...
import { zenscroll } from "zenscroll";

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isRooOpen: false
		};
	}

	componentDidMount() {
        ReactGA.initialize('G-6TC5ZMTK1L');   
    }

    toggleRoo = () => {
		this.setState({
			isRooOpen: !this.state.isRooOpen,
        });
		
		if (this.state.isRooOpen) {
			ReactGA.event({
                category: 'User',
                action: 'Found Roo',
                label: 'NavBar'
            });
		}
		
    };


	toggleNav = () => {
		this.setState({
			//when toggled, flip to either true or false
			isNavOpen: !this.state.isNavOpen,
		});
	};

	render() {
		return (
			<React.Fragment>
				<Navbar dark sticky="top" expand="md">
					<NavbarToggler onClick={this.toggleNav} />
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav navbar className="nav-center">
							<ul className="navbar-nav mx-auto">
								<li className="nav-item rightBorder text-center">
									<a className="nav-link underline" href="#Home">
										{" "}
										<span> Home </span>
									</a>
								</li>
								<li className="nav-item rightBorder text-center">
									<a className="nav-link underline" href="#About">
										{" "}
										About{" "}
									</a>
								</li>
								<li className="nav-item rightBorder text-center">
									<a className="nav-link underline" href="#Projects">
										{" "}
										Projects{" "}
									</a>
								</li>
								<li className="nav-item text-center">
									<a className="nav-link underline" href="#Connect">
										{" "}
										Connect{" "}
									</a>
								</li>
							</ul>
						</Nav>
					</Collapse>
					<NavbarBrand className="site-logo mx-auto">
						<span className="logo-text" onClick={this.toggleRoo}>EM</span>
					</NavbarBrand>
				</Navbar>
				<Modal isOpen={this.state.isRooOpen} toggle={this.toggleRoo} contentClassName='roo'>
                    <ModalHeader toggle={this.toggleRoo}>You found me!</ModalHeader>
                    <ModalBody>
                        My name is Roo, and I am Emily's dog! When I saw her website, I told her I liked it, but really I thought that she could use some extra flair (AKA this photo of me, Emily, and my other mom Anne, even though I know you're mostly excited about ME). But shhh, don't tell her so that we can all just enjoy how cute I am. 
						<br /><br />
						<b>I love to play hide-and-seek; can you find all of my favorite hiding spots?</b>
                        <br /><br />
                        <img
                            className="image"
                            src="/img/rooanne.jpg"
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

export default Navigation;
