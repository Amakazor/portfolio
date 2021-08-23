import React from 'react';
import {ThemeProvider} from 'styled-components';
import Theme from './src/themes/theme';
import GlobalStyle from './src/global/globalStyle';

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
);
