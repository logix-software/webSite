<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="heroCompetenze d-flex align-items-center text-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mx-auto">
              <h1 class="heroCompetenze__title">{{ text.node.headerTitle }}</h1>
              <div class="my-4">
                <span class="label label--development mx-2">Development</span>
                <span class="label label--design mx-2">Design</span>
              </div>
              <p class="heroCompetenze__description">
                {{ text.node.headerAbstract }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bigText d-flex align-items-center">
        <div class="container-fluid">
          <div
            class="row"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div class="col-lg-12 text-left">
              <h1 class="bigText__title">{{ text.node.sentence1 }}</h1>
            </div>
          </div>
          <div
            class="row"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div class="col-lg-12 text-right">
              <h1 class="bigText__title">{{ text.node.sentence2 }}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="learn py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <div class="position-relative">
                <g-image
                  src="~/assets/images/deco-question-green.svg"
                  class="learn__deco mb-5"
                  alt="decoration"
                />
                <h6 class="learn__name">{{ text.node.section1Name }}</h6>
              </div>

              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title1 }}
              </h1>
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title2 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__bgText position-relative">
                {{ text.node.section1BgText }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title3 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title4 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title5 }}
              </h1>
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section1Title6 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
        </div>
      </div>
      <div class="strategy pt-5">
        <g-image :src="text.node.section1Image" class="strategy__img mb-5" />
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <div class="position-relative">
                <g-image
                  src="~/assets/images/deco-question-purple.svg"
                  class="strategy__deco mb-5"
                  alt="decoration"
                />
                <h6 class="strategy__name">{{ text.node.section2Name }}</h6>
              </div>

              <h1 class="strategy__title">
                <span
                  class="strategy__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section2Title1 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="strategy__bgText position-relative">
                {{ text.node.section2BgText }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="strategy__title">
                <span
                  class="strategy__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section2Title2 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
        </div>
        <div class="text-right">
          <g-image :src="text.node.section2Image" class="strategy__img2" />
        </div>
      </div>
      <div class="make py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <div class="position-relative">
                <g-image
                  src="~/assets/images/icon-question-green.svg"
                  class="make__deco mb-5"
                  alt="decoration"
                />
                <h6 class="make__name">{{ text.node.section3Name }}</h6>
              </div>

              <h1 class="make__title">
                <span
                  class="make__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section3Title1 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="make__title">
                <span
                  class="make__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >{{ text.node.section3Title2 }}
              </h1>
              <h1 class="make__title">
                <span
                  class="make__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section3Title3 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="make__title">
                <span
                  class="make__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section3Title4 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="make__bgText position-relative">
                {{ text.node.section3BgText }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="learn learn--2 py-lg-5">
        <div class="container py-lg-5">
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__bgText position-relative">
                {{ text.node.section4BgText }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <div class="position-relative">
                <g-image
                  src="~/assets/images/deco-question-purple.svg"
                  class="learn__deco mb-5"
                  alt="decoration"
                />
                <h6 class="learn__name">{{ text.node.section4Name }}</h6>
              </div>

              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section4Title1 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section4Title2 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0">
              <h1 class="learn__title">
                <span
                  class="learn__arrow"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  >></span
                >
                {{ text.node.section4Title3 }}
              </h1>
            </div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
            <div class="col-lg-3 mb-2 mb-lg-0"></div>
          </div>
          <div class="row py-2 py-lg-5 pb-5">
            <div class="col-lg-7 mx-auto text-center py-5">
              <g-image
                src="~/assets/images/arrowDown.svg"
                class="mb-5"
                alt="decoration"
              />
              <h1 class="learn__conclusion">{{ text.node.section5Title }}</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="advantages py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6 mx-auto text-center mb-5">
              <h6 class="advantages__name">{{ text.node.section6Name }}</h6>
              <h1 class="advantages__titleSection">
                {{ text.node.section6Title }}
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-11 mx-auto">
              <div class="row">
                <div class="col-lg-6 mb-2 mb-lg-5">
                  <div class="d-lg-flex align-items-start">
                    <g-image
                      src="~/assets/images/icon-num-1.svg"
                      class="advantages__num"
                      alt="number 1"
                    />
                    <div>
                      <h1 class="advantages__title">
                        {{ text.node.section6Box1Title }}
                      </h1>
                      <p class="advantages__description">
                        {{ text.node.section6Box1Abstract }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-2 mb-lg-5">
                  <div class="d-lg-flex align-items-start">
                    <g-image
                      src="~/assets/images/icon-num-2.svg"
                      class="advantages__num"
                      alt="number 2"
                    />
                    <div>
                      <h1 class="advantages__title">
                        {{ text.node.section6Box2Title }}
                      </h1>
                      <p class="advantages__description">
                        {{ text.node.section6Box2Abstract }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-2 mb-lg-5">
                  <div class="d-lg-flex align-items-start">
                    <g-image
                      src="~/assets/images/icon-num-3.svg"
                      class="advantages__num"
                      alt="number 3"
                    />
                    <div>
                      <h1 class="advantages__title">
                        {{ text.node.section6Box3Title }}
                      </h1>
                      <p class="advantages__description">
                        {{ text.node.section6Box3Abstract }}
                      </p>
                    </div>
                  </div>
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
              label1="DEVELOPMENT"
              label2="DEVELOPMENT"
              label3="DEVELOPMENT"
              tag1="DEVELOPMENT"
              tag2="DEVELOPMENT"
              tag3="DEVELOPMENT"
              class="mb-5 mb-md-2"
            ></app-project>
          </ParallaxElement>
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
        image1
        hashtags
        abstract
        path
      }
    }
  },
  texts: allDigitalTransformation {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        sentence1
        sentence2
        section1BgText
        section1Name
        section1Title1
        section1Title2
        section1Title3
        section1Title4
        section1Title5
        section1Title6
        section1Image
        section2BgText
        section2Name
        section2Title1
        section2Title2
        section2Image
        section3BgText
        section3Name
        section3Title1
        section3Title2
        section3Title3
        section3Title4
        section4BgText
        section4Name
        section4Title1
        section4Title2
        section4Title3
        section5Title
        section6Name
        section6Title
        section6Box1Title
        section6Box1Abstract
        section6Box2Title
        section6Box2Abstract
        section6Box3Title
        section6Box3Abstract
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
  //   title: "Digital Transformation - Logix Software",
  //   meta: [
  //     { name: "description", content: "Abbiamo pensato il servizio di Digital Transformation per aziende pubbliche e private che vogliono, anche grazie ai piani Industria 4.0 e transizione 4.0, realizzare, migliorare o ridisegnare prodotti e servizi digitali. " },
  //     { property: "og:title", content: "Digital Transformation - Logix Software" },
  //     {
  //       property: "og:description",
  //       content: "Abbiamo pensato il servizio di Digital Transformation per aziende pubbliche e private che vogliono, anche grazie ai piani Industria 4.0 e transizione 4.0, realizzare, migliorare o ridisegnare prodotti e servizi digitali. "
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
  //       content: "Digital Transformation - Logix Software"
  //     },
  //     {
  //       property: "twitter:description",
  //       content: "Abbiamo pensato il servizio di Digital Transformation per aziende pubbliche e private che vogliono, anche grazie ai piani Industria 4.0 e transizione 4.0, realizzare, migliorare o ridisegnare prodotti e servizi digitali. "
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg"
  //     },
  //     { property: "og:url", content: "https://www.logix-software.it/digital-transformation" },
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
.heroCompetenze {
  width: 100%;
  height: 750px;
  // background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 600px;
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
.bigText {
  background-color: #000000;
  height: 450px;
  color: #fff;
  @media screen and (max-width: 992px) {
    height: 350px;
  }
  @media screen and (max-width: 576px) {
    height: 250px;
  }
  &__title {
    font-size: 161px;
    letter-spacing: -9.63px;
    @media screen and (max-width: 992px) {
      font-size: 75px;
      letter-spacing: initial;
    }
    @media screen and (max-width: 576px) {
      font-size: 44px;
      letter-spacing: initial;
    }
  }
}
.learn {
  //   height: 600px;
  background-color: #000000;
  color: #fff;
  &__bgText {
    color: rgba(266, 255, 255, 0.23);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    position: absolute;
    left: -90px;
    width: 400%;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 80px;
      letter-spacing: initial;
      left: -20px;
    }
  }
  &__title {
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
    font-family: "DM Sans", sans-serif;
    position: relative;
    z-index: 1;
  }
  &__name {
    position: absolute;
    left: 75px;
    bottom: 35px;
  }
  &__arrow {
    color: #36f2b9;
  }
  &__conclusion {
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
    line-height: 58px;
    @media screen and (max-width: 992px) {
      font-size: 50px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &--2 {
    .learn__arrow {
      color: #7878f9;
    }
    .learn__bgText {
      top: 200px;
    }
  }
}
.strategy {
  background-color: #f3f5fb;
  color: #000000;
  &__img {
    margin-top: -100px;
    width: 633px;
    @media screen and (max-width: 992px) {
      width: 80%;
    }
  }
  &__img2 {
    margin-top: 0;
    margin-right: 0;
    width: 633px;
    @media screen and (max-width: 992px) {
      width: 80%;
    }
  }
  &__bgText {
    color: rgba(266, 255, 255, 0.53);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    position: absolute;
    left: -90px;
    width: 500%;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 80px;
      letter-spacing: initial;
      left: -20px;
    }
  }
  &__title {
    font-size: 35px;
    letter-spacing: -1.28px;
    line-height: 37px;
    font-family: "Lexend Deca";
    position: relative;
    z-index: 1;
  }
  &__name {
    position: absolute;
    left: 75px;
    bottom: 35px;
  }
  &__arrow {
    color: #7878f9;
  }
}
.make {
  background-color: #f3f5fb;
  color: #000000;
  &__bgText {
    color: rgba(266, 255, 255, 0.53);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    position: absolute;
    right: 120%;
    top: 50px;
    width: 400%;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 80px;
      letter-spacing: initial;
      right: -10%;
      //  left: -20px;
    }
  }
  &__title {
    font-size: 35px;
    font-family: "Lexend Deca";
    letter-spacing: -1.28px;
    line-height: 37px;
    position: relative;
    z-index: 1;
  }
  &__name {
    position: absolute;
    left: 85px;
    bottom: 35px;
  }
  &__arrow {
    color: #36f2b9;
  }
}
.advantages {
  color: #000;
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__titleSection {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__num {
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 35px;
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

.cta {
  @media screen and (max-width: 992px) {
    bottom: -60px;
  }
  &--black {
    @media screen and (max-width: 992px) {
      bottom: -80px;
    }
    @media screen and (max-width: 576px) {
      bottom: -120px;
    }
  }
}
</style>
