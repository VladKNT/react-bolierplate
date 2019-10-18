import React, { ReactNode, Component } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import clsx from "clsx";
import { Flexbox } from '../../../../components/ui/Flexbox';
import { Typography } from '../../../../components/ui/Typography';
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
            <Flexbox className={clsx(classes.root, className)} alignItems="center">
                <Typography variant="h5" className={classes.license}>
                    {STRINGS.LICENSE}
                </Typography>
            </Flexbox>
        );
    }
}

export default withStyles(mainFooterStyle)(MainFooter);
