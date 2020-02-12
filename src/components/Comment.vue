<template>
  <div class="comment-container">
    <div class="top-wrapper">
      <a href="#" class="small">{{ name }}</a>
      <a href="#" class="small">{{ time }}</a>
      <a href="#" class="small">[ - ]</a>
    </div>
    <div class="content">{{ comment }}</div>
  </div>
</template>

<script>
export default {
  name: "Comment",

  data() {
    return {
      name: "tamago324",
      time: "10 mins ago",
      comment: "LeaderF very cool!!! I love Vim!"
    };
  }
};
</script>

<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
}

.top-wrapper {
  display: inline-flex;
}

.top-wrapper a {
  margin: 0 0.5rem;
}

.content {
  margin-left: 1rem;
  font-weight: bold;
}

.small {
  font-size: 0.9rem;
  color: #aaaaaa;
}
</style>
