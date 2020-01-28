<template>
  <div id="app">
    <template v-for="item in items">
      <Item
        :key="item.id"
        class="story"
        v-bind="{
          itemScore: item.score,
          itemUrl: item.url,
          itemBy: item.by,
          itemTitle: item.title,
          itemTime: item.time,
        }"
      />
    </template>
  </div>
</template>

<script>
import Item from './components/Item.vue';

export default {
  name: 'app',
  components: {
    Item,
  },
  data() {
    return {
      items: [
        {
          by: 'cmod',
          descendants: 546,
          id: 22107823,
          // kinds は多かったから、省略している
          kids: [22108598, 22109987],
          score: 1463,
          time: 1579621102,
          title: 'Every Google result now looks like an ad',
          type: 'story',
          url: 'https://twitter.com/craigmod/status/1219644556003565568',
        },
        {
          by: 'cmod',
          descendants: 546,
          id: 22107823,
          // kinds は多かったから、省略している
          kids: [22108598, 22109987],
          score: 1463,
          time: 1579621102,
          title: 'Every Google result now looks like an ad',
          type: 'story',
          url: 'https://twitter.com/craigmod/status/1219644556003565568',
        },
        {
          by: 'cmod',
          descendants: 546,
          id: 22107823,
          // kinds は多かったから、省略している
          kids: [22108598, 22109987],
          score: 1463,
          time: 1579621102,
          title: 'Every Google result now looks like an ad',
          type: 'story',
          url: 'https://twitter.com/craigmod/status/1219644556003565568',
        },
      ],
    };
  },
};
</script>

<style>
#app {
  margin: 0 auto;
  width: 600px;
}

.story:not(:last-child) {
  border-bottom: solid 1px #aaaaaa;
}
</style>
