<template>
  <Header :loginUrl="loginUrl" :verifier="verifier" />
  <Backdrop :animeBackground="animeBackground" />

  <div class="site-body pt-15%">
    <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 lg:px-0 lg:w-950px font-normal">
      <div class="homepage-welcome mb-8 mt-18% text-left text-xl">
        <div v-if="!user" class="welcome mb-0 mt-18% text-center">
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
          <button
            class="login-link mb-14 mt-14 bg-green-animeboxd text-white text-sm py-1em px-2em cursor-pointer border-none rounded inline-block no-underline tracking-wider uppercase"
            @click="saveVerifier"
          >
            Connect with MyAnimeList
          </button>
        </div>
        <div v-if="user" class="welcome mb-0 mt-18% text-center">
          <h1
            class="text-2xl leading-none w-full m-0 p-0 mb-8 box-border text-white font-comfortaa"
          >
            Welcome back, {{ user.username }}.
          </h1>
        </div>
        <section v-if="user" class="anime-list relative pb-2">
          <router-link
            :to="{
              name: 'Standard-List',
              params: { anime: JSON.stringify(suggestedAnime), type: 'suggestions' }
            }"
          >
            <h2
              class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
            >
              Suggested Anime...
            </h2>
          </router-link>
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none justify-center"
          >
            <li
              v-for="suggestedAnime in suggestedAnime.slice(0, 6)"
              :key="suggestedAnime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% xm:ml-2.5 w-23% ms:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <AnimeItem :anime="suggestedAnime" />
            </li>
          </ul>
        </section>
        <section class="anime-list relative pb-2">
          <router-link
            :to="{
              name: 'Standard-List',
              params: { anime: JSON.stringify(popularAnime), type: 'most-popular' }
            }"
          >
            <h2
              class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
            >
              Most Popular Anime...
            </h2>
          </router-link>
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none justify-center"
          >
            <li
              v-for="popularAnime in popularAnime.slice(0, 6)"
              :key="popularAnime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% xm:ml-2.5 w-23% ms:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <AnimeItem :anime="popularAnime" />
            </li>
          </ul>
        </section>
        <section class="shows pb-8 relative">
          <router-link
            :to="{
              name: 'Standard-List',
              params: { anime: JSON.stringify(anime), type: 'top-airing' }
            }"
          >
            <h2
              class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
            >
              Top Airing Anime...
            </h2>
          </router-link>
          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none justify-center"
          >
            <li
              v-for="topAiringAnime in topAiringAnime.slice(0, 6)"
              :key="topAiringAnime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% xm:ml-2.5 w-23% ms:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <AnimeItem :anime="topAiringAnime" />
            </li>
          </ul>
        </section>
        <section v-if="!user" class="highlights pb-6 relative block">
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
          <router-link
            :to="{
              name: 'Standard-List',
              params: { anime: JSON.stringify(seasonAnime), type: 'this-season' }
            }"
          >
            <h2
              class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
            >
              This Seasons Anime...
            </h2>
          </router-link>

          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none justify-center"
          >
            <li
              v-for="seasonAnime in seasonAnime.slice(0, 6)"
              :key="seasonAnime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% xm:ml-2.5 w-23% ms:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <AnimeItem :anime="seasonAnime" />
            </li>
          </ul>
        </section>
        <section class="anime-list relative pb-2">
          <router-link
            :to="{
              name: 'Standard-List',
              params: { anime: JSON.stringify(topRatedAnime), type: 'top-rated' }
            }"
          >
            <h2
              class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
            >
              Top Rated Anime...
            </h2>
          </router-link>

          <ul
            class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none justify-center"
          >
            <li
              v-for="topRatedAnime in topRatedAnime.slice(0, 6)"
              :key="topRatedAnime.node.id"
              className="top-row-anime media-item h-full min-h-full my-0 ml-2% mb-2% xm:ml-2.5 w-23% ms:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
            >
              <AnimeItem :anime="topRatedAnime" />
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
import AnimeItem from '../components/home/AnimeItem.vue';
import Anime from '../types/Anime';
import { verifier } from '../code-thing';
import isUser from '../context/user';
import User from '../types/User';

export default defineComponent({
  components: { Header, Backdrop, AnimeItem },
  setup() {
    const suggestedAnime = ref<Anime[] | null>(null);
    const popularAnime = ref<Anime[] | null>(null);
    const topAiringAnime = ref<Anime[] | null>(null);
    const topRatedAnime = ref<Anime[] | null>(null);
    const seasonAnime = ref<Anime[] | null>(null);

    const loginUrl = ref<string | null>(null);
    const userCheck = ref(false);
    const user = ref<User | null>(null);

    let bgArray: [];
    const animeBackground = ref<string>('');

    isUser(userCheck);
    if (userCheck.value) {
      user.value = JSON.parse(localStorage.getItem('user') || '{}');
    }
    const fetchSuggestedAnime = async () => {
      try {
        if (user.value!.access_token) {
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/suggested/${user.value!.access_token}`
          );
          if (!response.ok) {
            throw Error('No data available');
          }
          const json = await response.json();
          const jsonObj = await JSON.parse(json);
          suggestedAnime.value = jsonObj.data;
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchSuggestedAnime();

    const fetchMostPopularAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/most-popular`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        popularAnime.value = jsonObj.data;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchMostPopularAnime();

    const fetchTopAiringAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/top-airing`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        topAiringAnime.value = jsonObj.data;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchTopAiringAnime();

    const fetchTopRatedAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/top-all`);
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        topRatedAnime.value = jsonObj.data;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchTopRatedAnime();

    const fetchThisSeasonAnime = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/winter`);
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

    loginUrl.value = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${process.env.VUE_APP_X_MAL_CLIENT_ID}&code_challenge=${verifier}&state=RequestID42`;

    const saveVerifier = () => {
      if (localStorage.getItem('mal-verifier')) {
        localStorage.removeItem('mal-verifier');
        localStorage.setItem('mal-verifier', verifier);
      } else {
        localStorage.setItem('mal-verifier', verifier);
      }
      window.open(loginUrl.value!, '_self');
    };

    return {
      suggestedAnime,
      popularAnime,
      topAiringAnime,
      topRatedAnime,
      seasonAnime,
      animeBackground,
      loginUrl,
      saveVerifier,
      user,
      verifier
    };
  }
});
</script>
