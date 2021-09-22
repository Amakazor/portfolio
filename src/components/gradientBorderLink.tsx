import {Link} from 'gatsby';
import React, {ReactChild} from 'react';
import styled from 'styled-components';

interface gradientLinkProps extends gradientLinkStyleProps {
    to: string;
    title?: string;
}

interface gradientLinkStyleProps {
    $activeColor: string;
    $fallbackColor: string;
    gradient: string;
    fontWeight: weight;
    width?: size | calcString;
    $center?: boolean;

    $marginTop?: size | calcString;
    $marginBottom?: size | calcString;

    $transitionTime: time;

    children: ReactChild | ReactChild[];
}

const StyledLink = styled(Link)<gradientLinkStyleProps>`
    display: block;

    background-color: ${props => props.$fallbackColor};
    background-image: ${props => props.gradient};
    padding: 0.125rem;
    border-radius: 0.5rem;
    text-align: center;

    margin-left: ${props => props.$center && 'auto'};
    margin-right: ${props => props.$center && 'auto'};

    margin-top: ${props => props.$marginTop};
    margin-bottom: ${props => props.$marginBottom};

    width: ${props => props.width};

    &:hover {
        & > span {
            &::before {
                opacity: 1;
            }

            & > span {
                -webkit-text-fill-color: ${props => props.$activeColor};
            }
        }
    }
`;

const StyledLinkInside = styled.span<gradientLinkStyleProps>`
    position: relative;
    display: inline-block;

    background-color: ${props => props.$activeColor};

    border-radius: 0.5rem;

    width: 100%;

    &::before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        opacity: 0;
        transition: opacity ${props => props.$transitionTime} ease-in-out;

        background-color: ${props => props.$fallbackColor};
        background-image: ${props => props.gradient};
    }
`;

const StyledLinkInsideContainer = styled.span<gradientLinkStyleProps>`
    position: relative;

    display: inline-block;

    width: 100%;

    -webkit-text-fill-color: transparent;

    background-color: ${props => props.$fallbackColor};
    background-image: ${props => props.gradient};

    -webkit-background-clip: text;
    background-clip: text;
    padding: 1rem;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0.5rem;
    font-weight: ${props => props.fontWeight};

    transition: -webkit-text-fill-color ${props => props.$transitionTime} ease-in-out;

    font-size: calc(0.75rem + 0.6vw);
`;

const GradientBorderLink = (props: gradientLinkProps) => {
    return (
        <StyledLink {...props}>
            <StyledLinkInside {...props}>
                <StyledLinkInsideContainer {...props}>
                    {props.children}
                </StyledLinkInsideContainer>
            </StyledLinkInside>
        </StyledLink>
    );
};

export default GradientBorderLink;
