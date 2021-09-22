import {graphql, useStaticQuery} from 'gatsby';

export const useProjects = () => {
    const {allMdx: allProjects} = useStaticQuery(
        graphql`
            query GetAllProjects {
                allMdx(
                    sort: {fields: frontmatter___dateOfStart, order: DESC}
                    filter: {fileAbsolutePath: {regex: "src/pages/projects/"}}
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                technologies
                                dateOfStart(formatString: "DD MMMM yyyy")
                                status
                                links {
                                    icon {
                                        name
                                        type
                                    }
                                    link
                                    name
                                }
                                images {
                                    childImageSharp {
                                        gatsbyImageData(
                                            width: 800
                                            layout: CONSTRAINED
                                            formats: PNG
                                        )
                                    }
                                }
                            }
                            fileAbsolutePath
                            excerpt(pruneLength: 100)
                            slug
                        }
                    }
                }
            }
        `,
    );

    return (allProjects.edges as {node: rawProject}[]).map(element => {
        return {
            ...element.node.frontmatter,
            images: element.node.frontmatter.images.map(
                image => image.childImageSharp.gatsbyImageData,
            ),
            excerpt: element.node.excerpt,
            link: `/projects/${element.node.slug}/`,
        };
    }) as project[];
};
