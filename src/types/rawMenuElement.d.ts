type rawMenuElement = {
    name: string;
    icon: string;
    activeRule: string;
    href: {
        default: string;
        rules?: {
            rule: string;
            href: string;
        }[];
    };
};
