let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `./.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Awamori in the Pocket`,
    description: `沖縄のことをゆるーくお届けするラジオ`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
        icon: `src/images/logoImg.png`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: 'gatsby-source-cloudinary/',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `awamori_in_the_pocket`,
      },
    }
  ],
}
