<template>
  <form
    className="anime-searchbar-form bg-black-background h-auto mx-auto z-40 absolute pb-1 top-10 right-1.5 left-1.5 box-border text-black w-full items-center box-border lg:w-1200px"
    @submit="onSubmit"
  >
    <fieldset class="p-4">
      <label className="box-border text-black" for="search">
        <input
          class="search w-full h-9 leading-10 text-1.1em text-black border-none rounded-3xl px-5 py-2.5 shadow box-border focus:outline-none"
          dir="auto"
          name="query"
          type="text"
          tabIndex="1"
          autoCorrect="on"
          autoComplete="on"
          spellCheck="false"
          placeholder="Search..."
          :value="searchQuery"
          @change="changeHandler"
        />
      </label>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const searchQuery = ref<string>();
    const router = useRouter();

    const changeHandler = (e: any) => {
      e.preventDefault();
      searchQuery.value = e.target.value;
    };

    const onSubmit = (e: any) => {
      e.preventDefault();
      router.push(`/search/anime/${searchQuery.value}`);
    };

    return { searchQuery, changeHandler, onSubmit };
  }
});
</script>
