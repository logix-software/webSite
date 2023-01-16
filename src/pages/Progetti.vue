<template>
  <div>
    <Navbar color="white" />
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-lg-9">
            <h1 class="hero__title">
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
            ></app-project>
          </ParallaxElement>
        </ParallaxContainer>
      </div>
    </div>
    <lets-talk />
    <!-- <div class="tools py-5 my-lg-5" v-for="text in $page.texts.edges" :key="text.id">
      <div class="container mb-4">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center mb-5">
            <h6 class="tools__name">{{text.node.toolsName}}</h6>
            <h1 class="tools__titleSection">{{text.node.toolsTitle}}</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox1Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox1Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox1Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox1Description}}</p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox2Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox2Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox2Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox2Description}}</p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox3Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox3Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox3Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox3Description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="list-projects">
      <div class="project project--comingSoon py-5" v-for="project in $page.projectsComingSoon.edges" :key="project.id">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6 col-left">
              <div class="project__img" :style="{ 'background-image': 'url(' + project.node.imageList + ')' }">
                <g-image src="~/assets/images/deco3.svg" class="integration__img" alt="decoration"/>
              </div>
            </div>
            <div class="col-lg-6 pl-lg-5 col-right d-flex align-items-center">
              <div class="pl-lg-5">
                <h1 class="project__title mb-3">{{project.node.title}}</h1>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <p class="project__hashtags mb-3">{{project.node.hashtags}}</p>
                <p class="project__description mb-4">
                 {{project.node.abstract}}
                </p>
                <a href="/" class="btn btn-secondary">Coming soon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div
      class="partnership py-5"
      v-for="textPartnership in $page.textsPartnership.edges"
      :key="textPartnership.id"
    >
      <div class="partnership__box my-5 py-5">
        <g-image src="~/assets/images/deco2.svg" class="partnership__deco" alt="decoration"/>
        <div class="container">
          <div class="row">
            <div class="col-lg-11 ml-auto pl-lg-5">
              <h6 class="pl-2 pl-lg-4 partnership__name">{{textPartnership.node.sectionName}}</h6>
              <h1 class="pl-2 pl-lg-4 partnership__title">{{textPartnership.node.sectionTitle}}</h1>
              <div class="d-flex flex-wrap align-items-center">
                <g-image :src="textPartnership.node.logo1" class="partnership__logo" />
                <g-image :src="textPartnership.node.logo2" class="partnership__logo" />
                <g-image :src="textPartnership.node.logo3" class="partnership__logo" />
                <g-image :src="textPartnership.node.logo4" class="partnership__logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center py-5">
            <h1 class="partnership__titleClosing mb-4">{{textPartnership.node.sectionTitle2}}</h1>
            <p
              class="partnership__descriptionClosing mb-5"
            >{{textPartnership.node.sectionAbstract2}}</p>
            <div>
            <g-link to="/contatti" class="btn btn-primary mx-1 mx-lg-2">
              Contattaci
            </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 pt-5">
        <div class="row">
          <div class="col-lg-10 ml-auto position-relative mt-lg-5">
            <div class="cta cta--black">
              <g-image src="~/assets/images/deco3.svg" class="cta__deco" alt="decoration"/>
              <div class="d-flex align-items-center justify-content-between w-75">
                <h1 class="cta__title">{{textPartnership.node.ctaTitle}} <span class="text-green">{{textPartnership.node.ctaGreen}}</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
        headerTitle2
        headerImage
        toolsName
        toolsTitle
        toolsBox1Title
        toolsBox1Subtitle
        toolsBox1Hashtags
        toolsBox1Description
        toolsBox2Title
        toolsBox2Subtitle
        toolsBox2Hashtags
        toolsBox2Description
        toolsBox3Title
        toolsBox3Subtitle
        toolsBox3Hashtags
        toolsBox3Description
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
  projectsComingSoon: allProjectsComingSoon(order: DESC) {
    edges {
      node {
        title
        imageList
        image
        hashtags
        abstract
      }
    }
  },
  textsPartnership: allPartnership {
    edges {
      node {
        sectionTitle
        sectionName
        logo1
        logo2
        logo3
        logo4
        sectionTitle2
        sectionAbstract2
        ctaTitle
        ctaGreen
      }
    }
  }
}
</page-query>
<script>
import AppProject from "~/components/AppProject.vue";
import Navbar from "~/components/Navbar.vue";
import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";
import Footer from "~/components/Footer.vue";
import LetsTalk from '~/components/LetsTalk.vue';

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
      //   deviceWidth: 0
    };
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
    AOS.init();

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
  &__deco1 {
    position: absolute;
    left: 0;
    top: 100px;
  }
  &__deco2 {
    right: 0;
    bottom: 100px;
    position: absolute;
  }
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
  &__img {
    margin-top: -20px;
    @media screen and (max-width: 992px) {
      margin-top: 0;
    }
  }
}
</style>
