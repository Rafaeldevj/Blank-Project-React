import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import './index.css';

interface IProps {
    toggle: () => void;
}

const NavbarMenu: React.FC<IProps> = (props) => {

    const { toggle } = props;

    return (
        <Navbar className="navbar-custom p-3" variant="dark" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link className="active toggle-nav" onClick={toggle}>
                    <FontAwesomeIcon className="icon-toggle-nav" icon={faBars} size="lg"/>
                </Nav.Link>
                <Navbar.Brand href="/">Blank Project</Navbar.Brand>
            </Nav>
        </Navbar>
    );

};

export default NavbarMenu;
