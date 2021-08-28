import {createGlobalStyle} from 'styled-components';
import '@fontsource/open-sans';
import Theme from '../themes/theme';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
    }

    body {
        font-family: "Open Sans";
        background: ${Theme.colors.background};
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #gatsby-announcer {
        color: white;
    }
`;

export default GlobalStyle;
