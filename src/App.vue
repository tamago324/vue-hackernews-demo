<template>
  <div id="app">
    <template v-for="item in items">
      <Item
        v-bind:key="item.id"
        class="story"
        v-bind:="{
          itemScore: item.score,
          itemUrl: item.url,
          itemBy: item.by,
          itemTitle: item.title,
          itemTime: item.time,
          itemDescendants: item.descendants,
        }"
      />
    </template>
    <template v-if="topStories !== null">
      {{ topStories }}
    </template>
  </div>
</template>

<script>
import Item from './components/Item.vue';

// hackernews API は database
import firebase from 'firebase/app';
import 'firebase/database';

// v0 が今のバージョン
const api = firebase
  .initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com' })
  .database()
  .ref('/v0');

export default {
  name: 'app',
  components: {
    Item,
  },

  data() {
    return {
      items: [],
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
