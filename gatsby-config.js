module.exports = {
  siteMetadata: {
    title: `KVRE GatsbyPrismic Demo`,
    description: `mock realty site.`,
    author: `@magic8baller`,
  },
  plugins: [
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-prismic-graphql`,
			options: {
				repositoryName: `kvre-demo`,
				pages: [{
					type: `Page`,
					match: `/:uid`,
					path: `/`,
					component: require.resolve(`./src/templates/page.js`)
				}]
			}
		},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
