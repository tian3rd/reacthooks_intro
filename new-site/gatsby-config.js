module.exports = {
  siteMetadata: {
    title: `Survive and Thrive`,
    description: `A guide to the next 10 years; live with AIs`,
    author: `@Phi_W5`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // ISSUE: comment out gatsby-plugin-styled-components for now, as it will not develop (dependency issues?)
    // `gatsby-plugin-styled-components`,
  ],
}
