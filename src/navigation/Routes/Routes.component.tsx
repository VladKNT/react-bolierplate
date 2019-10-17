import React, { Component, ReactNode } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouterWithLayout } from './components/RouterWithLayout';
import { Home } from '../../views/Home';
import { MainLayout } from '../../layouts/Main';

class Routes extends Component {
    render(): ReactNode {
        return (
            <Switch>
                <RouterWithLayout
                    exact
                    path="/"
                    layout={MainLayout}
                    componentView={Home}
                />
                <Redirect to="/not-found" />
            </Switch>
        );
    }
}

export default Routes;
