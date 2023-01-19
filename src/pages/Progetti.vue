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
        <div class="row py-5">
          <div class="col-lg-9">
            <h1
              class="hero__title"
              :class="{
                'text-white': scrollTop > 200,
              }"
            >
              {{ text.node.headerTitle1 }}
            </h1>
          </div>
        </div>

        <!-- <h1
          class="hero__title text-right"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="700"
        >{{text.node.headerTitle2}}</h1> -->
        <!-- <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <g-image :src="text.node.headerImage" class="hero__img" />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="container" id="list-projects">
      <div class="row py-5">
        <ParallaxContainer
          v-for="(project, index) in $page.projects.edges.slice(0, 6)"
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
              label1="DEVELOPMENT"
              label2="DEVELOPMENT"
              label3="DEVELOPMENT"
              tag1="DEVELOPMENT"
              tag2="DEVELOPMENT"
              tag3="DEVELOPMENT"
              class="mb-2"
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
        image1
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
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
    var _this = this;
    this.widthScreen = screen.width;
    window.addEventListener("scroll", function () {
      _this.scrollTop = window.pageYOffset;
    });

    let element1 = document.querySelector(".hero__title");
    let word2 = "progetti";
    let word3 = " e ";
    let word4 = "clienti";

    element1.innerHTML = element1.innerHTML.replace(
      word2,
      `<span>${word2}</span>`
    );
    element1.innerHTML = element1.innerHTML.replace(
      word3,
      `<span>${word3}</span>`
    );
    element1.innerHTML = element1.innerHTML.replace(
      word4,
      `<span>${word4}</span>`
    );
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
<style lang="scss">
.hero {
  &__title {
    span {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        98.09deg,
        #36f2b9 37.9%,
        #7878f9 50.47%,
        #f60994 62.93%
      );
    }
  }
}
</style>
<style lang="scss" scoped>
.hero {
  background-color: #111111;
  min-height: 800px;
  position: relative;
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 46px;

    @media screen and (min-width: 992px) {
      font-size: 75px;
      line-height: 77px;
      letter-spacing: -4px;
    }
  }
}
</style>
