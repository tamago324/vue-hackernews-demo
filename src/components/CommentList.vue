<template>
  <div class="comment-list">
    <p class="title is-5">{{ title }}</p>
    <template v-for="commentId in comments">
      <Comment :comment-id="commentId" v-bind:key="commentId" />
    </template>
  </div>
</template>

<script>
import { property } from "../util.js";
import Comment from "./Comment.vue";

export default {
  name: "CommentList",

  components: {
    Comment
  },

  props: {
    comments: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  methods: {
    getProperty(key) {
      return property(this.story, key);
    }
  },

};
</script>

<style scoped>
.title {
  margin-top: 0.3rem;
}
.comment-list {
  margin: 0 0.3rem;
}
</style>
