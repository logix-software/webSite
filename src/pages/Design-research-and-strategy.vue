<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="hero hero--competenze d-flex align-items-center text-center" :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="hero__title">{{text.node.headerTitle}}</h1>
              <div class="my-4">
                <span class="label label--design">Design</span>
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
          <!-- <h1 class="competence__bigText" data-aos="fade-left">{{text.node.section1BgText}}</h1> -->
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
        <div class="container position-relative">
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.toolsName}}</h6>
              <h1
                class="tool__titleSection"
              >{{text.node.toolsAbstract}}</h1>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-lg-4 px-4">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class="d-flex align-items-start">
                  <div>
                    <g-image :src="text.node.toolsBox1Icon" class="tool__img mr-3" />
                  </div>

                  <div>
                    <h2 class="tool__title">{{text.node.toolsBox1Title}}</h2>
                    <p
                      class="tool__description"
                    >{{text.node.toolsBox1Abstract}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 px-4">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class="d-flex align-items-start">
                  <div>
                    <g-image :src="text.node.toolsBox2Icon" class="tool__img mr-3" />
                  </div>

                  <div>
                    <h2 class="tool__title">{{text.node.toolsBox2Title}}</h2>
                    <p
                      class="tool__description"
                    >Facciamo ricerca per comprendere chi sono gli utenti, dal personale interno a chi si occupa dell’assistenza, come utilizzano il servizio ed in quale punto si sentono frustrati e confusi, o dove avrebbero bisogno di essere rassicurati.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 px-4">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class="d-flex align-items-start">
                  <div>
                    <g-image :src="text.node.toolsBox3Icon" class="tool__img mr-3" />
                  </div>

                  <div>
                    <h2 class="tool__title">{{text.node.toolsBox3Title}}</h2>
                    <p
                      class="tool__description"
                    >{{text.node.toolsBox3Abstract}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="competence competence--inverted position-relative py-5">
        <div class="container position-relative py-5">
          <!-- <h1 class="competence__bigText">UX Strategy</h1> -->
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
        <div class="container position-relative">
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.tools2Name}}</h6>
              <h1 class="tool__titleSection">{{text.node.tools2Abstract}}</h1>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class>
                  <g-image :src="text.node.tools2Box1Icon" class="tool__img mr-3" />
                  <div>
                    <h2 class="tool__title">{{text.node.tools2Box1Title}}</h2>
                    <p
                      class="tool__description"
                    >{{text.node.tools2Box1Abstract}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class>
                  <g-image :src="text.node.tools2Box2Icon" class="tool__img mr-3" />
                  <div>
                    <h2 class="tool__title">{{text.node.tools2Box2Title}}</h2>
                    <p
                      class="tool__description"
                    >{{text.node.tools2Box2Abstract}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class>
                  <g-image :src="text.node.tools2Box3Icon" class="tool__img mr-3" />
                  <div>
                    <h2 class="tool__title">{{text.node.tools2Box3Title}}</h2>
                    <p class="tool__description">{{text.node.tools2Box3Abstract}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-start justify-content-center">
                <div class>
                  <g-image :src="text.node.tools2Box4Icon" class="tool__img mr-3" />
                  <div>
                    <h2 class="tool__title">{{text.node.tools2Box4Title}}</h2>
                    <p
                      class="tool__description"
                    >{{text.node.tools2Box4Abstract}}</p>
                  </div>
                </div>
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
                <h6 class="pl-2 pl-lg-4 partnership__name">{{text.node.section3Name}}</h6>
                <h1 class="pl-2 pl-lg-4 partnership__title mb-4">
                  {{text.node.section3Title}}
                </h1>
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
      <div class="technology py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4 ml-auto">
              <g-image :src="text.node.designPackImg" class="technology__img mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-4 mr-auto">
              <h1 class="technology__title">{{text.node.designPackTitle}}</h1>
              <p
                class="technology__description"
              >{{text.node.designPackAbstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="day">
              <g-image :src="text.node.day1Icon" class="day__img mb-2 mb-lg-0" />
              <p class="day__name mb-0">{{text.node.day1Name}}</p>
              <h6 class="day__title">{{text.node.day1Title}}</h6>
              <div class="mb-3">
                <span class="label label--design mr-2">DESIGN</span>
                <span class="label label--client">CLIENTE</span>
              </div>
              <p
                class="day__description"
              >{{text.node.day1Abstract}}</p>
            </div>
          </div>
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="day day--inverted">
              <g-image :src="text.node.day2Icon" class="day__img mb-2 mb-lg-0" />
              <p class="day__name mb-0">{{text.node.day2Name}}</p>
              <h6 class="day__title">{{text.node.day2Title}}</h6>
              <div class="mb-3">
                <span class="label label--design">DESIGN</span>
              </div>
              <p
                class="day__description"
              >{{text.node.day2Abstract}}</p>
            </div>
          </div>
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="day">
              <g-image :src="text.node.day3Icon" class="day__img mb-2 mb-lg-0" />
              <p class="day__name mb-0">{{text.node.day3Name}}</p>
              <h6 class="day__title">{{text.node.day3Title}}</h6>
              <div class="mb-3">
                <span class="label label--design mr-2">DESIGN</span>
                <span class="label label--client">CLIENTE</span>
              </div>
              <p
                class="day__description"
              >{{text.node.day3Abstract}}</p>
            </div>
          </div>
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="day day--inverted">
              <g-image :src="text.node.day4Icon" class="day__img mb-2 mb-lg-0" />
              <p class="day__name mb-0">{{text.node.day4Name}}</p>
              <h6 class="day__title">{{text.node.day4Title}}</h6>
              <div class="mb-3">
                <span class="label label--design mr-2">DESIGN</span>
              </div>
              <p
                class="day__description"
              >{{text.node.day4Abstract}}</p>
            </div>
          </div>
        </div>
        <div class="py-5 text-center my-5">
          <g-link to="/contatti" class="btn btn-gradient-border">
            Parliamo di questo servizio
          </g-link>
        </div>
      </div>
      <div class="methods position-relative">
        <h1 class="methods__bigText">{{text.node.section4BgText}}</h1>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4 mx-auto mb-5 pb-5 pb-lg-0 mb-lg-0">
              <g-image :src="text.node.section4Box1Icon" class="methods__img" />
              <h1 class="methods__title">{{text.node.section4Box1Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.section4Box1Abstract}}</p>
            </div>
            <div class="col-lg-4 mx-auto">
              <g-image :src="text.node.section4Box2Icon" class="methods__img" />
              <h1 class="methods__title">{{text.node.section4Box2Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.section4Box2Abstract}}</p>
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
  texts: allDesign {
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
        section2Title
        Section2Abstract
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
        section3Name
        section3Title
        logo1
        logo2
        logo3
        logo4
        cta
        ctaLink
        designPackImg
        designPackTitle
        designPackAbstract
        day1Icon
        day1Icon
        day1Title
        day1Abstract
        day2Icon
        day2Icon
        day2Title
        day2Abstract
        day3Icon
        day3Icon
        day3Title
        day3Abstract
        day4Icon
        day4Icon
        day4Title
        day4Abstract
        section4BgText
        section4Box1Icon
        section4Box1Title
        section4Box1Abstract
        section4Box2Icon
        section4Box2Title
        section4Box2Abstract
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
    title: "Design - Logix Software",
    meta: [
      { name: "description", content: "Attraverso i nostri servizi di design, permettiamo ad aziende ed istituzione di ideare esperienze digitali pensate per gli utenti finali e sviluppate sulla base di ricerche ed analisi concrete." },
      { property: "og:title", content: "Design - Logix Software" },
      {
        property: "og:description",
        content: "Attraverso i nostri servizi di design, permettiamo ad aziende ed istituzione di ideare esperienze digitali pensate per gli utenti finali e sviluppate sulla base di ricerche ed analisi concrete."
      },
      {
        property: "og:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Design - Logix Software"
      },
      {
        property: "twitter:description",
        content: "Attraverso i nostri servizi di design, permettiamo ad aziende ed istituzione di ideare esperienze digitali pensate per gli utenti finali e sviluppate sulla base di ricerche ed analisi concrete."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      { property: "og:url", content: "https://www.logix-software.it/design-research-and-strategy" },
      { name: "robots", content: "index, follow" }
    ]
  },
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
      font-size: 100px;
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
.day {
  border-radius: 3px;
  background-color: #f0fffb;
  box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
  text-align: center;
  width: 220px;
  margin: 0 auto;
  padding: 20px 12px;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 14px 10px;
  }
  &--inverted {
    background-color: #f9f9fa;
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
