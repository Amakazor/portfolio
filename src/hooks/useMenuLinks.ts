import {graphql, PageProps, useStaticQuery} from 'gatsby';

export const useMenuLinks = (PageProps: PageProps) => {
    const {allMenuElementsYaml} = useStaticQuery(
        graphql`
            query GetMenuElementsAndCurrentPagePath {
                allMenuElementsYaml {
                    edges {
                        node {
                            name
                            icon
                            activeRule
                            href {
                                default
                                rules {
                                    rule
                                    href
                                }
                            }
                        }
                    }
                }
            }
        `,
    );

    return (
        allMenuElementsYaml.edges.map(
            (edge: {node: rawMenuElement}) => edge.node,
        ) as rawMenuElement[]
    ).map(element => {
        return {
            name: element.name,
            icon: element.icon,
            href:
                (element.href.rules &&
                    element.href.rules.find(rule =>
                        (PageProps.location.pathname + PageProps.location.hash).match(
                            new RegExp(rule.rule),
                        ),
                    )?.href) ||
                element.href.default,
            isActive:
                (PageProps.location.pathname + PageProps.location.hash).match(
                    new RegExp(element.activeRule),
                ) != null,
        };
    }) as menuElement[];
};
