<template>
  <header class="h-10 bg-black-background py-0 px-1.5 z-50 relative">
    <div class="container mx-auto max-w-screen-lg h-full">
      <div class="flex justify-between h-full px-5">
        <div class="text-gray-700 text-center flex items-center align-items cursor-pointer">
          <h1 class="flex justify-center w-full">
            <router-link :to="'/'">
              <p class="font-comfortaa text-2em text-center text-white my-auto">a</p>
            </router-link>
          </h1>
        </div>
        <div class="text-gray-700 text-center flex items-center align-items">
          <div v-if="user" class="flex">
            <button
              type="button"
              class="font-bold text-sm rounded text-white w-20 h-8"
              @click="handleLogout"
            >
              Sign Out
            </button>
            <div class="flex items-center cursor-pointer text-black">
              <router-link
                :to="'/profile/' + user.id + '/' + user.username"
                class="min-w-28px min-h-28px"
              >
                <span class="min-w-28px w-28px h-28px box-border text-white">
                  <div class="block m-0 w-full h-full">
                    <span
                      class="w-full h-full inline-flex flex-nowrap items-center justify-center text-lg rounded-50% bg-green-animeboxd"
                    >
                      {{ user.username.charAt(0).toUpperCase() }}
                    </span>
                  </div>
                </span>
              </router-link>
            </div>
          </div>

          <div v-if="!user" class="h-full flex items-center">
            <button
              type="button"
              class="font-bold text-sm rounded text-white w-20 h-full"
              @click="saveVerifier"
            >
              Log In
            </button>
            <a
              href="https://myanimelist.net/register.php?from=%2F"
              class="font-bold text-sm rounded text-white w-20 h-full flex flex-col justify-center"
              target="_blank"
            >
              Sign Up
            </a>
          </div>
          <div class="h-full flex items-center">
            <button
              type="button"
              class="font-bold text-sm rounded text-white w-auto h-auto ml-3 mb-1"
              @click="toggleSearchBar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
    <SearchBar />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchBar from './SearchBar.vue';
import isUser from '../../context/user';
import User from '../../types/User';

export default defineComponent({
  components: { SearchBar },
  props: ['loginUrl', 'verifier'],
  setup(props) {
    const router = useRouter();
    const userCheck = ref(false);
    const user = ref<User | null>(null);

    const toggleSearchBar = () => {
      const searchBar = document.querySelector('.anime-searchbar-form') || null;

      if (searchBar && !searchBar.classList.contains('visible')) {
        searchBar.classList.add('visible');
      } else if (searchBar && searchBar.classList.contains('visible')) {
        searchBar.classList.remove('visible');
      }
    };
    isUser(userCheck);
    if (userCheck.value) {
      user.value = JSON.parse(localStorage.getItem('user') || '{}');
    }

    const saveVerifier = () => {
      if (localStorage.getItem('mal-verifier')) {
        localStorage.removeItem('mal-verifier');
        localStorage.setItem('mal-verifier', props.verifier);
      } else {
        localStorage.setItem('mal-verifier', props.verifier);
      }
      window.open(props.loginUrl, '_self');
    };

    const handleLogout = () => {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        localStorage.removeItem('mal-verifier');
      }
      router.push('/');
    };

    return { toggleSearchBar, userCheck, user, saveVerifier, handleLogout };
  }
});
</script>

<style></style>
