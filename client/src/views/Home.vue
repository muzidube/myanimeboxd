<template>
  <Header />
  <div class="site-body">
    <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 md:px-0 md:w-950px font-normal">
      <div class="homepage-welcome mb-14 -mt-14 text-left text-xl">
        <div class="welcome mb-14 -mt-14 text-center">
          <h2 class="text-1.5em font-bold leading-none w-full m-0 p-0 box-border text-white">
            Animeboxd
          </h2>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">
            Connect with MyAnimeList.
          </h3>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">
            Track anime you've watched.
          </h3>
          <h3 class="text-1em font-semibold m-0 p-0 box-border text-white">The modern way.</h3>
          <a
            class="login-link mb-14 mt-14 bg-green-primary text-white text-sm py-1em px-2em cursor-pointer border-none rounded inline-block no-underline tracking-wider uppercase"
            >Connect with MyAnimeList</a
          >
        </div>
        <section class="shows pb-8 relative">
          <ul class="overflow-hidden -ml-2% flex flex-wrap justify-between relative z-0 list-none">
            <Show />
            <Show />
            <Show />
            <Show />
          </ul>
        </section>
        <section class="highlights pb-14 relative block">
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
              <p class="text-gray-primary ml-3 py-auto text-base text-left">
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
              <p class="text-gray-primary ml-3 py-auto text-base text-left">
                Show some love for your favourite anime with a "like".
              </p>
            </li>
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
              <p class="text-gray-primary ml-3 py-auto text-base text-left">
                Keep track of all the anime you've ever watched or just start from the day you join.
              </p>
            </li>
          </ul>
        </section>
        <section class="anime-list relative pb-9">
          <h2
            class="section-heading tracking-wider border-b border-gray-highlights mb-2.5 pb-1.5 uppercase text-base"
          >
            Just Reviewed...
          </h2>
          <ul class="overflow-hidden -ml-2% flex flex-wrap justify-between relative z-0 list-none">
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
          </ul>
        </section>
      </div>
    </div>
    <h1>Can this just fucking work?</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Header from '../components/Header.vue';
import Show from '../components/home/Show.vue';

export default defineComponent({
  components: { Header, Show },
  setup() {
    const state = reactive({
      name: 'Link',
      age: 25
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>
