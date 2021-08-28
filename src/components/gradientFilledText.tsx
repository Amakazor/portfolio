import styled from 'styled-components';

interface gradientProps {
    fallbackColor: string;
    $gradient: string;
}

const GradientFilledText = styled.div<gradientProps>`
    color: ${props => props.color};

    -webkit-text-fill-color: transparent;

    background-color: ${props => props.fallbackColor};
    background-image: ${props => props.$gradient};

    -webkit-background-clip: text;
    background-clip: text;
`;

export default GradientFilledText;
