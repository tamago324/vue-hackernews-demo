<template>
  <div id="app">
    <ItemList :page="1" :top-stories="topStories" />
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';

import {api} from './db.js';

export default {
  name: 'app',
  components: {
    ItemList,
  },

  data() {
    return {
      items: {},
      topStories: null,
    };
  },

  firebase: {
    topStories: api.child('topstories'),
  },
};
</script>

<style>
#app {
  margin: 0 auto;
  width: 820px;
}
</style>
