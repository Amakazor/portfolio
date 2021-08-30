import {Link, PageProps} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeContext} from 'styled-components';
import CenteredBox from '../components/centeredBox';
import AboutMe from '../components/index/aboutMe';
import IndexHeader from '../components/index/indexHeader';
import Layout from '../components/layout';

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
        </Layout>
    );
};

export default IndexPage;
