import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from "classnames";

import NavBar from '../Navbar';

import Routes from '../../../routes';

interface IProps {
    toggle: () => void;
}

const Content: React.FC<IProps> = (props) => {

    const { toggle } = props;

    return (
        <Container 
            fluid
            className={classNames("content", { "is-open": false })}
        >
            <NavBar 
                toggle={toggle}
            />
            <Container
                fluid
                className={classNames("content-body", { "is-open": false })}
            >
                <Routes />
            </Container>
        </Container>
    );
};

export default Content;
