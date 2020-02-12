<template>
  <div class="comment-container">
    <div class="top-wrapper">
      <a href="#" class="small">{{ getProperty("by") }}</a>
      <a href="#" class="small">{{ getTime(getProperty("time")) }}</a>
      <a href="#" class="small">[ - ]</a>
    </div>
    <div class="content" v-html="getProperty('text')"></div>
  </div>
</template>

<script>
import { api } from '../db.js';
import { time, property } from "../util.js";

export default {
  name: "Comment",

  data() {
    return {
      comment: null,
    };
  },

  props: {
    commentId: {
      type: Number,
      require: true,
    }
  },

  firebase() {
    return {
      comment: api.child(`/item/${this.commentId}`)
    }
  },

  methods: {
    getTime(t) {
      return time(t);
    },

    getProperty(key) {
      return property(this.comment, key);
    }

  }
};
</script>

<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.top-wrapper {
  display: inline-flex;
}

.top-wrapper a {
  margin: 0 0.5rem;
}

.content {
  margin-left: 30px;
}

.small {
  font-size: 0.9rem;
  color: #aaaaaa;
}
</style>
