<template>
  <li
    v-for="anime in anime"
    :key="anime.node.id"
    className="media-item h-full min-h-full my-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
  >
    <AnimeItem :anime="anime" />
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Anime from '../../types/Anime';
import AnimeItem from './AnimeItem.vue';

export default defineComponent({
  components: { AnimeItem },
  props: ['anime']
});
</script>
