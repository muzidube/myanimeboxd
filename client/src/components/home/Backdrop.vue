<template>
  <div
    class="backdrop-container h-0 top-10 left-0 overflow-hidden pt-56.25% w-full absolute mx-auto z-0 lg:h-675px"
  >
    <div
      class="backdrop-wrapper h-0 left-0 overflow-hidden pt-56.25% absolute top-0 z-0 lg:h-675px w-1280px lg:left-2/4 lg:transform lg:-translate-x-2/4"
    >
      <img
        class="backdrop-image bg-home-hero bg-home-position left-0 top-0 absolute h-950px w-full lg:h-720px"
        :src="'https://image.tmdb.org/t/p/w1280_and_h720_multi_faces' + selectBG"
        :alt="selectBG.value"
      />
      <span class="bg-hero-gradient1 bottom-0 block left-0 absolute top-0 w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectBG']
};
</script>

<style></style>
