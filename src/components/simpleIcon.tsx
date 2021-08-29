import React from 'react';
import styled from 'styled-components';
import iconProps, {styledIconProps} from '../interfaces/iconProps';
import icons from 'simple-icons';

const StyledSimpleIcon = styled.svg<styledIconProps>`
    display: inline-block;

    color: ${props => props.textColor};

    height: ${props => props.fontSize};
    user-select: none;
`;

const SimpleIcon = (props: iconProps) => {
    const path = icons.get(props.iconName)?.path;
    return path ? (
        <StyledSimpleIcon
            {...props}
            role={'img'}
            viewBox={'0 0 24 24'}
            xmlns={'http://www.w3.org/2000/svg'}
        >
            <path d={path}></path>
        </StyledSimpleIcon>
    ) : (
        <></>
    );
};

export default SimpleIcon;
