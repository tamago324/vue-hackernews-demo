<template>
  <div id="app">
    <template v-for="itemId in topStories">
      <!-- ここで v&#45;if を使ってしまうと、 -->
      <template v-if="itemId in items">
        <Item
          v-bind:key="itemId"
          class="story"
          v-bind="{
            itemScore: items[itemId].score,
            itemUrl: items[itemId].url,
            itemBy: items[itemId].by,
            itemTitle: items[itemId].title,
            itemTime: items[itemId].time,
            itemDescendants: items[itemId].descendants,
          }"
        />
      </template>
    </template>
    <!-- <template v&#45;if="topStories !== null"> -->
    <!--   {{ topStories }} -->
    <!-- </template> -->
  </div>
</template>

<script>
import Item from './components/Item.vue';

// hackernews API は database
import firebase from 'firebase/app';
import 'firebase/database';

// v0 が今のバージョン
const api = firebase
  .initializeApp({databaseURL: 'https://hacker-news.firebaseio.com'})
  .database()
  .ref('/v0');

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

  watch: {
    topStories(newVal, oldVal) {
      if (
        newVal !== null &&
        oldVal !== null &&
        newVal.slice(0, 10) === oldVal.slice(0, 10)
      ) {
        return;
      }

      newVal.slice(0, 10).forEach(id => {
        // 値の変更によって処理が実行できる (変更があるたびに第２引数の関数が呼び出される)
        api.child(`/item/${id}`).on('value', snapshot => {
          // eslint-disable-next-line no-console
          console.log(id);
          this.items[id] = snapshot.val();
        });
      });
      // eslint-disable-next-line no-console
      console.log("done");
  },
  },

  // これどう使えばいいのかよくわからん
  computed: {
    topItems() {
      if (this.topStories === null) {
        return [];
      }
      // topStories の順番で 10 個だけ items を返す
      return this.topStories
        .forEach(id => {
          return this.items[id];
        });
        //   .filter(item => {
        //   return item.id in this.items;
        // })
    },
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
