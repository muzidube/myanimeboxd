<template>
  <span class="block pt-50% w-full" />
  <div class="content-wrap relative py-0 px-4 w-auto my-0 mx-auto">
    <div class="anime-page-wrapper overflow-visible">
      <span class="block" />
      <div class="inline overflow-visible lg:float-right lg:w-670px">
        <span class="block" />
        <section class="featured-anime-header mb-4 -mt-2 mx-6 flex lg:block">
          <div class="poster-wrap self-start shrink-0 order-2 overflow-visible w-2/6 relative z-0">
            <div
              class="poster-container h-auto w-full rounded inline-block overflow-hidden shadow relative bg-black"
            >
              <img class="h-auto w-full rounded block" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Anime from '../types/Anime';

export default defineComponent({
  setup() {
    const id = this.$route.params.id;
    const anime = ref<Anime>({});
    const fetchTopAiringAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/anime/single/${id}`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        anime.value = jsonObj.data.slice(0, 6);
        console.log('json object: ', jsonObj.data);
        console.log('Top Anime Array: ', anime.value);
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchTopAiringAnime();
  }
});
</script>

<style></style>
