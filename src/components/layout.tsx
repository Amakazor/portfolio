import {Link, PageProps} from 'gatsby';
import React, {ReactChild} from 'react';
import {useState} from 'react';
import styled, {css, ThemeContext} from 'styled-components';
import {useMenuLinks} from '../hooks/useMenuLinks';
import FullHeightBox from './fullHeightBox';
import GradientFilledText from './gradientFilledText';
import MaterialIcon from './materialIcon';
import NonWrappingText from './nonWrappingText';
import Sidebar from './sidebar';
import UnorderedList from './unorderedList';

interface activeColorProps {
    $isActive?: boolean;
    $activeColor: string;
    $gradient: string;
}

interface transitionTimeProps {
    $transitionTime: time;
}

interface activeColorAndTransitionProps extends activeColorProps, transitionTimeProps {}

const Main = styled(FullHeightBox)`
    width: 100%;
`;

const StyledLinkBackground = styled.div<activeColorAndTransitionProps>`
    content: '';

    height: 100%;
    width: ${props => (props.$isActive ? '100%' : 'calc(100% - 1rem)')};

    position: absolute;
    z-index: 2;

    border-radius: ${props => (props.$isActive ? '2rem 0 0 2rem' : '2rem')};

    background-image: ${props => props.$gradient};

    opacity: ${props => (props.$isActive ? 1 : 0)};
    transition: opacity ${props => !props.$isActive && props.$transitionTime};
`;

const UnactiveHoveredBackground = css`
    opacity: 1;
`;

interface shadowLinkProps extends activeColorAndTransitionProps {
    $shadowColor: string;
}

const StyledLink = styled(Link)<shadowLinkProps>`
    display: block;
    width: 100%;

    position: relative;

    & > div:last-child {
        -webkit-text-fill-color: ${props => props.$isActive && props.$activeColor};
        transition: -webkit-text-fill-color ${props => props.$transitionTime};
    }

    &::before,
    &::after {
        content: '';
        right: 0rem;
        height: 2rem;
        width: 2rem;

        display: block;
        position: absolute;

        border-radius: 50%;

        background: #222222;

        overflow: hidden;
        opacity: ${props => (props.$isActive ? 1 : 0)};
    }

    &::before {
        top: -2rem;
        box-shadow: 1rem 1rem ${props => props.$shadowColor};
    }

    &::after {
        bottom: -2rem;
        box-shadow: 1rem -1rem ${props => props.$shadowColor};
    }

    &:hover {
        & > :first-child {
            ${props => !props.$isActive && UnactiveHoveredBackground};
        }

        & > div:last-child {
            -webkit-text-fill-color: ${props => props.$activeColor};
            transition: -webkit-text-fill-color ${props => props.$transitionTime};
        }
    }
`;

const GradientContainer = styled(GradientFilledText)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    position: relative;
    z-index: 2;
`;

const LinkIcon = styled(MaterialIcon)<activeColorProps>`
    padding: 0.5rem 2rem 0.5rem 0.5rem;

    color: ${props => props.$isActive && props.$activeColor};

    &:hover {
        z-index: 1;

        color: ${props => props.$activeColor};

        &::before {
            opacity: 1;
        }
    }
`;

interface hamburgerProps extends activeColorAndTransitionProps {
    onClick: Function;
    title: string;
}

const HamburgerIcon = styled(LinkIcon)<hamburgerProps>`
    position: relative;

    padding-right: 0.5rem;

    cursor: pointer;

    transition: -webkit-text-fill-color ${props => props.$transitionTime};

    &:hover {
        z-index: 1;

        -webkit-text-fill-color: ${props => props.$activeColor};

        &::before {
            opacity: 1;
        }
    }

    &::before {
        content: '';

        display: block;
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        border-radius: 50%;

        background-image: ${props => props.$gradient};

        opacity: 0;
        transition: opacity ${props => props.$transitionTime};
    }
`;

const LinkText = styled(NonWrappingText)<{fontSize: size}>`
    height: 100%;
    width: 100%;

    padding: 0.5rem 0rem 0.5rem 0.5rem;

    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: ${props => props.fontSize};
`;

const listStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const listElementStyle = css`
    display: block;
    width: 100%;

    position: relative;

    padding: 0.5rem 0 0.5rem 1rem;
`;

const Layout = (props: {children: ReactChild | ReactChild[]; pageProps: PageProps}) => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleSidebar = () => {
        setSidebarActive(prevSidebarActive => !prevSidebarActive);
    };

    const theme = React.useContext(ThemeContext);

    const transitionTime = theme.transitionTime.standard;

    const menuElements = useMenuLinks(props.pageProps);

    const iconProps = {
        textColorSecondary: theme.colors.accentMagenta,
        fontSize: '2rem' as size,
    };

    const activeColorProps = {
        $activeColor: theme.colors.background,
        $gradient: theme.gradients.primaryGradient,
    };

    return (
        <>
            <Sidebar
                inactiveWidth={'5rem'}
                activeWidth={'15rem'}
                borderColor={theme.colors.accentMagenta}
                backgroundColor={theme.colors.background}
                borderWidth={theme.sizes.sidebarBorderWidth}
                active={sidebarActive}
                widthTransition={theme.transitionTime.standard}
            >
                <nav>
                    <UnorderedList listStyle={listStyle} elementStyle={listElementStyle}>
                        {[
                            <GradientContainer
                                fallbackColor={theme.colors.accentMagenta}
                                $gradient={theme.gradients.primaryGradient}
                                key={'hamburger'}
                            >
                                <HamburgerIcon
                                    {...iconProps}
                                    {...activeColorProps}
                                    iconName={'menu'}
                                    $transitionTime={transitionTime}
                                    onClick={toggleSidebar}
                                    title={sidebarActive ? 'Hide menu' : 'Show menu'}
                                />
                            </GradientContainer>,
                            ...menuElements.map(element => (
                                <StyledLink
                                    {...activeColorProps}
                                    key={element.name}
                                    to={element.href}
                                    $isActive={element.isActive}
                                    $shadowColor={theme.colors.accentMagenta}
                                    $transitionTime={transitionTime}
                                    title={element.name}
                                >
                                    <StyledLinkBackground
                                        {...activeColorProps}
                                        $isActive={element.isActive}
                                        $transitionTime={transitionTime}
                                        role={'presentation'}
                                    ></StyledLinkBackground>
                                    <GradientContainer
                                        fallbackColor={theme.colors.accentMagenta}
                                        $gradient={theme.gradients.primaryGradient}
                                    >
                                        <LinkIcon
                                            {...iconProps}
                                            {...activeColorProps}
                                            $isActive={element.isActive}
                                            iconName={element.icon}
                                        />
                                        <LinkText fontSize={iconProps.fontSize}>
                                            {element.name}
                                        </LinkText>
                                    </GradientContainer>
                                </StyledLink>
                            )),
                        ]}
                    </UnorderedList>
                </nav>
            </Sidebar>
            <Main as={'main'}>{props.children}</Main>
            <footer></footer>
        </>
    );
};

export default Layout;
