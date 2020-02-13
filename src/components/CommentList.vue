<template>
  <div>
    <template v-for="commentId in comments" >
      <Comment :comment-id="commentId" v-bind:key="commentId"/>
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
    }
  },

  methods: {
    getProperty(key) {
      return property(this.story, key);
    }
  }
};
</script>

<style scoped></style>
