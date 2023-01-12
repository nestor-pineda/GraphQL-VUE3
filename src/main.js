import { createApp, provide, h } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // uri: "https://graphqlzero.almansi.me/api",
  uri: "https://graphql.contentful.com/content/v1/spaces/68rpjdtc5ggd?access_token=J7GPpPJNIUMliQ6gnh_eraQBdWW3ntuYKPzEf-vg9NI",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.mount("#app");
