<template>
  <p v-if="error">{{ error }}</p>
  <p v-if="loaging">Loading...</p>
  <!-- <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul> -->

  <ul v-else>
    <li v-for="car in cars" :key="car.id">
      {{ car.title }}
    </li>
  </ul>

  <!-- <ApolloQuery :query="require('@/graphql/allUsers.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <p v-if="error">An error occurred</p>
      <p v-else-if="loading">Loading...</p>
      <ul v-else>
        <li v-for="user in data.users.data" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </template>
  </ApolloQuery> -->
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, watchEffect } from "vue";

export default {
  name: "App",
  // setup() {
  //   const ALL_USERS_QUERY = gql`
  //     query {
  //       users {
  //         data {
  //           id
  //           name
  //           email
  //         }
  //       }
  //     }
  //   `;

  //   const { result, loading, error } = useQuery(ALL_USERS_QUERY);
  //   const users = computed(() => result.value?.users.data);

  //   watchEffect(() => {
  //     console.log(users);
  //   });

  //   return { users, loading, error };
  // },
  setup() {
    const ALL_CARS_QUERY = gql`
      query {
        carProfilesCollection {
          total
          items {
            title
            slug
          }
        }
      }
    `;

    const { result, loading, error } = useQuery(ALL_CARS_QUERY);
    const cars = computed(() => result.value?.carProfilesCollection.items);

    watchEffect(() => {
      console.log(cars);
    });

    return { cars, loading, error };
  },
};
</script>
