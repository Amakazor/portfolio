import React from 'react';
import Paragraph, {paragraphProps} from '../paragraph';
import SidePaddedContainer from '../sidePaddedContainer';
import UnderlinedLink from '../underlinedLink';
import H2 from '../h2';
import styled, {ThemeContext} from 'styled-components';
import MaterialIcon from '../materialIcon';

const TextContainer = styled.div`
    max-width: 80rem;
    width: 95%;
`;

const AboutMe = () => {
    const theme = React.useContext(ThemeContext);
    const iconFontSize = 'calc(1rem + 1vw)';

    const ParagraphProps: paragraphProps = {
        fontSize: 'calc(0.7rem + 0.35vw)',
        color: theme.colors.primary,
        align: 'left',
        isPadded: true,
    };

    const BoldProps = {
        fontWeight: theme.weights.bolder,
    };

    return (
        <>
            <H2 textColor={theme.colors.primary}>
                <MaterialIcon fontSize={iconFontSize} iconName={'arrow_forward_ios'} />
                <SidePaddedContainer padding={'calc(1rem + 1vw)'}>
                    About me
                </SidePaddedContainer>
                <MaterialIcon fontSize={iconFontSize} iconName={'arrow_back_ios'} />
            </H2>
            <TextContainer>
                <Paragraph {...ParagraphProps} {...BoldProps}>
                    Hello There!
                </Paragraph>
                <Paragraph {...ParagraphProps}>
                    My name is Arkadiusz, I'm a developer focused mostly on webdevelopment
                    with commercial experience in both frontend and backend of websites.
                    Besides webdevelopment I also write application and scripts in other
                    technologies like C-family languages, Python or Java in my spare time,
                    that are mostly focused in areas of data processing, procedural
                    generation and video games, the purpose of which is experimenting,
                    learning and just having fun doing something creative.
                </Paragraph>
                <Paragraph {...ParagraphProps}>
                    I treat programming as my passion, as I love learning new things, like
                    technologies, languages or some super-specific algorithms for an
                    obscure problem that has been puzzling me for hours - that's the
                    feeling i code for. That, and the ability to constanly improve my
                    skills and becoming able to create even more things.
                </Paragraph>
                <Paragraph {...ParagraphProps}>
                    When I'm not coding at the moment, you can find me doing some artsy
                    stuff like 3D graphics, thinking about promising, new ideas like{' '}
                    <em>
                        <UnderlinedLink
                            href={'https://is7api.awrzawinski.xyz'}
                            target={'_blank'}
                            colors={{
                                normal: {
                                    textColor: theme.colors.primary,
                                    backgroundColor: 'transparent',
                                },
                                hover: {
                                    textColor: theme.colors.primary,
                                    backgroundColor: 'transparent',
                                },
                                underlineColor: theme.colors.primary,
                            }}
                            transitionTime={theme.transitionTime.fast}
                            isFullWidth
                            fontWeight={theme.weights.bold}
                            title={
                                "It's an API that tells you if number you've given it is seven! Check it out!"
                            }
                        >
                            some useless websites created just for the sake of it
                        </UnderlinedLink>
                    </em>
                    , playing video games or playing with my pets.
                </Paragraph>
            </TextContainer>
        </>
    );
};
export default AboutMe;
