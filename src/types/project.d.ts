type project = {
    title: string;
    technologies: string[];
    dateOfStart?: string;
    status: string;
    links: {
        icon: {
            name: string;
            type: 'material' | 'simple';
        };
        link: string;
        name: string;
    }[];
    images: FluidObject[];
    excerpt: string;
    link: string;
};
