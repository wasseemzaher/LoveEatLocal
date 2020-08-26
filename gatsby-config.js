/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./serviceAccountKey.json"),

        types: [
          {
            type: "Product",
            collection: "products",
            map: doc => ({
              name: doc.name,
              dateCreated: doc.dateCreate,
              id: doc.id,
              media: doc.media,
              price: doc.price,
              stock: doc.stock,
              notes: doc.notes,
              description: doc.description,
              display: doc.display,
              instructions: doc.instructions,
              tags: doc.tags
            }),
          },
          {},
          {},
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
