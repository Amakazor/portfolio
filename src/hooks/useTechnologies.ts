import {graphql, useStaticQuery} from 'gatsby';

export const useTechnologies = (displayInHeader: boolean = false) => {
    const {allTechnologies, allTechnologiesInHeader} = useStaticQuery(
        graphql`
            query GetAllTechnologies {
                allTechnologies: allTechnologiesYaml(
                    filter: {displayInHeader: {eq: true}}
                ) {
                    edges {
                        node {
                            name
                            title
                        }
                    }
                }
                allTechnologiesInHeader: allTechnologiesYaml {
                    edges {
                        node {
                            name
                            title
                        }
                    }
                }
            }
        `,
    );

    return (displayInHeader ? allTechnologiesInHeader : allTechnologies).edges.map(
        (element: {node: {name: string; title: string}}) => element.node,
    ) as {name: string; title: string}[];
};
