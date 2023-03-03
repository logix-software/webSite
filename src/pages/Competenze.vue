<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="bg-black">
        <!-- :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }" -->

        <div class="container hero d-flex align-items-center">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="hero__title" v-html="text.node.headerTitle" />
            </div>
          </div>
        </div>
        <div class="container text-white">
          <div class="row competence align-items-center mb-5 pb-5">
            <div class="col-lg-2">
              <img
                :src="text.node.competence1Img"
                :alt="text.node.competence1Title"
                class="competence__img mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-8 px-lg-5 mb-4 mg-lg-0">
              <h2 class="competence__title mb-4 mb-lg-0">
                {{ text.node.competence1Title }}
              </h2>
              <p class="competence__description">
                {{ text.node.competence1Abstract }}
              </p>
              <g-link
                :to="text.node.competence1Link"
                class="btn btn-sm btn-outline-white"
                >Approfondisci</g-link
              >
            </div>
            <div class="col-lg-2" v-html="text.node.competence1Services"></div>
          </div>
          <div class="row competence align-items-center mb-5 pb-5">
            <div class="col-lg-2">
              <img
                :src="text.node.competence2Img"
                :alt="text.node.competence2Title"
                class="competence__img mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-8 px-lg-5 mb-4 mg-lg-0">
              <h2 class="competence__title mb-4 mb-lg-0">
                {{ text.node.competence2Title }}
              </h2>
              <p class="competence__description">
                {{ text.node.competence2Abstract }}
              </p>
              <g-link
                :to="text.node.competence2Link"
                class="btn btn-sm btn-outline-white"
                >Approfondisci</g-link
              >
            </div>
            <div class="col-lg-2" v-html="text.node.competence2Services"></div>
          </div>
          <div class="row competence align-items-center mb-5 pb-5">
            <div class="col-lg-2">
              <img
                :src="text.node.competence3Img"
                :alt="text.node.competence3Title"
                class="competence__img mb-4 mg-lg-0"
              />
            </div>
            <div class="col-lg-8 px-lg-5 mb-4 mg-lg-0">
              <h2 class="competence__title mb-4 mg-lg-0">
                {{ text.node.competence3Title }}
              </h2>
              <p class="competence__description">
                {{ text.node.competence3Abstract }}
              </p>
              <g-link
                :to="text.node.competence3Link"
                class="btn btn-sm btn-outline-white"
                >Approfondisci</g-link
              >
            </div>
            <div class="col-lg-2" v-html="text.node.competence3Services"></div>
          </div>
          <div class="row competence align-items-center mb-5 pb-5">
            <div class="col-lg-2">
              <img
                :src="text.node.competence4Img"
                :alt="text.node.competence4Title"
                class="competence__img mb-4 mg-lg-0"
              />
            </div>
            <div class="col-lg-8 px-lg-5 mb-4 mg-lg-0">
              <h2 class="competence__title">
                {{ text.node.competence4Title }}
              </h2>
              <p class="competence__description">
                {{ text.node.competence4Abstract }}
              </p>
              <g-link
                :to="text.node.competence4Link"
                class="btn btn-sm btn-outline-white"
                >Approfondisci</g-link
              >
            </div>
            <div class="col-lg-2" v-html="text.node.competence1Services"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center text-white">
              <h2 class="approach__title mb-5">
                {{ text.node.approachTitle }}
              </h2>
              <p class="approach__description px-lg-5">
                {{ text.node.approachDescription }}
              </p>
            </div>
          </div>
        </div>
        <div class="text-center my-lg-5 py-5">
          <img
            :src="text.node.approachImg"
            :alt="text.node.approachTitle"
            class="approach__img"
          />
        </div>
        <div class="container text-white">
          <div class="row mb-5 pb-5">
            <div class="col-lg-6">
              <p class="approach__title2">
                {{ text.node.approachDescription1 }}
              </p>
              <span class="d-inline-block approach__toolsTitle">STRUMENTI</span>
              <div
                v-html="text.node.approachTools1"
                class="approach__tools mb-4 mb-lg-0"
              ></div>
            </div>
            <div
              class="col-lg-5 ml-auto approach__doing"
              v-html="text.node.approachDoing1"
            ></div>
          </div>
          <div class="row mb-5 pb-5">
            <div class="col-lg-6">
              <p class="approach__title2">
                {{ text.node.approachDescription2 }}
              </p>
              <span class="d-inline-block approach__toolsTitle">STRUMENTI</span>
              <div
                v-html="text.node.approachTools2"
                class="approach__tools mb-4 mb-lg-0"
              ></div>
            </div>
            <div
              class="col-lg-5 ml-auto approach__doing"
              v-html="text.node.approachDoing2"
            ></div>
          </div>
          <div class="row mb-5 pb-5">
            <div class="col-lg-6">
              <p class="approach__title2">
                {{ text.node.approachDescription3 }}
              </p>
              <span class="d-inline-block approach__toolsTitle">STRUMENTI</span>
              <div
                v-html="text.node.approachTools3"
                class="approach__tools mb-4 mb-lg-0"
              ></div>
            </div>
            <div
              class="col-lg-5 ml-auto approach__doing"
              v-html="text.node.approachDoing3"
            ></div>
          </div>
          <div class="row mb-5 pb-5">
            <div class="col-lg-6">
              <p class="approach__title2">
                {{ text.node.approachDescription4 }}
              </p>
              <span class="d-inline-block approach__toolsTitle">STRUMENTI</span>
              <div
                v-html="text.node.approachTools4"
                class="approach__tools mb-4 mb-lg-0"
              ></div>
            </div>
            <div
              class="col-lg-5 ml-auto approach__doing"
              v-html="text.node.approachDoing4"
            ></div>
          </div>
        </div>
      </div>
      <div class="container tools py-5 mb-5">
        <div class="row">
          <div class="col-lg-12 mb-5">
            <h2 class="tools__title">
              Tool & <span class="text-gradient-5"> Technologies</span>
            </h2>
          </div>
          <div
            class="col-4 col-lg-2"
            v-for="logo in $page.listTech.edges"
            :key="logo.id"
          >
            <div>
              <g-image
                :src="logo.node.image"
                :alt="logo.node.title"
                class="tools__logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="row py-5">
          <ParallaxContainer
            v-for="(project, index) in $page.projects.edges.slice(0, 2)"
            :key="project.id"
            class="col-md-6"
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
          </ParallaxContainer>
        </div>
      </div>
      <LetsTalk />
    </div>
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
  listTech: allListTech {
    edges {
      node {
        id
        title
        image
      }
    }
  },
  texts: allCompetence {
    edges {
      node {
        title
        headerTitle
        competence1Img
        competence1Title
        competence1Abstract
        competence1Link
        competence1Services
        competence2Img
        competence2Title
        competence2Abstract
        competence2Link
        competence2Services
        competence3Img
        competence3Title
        competence3Abstract
        competence3Link
        competence3Services
        competence4Img
        competence4Title
        competence4Abstract
        competence4Link
        competence4Services
        approachTitle
        approachDescription
        approachImg
        approachDescription1
        approachTools1
        approachDoing1
        approachDescription2
        approachTools2
        approachDoing2
        approachDescription3
        approachTools3
        approachDoing3
        approachDescription4
        approachTools4
        approachDoing4
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
  // inizio
  // metaInfo: {
  //   title: "Competenze - Logix Software",
  //   meta: [
  //     {
  //       name: "description",
  //       content:
  //         "In Logix Software accompagniamo le aziende pubbliche e private nella loro forma digitale, progettando e sviluppando soluzioni web e mobile, pensate per gli utenti, attraverso metodologia agile, lungo un percorso consolidato."
  //     },
  //     { property: "og:title", content: "Competenze - Logix Software" },
  //     {
  //       property: "og:description",
  //       content:
  //         "In Logix Software accompagniamo le aziende pubbliche e private nella loro forma digitale, progettando e sviluppando soluzioni web e mobile, pensate per gli utenti, attraverso metodologia agile, lungo un percorso consolidato."
  //     },
  //     {
  //       property: "og:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg"
  //     },
  //     {
  //       property: "twitter:card",
  //       content: "summary"
  //     },
  //     {
  //       property: "twitter:title",
  //       content: "Competenze - Logix Software"
  //     },
  //     {
  //       property: "twitter:description",
  //       content:
  //         "In Logix Software accompagniamo le aziende pubbliche e private nella loro forma digitale, progettando e sviluppando soluzioni web e mobile, pensate per gli utenti, attraverso metodologia agile, lungo un percorso consolidato."
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg"
  //     },
  //     { property: "og:url", content: "https://www.logix-software.it/competenze" },
  //     { name: "robots", content: "index, follow" }
  //   ]
  // },
  // fine
  components: {
    AppProject,
    LetsTalk,
    ParallaxElement,
    ParallaxContainer,
  },
  data() {
    return {
      deviceWidth: 0,
    };
  },
  mounted() {
    this.deviceWidth = window.innerWidth;
    if (this.deviceWidth > 992) {
      setTimeout(function () {
        $(function () {
          // wait for document ready

          var controller = new ScrollMagic.Controller();

          var horizontalSlide = new TimelineMax()
            // animate panels
            .to("#js-slideContainer", 1, { x: "-20%" })
            .to("#js-slideContainer", 1, { x: "-40%" })
            .to("#js-slideContainer", 1, { x: "-60%" })
            .to("#js-slideContainer", 1, { x: "-74%" });

          // create scene to pin and link animation
          new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: "400%",
          })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        });
      }, 500);
    }
    // AOS.init();
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
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 500px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 80px;
    letter-spacing: -3.61px;
    line-height: 82px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      line-height: initial;
      letter-spacing: initial;
    }
  }
  &__description {
    margin-top: -40px;
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 27px;
    @media screen and (max-width: 992px) {
      margin-top: 20px;
    }
  }
}
.competence {
  &__img {
    height: 10rem;
  }
  &__title {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -1px;
    @media screen and (min-width: 992px) {
      line-height: 82px;
      font-size: 40px;
    }
  }
  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: -0.21px;
  }
  &__list {
    font-weight: 400;
    font-size: 21px;
    line-height: 29px;
    letter-spacing: -0.21px;
  }
}

.approach {
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 42px;
    line-height: 59px;
    letter-spacing: -1.46667px;
    @media screen and (min-width: 992px) {
      font-size: 68px;
      line-height: 59px;
    }
  }
  &__description {
    font-family: "Lato";
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.18px;
  }
  &__img {
    width: 100%;
  }
  &__title2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;

    letter-spacing: -0.18px;
  }
  &__tools {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    letter-spacing: -0.32px;
  }
  &__toolsTitle {
    font-family: "Lato";
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;

    letter-spacing: 1.24px;
    text-transform: uppercase;

    color: #f9b35f;
  }
  &__doing {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 35px;
    line-height: 50px;

    letter-spacing: -1px;
  }
}
.tools {
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 48px;
    letter-spacing: -4px;
    @media screen and (min-width: 992px) {
      font-size: 68px;
    line-height: 82px;
    }
  }
  &__logo {
    width: 100%;
  }
}
</style>
