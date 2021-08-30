import styled from 'styled-components';

const Bold = styled.span<{fontWeight: weight}>`
    font-weight: ${props => props.fontWeight};
`;

export default Bold;
