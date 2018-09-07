require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});



module.exports = {
  siteMetadata: {
    title: 'Happiness Project',
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
        trackingId: process.env.TRACKING_ID,
        head: false,
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
