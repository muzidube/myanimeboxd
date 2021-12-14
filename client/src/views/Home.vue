<template>
  <Header />
  <div class="site-body">
    <div class="content-wrap relative py-0 pt-4 w-auto my-0 mx-auto">
      <div class="homepage-welcome mb-14 -mt-14 text-center text-xl">
        <div class="welcome">
          <h2 className="text-3em font-bold leading-none w-full m-0 p-0 box-border text-white">
            Welcome.
          </h2>
        </div>
      </div>
    </div>
    <h1>Can this just fucking work?</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Header from '../components/Header.vue';

export default defineComponent({
  components: { Header },
  setup() {
    const state = reactive({
      name: 'Link',
      age: 25
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>
