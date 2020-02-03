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
      required: true,
    },
    topStories: {
      type: Array,
    },
  },

  computed: {
    topItems() {
      const start = (this.page - 1) * 10;
      const end = this.page * 10;
      return this.topStories.slice(start, end);
    }
  }

};
</script>

<style scoped>
.story:not(:last-child) {
  border-bottom: solid 1px #aaaaaa;
}
</style>
