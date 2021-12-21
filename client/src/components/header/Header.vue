<template>
  <header className="h-10 bg-black-background py-0 px-1.5 z-50 relative">
    <div className="container mx-auto max-w-screen-lg h-full">
      <div className="flex justify-between h-full px-5">
        <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
          <h1 className="flex justify-center w-full">
            <router-link :to="'/'">
              <p className="font-comfortaa text-2em text-center text-white my-auto">a</p>
            </router-link>
          </h1>
        </div>
        <div className="text-gray-700 text-center flex items-center align-items">
          <!-- <div v-if="user">
                <button
                  type="button"
                  title="Sign Out"
                  className="font-bold text-sm rounded text-white w-20 h-8"
                  onClick={logout}
                >
                  Sign Out
                </button>
                <div className="flex items-center cursor-pointer text-black">
                  <router-link :to={`/p/${user.username}`} className="min-w-46px">
                    <span className="min-w-46px w-46px h-46px box-border text-white">
                      <div className="block m-0 w-full h-full">
                        <span className="w-full h-full inline-flex flex-nowrap items-center justify-center text-2em rounded-50% bg-red-tertiary">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </span>
                  </router-link>
                </div>
              </div> -->

          <div class="h-full flex items-center">
            <!-- <router-link :to={ROUTES.LOGIN}> -->
            <button type="button" class="font-bold text-sm rounded text-white w-20 h-full">
              Log In
            </button>
            <!-- </router-link> -->
            <!-- <router-link :to={ROUTES.SIGN_UP}> -->
            <button type="button" class="font-bold text-sm rounded text-white w-20 h-full">
              Sign Up
            </button>
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
import { defineComponent } from 'vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  components: { SearchBar },
  setup() {
    const toggleSearchBar = () => {
      const searchBar = document.querySelector('.anime-searchbar-form') || null;

      if (searchBar && !searchBar.classList.contains('visible')) {
        searchBar.classList.add('visible');
      } else if (searchBar && searchBar.classList.contains('visible')) {
        searchBar.classList.remove('visible');
      }
    };
    return { toggleSearchBar };
  }
});
</script>

<style></style>
