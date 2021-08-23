import React, {MouseEventHandler, ReactChild} from 'react';
import StyledUnderlinedHoverBox, {UnderlinedHoverBoxProps} from './underlinedHoverBox';

export interface UnderlinedLinkProps extends UnderlinedHoverBoxProps {
    href: string;
    rel?: string;
    target?: string;
    onClick?: MouseEventHandler;
    children?: ReactChild | ReactChild[];
}

export default function UnderlinedLink(props: UnderlinedLinkProps) {
    return <StyledUnderlinedHoverBox as="a" {...props} />;
}
