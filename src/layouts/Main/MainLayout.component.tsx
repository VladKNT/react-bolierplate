import React, { Component, ReactNode } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { MainHeader } from './comonents/MainHeader';
import { MainFooter } from './comonents/MainFooter';
import { mainLayoutStyle } from './MainLayout.style';

export interface MainLayoutOwnProps {}
export interface MainLayoutInjectedProps extends WithStyles<typeof mainLayoutStyle> {}
export interface MainLayoutProps extends MainLayoutOwnProps, MainLayoutInjectedProps {}

class MainLayout extends Component<MainLayoutProps> {
    render(): ReactNode {
        const { classes, children } = this.props;

        return (
            <div className={classes.root}>
                <MainHeader />
                <main className={classes.content}>
                    {children}
                </main>
                <MainFooter />
            </div>
        );
    }
}

export default withStyles(mainLayoutStyle)(MainLayout);
