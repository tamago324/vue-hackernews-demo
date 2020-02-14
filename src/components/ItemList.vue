<template>
  <div>
    <template v-for="itemId in topItems">
      <Item
        v-bind:key="itemId"
        class="story"
        v-bind="{
          itemId: itemId
        }"
      />
    </template>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ItemList",

  components: {
    Item
  },

  props: {
    page: {
      type: Number
    }
  },

  data() {
    return {
      perPage: 10
    };
  },

  computed: {
    topItems() {
      if (this.$parent.topStories === null) {
        return [];
      }
      const start = (this.page - 1) * this.perPage;
      const end = this.page * this.perPage;
      // 親のデータにアクセス
      return this.$parent.topStories.slice(start, end);
    }
  },

  beforeRouteUpdate(to, from, next) {
    // 
    const totalPage = Math.ceil(this.$parent.topStories.length / this.perPage);
    if (
      parseInt(to.params.page) <= 0 ||
      parseInt(to.params.page) > totalPage
    ) {
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
