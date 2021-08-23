import * as React from 'react';
import {ThemeContext} from 'styled-components';
import CenteredBox from '../components/centeredBox';
import H1 from '../components/h1';
import H3 from '../components/h3';
import H4 from '../components/h4';
import Layout from '../components/layout';
import UnderlinedLink from '../components/underlinedLink';

const IndexPage = () => {
    const theme = React.useContext(ThemeContext);

    const underlinedLinkProps = {
        colors: {
            normal: {
                textColor: theme.colors.primary,
                backgroundColor: 'transparent',
            },
            hover: {
                textColor: theme.colors.primary,
                backgroundColor: 'transparent',
            },
            underlineColor: theme.colors.primary,
        },
        fontWeight: 600,
        transitionTime: '400ms',
    };

    return (
        <Layout>
            <CenteredBox>
                <H1 textColor={theme.colors.primary}>🏗️🧱👷</H1>
                <H1 textColor={theme.colors.primary}>Site in construction</H1>
                <H3 textColor={theme.colors.primary}>Please, return later</H3>
                <H4 textColor={theme.colors.primary}>
                    In the meantime you can try out{' '}
                    <UnderlinedLink
                        href={'http://www.is7api.awrzawinski.xyz'}
                        target={'_blank'}
                        {...underlinedLinkProps}
                    >
                        <em>is7API </em>
                    </UnderlinedLink>
                    - the new revolutionary numerical API for your everyday webdevelopment
                    needs!
                </H4>
            </CenteredBox>
        </Layout>
    );
};

export default IndexPage;
