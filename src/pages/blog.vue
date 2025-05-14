<template>
  <div>
    <Navbar :color="scrollTop < 200 ? 'white' : 'default'" />
    <div class="hero container mb-5">
      <h1 class="hero__title">Logix Stories</h1>
      <p class="hero__subtitle">
        Case study, approfondimenti, interviste dal mondo digital
      </p>
    </div>
    <div class="container d-flex mb-5 pb-5 tag-container">
      <button 
        class="button-tag mr-2" 
        :class="{'button-tag--active': selectedTag === 'all'}"
        @click="selectedTag = 'all'"
      >Tutte</button>

      <button 
        v-for="tag in availableTags" 
        :key="tag" 
        class="button-tag mr-2" 
        :class="{'button-tag--active': selectedTag === tag}"
        @click="selectedTag = tag"
      >{{ tag }}</button>
    </div>
    <div class="container mb-5 pb-5">
      <div class="row">
        <ParallaxContainer
          v-for="(post, index) in filteredPosts"
          :key="post.node.path"
          class="col-lg-6 mb-5"
        >
          <ParallaxElement :factor="getFactor(index + 1)" class="pt-5">
            <CardBlog
              time="10 min"
              :title="post.node.title"
              :abstract="post.node.abstract"
              :img="post.node.image"
              :tag="post.node.tag"
              :link="post.node.path"
              :index="index + 1"
            />
          </ParallaxElement>
        </ParallaxContainer>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<page-query>
  query {
    posts: allPosts(order: DESC) {
      edges {
        node {
          title
          author
          image
          abstract
          tag
          path
        }
      }
    },
  }
  </page-query>

<script>
import Navbar from "~/components/Navbar.vue";
import CardBlog from "~/components/CardBlog.vue";
import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";
import Footer from "~/components/Footer.vue";
export default {
  metaInfo: {
    title: "Blog - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell'ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
      },
      { property: "og:title", content: "Blog - Logix Software" },
      {
        property: "og:description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell'ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
      },
      {
        property: "og:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      {
        property: "twitter:card",
        content: "summary",
      },
      {
        property: "twitter:title",
        content: "Blog - Logix Software",
      },
      {
        property: "twitter:description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell'ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      { property: "og:url", content: "https://www.logix-software.it/blog" },
      { name: "robots", content: "index, follow" },
    ],
  },
  components: {
    Navbar,
    CardBlog,
    ParallaxElement,
    ParallaxContainer,
    Footer,
  },
  data() {
    return {
      scrollTop: 0,
      selectedTag: 'all',
    };
  },
  computed: {
    filteredPosts() {
      if (this.selectedTag === 'all') {
        return this.$page.posts.edges;
      }
      return this.$page.posts.edges.filter(post => 
        post.node.tag === this.selectedTag
      );
    },
    availableTags() {
      const tags = this.$page.posts.edges.map(post => post.node.tag);
      return [...new Set(tags)];
    }
  },
  mounted() {
    var _this = this;
    window.addEventListener("scroll", function () {
      _this.scrollTop = window.pageYOffset;
    });
  },
  methods: {
    getFactor(index) {
      if (index % 2 == 0) {
        return -0.05;
      } else {
        return -0.15;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 10rem;

  &__title {
    font-size: 105px;
    font-family: "Lexend Deca";
    color: #000;
  }
  &__subtitle {
    font-size: 26px;
    color: #797979;
  }
}
.button-tag {
  background-color: rgba(121, 121, 121, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 47px;
  border: 0;
  outline: none;
  white-space: nowrap;
  &--active {
    background-color: rgba(234, 234, 254, 1);
    color: rgba(39, 39, 245, 1);
  }
}
.tag-container {
  overflow-x: auto;
}
</style>
