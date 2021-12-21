<template>
  <Header />
  <Backdrop :animeBackground="animeBackground" />
  <div class="site-body pt-15%">
    <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 lg:px-0 lg:w-950px font-normal">
      <div class="homepage-welcome mb-8 mt-18% text-left text-xl">
        <div class="welcome mb-0 mt-18% text-center">
          <h2
            class="text-1.5em font-bold leading-none w-full m-0 p-0 mb-8 box-border text-white font-comfortaa"
          >
            animeboxd
          </h2>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">
            Connect with MyAnimeList.
          </h3>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">
            Track anime you've watched.
          </h3>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">The modern way.</h3>
          <a
            class="login-link mb-14 mt-14 bg-green-animeboxd text-white text-sm py-1em px-2em cursor-pointer border-none rounded inline-block no-underline tracking-wider uppercase"
          >
            Connect with MyAnimeList
          </a>
        </div>
        <section class="shows pb-8 relative">
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap justify-between relative z-0 list-none"
          >
            <li
              v-for="anime in anime"
              :key="anime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <Anime2 :anime="anime" />
            </li>
          </ul>
        </section>
        <section class="highlights pb-6 relative block">
          <h2 class="tagline text-base tracking-wider mt-5 mb-2.5 uppercase">
            Animeboxd lets you...
          </h2>
          <ul class="highlights mb-5 flex flex-wrap justify-between">
            <li
              class="block mb-2.5 w-full border-none shadow-frame box-border bg-gray-highlights pt-4 px-5 pb-4 rounded-sm text-white relative -top-1 flex"
            >
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#98aabb"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
              <p class="text-gray-primary ml-3 py-auto text-base text-left flex items-center">
                Keep track of all the anime you've ever watched or just start from the day you join.
              </p>
            </li>
            <li
              class="block mb-2.5 w-full border-none shadow-frame box-border bg-gray-highlights pt-4 px-5 pb-4 rounded-sm text-white relative -top-1 flex"
            >
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="#98aabb"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="text-gray-primary ml-3 py-auto text-base text-left flex items-center">
                View and edit your MyAnimeList lists.
              </p>
            </li>
            <li
              class="block mb-2.5 w-full border-none shadow-frame box-border bg-gray-highlights pt-4 px-5 pb-4 rounded-sm text-white relative -top-1 flex"
            >
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="#98aabb"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
              <p class="text-gray-primary ml-3 py-auto text-base text-left flex items-center">
                Read reviews and find out about the best new anime.
              </p>
            </li>
          </ul>
        </section>
        <section class="anime-list relative pb-2">
          <h2
            class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
          >
            This Seasons Anime...
          </h2>
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap justify-between relative z-0 list-none"
          >
            <li
              v-for="seasonAnime in seasonAnime.splice(0, 5)"
              :key="seasonAnime.node.id"
              className="bottom-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <Anime2 :anime="seasonAnime" />
            </li>
          </ul>
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap justify-between relative z-0 list-none"
          >
            <li
              v-for="seasonAnime in seasonAnime"
              :key="seasonAnime.node.id"
              className="bottom-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <Anime2 :anime="seasonAnime" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/header/Header.vue';
import Backdrop from '../components/home/Backdrop.vue';
import Anime2 from '../components/home/Anime2.vue';
import Anime from '../types/Anime';

export default defineComponent({
  components: { Header, Backdrop, Anime2 },
  setup() {
    let bgArray: [];
    const animeBackground = ref<string>('');
    const anime = ref<Anime[] | null>(null);
    const seasonAnime = ref<Anime[]>([]);

    const fetchTopAiringAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/anime/top-airing`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        anime.value = jsonObj.data.slice(0, 6);
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchTopAiringAnime();

    const fetchThisSeasonAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/anime/winter`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        seasonAnime.value = jsonObj.data;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchThisSeasonAnime();

    const getHomeBG = async () => {
      try {
        await fetch(`${process.env.VUE_APP_BACKEND_URL}/movieAPI/bg`)
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((data) => {
            bgArray = data.map((a: any) => a.backdrop_path);
          });
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
      const animeBackgroundUrl = await bgArray[Math.floor(Math.random() * bgArray.length)];
      animeBackground.value = `https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${animeBackgroundUrl}`;
    };

    getHomeBG();

    return { anime, seasonAnime, animeBackground };
  }
});
</script>
