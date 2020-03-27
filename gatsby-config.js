module.exports = {
  siteMetadata: {
    title: `D3D Visualization Studio`,
    description: `3D Visualizations, architecture, interiors, products, furnitures`,
    author: `Przemysław Krzywodajć <przemyslaw.krzywodajc@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wisualization Studio D3D`,
        short_name: `Studio D3D`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/logo.png",
        // cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/interiors/`, `/contact/`],
        // workboxConfig: {
        //   globPatterns: ["**/*"],
        // },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        whitelist: [
          "pnlm-container",
          "carousel",
          "carousel-slider",
          // "thumb",
          // "selected",
          // "thumbs",
          // "animated",
        ],
        ignore: ["src/styles/carousel.css"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
