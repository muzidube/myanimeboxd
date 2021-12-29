<template>
  <Header />
  <div class="content pt-4 pb-10">
    <div class="content-wrap relative py-0 w-auto my-0 mx-auto px-4 lg:px-0 lg:w-950px text-left">
      <section class="profile-header mb-0 overflow-hidden block">
        <div class="profile-summary mb-12 relative">
          <div class="mobile-group flex items-end justify-center mb-3">
            <div class="profile-avatar self-start -mb-3 w-100px h-100px">
              <span class="h-full w-full flex float-none mr-0 relative bg-clip-padding">
                <span class="float-left pt-full" />
                <img
                  src="../../public/images/animeboxd-user.png"
                  class="h-full object-cover absolute w-full rounded-50% block overflow-hidden"
                  alt="thing "
                />
                <span
                  class="rounded-50% border border-gray-text box-border h-full left-0 absolute top-0 whitespace-nowrap w-full"
                />
              </span>
            </div>
            <div class="profile-name pl-4">
              <div class="profile-name-wrap mb-0">
                <h1
                  class="whitespace-normal inline-block font-quicksand mr-1 max-w-450px overflow-hidden py-2 text-ellipsis align-middle text-2xl text-white font-bold"
                >
                  mzymandias
                </h1>
              </div>
              <div
                class="mal-profile-button visible overflow-hidden whitespace-nowrap w-full text-xs"
              >
                <button
                  class="text-center py-2 px-3 visible whitespace-nowrap uppercase bg-gray-button text-white border-none rounded shadow-profilePic tracking-wide font-bold"
                >
                  View on MAL
                </button>
              </div>
            </div>
          </div>
          <div class="profile-info mt-8">
            <div class="flex flex-wrap justify-center my-3 flex-start px-2">
              <router-link :to="'/list/' + user.id + '/' + user.username + '/watching'">
                <h4 class="max-w-6em min-w-thing grow my-3 text-center pl-6">
                  <a href="" class="text-gray-button no-underline">
                    <span class="text-gray-off block text-xl">{{
                      userDetails?.anime_statistics.num_items_watching
                    }}</span>
                    <span class="text-gray-button block text-xs uppercase tracking-wide"
                      >Watching</span
                    >
                  </a>
                </h4>
              </router-link>
              <router-link :to="'/list/' + user.id + '/' + user.username + '/completed'">
                <h4
                  class="max-w-6em min-w-thing grow my-3 text-center pl-6 bg-profile-stat bg-stat-size bg-stat-position bg-repeat-y"
                >
                  <a href="" class="text-gray-button no-underline">
                    <span class="text-gray-off block text-xl">{{
                      userDetails?.anime_statistics.num_items_completed
                    }}</span>
                    <span class="text-gray-button block text-xs uppercase tracking-wide"
                      >Completed</span
                    >
                  </a>
                </h4>
              </router-link>
              <router-link :to="'/list/' + user.id + '/' + user.username + '/on_hold'">
                <h4
                  class="max-w-6em min-w-thing grow my-3 text-center pl-6 bg-profile-stat bg-stat-size bg-stat-position bg-repeat-y"
                >
                  <a href="" class="text-gray-button no-underline">
                    <span class="text-gray-off block text-xl">{{
                      userDetails?.anime_statistics.num_items_on_hold
                    }}</span>
                    <span class="text-gray-button block text-xs uppercase tracking-wide"
                      >On Hold</span
                    >
                  </a>
                </h4>
              </router-link>
              <router-link :to="'/list/' + user.id + '/' + user.username + '/dropped'">
                <h4
                  class="max-w-6em min-w-thing grow my-3 text-center pl-6 xs:bg-profile-stat xs:bg-stat-size xs:bg-stat-position xs:bg-repeat-y"
                >
                  <a href="" class="text-gray-button no-underline">
                    <span class="text-gray-off block text-xl">{{
                      userDetails?.anime_statistics.num_items_dropped
                    }}</span>
                    <span class="text-gray-button block text-xs uppercase tracking-wide"
                      >Dropped</span
                    >
                  </a>
                </h4>
              </router-link>
              <router-link :to="'/list/' + user.id + '/' + user.username + '/plan_to_watch'">
                <h4
                  class="max-w-6em min-w-thing grow my-3 text-center pl-6 bg-profile-stat bg-stat-size bg-stat-position bg-repeat-y"
                >
                  <a href="" class="text-gray-button no-underline">
                    <span class="text-gray-off block text-xl">{{
                      userDetails?.anime_statistics.num_items_plan_to_watch
                    }}</span>
                    <span class="text-gray-button block text-xs uppercase tracking-wide"
                      >Planned</span
                    >
                  </a>
                </h4>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/header/Header.vue';
import isUser from '../context/user';
import User from '../types/User';
import UserDetails from '../types/UserDetails';

export default defineComponent({
  components: { Header },
  setup() {
    const userCheck = ref(false);
    const user = ref<User | null>(null);
    const userDetails = ref<UserDetails>();

    isUser(userCheck);
    if (userCheck.value) {
      user.value = JSON.parse(localStorage.getItem('user') || '{}');
    }

    const fetchUserDetails = async () => {
      try {
        if (user.value?.access_token) {
          const response = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/user/${user.value?.access_token}`
          );
          if (!response.ok) {
            throw Error('No data available');
          }
          const json = await response.json();
          const jsonObj = await JSON.parse(json);
          userDetails.value = jsonObj;
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    fetchUserDetails();

    return { user, userDetails };
  }
});
</script>
