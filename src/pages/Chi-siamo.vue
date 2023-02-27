<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="hero hero--projects d-flex align-items-center justify-content-center text-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="mx-auto">
          <h1
            class="hero__title"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {{ text.node.headerTitle1 }}
          </h1>
          <h1
            class="hero__title hero__title--2"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {{ text.node.headerTitle2 }}
          </h1>
        </div>
      </div>
      <div class="aboutUs pt-5">
        <div class="py-5">
          <div class="container mb- text-center">
            <div class="row">
              <div class="col-lg-9 mx-auto">
                <h6 class="aboutUs__title">{{ text.node.sectionTitle }}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 mb-4"
              v-for="team in $page.listTeam.edges"
              :key="team.id"
            >
              <app-team :name="team.node.name" :img="team.node.image" :team="team.node.team" :position="team.node.position" />
            </div>
          </div>
        </div>

        <div class="workForUs py-5" v-if="text.node.numberPosition > 0">
          <div class="container py-5">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="workForUs__title">{{ text.node.workForUsTitle }}</h1>
                <p class="workForUs__description">
                  {{ text.node.workForUsDescription1 }}
                </p>
              </div>
            </div>
            <div class="row py-5">
              <div
                class="col-lg-6 position mb-5"
                v-if="text.node.numberPosition > 0"
              >
                <div class="position__body">
                  <h1 class="position__title">
                    {{ text.node.position1Title }}
                  </h1>
                  <p class="position__place mb-0">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    {{ text.node.position1Location }}
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6 position mb-5"
                v-if="text.node.numberPosition > 1"
              >
                <div class="position__body">
                  <h1 class="position__title">
                    {{ text.node.position2Title }}
                  </h1>
                  <p class="position__place mb-0">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    {{ text.node.position2Location }}
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6 position mb-5"
                v-if="text.node.numberPosition > 2"
              >
                <div class="position__body">
                  <h1 class="position__title">
                    {{ text.node.position3Title }}
                  </h1>
                  <p class="position__place mb-0">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    {{ text.node.position3Location }}
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6 position mb-5"
                v-if="text.node.numberPosition > 3"
              >
                <div class="position__body">
                  <h1 class="position__title">
                    {{ text.node.position4Title }}
                  </h1>
                  <p class="position__place mb-0">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    {{ text.node.position4Location }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <p class="workForUs__description">
                  {{ text.node.workForUsDescription2 }}
                </p>
                <a href="mailto:info@logixcorp.it" class="workForUs__link"
                  >info@logixcorp.it</a
                >
                <p class="workForUs__description">
                  {{ text.node.workForUsDescription3 }}
                </p>
                <g-link to="/contatti" class="btn btn-secondary">
                  Contattaci
                </g-link>
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
  listTeam: allListTeam {
    edges {
      node {
        id
        name
        position
        team
        image
      }
    }
  },
 texts: allAbout {
    edges {
      node {
        title
        headerTitle1
        headerTitle2
        headerImage
        sectionTitle
        workForUsTitle
        workForUsDescription1
        workForUsDescription2
        workForUsDescription3
        numberPosition
        position1Title
        position1Location
        position2Title
        position2Location
        position3Title
        position3Location
        position4Title
        position4Location
      }
    }
  },
}
</page-query>
<script>
import AppTeam from "~/components/AppTeam.vue";
import LetsTalk from "~/components/LetsTalk.vue";
import AppProject from "~/components/AppProject.vue";
import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";

export default {
  // inizio
  // metaInfo: {
  //   title: "Chi siamo - Logix Software",
  //   meta: [
  //     {
  //       name: "description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
  //     },
  //     { property: "og:title", content: "Chi siamo - Logix Software" },
  //     {
  //       property: "og:description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
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
  //       content: "Chi siamo - Logix Software"
  //     },
  //     {
  //       property: "twitter:description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg"
  //     },
  //     { property: "og:url", content: "https://www.logix-software.it/chi-siamo" },
  //     { name: "robots", content: "index, follow" }
  //   ]
  // },
  // fine
  components: {
    AppTeam,
    LetsTalk,
    AppProject,
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
    } else {
      setTimeout(function () {
        $(".owl-carousel-team").owlCarousel({
          loop: true,
          nav: false,
          items: 1,
        });
      }, 500);
    }
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
  background-color: #111111;
  min-height: 750px;
  position: relative;
  @media screen and (max-width: 992px) {
    min-height: 500px;
  }
  color: #ffffff;
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
    font-size: 161px;
    letter-spacing: -9.63px;
    line-height: 140px;
    &--2 {
      padding-right: 2px;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      background-image: linear-gradient(
        99.98deg,
        #36f2b9 7.48%,
        #7878f9 56.76%,
        #f60994 127.38%
      );
    }
    @media screen and (max-width: 992px) {
      font-size: 62px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
}
.aboutUs {
  color: #ffffff;
  background-color: #000000;
  &__title {
    font-family: "DM Sans";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 50px;
    @media screen and (max-width: 992px) {
      font-size: 30px;
      line-height: initial;
    }
  }
  &__bgText {
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    @media screen and (max-width: 992px) {
      font-size: 50px;
      letter-spacing: initial;
    }
  }
}
.team {
  width: 315px;
  position: relative;
  &__photo {
    height: 320px;
    width: 243px;
    // background-image: url("~@/assets/images/team.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // margin-left: auto;
  }
  &__body {
    width: 243px;
  }
  &__deco {
    position: absolute;
    left: 0;
    top: 80px;
    @media screen and (max-width: 992px) {
      width: 100px !important;
    }
  }
  &__team {
    padding: 4px 10px;
    background-color: #b5f7e3;
    color: #171756;
    font-family: Lato;
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 18px;
    text-align: center;
    &--operation {
      background-color: #f9b35f;
    }
    &--accounting {
      background-color: #b3e9fa;
    }
    &--dev {
      background-color: #b5f7e3;
    }
    &--marketing {
      background-color: #ffa5d6;
    }
    &--design {
      background-color: #d0d0ff;
    }
  }
  &__name {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1.47px;
  }
  &__position {
    font-family: "DM Sans";
    font-size: 22px;
    letter-spacing: -0.44px;
  }
}
.sections {
  @media screen and (min-width: 992px) {
    width: 700%;
    height: 100%;
  }
}
.wrapper {
  @media screen and (min-width: 992px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-perspective: 1700;
    perspective: 1700;
    padding-left: 7%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  /* background: #F64747; */

  //   padding-top: 4%;
  //   padding-bottom: 4%;
  //   @media screen and (max-width: 992px) {
  //     padding-left: 5%;
  //     padding-top: 200px;
  //     padding-bottom: 200px;
  //   }
}
.step {
  @media screen and (min-width: 992px) {
    height: 100%;
    width: calc(100% / 19);
    float: left;
  }
  position: relative;

  .container--custom {
    @media screen and (min-width: 992px) {
      //   margin-left: 60px;
    }
  }
  &__deco {
    width: 100%;
  }
  &__name {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -8.72px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: initial;
    }
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 44px;
    width: 50%;
    @media screen and (max-width: 992px) {
      width: 100%;
      font-size: 30px;
    }
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__list {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 16px;
    letter-spacing: -0.32px;
    line-height: 26px;
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
  &__keyWord {
    color: #f9b35f;
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.24px;
    line-height: 25px;
  }
  &__num {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: initial;
    }
  }
  &__shortDeco {
    width: 65px !important;
  }
  &--inverted {
    .col-left {
      order: 1;
      @media screen and (max-width: 992px) {
        order: 0;
      }
    }
    .col-right {
      order: 0;
      @media screen and (max-width: 992px) {
        order: 1;
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
.workForUs {
  position: relative;
  @media screen and (min-width: 992px) {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 60%;
      height: 100%;
      top: 0;
      bottom: 0;
      background-color: #f3f5fb;
    }
  }
  background-color: #fff;
  color: #000000;
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__link {
    font-family: "DM Sans";
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.44px;
    color: #000000;
  }
}
.position {
  &__body {
    border-radius: 3px;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
    padding: 30px 22px;
  }
  &__title {
    font-family: "DM Sans";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -0.48px;
  }
  &__place {
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    svg {
      width: 12px;
    }
  }
  &:nth-child(even) {
    .position__body {
      background-color: #f0fffb;
    }
  }
  &:nth-child(odd) {
    .position__body {
      background-color: #f9f9fa;
    }
  }
}
</style>
