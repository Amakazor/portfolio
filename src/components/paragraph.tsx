import styled from 'styled-components';

export interface paragraphProps {
    fontSize?: size | calcString;
    fontWeight?: weight;
    align?: textAlign;
    color?: string;
    isPadded?: boolean;
}

const Paragraph = styled.p<paragraphProps>`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.align};
    color: ${props => props.color};
    padding-bottom: ${props => props.isPadded && 'calc(0.25vw + 0.25rem)'};
`;

export default Paragraph;
