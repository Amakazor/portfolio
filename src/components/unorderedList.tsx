import React, {Children, ReactChild} from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';

interface UnorderedListProps {
    listStyle?: FlattenSimpleInterpolation;
    elementStyle?: FlattenSimpleInterpolation;
    children?: ReactChild | ReactChild[] | Element | Element[];
}

const StyledList = styled.ul<{styleFunction?: FlattenSimpleInterpolation}>`
    ${props => props.styleFunction}
`;

const StyledListElement = styled.li<{styleFunction?: FlattenSimpleInterpolation}>`
    ${props => props.styleFunction}
`;

const UnorderedList = (props: UnorderedListProps) => {
    return (
        <StyledList styleFunction={props.listStyle}>
            {props.children &&
                Children.map(props.children, (element, index) => (
                    <StyledListElement key={index} styleFunction={props.elementStyle}>
                        {element}
                    </StyledListElement>
                ))}
        </StyledList>
    );
};

export default UnorderedList;
