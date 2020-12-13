<template>
  <div class="container py-5">
    <div v-for="text in $page.texts.edges" :key="text.id">
      <h1 class="mb-4">{{text.node.title}}</h1>
      <div v-html="text.node.content" />
    </div>
  </div>
</template>
<page-query>
query {
 texts: allLegalNote {
    edges {
      node {
        title
        content
      }
    }
  },
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Note Legali - Logix Software",
  },
};
</script>
