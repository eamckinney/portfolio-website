import React, { Component } from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
//importing zenscroll makes all scrolling smooth...
import { zenscroll } from "zenscroll";

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
		};
	}

	toggleNav = () => {
		this.setState({
			//when toggled, flip to either true or false
			isNavOpen: !this.state.isNavOpen,
		});
	};

	render() {
		return (
			<Navbar dark sticky="top" expand="md">
				<NavbarToggler onClick={this.toggleNav} />
				<Collapse isOpen={this.state.isNavOpen} navbar>
					<Nav navbar className="nav-center">
						<ul class="navbar-nav mx-auto">
							<li class="nav-item border-right text-center">
								<a class="nav-link underline" href="#Home">
									{" "}
									<span> Home </span>
								</a>
							</li>
							<li class="nav-item border-right text-center">
								<a class="nav-link underline" href="#About">
									{" "}
									About{" "}
								</a>
							</li>
							<li class="nav-item border-right text-center">
								<a class="nav-link underline" href="#Projects">
									{" "}
									Projects{" "}
								</a>
							</li>
							<li class="nav-item text-center">
								<a class="nav-link underline" href="#Connect">
									{" "}
									Connect{" "}
								</a>
							</li>
						</ul>
					</Nav>
				</Collapse>
				<NavbarBrand className="site-logo mx-auto" href="#Home">
					<span className="logo-text">EM</span>
				</NavbarBrand>
			</Navbar>
		);
	}
}

export default Navigation;
