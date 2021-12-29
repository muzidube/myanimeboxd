<template>
  <Header />
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
            Connecting to your MyAnimeList account...
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/header/Header.vue';
import User from '../types/User';

export default defineComponent({
  components: { Header },
  setup() {
    const user = ref<User | null>(null);
    const verifier = localStorage.getItem('mal-verifier');

    const getUser = async () => {
      try {
        const url1 = window.location.href.split('code=');

        if (url1.length === 2 && localStorage.getItem('mal-verifier')) {
          const url2 = url1[1].split('&');
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/user/${url2[0]}/${verifier}`
          );
          if (!response.ok) {
            throw Error('No user data available');
          }
          const json = await response.json();
          user.value = json;
          localStorage.setItem('user', JSON.stringify(json));
          window.open('http://localhost:8080/', '_self');
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    getUser();

    return { user };
  }
});
</script>
