import React, { PureComponent, ReactNode } from 'react';
import { IFlexbox } from '../../../constants/flexbox';

export interface IFlexboxOwnProps {
    className?: string;
}

export interface IFlexboxInjectedProps extends IFlexbox{}
export interface IFlexboxProps extends IFlexboxOwnProps, IFlexboxInjectedProps {}

class Flexbox extends PureComponent<IFlexboxProps> {
    static defaultProps = {
        display: 'flex',
    };

    render(): ReactNode {
        const { className, children, ...rest } = this.props;

        return (
            <div className={className} style={{...rest}}>
                {children}
            </div>
        );
    }
}

export default Flexbox;
