import React, { ReactNode, Component } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import clsx from "clsx";
import { Typography } from '../../../../components/Typography';
import { STRINGS } from '../../../../constants/strings';
import { mainFooterStyle } from './MainFooter.style';


export interface IMainFooterOwnProps {
    className?: string;
}

export interface IMainFooterInjectedProps extends WithStyles<typeof mainFooterStyle> {}
export interface IMainFooterProps extends IMainFooterOwnProps, IMainFooterInjectedProps {}

class MainFooter extends Component<IMainFooterProps> {
    render(): ReactNode {
        const { classes, className } = this.props;

        return (
            <div className={clsx(classes.root, className)}>
                <Typography variant="h5" className={classes.license}>
                    {STRINGS.LICENSE}
                </Typography>
            </div>
        );
    }
}

export default withStyles(mainFooterStyle)(MainFooter);
