module.exports = {
  siteMetadata: {
    title: `GraphQL`,
    description: `Wprowadzenie do języka GraphQL`,
    author: `Aleksander Niedźwiedź @ Angry Nerds`,
  },
  pathPrefix: "/graphql",
  plugins: [
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
        name: `grapql`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2d2072`,
        theme_color: `#2d2072`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`],
            subsets: [`latin-ext`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
