module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
            options: {
                path: `./src/data/`,
            },
    ],
};
