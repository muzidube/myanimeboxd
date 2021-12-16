<template>
  <div class="backdrop-container h-full w-auto mx-auto lg:w-950px z-0">
    <div class="backdrop-wrapper h-full w-auto lg:w-950px absolute top-0 z-0">
      <img
        class="backdrop-image bg-home-hero bg-home-position absolute h-full w-full bg-hero-gradient"
        :src="anime[1].node.main_picture.large"
        :alt="anime[0].node.title"
      />
      <div
        class="backdrop-image bg-home-hero bg-home-position left-0 top-0 bg-no-repeat absolute h-full w-full bg-hero-gradient1"
      />
      <div
        class="backdrop-image bg-home-hero bg-home-position left-0 top-0 bg-no-repeat absolute h-full w-full bg-hero-gradient2"
      />
      <div
        class="backdrop-image bg-home-hero bg-home-position left-0 top-0 bg-no-repeat absolute h-full w-full bg-hero-gradient3"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['anime']
};
</script>

<style></style>
