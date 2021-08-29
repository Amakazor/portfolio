import React from 'react';
import styled from 'styled-components';
import iconProps, {styledIconProps} from '../interfaces/iconProps';

interface materialIconProps extends iconProps {
    className?: string;
}

const StyledMaterialIcon = styled.span<styledIconProps>`
    display: inline-block;

    color: ${props => props.textColor};

    font-size: ${props => props.fontSize};
    font-weight: 400;
    user-select: none;
`;

const MaterialIcon = (props: materialIconProps) => {
    return (
        <StyledMaterialIcon {...props} className={`${props.className} material-icons`}>
            {props.iconName}
        </StyledMaterialIcon>
    );
};

export default MaterialIcon;
