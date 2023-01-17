<template>
  <p v-if="error">{{ error }}</p>
  <p v-if="loaging">Loading...</p>
  <ul v-else>
    <li
      v-for="car in cars"
      :key="car.sys.id"
    >
      <div>
        <h3>{{ car.title }}</h3>
        <p>{{ car.sys.id }}</p>
      </div>

      <div>
        <img
          v-bind:src="`${car.featureImage.url}`"
          v-bind:alt="`${car.featureImage.title}`"
        />
      </div>
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
import { useQuery } from '@vue/apollo-composable';
// import gql from 'graphql-tag';
import { computed, watchEffect, ref } from 'vue';
import ALL_CARS_QUERY from '@/graphql/queries/getAllCars';

export default {
  name: 'App',
  setup() {
    // const ALL_CARS_QUERY = gql`
    //   query GetAllCars($limit: Int) {
    //     carProfilesCollection(
    //       limit: $limit
    //       where: { OR: [{ thumnail_exists: true }] }
    //     ) {
    //       total
    //       items {
    //         title
    //         sys {
    //           id
    //         }
    //         featureImage {
    //           title
    //           url
    //         }
    //       }
    //     }
    //   }
    // `;

    const VARIABLES = ref({
      limit: 8,
    });

    const { result, loading, error } = useQuery(ALL_CARS_QUERY, VARIABLES);
    const cars = computed(() => result.value?.carProfilesCollection.items);

    watchEffect(() => {
      console.log(cars);
    });

    return { cars, loading, error };
  },
};
</script>
