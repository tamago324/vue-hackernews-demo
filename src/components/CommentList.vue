<template>
  <div>
    <template v-for="comment in getProperty('kids')" >
      <Comment :comment-id="comment" v-bind:key="comment"/>
    </template>
  </div>
</template>

<script>
import { api } from "../db.js";
import { property } from "../util.js";
import Comment from "./Comment.vue";

export default {
  name: "CommentList",

  components: {
    Comment
  },

  data() {
    return {
      story: null
    };
  },

  props: {
    storyId: {
      type: Number,
      required: true
    }
  },

  firebase() {
    return {
      story: api.child(`/item/${this.storyId}`)
    };
  },

  methods: {
    getProperty(key) {
      return property(this.story, key);
    }
  }
};
</script>

<style scoped></style>
