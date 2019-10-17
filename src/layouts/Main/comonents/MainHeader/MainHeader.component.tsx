import React, { ReactNode, Component } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import clsx from 'clsx';
import { Typography } from '../../../../components/Typography';
import logo from '../../../../assets/logo.png'
import { mainHeaderStyle } from './MainHeader.style';
import { STRINGS } from '../../../../constants/strings';

export interface IMainHeaderOwnProps {
    className?: string;
}

export interface IMainHeaderInjectedProps extends WithStyles<typeof mainHeaderStyle> {}
export interface IMainHeaderProps extends IMainHeaderOwnProps, IMainHeaderInjectedProps {}

class MainHeader extends Component<IMainHeaderProps> {
    render(): ReactNode {
        const { classes, className } = this.props;

        return (
            <div className={clsx(classes.root, className)}>
                <img src={logo} className={classes.logo} alt="logo" />
                <Typography variant="h3" className={classes.title}>
                    {STRINGS.HEADER_TILE}
                </Typography>
            </div>
        );
    }
}

export default withStyles(mainHeaderStyle)(MainHeader);
