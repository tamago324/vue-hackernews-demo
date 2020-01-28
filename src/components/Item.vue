<template>
  <article class="item">
    <figure class="item-left">
      <p>{{ item.score }}</p>
    </figure>
    <div class="item-content">
      <div>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <span class="has-text-grey-light small"> ({{ site }})</span>
      </div>
      <div class="has-text-gley-light small">
        by <a href="#">{{ item.by }}</a> {{ time(item.time) }} ago |
        <a href="#">{{ commentCnt }} comments</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    site() {
      let parser = new URL(this.item.url);
      return parser.host;
    },

    commentCnt() {
      // TODO: 実際の値を返す
      return 100;
    },
  },

  methods: {
    time(t) {
      const now = Date.now();
      const unixtime = new Date(t * 1000);
      // ミリ秒で取得できる
      const diff_milisec = now - unixtime.getTime();

      const min = (diff_milisec / 1000) / 60;

      if (min < 60) {
        return min + ' ' + (min === 1 ? 'min' : 'mins');
      }

      const hour = Math.trunc(min / 60);

      if (hour < 24) {
        // 小数点以下を切り捨て
        return hour + ' ' + (hour === 1 ? 'hour' : 'hours');
      }

      const day = Math.trunc(hour / 24);
      return day + ' ' + (day === 1 ? 'day' : 'days');
    },
  },
};
</script>

<style scoped>
/* bulma の media を参考にした */
.item {
  align-items: flex-start;
  display: flex;
  text-align: left;
}

.item .item-content:not(:last-child) {
  margin-bottom: 0.75rem;
}

.item-left {
  text-align: center;
  align-self: center;
  flex-basis: 60px;
  flex-grow: 0;
  flex-shrink: 0;
  color: #f0b9af;
  font-weight: bold;
}

.item-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
}

.small {
  font-size: 0.9rem;
  color: #aaaaaa;
}
</style>
