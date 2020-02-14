<template>
  <div>
    <template v-for="itemId in topItems">
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
import Item from './Item.vue';

export default {
  name: 'ItemList',

  components: {
    Item,
  },

  props: {
    page: {
      type: Number,
    },
  },

  data() {
    return {
      topStories: [],
    };
  },

  computed: {
    topItems() {
      if (this.$parent.topStories === null) {
        return [];
      }
      const start = (this.page - 1) * 10;
      const end = this.page * 10;
      // 親のデータにアクセス
      return this.$parent.topStories.slice(start, end);
    },
  },

  beforeRouteUpdate(to, from, next) {
    if (parseInt(to.params.page) === 0 && parseInt(from.params.page) === 1) {
      next(false);
      return;
    }
    next();
  }
};
</script>

<style scoped>
.story:not(:last-child) {
  border-bottom: solid 1px #aaaaaa;
}
</style>
