import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from 'react-bootstrap';
import classnames from 'classnames';

import avatar from '../../../assets/images/man.png';

interface IProps {
    isOpen: boolean;
    toggle?: () => void;
}

const Sidebar: React.FC<IProps> = (props) => {

    const { isOpen, toggle } = props;

    return (
        <div className={classnames("sidebar", { "is-open": isOpen })}>

            <div className="sidebar-header-logo">
                <span>Blank Project</span>
                <Button
                    variant="link"
                    onClick={toggle}
                    style={{ color: "#fff" }}
                    className="mt-4"
                >
                    <FontAwesomeIcon icon={faHome} pull="right" size="xs" />
                </Button>
            </div>

            <div className="sidebar-header">
                <div className="sidebar-user-info">
                    <img src={avatar} alt="avatar"/>
                    <span className="title">Nome do Usuário</span>
                </div>
            </div>

            <Nav className="flex-column pt-2">
            <p className="ml-3">MENU</p>

                <Nav.Item className="active">
                    <Nav.Link href="/inicio">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Início
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/inicio">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        Sair
                    </Nav.Link>
                </Nav.Item>

                {/* <Nav.Item >
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Novo Item
                    </Nav.Link>
                </Nav.Item> */}
            </Nav>

        </div>
    );

};

export default Sidebar;
