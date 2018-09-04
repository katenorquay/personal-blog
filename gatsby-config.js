module.exports = {
  siteMetadata: {
    title: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `roboto`,
         `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
       ]
     }
   }
  ],
}
