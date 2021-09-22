import _ from 'lodash';
import React, {CSSProperties} from 'react';
import {useProjects} from '../../hooks/useProjects';
import Carousel from 'nuka-carousel';
import TextAndImageBox from '../textAndImageBox';
import H3 from '../h3';
import styled, {ThemeContext} from 'styled-components';
import MaxWidthContainer from '../maxWidthContainer';
import H4 from '../h4';
import Paragraph from '../paragraph';
import {useTechnologies} from '../../hooks/useTechnologies';
import MaterialIcon from '../materialIcon';
import SimpleIcon from '../simpleIcon';
import GradientBorderLink from '../gradientBorderLink';
import Theme from '../../themes/theme';

const DescriptionParagraph = styled.div`
    min-height: calc((0.6rem + 0.6vw) * 6);
`;

const Projects = () => {
    const projects = _.chunk(useProjects(), 1);
    const technologies = useTechnologies(false);
    const theme = React.useContext(ThemeContext) as typeof Theme;

    const headingSize = 'calc(1rem + .1vw)';
    const textSize = 'calc(1rem + .8vw)';
    const descSize = 'calc(.6rem + 0.6vw)';
    const iconSize = 'calc(2rem + 2vw)';

    const buttonStyle: CSSProperties = {
        textTransform: 'none',
        fontSize: iconSize,
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundColor: theme.colors.accentMagenta,
        backgroundImage: theme.gradients.primaryGradient,
        transition: `opacity ${theme.transitionTime.fast}`,
    };

    const headingProps = {
        textColor: theme.colors.primary,
        fontSize: headingSize as size | calcString,
        noMargin: true,
        topMargin: true,
    };

    const paragraphProps = {
        as: 'span',
        fontSize: textSize as size | calcString,
        color: theme.colors.primary,
    };

    const gradientButtonProps = {
        gradient: theme.gradients.primaryGradientReversedHorizontal,
        $activeColor: theme.colors.background,
        $fallbackColor: theme.colors.accentMagenta,
        $transitionTime: theme.transitionTime.fast,
        fontWeight: theme.weights.bolder as weight,
        width: '90%' as size,
        $center: true,
    };

    const textAndImageBoxProps = {
        borderColor: theme.colors.primary,
        background: theme.colors.background,
        borderGradient: theme.gradients.primaryGradient,
        $transitionTime: theme.transitionTime.fast,
    };

    return (
        <>
            <MaxWidthContainer maxWidth={'90rem'}>
                <Carousel
                    framePadding={'0 10%'}
                    swiping={false}
                    defaultControlsConfig={{
                        prevButtonStyle: buttonStyle,
                        nextButtonStyle: buttonStyle,
                        prevButtonText: 'arrow_back_ios',
                        nextButtonText: 'arrow_forward_ios',
                        prevButtonClassName: 'material-icons',
                        nextButtonClassName: 'material-icons',
                        pagingDotsStyle: {display: 'none'},
                    }}
                >
                    {projects.map((projectsGroup, index) => (
                        <div key={index}>
                            {projectsGroup.map((project, projectIndex) => (
                                <TextAndImageBox
                                    {...textAndImageBoxProps}
                                    key={projectIndex}
                                    images={project.images}
                                    reversed={((index % 2) + projectIndex) % 2 == 0}
                                >
                                    <H3 {...headingProps}>Name</H3>
                                    <Paragraph {...paragraphProps}>
                                        {project.title}
                                    </Paragraph>
                                    <H4 {...headingProps}>Date of start</H4>{' '}
                                    <Paragraph {...paragraphProps}>
                                        {project.dateOfStart}
                                    </Paragraph>
                                    <H4 {...headingProps}>Status</H4>
                                    <Paragraph {...paragraphProps}>
                                        {project.status}
                                    </Paragraph>
                                    <H4 {...headingProps}>Links</H4>
                                    <Paragraph {...paragraphProps}>
                                        {project.links.map((element, index) => (
                                            <a
                                                key={index}
                                                href={element.link}
                                                title={`Click to go to ${element.name}`}
                                                target={'_blank'}
                                            >
                                                {element.icon.type == 'material' ? (
                                                    <MaterialIcon
                                                        iconName={element.icon.name}
                                                        fontSize={textSize}
                                                    />
                                                ) : (
                                                    <SimpleIcon
                                                        iconName={element.icon.name}
                                                        fontSize={textSize}
                                                    />
                                                )}
                                                &nbsp; &nbsp;
                                            </a>
                                        ))}
                                    </Paragraph>
                                    <H4 {...headingProps}>Technologies</H4>
                                    <Paragraph {...paragraphProps}>
                                        {project.technologies.map((element, index) => (
                                            <React.Fragment key={index}>
                                                <SimpleIcon
                                                    iconName={element}
                                                    fontSize={textSize}
                                                    title={
                                                        (
                                                            _.find(
                                                                technologies,
                                                                technology =>
                                                                    (technology.name =
                                                                        element),
                                                            ) as {
                                                                name: string;
                                                                title: string;
                                                            }
                                                        ).title
                                                    }
                                                />
                                                &nbsp; &nbsp;
                                            </React.Fragment>
                                        ))}
                                    </Paragraph>
                                    <H4 {...headingProps}>Date of start</H4>
                                    <Paragraph {...paragraphProps}>
                                        {project.dateOfStart}
                                    </Paragraph>
                                    <H4 {...headingProps}>Description</H4>
                                    <DescriptionParagraph>
                                        <Paragraph
                                            {...paragraphProps}
                                            fontSize={descSize}
                                        >
                                            {project.excerpt}
                                        </Paragraph>
                                    </DescriptionParagraph>
                                    <GradientBorderLink
                                        {...gradientButtonProps}
                                        to={project.link}
                                    >
                                        Project details
                                    </GradientBorderLink>
                                </TextAndImageBox>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </MaxWidthContainer>
            <GradientBorderLink
                {...gradientButtonProps}
                width={'calc(10rem + 10vw)'}
                $marginTop={'2rem'}
                to={'/projects/'}
            >
                All projects
            </GradientBorderLink>
        </>
    );
};

export default Projects;
