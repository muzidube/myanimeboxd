<template>
  <li
    className="media-item h-auto my-0 ml-2% mb-2% md:ml-2.5 w-23% md:w-150px bg-black-background mt-0 border-none shadow-none rounded-lg overflow-hidden relative flex flex-wrap content-start whitespace-nowrap"
  >
    <!-- <Link to={`/Movie/${id}/${title}`}> -->
    <div
      className="image shadow-md rounded-lg w-full h-full md:h-225px overflow-hidden bg-black-background whitespace-nowrap"
    >
      <div className="wrapper w-full h-full relative top-0 left-0 inline-block whitespace-nowrap">
        <p className="image inline-block w-full h-full whitespace-nowrap" title="{title}">
          <img
            className="poster inline-block w-full h-full outline-none border-none
          bg-black-background"
            onError="{addDefaultSrc}"
            src="https://image.tmdb.org/t/p/w500/t/p/w220_and_h330_face/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg"
            alt="{title}"
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
  </li>
</template>

<script>
export default {};
</script>

<style></style>
