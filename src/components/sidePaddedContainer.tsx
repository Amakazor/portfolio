import styled from 'styled-components';

const SidePaddedContainer = styled.div<{padding: size | calcString}>`
    padding-left: ${props => props.padding};
    padding-right: ${props => props.padding};
`;

export default SidePaddedContainer;
