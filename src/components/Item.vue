<template>
  <div>
    <template v-if="item === null">
      <skeleton
        theme="opacity"
        style="width:200px"
        shape="radius"
        bg-color="#eee"
        class="dummy-item"
      >
        <div class="item-left">
          <tb-skeleton :aspect-ratio="1" shape="circle"></tb-skeleton>
        </div>
        <div class="item-content">
          <tb-skeleton :aspect-ratio="0.12"></tb-skeleton>
          <tb-skeleton :aspect-ratio="0.12"></tb-skeleton>
        </div>
      </skeleton>
    </template>
    <template v-else>
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
            by <a href="#">{{ itemBy }}</a> {{ getTime(itemTime) }} ago |
            <router-link
              :to="{
                name: 'commentList',
                params: { comments: getProperty('kids'), title: itemTitle }
              }"
              >{{ descentants }} comments</router-link
            >
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import { api } from "../db.js";
import { time, property } from "../util.js";

export default {
  name: "Item",

  data() {
    return {
      item: null
    };
  },

  // もらった id をもとに取得するため、関数にしている
  firebase() {
    return {
      item: api.child(`/item/${this.itemId}`)
    };
  },

  props: {
    itemId: {
      type: Number,
      required: true
    }
  },

  computed: {
    site() {
      if (this.getProperty("url") === "") {
        return "";
      }
      let parser = new URL(this.item.url);
      return parser.host;
    },

    descentants() {
      // コメントが 0 件の場合、含まれないため
      return this.getProperty("descendants") || 0;
    },

    itemScore() {
      return this.getProperty("score");
    },

    itemUrl() {
      return this.getProperty("url");
    },

    itemTitle() {
      return this.getProperty("title");
    },

    itemTime() {
      return this.getProperty("time");
    },

    itemBy() {
      return this.getProperty("by");
    }
  },

  methods: {
    getTime(t) {
      return time(t);
    },

    getProperty(key) {
      return property(this.item, key);
    }
  }
};
</script>

<style scoped>
/* bulma の media を参考にした */
.item,
.dummy-item {
  align-items: flex-start;
  display: flex;
  text-align: left;
  padding: 0.7rem;
  min-height: 60px;
}

.item .item-content:not(:last-child),
.dummy-item .item-content:not(:last-child) {
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

.dummy-item .item-left {
  flex-basis: 45px;
}

.item-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
}

.item-content .tb-skeleton {
  margin-left: 10px;
  margin-top: 5px;
}

.small {
  font-size: 0.9rem;
  color: #aaaaaa;
}
</style>
