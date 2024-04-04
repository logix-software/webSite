<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <!-- img dinamica -->
      <div
        class="hero hero--competenze d-flex align-items-center text-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="hero__title">
                {{text.node.headerTitle}}
              </h1>
              <div class="my-4">
                <span class="label label--development">DEVELOPMENT</span>
                <span class="label label--design mx-2">Design</span>
                <span class="label label--strategist">STRATEGIST</span>
              </div>
              <p class="hero__description">
                {{text.node.headerAbstract}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence position-relative py-5">
        <div class="container position-relative py-lg-5">
          <h1 class="competence__bigText" data-aos="fade-left">
            {{ text.node.section1BgText }}
          </h1>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <!-- img dinamica -->
              <g-image :src="text.node.section1Image" class="competence__img" />
            </div>
            <div class="col-lg-5 ml-lg-5">
              <h1 class="competence__title my-3">
                {{ text.node.section1Title }}
              </h1>
              <p class="competence__description mb-4">
                {{ text.node.Section1Abstract }}
              </p>
              <g-link to="/contatti" class="btn btn-gradient-border text-white">
                Parliamo di questo servizio
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="tool py-5">
        <div class="container position-relative">
          <div class="row py-5">
            <div class="col-lg-5 mx-auto text-center">
              <!-- <h6 class="tool__name"> -->
                <!-- {{ text.node.toolsName }} -->
              <!-- </h6> -->
              <h1 class="tool__titleSection">
                {{ text.node.toolsAbstract }}
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-4 mb-lg-0">
              <div class="day">
                <g-image
                  :src="text.node.step1Icon"
                  class="day__img mb-2 mb-lg-0"
                />
                <h6 class="day__title">
                  {{ text.node.step1Title }}
                </h6>

                <p class="day__description">
                  {{ text.node.step1Abstract }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0">
              <div class="day day--inverted">
                <g-image
                  :src="text.node.step2Icon"
                  class="day__img mb-2 mb-lg-0"
                />
                <h6 class="day__title">
                  {{ text.node.step2Title }}
                </h6>

                <p class="day__description">
                  {{ text.node.step2Abstract }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0">
              <div class="day">
                <g-image
                  :src="text.node.step3Icon"
                  class="day__img mb-2 mb-lg-0"
                />
                <h6 class="day__title">
                  {{ text.node.step3Title }}
                </h6>

                <p class="day__description">
                  {{ text.node.step3Abstract }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0">
              <div class="day day--inverted">
                <g-image
                  :src="text.node.step4Icon"
                  class="day__img mb-2 mb-lg-0"
                />
                <h6 class="day__title">
                  {{ text.node.step4Title }}
                </h6>

                <p class="day__description">
                  {{ text.node.step4Abstract }}
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div class="partnership bg-black">
        <div class="partnership__box w-100 py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 ml-auto pl-lg-5">
                <!-- <h6 class="pl-2 pl-lg-4 partnership__name">
                  {{ text.node.section3Name }}
                </h6>
                <h1 class="pl-2 pl-lg-4 partnership__title mb-4">
                  {{ text.node.section3Title }}
                </h1> -->
                <div class="d-flex flex-wrap align-items-center">
                  <g-image :src="text.node.logo1" class="partnership__logo" />
                  <g-image :src="text.node.logo2" class="partnership__logo" />
                  <g-image :src="text.node.logo3" class="partnership__logo" />
                  <g-image :src="text.node.logo4" class="partnership__logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row py-5">
        <ParallaxContainer
          v-for="(project, index) in $page.projects.edges"
          :key="project.id"
          class="col-md-6"
        >
        
          <template
            v-if="
              project.node.title === 'SailingDAO' ||
              project.node.title === 'Suoni Controvento'
            "
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
                class="mb-5 mb-md-2"
              ></app-project>
            </ParallaxElement>
          </template>
        </ParallaxContainer>
      </div>
    </div>
    <LetsTalk />
  </Layout>
</template>
<page-query>
query {
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
  texts: allWeb3 {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        section1Title
        Section1Abstract
        section1BgText
        section1Image
        toolsAbstract
        logo1
        logo2
        logo3
        logo4
        step1Icon
        step1Title
        step1Abstract
        step2Icon
        step2Icon
        step2Title
        step2Abstract
        step3Icon
        step3Icon
        step3Title
        step3Abstract
        step4Icon
        step4Icon
        step4Title
        step4Abstract
      }
    }
  },
}
</page-query>
<script>
import LetsTalk from "~/components/LetsTalk.vue";
import AppProject from "~/components/AppProject.vue";
import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";

export default {
  metaInfo: {
    title: "Web3, NFT & Blockchain - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Offriamo servizi di Web3 e Blockchain per creare soluzioni innovative e sicure, accessibili a tutti. Le nostre strategie personalizzate puntano a trasformare l'esperienza digitale attraverso la decentralizzazione e l'innovazione.",
      },
      { property: "og:title", content: "Web3, NFT & Blockchain - Logix Software" },
      {
        property: "og:description",
        content:
          "Offriamo servizi di Web3 e Blockchain per creare soluzioni innovative e sicure, accessibili a tutti. Le nostre strategie personalizzate puntano a trasformare l'esperienza digitale attraverso la decentralizzazione e l'innovazione.",
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
        content: "Web3, NFT & Blockchain - Logix Software",
      },
      {
        property: "twitter:description",
        content:
          "Offriamo servizi di Web3 e Blockchain per creare soluzioni innovative e sicure, accessibili a tutti. Le nostre strategie personalizzate puntano a trasformare l'esperienza digitale attraverso la decentralizzazione e l'innovazione.",
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      {
        property: "og:url",
        content: "https://www.logix-software.it/web3",
      },
      { name: "robots", content: "index, follow" },
    ],
  },
  components: {
    AppProject,
    LetsTalk,
    ParallaxElement,
    ParallaxContainer,
  },
  data() {
    return {};
  },
  mounted() {
    AOS.init();
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
  width: 100%;
  height: 750px;
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 680px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 80px;
    letter-spacing: -3.61px;
    line-height: 82px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      line-height: initial;
    }
  }
  &__description {
    width: 60%;
    margin: 0 auto;
    font-family: "Lexend Deca";
    font-size: 18px;
    letter-spacing: -0.18px;
    line-height: 25px;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
}
.competence {
  background-color: #000000;
  color: #fff;
  &__img {
    width: 100%;
  }
  &__body {
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__bigText {
    position: absolute;
    right: -170px;
    bottom: 80px;
    color: rgba(255, 255, 255, 1);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 60px;
      letter-spacing: initial;
      line-height: initial;
      bottom: -60px;
      right: -20px;
    }
  }
  &--inverted {
    .competence__bigText {
      left: -170px;
    }
    .cont-body {
      order: 0;
    }
    .cont-img {
      order: 1;
    }
  }
}

.tool {
  color: #000;
  position: relative;
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__titleSection {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__img {
    width: 100px;
  }
  &__card {
    min-height: 350px;
    // @media screen and (max-width: 992px) {
    //   width: 100%;
    //   height: auto;
    // }
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 35px;
    letter-spacing: -1.28px;
    line-height: 39px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
    // @media screen and (max-width: 992px) {
    //   font-size: 14px;
    // }
  }
  //   &--inverted {
  //     &:before {
  //       content: "";
  //       position: absolute;
  //       top: 0;
  //       right: 0%;
  //       width: 80%;
  //       bottom: 60%;
  //       background-color: #f3f5fb;
  //     }
  //   }
  &--inverted {
    background-color: #1d1d1d;
    color: #fff;
  }
}
.technology {
  color: #000;
  &__img {
    width: 100%;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &--inverted {
    .col-left {
      @media screen and (min-width: 992px) {
        order: 1;
      }
    }
    .col-right {
      @media screen and (min-width: 992px) {
        order: 0;
      }
    }
  }
}
.day {
  background-color: #fff;

  width: 220px;
  margin: 0 auto;
  padding: 20px 12px;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 14px 10px;
  }
  &__img {
    width: 64px;
  }
  &__name {
    color: #000000;
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 16.08px;
  }
  &__title {
    color: #141414;
    font-family: "DM Sans";
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.77px;
    line-height: 32px;
  }
  &__description {
    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 20px;
    @media screen and (min-width: 992px) {
      min-height: 100px;
    }
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
}
.methods {
  background-color: #000;
  color: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
  &__bigText {
    position: absolute;
    right: -3px;
    bottom: 60px;
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 80px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__img {
    position: absolute;
    left: -100px;
    top: -100px;
  }
  &__title {
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
</style>
