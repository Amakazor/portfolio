import styled from 'styled-components';

interface SidebarProps {
    inactiveWidth: size;
    activeWidth?: size;

    active?: boolean;
    widthTransition?: time;

    backgroundColor?: string;

    borderColor: string;
    borderWidth: size;
}

const Sidebar = styled.aside<SidebarProps>`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    overflow: hidden;

    width: calc(
        ${props => (props.active ? props.activeWidth : props.inactiveWidth)} +
            ${props => props.borderWidth}
    );

    transition: ${props => props.widthTransition && `width ${props.widthTransition}`};

    border-right: ${props => props.borderWidth} solid ${props => props.borderColor};
    background: ${props => props.backgroundColor};
    z-index: 2;
`;

export default Sidebar;
