<template>
  <Header />
  <Backdrop :animeBackground="animeBackground" />

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
import Backdrop from '../components/home/Backdrop.vue';
import User from '../types/User';

export default defineComponent({
  components: { Header, Backdrop },
  setup() {
    let bgArray: [];
    const user = ref<User | null>(null);
    const animeBackground = ref<string>('');
    const verifier = localStorage.getItem('mal-verifier');

    console.log('Access Token: ', localStorage.getItem('mal-access-token'));

    const updateUserValues = async () => {
      try {
        if (localStorage.getItem('mal-access-token')) {
          const token = localStorage.getItem('mal-access-token');
          const userResponse = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/anime/user-details/${token}`
          );

          if (!userResponse.ok) {
            throw Error('No user data available');
          }
          const jsonUser = await userResponse.json();
          const jsonObjUser = await JSON.parse(jsonUser);
          console.log('jsonObjUser', userResponse);
          // if (localStorage.getItem('mal-user-id')) {
          //   localStorage.removeItem('mal-user-id');
          //   localStorage.setItem('mal-user-id', jsonObjUser.id);
          // } else {
          //   localStorage.setItem('mal-user-id', jsonObjUser.id);
          // }
          // if (localStorage.getItem('mal-user-username')) {
          //   localStorage.removeItem('mal-user-username');
          //   localStorage.setItem('mal-user-username', jsonObjUser.name);
          // } else {
          //   localStorage.setItem('mal-user-username', jsonObjUser.name);
          // }

          // if (localStorage.getItem('mal-user-username')) {
          //   console.log('mal-user-username');
          // }
        }

        // const userValues = {
        //   id: jsonObjUser.id,
        //   username: jsonObjUser.name,
        //   access_token: jsonObj.access_token,
        //   refresh_token: jsonObj.refresh_token
        // };

        // user.value = userValues;

        // console.log('jabroni');
        // console.log('userValues: ', userValues);

        //   window.open('http://localhost:8080', '_self');
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    // const getUser = async () => {
    //   try {
    //     const url1 = window.location.href.split('code=');

    //     if (url1.length === 2 && localStorage.getItem('mal-verifier')) {
    //       const url2 = url1[1].split('&');
    //       const response = await fetch(
    //         `${process.env.VUE_APP_BACKEND_URL}/anime/${url2[0]}/${verifier}`
    //       );
    //       if (!response.ok) {
    //         throw Error('No user data available');
    //       }
    //       const json = await response.json();
    //       const jsonObj = await JSON.parse(json);
    //       console.log('jsonObj', jsonObj);
    //       if (localStorage.getItem('mal-access-token')) {
    //         localStorage.removeItem('mal-access-token');
    //         localStorage.setItem('mal-access-token', jsonObj.access_token);
    //       } else {
    //         localStorage.setItem('mal-access-token', jsonObj.access_token);
    //       }
    //       if (localStorage.getItem('mal-refresh-token')) {
    //         localStorage.removeItem('mal-refresh-token');
    //         localStorage.setItem('mal-refresh-token', jsonObj.refresh_token);
    //       } else {
    //         localStorage.setItem('mal-refresh-token', jsonObj.refresh_token);
    //       }
    //       if (localStorage.getItem('mal-refresh-token')) {
    //         localStorage.removeItem('mal-refresh-token');
    //         localStorage.setItem('mal-refresh-token', jsonObj.refresh_token);
    //       } else {
    //         localStorage.setItem('mal-refresh-token', jsonObj.refresh_token);
    //       }

    //       updateUserValues();
    //     }
    //   } catch (error) {
    //     error.value = error.message;
    //     console.log('Error: ', error.value);
    //   }
    // };

    // getUser();

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

    const test = async () => {
      try {
        if (localStorage.getItem('mal-access-token')) {
          const token = localStorage.getItem('mal-access-token');
          console.log('token: ', token);
          const userResponse = await fetch(
            `${process.env.VUE_APP_BACKEND_URL}/anime/user-details/${token}`
          );

          if (!userResponse.ok) {
            throw Error('No user data available');
          }
          const jsonUser = await userResponse.json();
          const jsonObjUser = await JSON.parse(jsonUser);
          console.log('jsonObjUser', jsonObjUser);
        }
      } catch (error) {
        error.value = error.message;
        console.log('Error: ', error.value);
      }
    };

    test();

    return { animeBackground, user };
  }
});
</script>
