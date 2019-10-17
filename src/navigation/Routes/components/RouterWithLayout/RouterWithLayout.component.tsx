import React, { Component, ReactNode } from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface IRouterWithLayoutOwnProps {
    layout:  any;
    componentView: any;
}

export interface IRouterWithLayoutInjectedProps extends RouteProps {}
export interface IRouterWithLayoutProps extends IRouterWithLayoutOwnProps, IRouterWithLayoutInjectedProps {}

class RouterWithLayout extends Component<IRouterWithLayoutProps> {
    render(): ReactNode {
        const {  layout: Layout, componentView: Component, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={(matchProps) => (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )}
            />
        );
    }
}

export default RouterWithLayout;
