module.exports = {
    siteUrl: "https://krishaligroup.com",
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
      return [
        { loc: "/near-corniche", changefreq: "monthly", priority: 0.8 },
        { loc: "/du-building-hamdan-street", changefreq: "monthly", priority: 0.8 },
        { loc: "/al-bustan-abu-dhabi-airport-road", changefreq: "monthly", priority: 0.8 },
      ];
    },
  };
  