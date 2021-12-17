import { toRefs, reactive } from 'vue';

export default function (url: string, options: any) {
  const state = reactive({
    response: [],
    error: null,
    loading: true
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      const jsonObj = await JSON.parse(json);
      console.log('jsonObj: ', jsonObj.data);
      state.response = jsonObj.data;
      console.log('state response: ', state.response);
      console.log(state.response.map((a: any) => a.node.title));
    } catch (errors: any) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };

  return { ...toRefs(state), fetchData };
}
