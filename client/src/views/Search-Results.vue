<template>
  <Header />
  <div v-if="anime">
    <div class="content pt-4 pb-10">
      <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 lg:px-0 lg:w-950px text-left">
        <div class="overflow-visible">
          <span class="block" />
          <section class="py-0 float-none w-auto overflow-visible relative block">
            <span class="block" />
            <h2
              class="results-number tracking-wide border-b border-gray-highlights mb-3 pb-1 uppercase"
            >
              Search results...
            </h2>
            <section class="filters"></section>
            <ul class="search-results-list -mt-1 list-none">
              <li
                v-for="anime in anime"
                :key="anime.node.id"
                class="overflow-hidden py-4 border-b border-gray-resultBorder mb-3 pb-1"
              >
                <Result :anime="anime" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-v-screen min-h-screen flex items-center justify-center">
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/header/Header.vue';
import Result from '../components/search-page/Result.vue';
import Anime from '../types/Anime';

export default defineComponent({
  components: { Header, Result },
  setup() {
    const route = useRoute();
    const searchValue = ref(route.params.searchQuery);
    const anime = ref<Anime[] | null>(null);
    const searchAnime = async () => {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_BACKEND_URL}/anime/search/${searchValue.value}`
        );
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        anime.value = jsonObj.data;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };
    searchAnime();

    watch(route, () => {
      searchValue.value = route.params.searchQuery;
      searchAnime();
    });

    const toggleSynopsis = () => {
      const shortSynopsis = document.querySelector('.short-synopsis') || null;
      const fullSynopsis = document.querySelector('.full-synopsis') || null;

      if (fullSynopsis && shortSynopsis && fullSynopsis.classList.contains('hidden')) {
        shortSynopsis.classList.add('hidden');
        fullSynopsis.classList.remove('hidden');
      } else if (fullSynopsis && shortSynopsis && shortSynopsis.classList.contains('hidden')) {
        shortSynopsis.classList.remove('hidden');
        fullSynopsis.classList.add('hidden');
      }
    };

    return { anime, toggleSynopsis };
  }
});
</script>

<style></style>
