import {PageProps} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeContext} from 'styled-components';
import CenteredBox from '../components/centeredBox';
import AboutMe from '../components/index/aboutMe';
import IndexHeader from '../components/index/indexHeader';
import Projects from '../components/index/projects';
import Layout from '../components/layout';
import SectionHeader from '../components/sectionHeader';

const PaddedSection = styled(CenteredBox)`
    padding-top: calc(1vw + 1rem);
    padding-bottom: calc(1vw + 1rem);
`;

const IndexPage = (props: PageProps) => {
    const theme = React.useContext(ThemeContext);
    const iconFontSize = 'calc(1rem + 1vw)';

    return (
        <Layout pageProps={props}>
            <Helmet>
                <title>Arkadiusz Wrzawiński | Home</title>
            </Helmet>
            <IndexHeader id={'home'} />
            <PaddedSection as={'section'} id={'about'}>
                <AboutMe />
            </PaddedSection>
            <PaddedSection as={'section'} id={'projects'}>
                <SectionHeader
                    iconFontSize={iconFontSize}
                    textColor={theme.colors.primary}
                    gradient={theme.gradients.primaryGradientReversedHorizontal}
                    backgroundColor={theme.colors.background}
                    dTop={
                        'M 0.01469363,0.43370069 C 0.09854999,0.4387862 0.1721577,1.002381 0.28404617,1.0050196 0.38524779,1.0108896 0.52080099,0.45465161 0.6116363,0.46308685 c 0.0822891,0.00611 0.28785328,0.51362794 0.40284,0.5222937 0.2785575,0.020993 0.6669681,-1.13015649 0.2172902,-1.43650427 -0.38928451,-0.2652042 -1.56868888,-0.15341954 -1.64697005,-0.22856383 l 0.2188571,1.0742188 c 0.24457669,-0.6226023 -0.002854,0.0180223 0.21104008,0.0391694 z'
                    }
                    dBottom={
                        'M 0.08500613,0.40245069 C 0.27801559,0.41301336 0.33628822,0.96796136 0.54185867,0.96205089 0.69780503,0.96292655 0.88294736,0.41022164 1.0022613,0.40839935 1.6035415,0.38809537 1.6494895,2.4298397 1.9519763,1.8291305 2.1863748,1.3636379 -0.46915297,1.8416338 -0.6378598,1.6796874 l 0.44151335,-1.28515615 c 0.24457669,-0.6226023 -0.24564076,-0.0410451 0.28135258,0.007919 z'
                    }
                >
                    Projects
                </SectionHeader>
                <Projects />
            </PaddedSection>
        </Layout>
    );
};

export default IndexPage;
