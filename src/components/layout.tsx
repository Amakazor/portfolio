import React, {ReactChild} from 'react';
import styled from 'styled-components';
import FullHeightBox from './fullHeightBox';

const Main = styled(FullHeightBox)`
    width: 100%;
`;

const Layout = (props: {children: ReactChild | ReactChild[]}) => {
    //TODO: Finish this
    return (
        <>
            <aside>
                <nav></nav>
            </aside>
            <Main as={'main'}>{props.children}</Main>
            <footer></footer>
        </>
    );
};

export default Layout;
