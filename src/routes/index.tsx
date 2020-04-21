import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import NotFoundPage from '../pages/404';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/inicio" exact component={Inicio} />
                <Route path="/**" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;