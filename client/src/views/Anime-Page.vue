<template>
  <Header />
  <div v-if="anime">
    <Backdrop :animeBackground="anime.main_picture.large" />
    <span class="block pt-50% w-full" />
    <div class="content-wrap relative py-0 px-4 w-auto my-0 mx-auto text-left">
      <div class="anime-page-wrapper overflow-visible">
        <span class="block" />
        <div class="inline overflow-visible lg:float-right lg:w-670px">
          <span class="block" />
          <section class="featured-anime-header mb-4 -mt-2 flex lg:block">
            <div
              class="anime-page-poster-wrap self-start order-2 overflow-visible w-2/6 relative z-0"
            >
              <div
                class="poster-container h-auto w-full rounded inline-block overflow-hidden shadow relative bg-black"
              >
                <div>
                  <img
                    class="h-auto w-full rounded block"
                    :src="anime.main_picture.medium"
                    :alt="anime.title"
                  />
                  <a
                    class="frame z-1 bg-clip-padding bg-frame-gradient bg-no-repeat bg-frame rounded-lg shadow-frame box-border block h-full left-0 overflow-hidden absolute right-0 top-0 whitespace-nowrap"
                  />
                </div>
              </div>
            </div>
            <div class="anime-page-details self-center order-1 pr-4">
              <h1 class="anime-title text-2xl m-0 text-white font-garamond font-extrabold">
                {{ anime.title }}
              </h1>
              <p class="release-year text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider">
                <a>
                  {{ `${anime.start_season.year} ` }}
                </a>
                <span class="bullet">·</span>
                Studio
              </p>
              <div class="anime-studio text-base leading-5 mb-1 font-black capitalize">
                {{ anime.studios[0].name }}
              </div>
              <div class="anime-score text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider">
                Score
              </div>
              <div class="anime-score text-base leading-5 m-0 font-black">
                {{ anime.mean }}
              </div>
              <div class="anime-score text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider">
                Ranking
              </div>
              <div class="anime-score text-base leading-5 m-0 font-black">
                {{ anime.rank }}
              </div>
            </div>
          </section>
          <section class="anime-synopsis float-none w-auto overflow-visible p-0 relative block">
            <span class="block" />
            <section class="block">
              <div class="mb-0 overflow-hidden text-base leading-6 font-garamond font-semibold">
                <h4 class="-mt-1 font-quicksand tracking-widest uppercase font-normal mb-1">
                  Synopsis
                </h4>
                <div v-if="anime.synopsis.length > 200" class="short-synopsis block flex">
                  <p>
                    {{ anime.synopsis.substring(0, 200) }}
                    <button class="font-black text-gray-text2" @click="toggleSynopsis">
                      ...more
                    </button>
                  </p>
                </div>
                <div v-if="anime.synopsis.length > 200" class="full-synopsis block hidden">
                  <p>
                    {{ anime.synopsis }}
                    <button class="font-black text-gray-text2" @click="toggleSynopsis">
                      ...less
                    </button>
                  </p>
                </div>
                <div v-if="anime.synopsis.length < 200" class="full-synopsis block">
                  <p>
                    {{ anime.synopsis }}
                  </p>
                </div>
              </div>
            </section>
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
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/header/Header.vue';
import Backdrop from '../components/home/Backdrop.vue';
import Anime from '../types/Anime';

export default defineComponent({
  components: { Header, Backdrop },
  setup() {
    const route = useRoute();

    const anime = ref<Anime | null>(null);
    const fetchTopAiringAnime = async () => {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_BACKEND_URL}/anime/single/${route.params.id}`
        );
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        anime.value = jsonObj;
        console.log('json object: ', jsonObj);
        console.log('Top Anime Array: ', anime.value);
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };
    fetchTopAiringAnime();

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
