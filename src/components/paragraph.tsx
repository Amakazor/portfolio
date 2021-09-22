import React, {ReactChild} from 'react';
import styled from 'styled-components';

export interface paragraphProps {
    fontSize?: size | calcString;
    fontWeight?: weight;
    align?: textAlign;
    color?: string;
    isPadded?: boolean;

    children?: ReactChild | ReactChild[];
}

const StyledParagraph = styled.p<paragraphProps>`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.align};
    color: ${props => props.color};
    padding-bottom: ${props => props.isPadded && 'calc(0.25vw + 0.25rem)'};
`;

const Paragraph = (props: paragraphProps) => (
    <StyledParagraph {...props}>{props.children}</StyledParagraph>
);

export default Paragraph;
