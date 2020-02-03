<template>
  <div id="app">
    <template v-for="itemId in topStories">
      <Item
        v-bind:key="itemId"
        class="story"
        v-bind="{
          itemId: itemId,
        }"
      />
    </template>
  </div>
</template>

<script>
import Item from './components/Item.vue';

import {api} from './db.js';

export default {
  name: 'app',
  components: {
    Item,
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

.story:not(:last-child) {
  border-bottom: solid 1px #aaaaaa;
}
</style>
