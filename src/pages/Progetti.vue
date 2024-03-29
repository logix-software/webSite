<template>
  <div
    :class="{
      'bg-white': scrollTop < 200,
      'bg-black': scrollTop > 200,
    }"
  >
    <Navbar :color="scrollTop < 200 ? 'white' : 'default'" />
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="container py-5">
        <div class="row pt-5">
          <div class="col-lg-9">
            <h1
              class="hero__title"
              :class="{
                'text-white': scrollTop > 200,
              }"
              v-html="text.node.headerTitle1"
            ></h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="list-projects">
      <div class="row py-5">
        <ParallaxContainer
          v-for="(project, index) in $page.projects.edges"
          :key="project.id"
          :class="getClassWidth(index + 1)"
        >
          <ParallaxElement :factor="getFactor(index + 1)">
            <app-project
              :index="index + 1"
              :title="project.node.title"
              :img="project.node.imageList"
              :abstract="project.node.abstract"
              :link="project.node.path"
              :label1="project.node.label1"
              :label2="project.node.label2"
              :label3="project.node.label3"
              :hashtags="project.node.hashtags"
              class="mb-4"
              :variant="scrollTop > 200 ? 'white' : 'default'"
            ></app-project>
          </ParallaxElement>
        </ParallaxContainer>
      </div>
    </div>
    <lets-talk />
    <Footer />
  </div>
</template>
<page-query>
query {
  texts: allProjectsPage {
    edges {
      node {
        title
        headerTitle1
      }
    }
  },
  projects: allProjects(order: DESC) {
    edges {
      node {
        title
        imageList
        label1
        label2
        label3
        hashtags
        abstract
        path
      }
    }
  },
}
</page-query>
<script>
import AppProject from "~/components/AppProject.vue";
import Navbar from "~/components/Navbar.vue";
import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";
import Footer from "~/components/Footer.vue";
import LetsTalk from "~/components/LetsTalk.vue";

export default {
  metaInfo: {
    title: "Progetti - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
      },
      { property: "og:title", content: "Progetti - Logix Software" },
      {
        property: "og:description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
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
        content: "Progetti - Logix Software",
      },
      {
        property: "twitter:description",
        content:
          "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile.",
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      { property: "og:url", content: "https://www.logix-software.it/progetti" },
      { name: "robots", content: "index, follow" },
    ],
  },
  components: {
    Navbar,
    Footer,
    AppProject,
    ParallaxElement,
    ParallaxContainer,
    LetsTalk,
  },
  data() {
    return {
      scrollTop: 0,
      widthScreen: null,
    };
  },
  mounted() {
    var _this = this;
    this.widthScreen = screen.width;
    window.addEventListener("scroll", function () {
      _this.scrollTop = window.pageYOffset;
    });

    if (Object.keys(this.$route.query).length !== 0 && this.$route.query.cmp) {
      localStorage.setItem("param", this.$route.query.cmp);
    }
  },
  methods: {
    getClassWidth(index) {
      if (index % 3 == 0) {
        return "col-lg-9";
      } else if (index % 2 == 0) {
        return "col-lg-6";
      } else {
        return "col-lg-6";
      }
    },
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
  background-color: #111111;
  min-height: 800px;
  position: relative;
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 50px;
    letter-spacing: -0.05em;
    line-height: 3.5rem;

    @media screen and (min-width: 992px) {
      font-size: 75px;
      line-height: 77px;
      letter-spacing: -4px;
    }
  }
}
</style>
