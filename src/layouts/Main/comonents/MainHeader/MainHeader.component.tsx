import React, { ReactNode, Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import withStyles, { WithStyles } from 'react-jss';
import clsx from 'clsx';
import { Typography } from '../../../../components/ui/Typography';
import { Flexbox } from '../../../../components/ui/Flexbox';
import { STRINGS } from '../../../../constants/strings';
import logo from '../../../../assets/logo.png'
import { mainHeaderStyle } from './MainHeader.style';

export interface IMainHeaderOwnProps {
    className?: string;
}

export interface IMainHeaderInjectedProps extends WithStyles<typeof mainHeaderStyle> {}
export interface IMainHeaderProps extends IMainHeaderOwnProps, IMainHeaderInjectedProps {}

class MainHeader extends Component<IMainHeaderProps> {
    render(): ReactNode {
        const { classes, className } = this.props;

        return (
            <Flexbox className={clsx(classes.root, className)} alignItems="center">
                <Link to="/" className={classes.logoContainer}>
                    <img src={logo} className={classes.logo} alt="logo" />
                    <Typography variant="h3" className={classes.title}>
                        {STRINGS.HEADER_TILE}
                    </Typography>
                </Link>

                <Flexbox className={classes.navigationContainer}>
                    <NavLink to="/" className={classes.navigationItem} activeClassName={classes.navigationSelectedItem}>
                        <Typography variant="h4" className={classes.navigationItemText}>
                            {STRINGS.HOME}
                        </Typography>
                    </NavLink>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default withStyles(mainHeaderStyle)(MainHeader);
