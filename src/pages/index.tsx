import {PageProps} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';
import IndexHeader from '../components/index/indexHeader';
import Layout from '../components/layout';

const IndexPage = (props: PageProps) => {
    return (
        <Layout pageProps={props}>
            <Helmet>
                <title>Arkadiusz Wrzawiński | Home</title>
            </Helmet>
            <IndexHeader />
        </Layout>
    );
};

export default IndexPage;
