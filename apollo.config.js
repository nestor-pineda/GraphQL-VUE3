// apollo.config.js

const { VUE_APP_SPACE_ID, VUE_APP_CDA_TOKEN } = process.env;

module.exports = {
  client: {
    service: {
      name: "Users",
      // URL to the GraphQL API
      // url: "https://graphqlzero.almansi.me/api",
      url: `https://graphql.contentful.com/content/v1/spaces/${VUE_APP_SPACE_ID}?access_token=${VUE_APP_CDA_TOKEN}`,
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
