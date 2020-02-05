<template>
  <div id="app">
    <router-link :to="{ name: 'page', params: { page: 1 } }">1</router-link>
    <router-link :to="{ name: 'page', params: { page: 2 } }">2</router-link>
    <router-link :to="{ name: 'page', params: { page: 3 } }">3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {api} from './db.js';

export default {
  name: 'app',

  data() {
    return {
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
