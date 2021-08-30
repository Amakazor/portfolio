import React from 'react';
import styled, {ThemeContext} from 'styled-components';
import CenteredBox from '../centeredBox';
import H1 from '../h1';
import MaterialIcon from '../materialIcon';
import {useClipPathSvg} from '../../hooks/useClipPathSvg';
import {useTechnologies} from '../../hooks/useTechnologies';
import SimpleIcon from '../simpleIcon';
import pseudoRandomFloat from '../../helpers/pseudoRandomFloat';

const HomeHeader = styled(CenteredBox)<{gradient: string}>`
    padding-top: calc(3rem + 4vw);
    background: ${props => props.gradient};
    position: relative;
`;

const Heading = styled(H1)<{weight: number}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(1.5rem + 3vw);
    font-weight: ${props => props.weight};
    z-index: 1;
    position: relative;

    div:first-child {
        padding-right: 2rem;
    }

    div:last-child {
        padding-left: 2rem;
    }

    span:first-child > :last-child {
        margin-left: calc(-1vw - 0.5rem);
    }

    span:last-child > :first-child {
        margin-right: calc(-1vw - 0.5rem);
    }
`;

const HomeHeaderClipper = styled.div<{clipPathId: string; backgroundColor: string}>`
    clip-path: url(#${props => props.clipPathId});
    height: 5vw;
    margin-top: calc(3rem + 4vw);
    width: 100%;
    background: ${props => props.backgroundColor};
    position: relative;
    z-index: 1;
`;

const HeaderTechnologyIcon = styled(SimpleIcon)<{index: number}>`
    position: absolute;
    top: calc(70% * ${props => pseudoRandomFloat(props.index * 17)});
    left: calc(90% * ${props => pseudoRandomFloat(props.index * 19)});
    height: calc(
        2rem + 2vw + (1vw * ${props => pseudoRandomFloat(props.index * 9 + 3, true)})
    );
    opacity: 0.15;
    filter: blur(calc(0.0325rem + 0.0325vw));
`;

const IndexHeader = (props: {id: string}) => {
    const theme = React.useContext(ThemeContext);
    const {svgElement, id} = useClipPathSvg(
        'M -0.05572103,0.8601888 C 0.17985188,0.84670548 0.18028227,0.02627666 0.34281863,0.01963819 0.48357699,0.0138892 0.50142585,0.81964236 0.70592117,0.80970714 0.9092945,0.80348085 0.9616916,0.00423243 1.1155425,0.01777431 1.7329171,0.06063347 1.938552,1.0782772 1.5261951,1.6377243 1.2169685,2.0572538 0.39412828,2.0799151 0.22542145,1.9179687 L -0.48150269,1.3515625 Z',
    );
    const technologies = useTechnologies(true);

    const iconFontSize = 'calc(1rem + 2vw)';

    const headingProps = {
        textColor: theme.colors.primary,
        weight: theme.weights.bold,
    };
    return (
        <HomeHeader
            gradient={theme.gradients.primaryGradientReversedHorizontal}
            as={'header'}
            id={props.id}
        >
            {svgElement}

            <div>
                <Heading {...headingProps} textAling={'left'} noMargin>
                    <div>Arkadiusz</div>
                    <span>
                        <MaterialIcon
                            fontSize={iconFontSize}
                            iconName={'arrow_back_ios'}
                        />
                        <MaterialIcon
                            fontSize={iconFontSize}
                            iconName={'arrow_back_ios'}
                        />
                    </span>
                </Heading>
                <Heading {...headingProps} textAling={'left'}>
                    <span>
                        <MaterialIcon
                            fontSize={iconFontSize}
                            iconName={'arrow_forward_ios'}
                        />
                        <MaterialIcon
                            fontSize={iconFontSize}
                            iconName={'arrow_forward_ios'}
                        />
                    </span>
                    <div>Wrzawiński</div>
                </Heading>
            </div>
            {technologies.map((element, index) => (
                <HeaderTechnologyIcon
                    key={element.name}
                    title={element.title}
                    iconName={element.name}
                    index={index}
                />
            ))}
            <HomeHeaderClipper
                clipPathId={id}
                backgroundColor={theme.colors.background}
            />
        </HomeHeader>
    );
};

export default IndexHeader;
