type rawProject = {
    frontmatter: {
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
        images: {
            childImageSharp: {
                gatsbyImageData: ImageDataLike;
            };
        }[];
    };
    fileAbsolutePath: string;
    excerpt: string;
    slug: string;
};
