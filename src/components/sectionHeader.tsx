import React from 'react';
import {ReactChild} from 'react';
import styled from 'styled-components';
import {useClipPathSvg} from '../hooks/useClipPathSvg';
import CenteredBox from './centeredBox';
import H2 from './h2';
import MaterialIcon from './materialIcon';
import SidePaddedContainer from './sidePaddedContainer';

interface sectionHeaderProps {
    textColor: string;
    iconFontSize: size | calcString;
    gradient: string;
    dTop: string;
    dBottom: string;
    backgroundColor: string;

    additionalTopMargin?: size | calcString;

    children: ReactChild | ReactChild[];
}

const StyledSectionHeader = styled(CenteredBox)<{gradient: string}>`
    background: ${props => props.gradient};
    position: relative;
    min-height: calc(5rem + 17vw);
    justify-content: space-between;
    margin-bottom: calc(1rem + 2vw);
`;

const StyledSectionHeaderClipper = styled.div<{
    clipPathId: string;
    backgroundColor: string;
}>`
    clip-path: url(#${props => props.clipPathId});
    height: 5vw;
    width: 100%;
    background: ${props => props.backgroundColor};
    position: relative;
    z-index: 1;
`;

const SectionHeader = (props: sectionHeaderProps) => {
    const {svgElement: svgElementTop, id: idTop} = useClipPathSvg(props.dTop);
    const {svgElement: svgElementBottom, id: idBottom} = useClipPathSvg(props.dBottom);
    return (
        <StyledSectionHeader gradient={props.gradient}>
            {svgElementTop}
            {svgElementBottom}
            <StyledSectionHeaderClipper
                clipPathId={idTop}
                backgroundColor={props.backgroundColor}
            />
            <H2 textColor={props.textColor} topMargin>
                <MaterialIcon
                    fontSize={props.iconFontSize}
                    iconName={'arrow_forward_ios'}
                />
                <SidePaddedContainer padding={'calc(1rem + 1vw)'}>
                    {props.children}
                </SidePaddedContainer>
                <MaterialIcon fontSize={props.iconFontSize} iconName={'arrow_back_ios'} />
            </H2>
            <StyledSectionHeaderClipper
                clipPathId={idBottom}
                backgroundColor={props.backgroundColor}
            />
        </StyledSectionHeader>
    );
};

export default SectionHeader;
