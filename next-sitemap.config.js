/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bmstart.com.au", // Replace with your domain
  generateRobotsTxt: true, // (optional) Generate robots.txt file
  changefreq: "daily", // Frequency of page updates
  priority: 0.7, // Priority of the pages
  sitemapSize: 5000, // Split large sitemaps
  exclude: ["/admin/*", "/private"], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"], // Customize disallowed paths
      },
    ],
  },
};
