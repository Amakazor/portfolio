import React from 'react';
import styled from 'styled-components';

interface MaterialIconProps extends StyledMaterialIconProps {
    iconName: string;
    className?: string;
}

interface StyledMaterialIconProps {
    fontSize?: size;
    textColor?: string;
}

const StyledMaterialIcon = styled.span<StyledMaterialIconProps>`
    display: inline-block;

    color: ${props => props.textColor};

    font-size: ${props => props.fontSize};
    font-weight: 400;
`;

const MaterialIcon = (props: MaterialIconProps) => {
    return (
        <StyledMaterialIcon {...props} className={`${props.className} material-icons`}>
            {props.iconName}
        </StyledMaterialIcon>
    );
};

export default MaterialIcon;
