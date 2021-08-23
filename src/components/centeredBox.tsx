import styled from 'styled-components';

const CenteredBox = styled.div<{isRow?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: ${props => (props.isRow ? 'row' : 'column')};

    height: 100%;
    width: 100%;
`;

export default CenteredBox;
