<template>
  <div id="app" class="container">
    <b-pagination
      :total="total"
      :current="current"
      per-page="10"
      range-before="1"
      range-after="1"
      order="is-centered"
      size="default"
      aria-previous-label="Previous page"
      aria-next-label="Next page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-pagination-button
        slot-scope="props"
        :page="props.page"
        :id="`page${props.page.number}`"
        tag="router-link"
        :to="{name: 'page', params: {page: parseInt(props.page.number)}}"
      >
        {{ props.page.number }}
      </b-pagination-button>

      <b-pagination-button
        slot="previous"
        slot-scope="props"
        :page="props.page"
        tag="router-link"
        :to="{name: 'page', params: {page: parseInt(props.page.number)}}"
      >
        <b-icon icon="angle-left" />
      </b-pagination-button>

      <b-pagination-button
        slot="next"
        slot-scope="props"
        :page="props.page"
        tag="router-link"
        :to="{name: 'page', params: {page: parseInt(props.page.number)}}"
      >
        <b-icon icon="angle-right" />
      </b-pagination-button>
    </b-pagination>
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
      total: 1, // 全部でいくつか
      current: 1, // 現在のページ
    };
  },

  firebase: {
    topStories: api.child('topstories'),
  },

  watch: {
    topStories(newVal) {
      this.total = newVal.length;
      // // 取得できたら1ページに移動する
      // this.$router.push({name: 'page', params: {page: 1}});
    },

    $route(to) {
      this.current = to.params.page;
    },
  },
};
</script>

<style>
#app {
  margin: 1rem auto;
  max-width: 820px;
}
</style>
