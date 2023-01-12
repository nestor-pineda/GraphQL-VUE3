// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "Users",
      // URL to the GraphQL API
      // url: "https://graphqlzero.almansi.me/api",
      url: "https://graphql.contentful.com/content/v1/spaces/68rpjdtc5ggd?access_token=J7GPpPJNIUMliQ6gnh_eraQBdWW3ntuYKPzEf-vg9NI",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
