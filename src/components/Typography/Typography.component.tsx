import React, { PureComponent, ReactNode } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import clsx from 'clsx';
import { ThemeStyle } from '../../constants/theme';
import { typographyStyle } from './Typography.style';

export interface ITypographyOwnProps {
    variant?: ThemeStyle;
    className?: string;
}

export interface ITypographyInjectedProps extends WithStyles<typeof typographyStyle> {}
export interface ITypographyProps extends ITypographyOwnProps, ITypographyInjectedProps {}

class Typography extends PureComponent<ITypographyProps> {
    render(): ReactNode {
        const { classes, className, children } = this.props;

        return (
            <div className={clsx(classes.root, className)}>
                {children}
            </div>
        );
    }
}

export default withStyles(typographyStyle)(Typography);
