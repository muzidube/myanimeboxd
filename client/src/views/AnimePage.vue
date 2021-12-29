<template>
  <Header />
  <div v-if="anime">
    <Backdrop :animeBackground="anime.main_picture.large" />
    <span
      class="bg-hero-gradient5 bottom-0 block left-0 absolute top-0 w-full lg:h-675px lg:left-2/4 lg:transform lg:-translate-x-2/4"
    />

    <span class="block pt-50% w-full sm:pt-80" />
    <div
      class="content-wrap relative py-0 px-4 w-auto my-0 mx-auto text-left bg-black-background lg:w-950px"
    >
      <div class="anime-page-wrapper overflow-visible">
        <span class="block" />
        <div class="inline overflow-visible sm:flex sm:float-right">
          <span class="block" />
          <section class="featured-anime-header mb-4 -mt-2 flex sm:block sm:w-2/6">
            <div
              class="anime-page-poster-wrap self-start order-2 overflow-visible w-2/6 min-w-120px sm:min-w-200px relative z-0"
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
              <h1
                class="anime-title text-2xl m-0 text-white font-garamond font-extrabold sm:hidden"
              >
                {{ anime.title }}
              </h1>
              <p
                class="release-year text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider sm:hidden"
              >
                <a>
                  {{ `${anime.start_season.year} ` }}
                </a>
                <span class="bullet">·</span>
                Studio
              </p>
              <div class="anime-studio text-base leading-5 mb-1 font-black capitalize sm:hidden">
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
          <section class="mobile-options sm:hidden">
            <section v-if="user" class="anime-user-options flex justify-around">
              <select
                name="Lists"
                @change="onChangeList($event)"
                class="form-control text-center flex justify-between min-w-90px whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic"
                :value="listValue || '0'"
              >
                <option value="0">Lists</option>
                <option value="watching">Watching</option>
                <option value="completed">Completed</option>
                <option value="on_hold">On Hold</option>
                <option value="dropped">Dropped</option>
                <option value="plan_to_watch">Planned</option>
                <option value="delete">Delete</option>
              </select>
              <select
                name="Score"
                @change="onChangeScore($event)"
                class="form-control text-center flex justify-between min-w-90px whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic"
                :value="scoreValue || '0'"
              >
                <option :value="0">Score</option>
                <option :value="10">10</option>
                <option :value="9">9</option>
                <option :value="8">8</option>
                <option :value="7">7</option>
                <option :value="6">6</option>
                <option :value="5">5</option>
                <option :value="4">4</option>
                <option :value="3">3</option>
                <option :value="2">2</option>
                <option :value="1">1</option>
              </select>
              <div
                class="episodes-watched text-left no-underline align-middle inline-block py-2 px-3 whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic h-10"
              >
                Eps:
                <input
                  type="text"
                  name="watched-episodes"
                  id="watched-episodes"
                  @change="onChangeEpisode($event)"
                  class="w-12 bg-gray-button text-right mr-1"
                  :value="episodeValue || null"
                />/
                <span class="m-0 p-0 whitespace-nowrap">{{ anime.num_episodes }}</span>
              </div>
            </section>
            <section v-if="user" class="submit-anime-info-button w-full">
              <button
                class="text-center py-2 px-3 w-full visible whitespace-nowrap uppercase bg-gray-button text-white border-none rounded shadow-profilePic tracking-wide font-bold mt-3"
                @click="submitAnimeInfo"
              >
                Submit
              </button>
              <p
                v-if="submitMessage"
                class="anime-submit-message text-white text-sm py-1em px-2em border-none rounded inline-block no-underline tracking-wider uppercase w-full text-center"
              >
                {{ submitMessage }}
              </p>
            </section>
            <section v-if="!user">
              <p
                class="anime-please-login-message text-white text-sm py-1em px-2em border-none rounded inline-block no-underline tracking-wider uppercase w-full text-center"
              >
                Please login to add anime to lists.
              </p>
            </section>
          </section>
          <section
            class="anime-synopsis float-none w-auto overflow-visible p-0 relative block sm:ml-10"
          >
            <span class="block" />
            <section class="block">
              <div class="mb-0 overflow-hidden text-base leading-6 font-garamond font-semibold">
                <div>
                  <h1
                    class="anime-title text-2xl m-0 text-white font-garamond font-extrabold h-full hidden sm:flex sm:items-center sm:m-0"
                  >
                    {{ anime.title }}
                  </h1>
                </div>
                <div class="flex items-center h-8">
                  <p
                    class="release-year text-sm leading-5 mt-1.5 mb-1 uppercase tracking-wider font-quicksand h-full hidden sm:flex sm:items-center sm:m-0 sm:text-base"
                  >
                    <a>
                      {{ `${anime.start_season.year} ` }}
                    </a>
                    <span class="bullet mx-3">·</span>
                    {{ anime.studios[0].name }}
                  </p>
                </div>
                <section class="normal-options hidden font-quicksand sm:block mb-2 max-w-600px">
                  <section v-if="user" class="anime-user-options flex justify-around">
                    <select
                      name="Lists"
                      @change="onChangeList($event)"
                      class="form-control text-center flex justify-between w-full mr-2 whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic"
                      :value="listValue || '0'"
                    >
                      <option value="0">Lists</option>
                      <option value="watching">Watching</option>
                      <option value="completed">Completed</option>
                      <option value="on_hold">On Hold</option>
                      <option value="dropped">Dropped</option>
                      <option value="plan_to_watch">Planned</option>
                      <option value="delete">Delete</option>
                    </select>
                    <select
                      name="Score"
                      @change="onChangeScore($event)"
                      class="form-control text-center flex justify-between w-full mx-2 whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic"
                      :value="scoreValue || '0'"
                    >
                      <option :value="0">Score</option>
                      <option :value="10">10</option>
                      <option :value="9">9</option>
                      <option :value="8">8</option>
                      <option :value="7">7</option>
                      <option :value="6">6</option>
                      <option :value="5">5</option>
                      <option :value="4">4</option>
                      <option :value="3">3</option>
                      <option :value="2">2</option>
                      <option :value="1">1</option>
                    </select>
                    <div
                      class="episodes-watched text-left no-underline align-middle inline-block py-2 px-3 whitespace-nowrap bg-gray-button text-white border-none rounded shadow-profilePic h-10 w-full ml-2"
                    >
                      Episodes:
                      <input
                        type="text"
                        name="watched-episodes"
                        id="watched-episodes"
                        @change="onChangeEpisode($event)"
                        class="w-12 bg-gray-button text-right mr-1"
                        :value="episodeValue || null"
                      />/
                      <span class="m-0 p-0 whitespace-nowrap">{{ anime.num_episodes }}</span>
                    </div>
                  </section>
                  <section v-if="user" class="submit-anime-info-button w-full">
                    <button
                      class="text-center py-2 px-3 w-full visible whitespace-nowrap uppercase bg-gray-button text-white border-none rounded shadow-profilePic tracking-wide font-bold mt-3"
                      @click="submitAnimeInfo"
                    >
                      Submit
                    </button>
                    <p
                      v-if="submitMessage"
                      class="anime-submit-message text-white text-sm py-1em px-2em border-none rounded inline-block no-underline tracking-wider uppercase w-full text-center"
                    >
                      {{ submitMessage }}
                    </p>
                  </section>
                  <section v-if="!user">
                    <p
                      class="anime-please-login-message text-white text-sm py-1em px-2em border-none rounded inline-block no-underline tracking-wider uppercase w-full text-center"
                    >
                      Please login to add anime to lists.
                    </p>
                  </section>
                </section>
                <h4 class="-mt-1 font-quicksand tracking-widest uppercase font-normal mb-1">
                  Synopsis
                </h4>
                <div v-if="anime.synopsis.length > 200" class="short-synopsis block flex sm:hidden">
                  <p>
                    {{ anime.synopsis.substring(0, 200) }}
                    <button class="font-black text-gray-text2" @click="toggleSynopsis">
                      ...more
                    </button>
                  </p>
                </div>
                <div
                  v-if="anime.synopsis.length > 200"
                  class="full-synopsis block hidden sm:hidden"
                >
                  <p>
                    {{ anime.synopsis }}
                    <button class="font-black text-gray-text2" @click="toggleSynopsis">
                      ...less
                    </button>
                  </p>
                </div>
                <div v-if="anime.synopsis.length < 200" class="full-synopsis block sm:hidden">
                  <p>
                    {{ anime.synopsis }}
                  </p>
                </div>
                <div class="full-synopsis block hidden sm:block max-w-600px">
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
import SubmitResponse from '../types/SubmitResponse';
import isUser from '../context/user';
import User from '../types/User';

export default defineComponent({
  components: { Header, Backdrop },
  setup() {
    const route = useRoute();

    const userCheck = ref(false);
    const user = ref<User | null>(null);
    const userAnimeInLists = ref<Anime[] | null>(null);
    const listValue = ref<string | null>(null);
    const scoreValue = ref<string | number | null>(null);
    const episodeValue = ref<string | number | null>(null);
    const submitMessage = ref<string | null>(null);
    const submitResponse = ref<SubmitResponse | null>(null);

    isUser(userCheck);
    if (userCheck.value) {
      user.value = JSON.parse(localStorage.getItem('user') || '{}');
    }

    const anime = ref<Anime | null>(null);

    const fetchSingleAnime = async () => {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_BACKEND_URL}/single/${route.params.id}`
        );
        if (!response.ok) {
          throw Error('No data available');
        }
        const json = await response.json();
        const jsonObj = await JSON.parse(json);
        anime.value = jsonObj;
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };
    fetchSingleAnime();

    const checkAnime = async () => {
      try {
        if (user.value?.access_token) {
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/check-lists/${user.value?.access_token}`
          );
          if (!response.ok) {
            throw Error('No data available');
          }
          const json = await response.json();
          const jsonObj = await JSON.parse(json);
          userAnimeInLists.value = jsonObj.data;
          if (jsonObj.data.filter((el: any) => el.node.id.toString() === route.params.id)[0]) {
            const animeShow = jsonObj.data.filter(
              (el: any) => el.node.id.toString() === route.params.id
            )[0];

            listValue.value = animeShow.list_status.status;
            scoreValue.value = animeShow.list_status.score;
            episodeValue.value = animeShow.list_status.num_episodes_watched;
          }
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    checkAnime();

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

    function onChangeList(e: any) {
      listValue.value = e.target.value;
    }
    function onChangeScore(e: any) {
      scoreValue.value = e.target.value;
    }
    function onChangeEpisode(e: any) {
      episodeValue.value = e.target.value;
    }

    const submitAnimeInfo = async () => {
      try {
        submitMessage.value = null;
        if (listValue.value === 'delete') {
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/user-anime/delete/${route.params.id}/${user.value?.access_token}`
          );
          if (!response.ok) {
            throw Error('No data available');
          }
          const json = await response.json();
          const jsonObj = await JSON.parse(json);
          submitResponse.value = jsonObj;
          submitMessage.value = 'Succesfully deleted.';
        } else if (listValue.value && scoreValue.value && episodeValue.value) {
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/user-anime/${route.params.id}/${user.value?.access_token}/${listValue.value}/${scoreValue.value}/${episodeValue.value}`
          );
          if (!response.ok) {
            throw Error('No data available');
          }
          const json = await response.json();
          const jsonObj = await JSON.parse(json);
          submitResponse.value = jsonObj;

          if (
            submitResponse.value?.status === listValue.value &&
            submitResponse.value?.score.toString() === scoreValue.value.toString() &&
            Number(episodeValue.value) >= submitResponse.value?.num_episodes_watched
          ) {
            submitMessage.value = 'Successfully updated list.';
          } else {
            submitMessage.value = 'Error updating list.';
          }
        } else {
          submitMessage.value = 'Please enter values for all options.';
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    return {
      anime,
      toggleSynopsis,
      onChangeList,
      onChangeScore,
      onChangeEpisode,
      listValue,
      scoreValue,
      episodeValue,
      submitAnimeInfo,
      submitMessage,
      user
    };
  }
});
</script>

<style></style>
