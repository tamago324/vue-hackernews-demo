<template>
  <article class="item">
    <figure class="item-left">
      <p>{{ itemScore }}</p>
    </figure>
    <div class="item-content">
      <div>
        <a :href="itemUrl" target="_blank">{{ itemTitle }}</a>
        <span class="has-text-grey-light small"> ({{ site }})</span>
      </div>
      <div class="has-text-gley-light small">
        by <a href="#">{{ itemBy }}</a> {{ time(itemTime) }} ago |
        <a href="#">{{ descentants }} comments</a>
      </div>
    </div>
  </article>
</template>

<script>
import {api} from '../db.js';

export default {
  name: 'Item',

  data() {
    return {
      item: null,
    };
  },

  // もらった id をもとに取得するため、関数にしている
  firebase() {
    return {
      item: api.child(`/item/${this.itemId}`),
    };
  },

  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    site() {
      if (this.getProperty('url') === '') {
        return '';
      }
      let parser = new URL(this.item.url);
      return parser.host;
    },

    descentants() {
      // コメントが 0 件の場合、含まれないため
      return this.getProperty('descendants') || 0;
    },

    itemScore() {
      return this.getProperty('score');
    },

    itemUrl() {
      return this.getProperty('url');
    },

    itemTitle() {
      return this.getProperty('title');
    },

    itemTime() {
      return this.getProperty('time');
    },

    itemBy() {
      return this.getProperty('by');
    },
  },

  methods: {
    time(t) {
      const now = Date.now();
      const unixtime = new Date(t * 1000);
      // ミリ秒で取得できる
      const diff_milisec = now - unixtime.getTime();

      const min = diff_milisec / 1000 / 60;

      if (min < 60) {
        return Math.trunc(min) + ' ' + (min === 1 ? 'min' : 'mins');
      }

      const hour = Math.trunc(min / 60);

      if (hour < 24) {
        // 小数点以下を切り捨て
        return hour + ' ' + (hour === 1 ? 'hour' : 'hours');
      }

      const day = Math.trunc(hour / 24);
      return day + ' ' + (day === 1 ? 'day' : 'days');
    },

    // null の可能性もある？ため、チェックする
    getProperty(key) {
      if (this.item === null || !(key in this.item)) {
        return '';
      }
      return this.item[key];
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
  padding: 0.7rem;
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
