export default interface iconProps extends styledIconProps {
    iconName: string;
    title?: string;
}

export interface styledIconProps {
    fontSize?: size | calcString;
    textColor?: string;
}
