<template>
  <div class="container">
    <span class="button-tag">{{ $page.post.tag }}</span>
    <h1 class="post__title">{{ $page.post.title }}</h1>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <span class="post__author"> <span class="post__small">By</span> {{ $page.post.author }}</span>
        <span class="post__time">10 min di lettura</span>
      </div>
      <div>
        <span class="post__small">share</span>
      </div>
    </div>
    <img :src="$page.post.image" alt="post image" class="post__image">
    <div class="post__content">
      <div v-html="$page.post.content"></div>
    </div>
  </div>
</template>
<page-query>
  query ($path: String!) {
      post: posts (path: $path) {
        title
        abstract
        author
        image
        content
        date
        tag
        path
      },
  }
  </page-query>
<script>
export default {};
</script>

<style scoped>
.button-tag {
  background-color: rgba(234, 234, 254, 1);
  color: rgba(39, 39, 245, 1);
  padding: 0.5rem 1.5rem;
  border-radius: 47px;
  border: 0;
  outline: none;
  white-space: nowrap;
}
.post__title {
  font-size: 72px;
  color: #000;
  font-family: "Lexend Deca";
}
.post__author {
  font-size: 20px;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}
.post__time {
  font-size: 20px;
  color: rgba(121, 121, 121, 1);
}
.post__small {
  font-size: 16px;
  color: rgba(3, 3, 61, 1);
  font-weight: 500;
}
.post__image {
  width: 100%;
  height: 472px;
  object-fit: cover;
}
</style>
