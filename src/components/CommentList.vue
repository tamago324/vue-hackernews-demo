<template>
  <div>
    <Comment />
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: "CommentList",

  components: {
    Comment,
  },

  props: {
    storyId: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
