<template>
  <div>
    <div class="container py-5">
      <div class="mb-4">
         <g-link to="/">
            <g-image src="~/assets/images/logo/logix-software-black.svg" class="header__logo" alt="logix-software" />
          </g-link>
      </div>

      <div v-for="text in $page.texts.edges" :key="text.id">
        <h1 class="mb-4">{{text.node.title}}</h1>
        <div v-html="text.node.content" />
      </div>
    </div>
    <Footer />
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
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  },
  metaInfo: {
    title: "Note Legali - Logix Software",
  },
};
</script>
