import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);

        //"bind the event handler": makes sure when toggleNav is called, "this" refers correctly to the component
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            //when toggled, flip to either true or false
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            
                <Navbar dark sticky="top" expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="nav-center">
                            <NavItem>
                                <NavLink className="nav-link underline" to="/home"> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link underline" to="/about"> About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link underline" to="/projects"> Projects </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link underline" to="/connect"> Connect </NavLink>
                            </NavItem>         
                        </Nav>
                    </Collapse>
                    <NavbarBrand className="site-logo mx-auto" href="/"><span className="logo-text">EM</span></NavbarBrand>
                </Navbar>
            
        );
    }    

}

export default Navigation;