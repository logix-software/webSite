<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="hero hero--competenze d-flex align-items-center text-center" :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="hero__title">{{text.node.headerTitle}}</h1>
              <div class="my-4">
                <span class="label label--development">Development</span>
              </div>
              <p
                class="hero__description"
              >{{text.node.headerAbstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence position-relative py-5">
        <div class="container position-relative py-lg-5">
          <h1 class="competence__bigText" data-aos="fade-left">{{text.node.section1BgText}}</h1>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <g-image :src="text.node.section1Image" class="competence__img" />
            </div>
            <div class="col-lg-5 ml-lg-5">
              <h1 class="competence__title my-3">{{text.node.section1Title}}</h1>
              <p
                class="competence__description mb-4"
              >{{text.node.Section1Abstract}}</p>
              <g-link to="/contatti" class="btn btn-gradient-border text-white">
                Parliamo di questo servizio
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="tool py-5">
        <div class="container py-5 position-relative">
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.toolsName}}</h6>
              <h1
                class="tool__titleSection"
              >{{text.node.toolsAbstract}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox1Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox1Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox1Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox2Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox2Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox2Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox3Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox3Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox3Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox4Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox4Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox4Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox5Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox5Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox5Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox6Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox6Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox6Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox7Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox7Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox7Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox8Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox8Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox8Abstract}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="integration py-5">
        <div class="container d-lg-flex align-items-start align-items-lg-center">
          <div class="mr-lg-5">
            <h1 class="integration__name">> {{text.node.integrationName}}</h1>
          </div>
          <div class="d-flex align-items-center mx-lg-5 px-lg-5 my-4 my-lg-0">
            <g-image :src="text.node.integration1Icon" class="integration__img" />
            <h2 class="integration__title ml-3">{{text.node.integration1}}</h2>
          </div>
          <div class="d-flex align-items-center ml-lg-5">
            <g-image :src="text.node.integration2Icon" class="integration__img" />
            <h2 class="integration__title ml-3">{{text.node.integration2}}</h2>
          </div>
        </div>
      </div>
      <div class="methods py-5">
        <div class="container py-5">
          <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center">
              <g-image src="~/assets/images/method.svg" class="methods__img" />
              <h1 class="methods__title">{{text.node.methodsName}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 mx-auto mb-4 mb-lg-0">
              <h1 class="methods__title">{{text.node.methodsBox1Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.methodsBox1Abstract}}</p>
            </div>
            <div class="col-lg-4 mx-auto">
              <h1 class="methods__title">{{text.node.methodsBox2Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.methodsBox2Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence competence--inverted position-relative py-5">
        <div class="container position-relative py-5">
          <h1 class="competence__bigText" data-aos="fade-right">{{text.node.section2BgText}}</h1>
          <div class="row align-items-center">
            <div class="col-lg-6 cont-img">
              <g-image :src="text.node.section2Image" class="competence__img" />
            </div>
            <div class="col-lg-5 ml-lg-5 cont-body">
              <h1 class="competence__title my-3">{{text.node.section2Title}}</h1>
              <p
                class="competence__description mb-4"
              >{{text.node.Section2Abstract}}</p>
              <g-link to="/contatti" class="btn btn-gradient-border text-white">
                Parliamo di questo servizio
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="tool tool--inverted py-5">
        <div class="container py-5 position-relative">
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.tools2Name}}</h6>
              <h1
                class="tool__titleSection"
              >{{text.node.tools2Abstract}}</h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box1Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box1Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box1Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="tool__card tool__card--lightGreen d-flex align-items-center justify-content-center"
              >
                <div>
                  <g-image :src="text.node.tools2Box2Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box2Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box2Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="tool__card tool__card--light d-flex align-items-center justify-content-center"
              >
                <div>
                  <g-image :src="text.node.tools2Box3Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box3Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box3Abstract}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image
                    :src="text.node.tools2Box4Icon"
                    class="tool__img"
                  />
                  <h2 class="tool__title">{{text.node.tools2Box4Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box4Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box5Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box5Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box5Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box6Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box6Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box6Abstract}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="technology py-5 bg-secondaryGray">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4 ml-lg-auto">
              <g-image :src="text.node.section3Image" class="technology__img mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-4 mr-lg-auto">
              <h1 class="technology__title">{{text.node.section3Title}}</h1>
              <p
                class="technology__description"
              >{{text.node.section3Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="technology technology--inverted py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4 mr-lg-auto col-left">
              <g-image :src="text.node.section4Image" class="technology__img mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-4 ml-lg-auto col-right">
              <h1 class="technology__title">{{text.node.section4Title}}</h1>
              <p
                class="technology__description"
              >{{text.node.section4Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="techs py-5">
        <div class="container d-inline-block d-lg-flex align-items-center justify-content-around">
          <g-image :src="text.node.logo1" class="techs__img mx-3" />
          <g-image :src="text.node.logo2" class="techs__img mx-3" />
          <g-image :src="text.node.logo3" class="techs__img mx-3" />
          <g-image :src="text.node.logo4" class="techs__img mx-3" />
          <g-image :src="text.node.logo5" class="techs__img mx-3" />
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
  texts: allSviluppoWeb {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        section1Title
        Section1Abstract
        section1BgText
        section1Link
        section1Image
        toolsAbstract
        toolsBox1Icon
        toolsBox1Title
        toolsBox1Abstract
        toolsBox2Icon
        toolsBox2Title
        toolsBox2Abstract
        toolsBox3Icon
        toolsBox3Title
        toolsBox3Abstract
        toolsBox4Icon
        toolsBox4Title
        toolsBox4Abstract
        toolsBox5Icon
        toolsBox5Title
        toolsBox5Abstract
        toolsBox6Icon
        toolsBox6Title
        toolsBox6Abstract
        toolsBox7Icon
        toolsBox7Title
        toolsBox7Abstract
        toolsBox8Icon
        toolsBox8Title
        toolsBox8Abstract
        integrationName
        integration1
        integration1Icon
        integration2
        integration2Icon
        methodsName
        methodsBox1Title
        methodsBox1Abstract
        methodsBox2Title
        methodsBox2Abstract
        section2Title
        Section2Abstract
        section2BgText
        section2Link
        section2Image
        tools2Name
        tools2Abstract
        tools2Box1Icon
        tools2Box1Title
        tools2Box1Abstract
        tools2Box2Icon
        tools2Box2Title
        tools2Box2Abstract
        tools2Box3Icon
        tools2Box3Title
        tools2Box3Abstract
        tools2Box4Icon
        tools2Box4Title
        tools2Box4Abstract
        tools2Box5Icon
        tools2Box5Title
        tools2Box5Abstract
        tools2Box6Icon
        tools2Box6Title
        tools2Box6Abstract
        section3Title
        section3Abstract
        section3Image
        section4Title
        section4Abstract
        section4Image
        logo1
        logo2
        logo3
        logo4
        logo5
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
  //   title: "Sviluppo web e mobile - Logix Software",
  //   meta: [
  //     { name: "description", content: "Ci occupiamo di sviluppare prodotti digitali, focalizzandosi su System integration, IoT, piattaforme cloud, web e mobile app, offrendo soluzioni cross platform o native, per istituzioni ed aziende." },
  //     { property: "og:title", content: "Sviluppo web e mobile - Logix Software" },
  //     {
  //       property: "og:description",
  //       content: "Ci occupiamo di sviluppare prodotti digitali, focalizzandosi su System integration, IoT, piattaforme cloud, web e mobile app, offrendo soluzioni cross platform o native, per istituzioni ed aziende."
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
  //       content: "Sviluppo web e mobile - Logix Software"
  //     },
  //     {
  //       property: "twitter:description",
  //       content: "Ci occupiamo di sviluppare prodotti digitali, focalizzandosi su System integration, IoT, piattaforme cloud, web e mobile app, offrendo soluzioni cross platform o native, per istituzioni ed aziende."
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg"
  //     },
  //     { property: "og:url", content: "https://www.logix-software.it/sviluppo-web-and-mobile" },
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
    };
  },
  mounted() {
    AOS.init();
  },
  methods:{
    getFactor(index) {
      if (index % 2 == 0) {
        return -0.05;
      } else {
        return -0.15;
      }
    },
  }
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
    right: -100px;
    bottom: 80px;
    color: rgba(255, 255, 255, 1);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    line-height: 41px;
    @media screen and (max-width: 992px) {
      font-size: 100px;
      letter-spacing: initial;
      line-height: initial;
      bottom: -60px;
      right: -20px;
    }
  }
  &--inverted {
    .competence__bigText {
      left: -100px;
      bottom: 0px;
      @media screen and (max-width: 992px) {
        left: -20px;
        bottom: -60px;
      }
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
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 80%;
    bottom: 20%;
    background-color: #f3f5fb;
  }
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
    height: 53px;
    width: 53px;
  }
  &__card {
    width: 226px;
    margin: 30px auto;
    height: 245px;
    text-align: center;
    padding: 20px 15px;
    border-radius: 3px;
    background-color: #000000;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
    &--lightGreen {
      background-color: #f0fffb !important;
      .tool__title {
        color: #000 !important;
      }
      .tool__description {
        color: #000 !important;
      }
    }
    &--light {
      background-color: #f9f9fa !important;
      .tool__title {
        color: #000 !important;
      }
      .tool__description {
        color: #000 !important;
      }
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.77px;
    line-height: 32px;
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 20px;
    margin-bottom: 0;
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
  &--inverted {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0%;
      width: 80%;
      bottom: 60%;
      background-color: #f3f5fb;
    }
  }
}
.integration {
  &__name {
    color: #111111;
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__title {
    color: #111111;
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 24px;
  }
  &__img {
    height: 53px;
    width: 53px;
  }
}
.methods {
  background-color: #1d1d1d;
  color: #fff;
  &__img {
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
.techs {
  background-color: #000;
  &__img {
    max-width: 180px;
    @media screen and (max-width: 992px) {
      max-width: 80px;
    }
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
.mouse-effect {
  width: 40px;
  top: 0;
  left: 0;
  position: fixed;
}
.bg-secondaryGray{
  background-color: #f6f7fa;
}
</style>
