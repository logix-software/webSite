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
      <button class="button-tag mr-2 button-tag--active">Tutte</button>

      <button class="button-tag mr-2">Case Study</button>
      <button class="button-tag mr-2">Interviste</button>
      <button class="button-tag mr-2">Mondo digital</button>
      <button class="button-tag mr-2">AI</button>
      <button class="button-tag mr-2">Design</button>
      <button class="button-tag mr-2">Dev</button>
    </div>
    <div class="container">

      <div class="row">
        <ParallaxContainer
          v-for="(post, index) in $page.posts.edges"
          :key="index"
          class="col-lg-6 mb-5"
        >
          <ParallaxElement :factor="getFactor(index + 1)">
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
    };
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
