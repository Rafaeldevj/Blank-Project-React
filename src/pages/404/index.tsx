import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply
} from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function NotFoundPage() {
    return (
        <div className="page-404 ">
            <h2><strong>Página não encontrada</strong></h2>
            <Button variant="info" className="btn-not-found" href="/inicio">
                <FontAwesomeIcon icon={faReply} className="mr-2" size="sm"/>
                Início
            </Button>
        </div>
    );
}
