<template>
  <Header />
  <div>
    <div class="content pt-4 pb-10">
      <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 lg:px-0 lg:w-950px text-left">
        <div class="overflow-visible">
          <span class="block" />
          <section class="py-0 float-none w-auto overflow-visible relative block">
            <span class="block" />
            <h2
              class="results-number tracking-wide border-b border-gray-highlights mb-3 pb-1 uppercase"
            >
              {{ type.replace(/_/g, ' ').replace(/-/g, ' ') }}
            </h2>
          </section>
          <section class="anime-list relative pb-2">
            <ul
              class="anime-list overflow-hidden h-full -ml-2% flex flex-wrap relative z-0 list-none"
            >
              <li
                v-for="listAnime in listAnime"
                :key="listAnime.node.id"
                className="media-item block mt-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background border-none shadow-none rounded-lg overflow-hidden relative content-start whitespace-nowrap"
              >
                <AnimeItem :anime="listAnime" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/header/Header.vue';
import AnimeItem from '../components/home/AnimeItem.vue';
import Anime from '../types/Anime';

export default defineComponent({
  components: { Header, AnimeItem },
  props: ['anime'],
  setup(props) {
    const listAnime = ref<Anime[] | null>(null);
    const route = useRoute();

    const { type } = route.params;
    listAnime.value = JSON.parse(props.anime);

    return { type, listAnime };
  }
});
</script>
