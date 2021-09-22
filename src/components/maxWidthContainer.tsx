import styled from 'styled-components';

const MaxWidthContainer = styled.div<{maxWidth?: size}>`
    max-width: ${props => (props.maxWidth ? props.maxWidth : '80rem')};
    width: 95%;
`;

export default MaxWidthContainer;
