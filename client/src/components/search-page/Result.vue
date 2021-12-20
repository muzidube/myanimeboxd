<template>
  <div class="float-left bg-black shadow rounded overflow-hidden relative">
    <div class="">
      <img
        class="result-image rounded block w-80px"
        :src="anime.node.main_picture.medium"
        :alt="anime.node.title"
      />
      <a
        class="frame z-1 bg-clip-padding bg-frame-gradient bg-no-repeat bg-frame rounded-lg shadow-frame box-border block h-full left-0 overflow-hidden absolute right-0 top-0 whitespace-nowrap"
      />
    </div>
  </div>
  <div class="anime-details ml-24 w-auto float-none">
    <h2 class="font-garamond font-normal text-2xl text-white leading-5 h-auto">
      <span class="mr-1">
        <router-link :to="'/anime/' + anime.node.id + '/' + anime.node.title">
          <h1
            class="anime-title text-2xl mb-1 text-white font-garamond font-extrabold leading-none"
          >
            {{ anime.node.title }}
          </h1>
        </router-link>
        <p class="mr-2 font-quicksand text-base text-gray-text">
          {{ anime.node.start_season.year }}
        </p>
      </span>
    </h2>
    <div class="-mt-4 overflow-hidden text-base leading-6 font-garamond font-semibold">
      <div
        v-if="anime.node.synopsis.length > 200"
        :class="`short-synopsis${anime.node.id} block flex`"
      >
        <p>
          {{ anime.node.synopsis.substring(0, 200) }}
          <button class="font-black text-gray-text2" @click="toggleSynopsis">...more</button>
        </p>
      </div>
      <div
        v-if="anime.node.synopsis.length > 200"
        :class="`full-synopsis${anime.node.id} block hidden`"
      >
        <p>
          {{ anime.node.synopsis }}
          <button class="font-black text-gray-text2" @click="toggleSynopsis">...less</button>
        </p>
      </div>
      <div v-if="anime.node.synopsis.length < 200" :class="`full-synopsis${anime.node.id} block`">
        <p>
          {{ anime.node.synopsis }}
        </p>
      </div>
    </div>
    <p class="release-year text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider">Studio</p>
    <div class="anime-studio text-base leading-5 mb-1 font-black capitalize">
      {{ anime.node.studios[0].name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: ['anime'],
  setup(props) {
    const toggleSynopsis = () => {
      const shortSynopsis = document.querySelector(`.short-synopsis${props.anime.node.id}`) || null;
      const fullSynopsis = document.querySelector(`.full-synopsis${props.anime.node.id}`) || null;

      if (fullSynopsis && shortSynopsis && fullSynopsis.classList.contains('hidden')) {
        shortSynopsis.classList.add('hidden');
        fullSynopsis.classList.remove('hidden');
      } else if (fullSynopsis && shortSynopsis && shortSynopsis.classList.contains('hidden')) {
        shortSynopsis.classList.remove('hidden');
        fullSynopsis.classList.add('hidden');
      }
    };

    return { toggleSynopsis };
  }
});
</script>
