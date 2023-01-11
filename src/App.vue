<template>
  <p v-if="error">{{ error }}</p>
  <p v-if="loaging">Loading...</p>
  <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    const ALL_USERS_QUERY = gql`
      query {
        users {
          data {
            id
            name
            email
          }
        }
      }
    `;

    const { result, loading, error } = useQuery(ALL_USERS_QUERY);
    const users = computed(() => result.value?.users.data);

    watchEffect(() => {
      console.log(users);
    });

    return { users, loading, error };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
