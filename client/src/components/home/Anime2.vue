<template>
  <router-link :to="'/anime/' + anime.node.id + '/' + anime.node.title">
    <!-- <Link to={`/Movie/${id}/${title}`}> -->
    <div
      className="image shadow-md rounded-lg w-full h-full md:h-225px overflow-hidden bg-black-background whitespace-nowrap"
    >
      <div className="wrapper w-full h-full relative top-0 left-0 inline-block whitespace-nowrap">
        <p className="image inline-block w-full h-full whitespace-nowrap" :title="anime.node.title">
          <img
            className="poster inline-block w-full h-full outline-none border-none
          bg-black-background"
            onError="{addDefaultSrc}"
            :src="anime.node.main_picture.medium"
            :alt="anime.node.title"
          />
          <a
            class="frame z-1 bg-clip-padding bg-frame-gradient bg-no-repeat bg-frame rounded-lg shadow-frame box-border block h-full left-0 overflow-hidden absolute right-0 top-0 whitespace-nowrap"
          />
        </p>
      </div>
    </div>
    <!-- </Link> -->
    <!-- <div
      className="movie-info pt-6 pb-0 px-2.5 relative whitespace-normal grid content-start w-full"
    >
      <Link to={`/Movie/${id}/${title}`}>
      <h2 className="m-0 p-0 w-full font-bold break-words text-1em no-underline">Arcane</h2>
      </Link>
      <p className="release-date m-0 p-0 whitespace-normal font-normal">20-10-22</p>
    </div> -->
  </router-link>
</template>

<script>
export default {
  props: ['anime']
};
</script>

<style></style>
