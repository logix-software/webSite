<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="hero d-flex align-items-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <g-image src="~/assets/images/deco-with-arrow1.svg" class="hero__deco1" />
        <g-image src="~/assets/images/deco-with-arrow2.svg" class="hero__deco2" />
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="hero__title">{{text.node.headerTitle}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 ml-auto">
              <p class="hero__description">{{text.node.headerAbstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="caseHistoryCompetenze">
                <div class="d-lg-flex align-items-center justify-content-between" v-for="textCtaProject in $page.textsCtaProject.edges"
      :key="textCtaProject.id">
                  <div class="d-lg-flex align-items-start">
                    <g-image :src="textCtaProject.node.image" class="caseHistoryCompetenze__img" />
                    <div class="caseHistoryCompetenze__body ml-4">
                      <div class="mb-2">
                        <span class="label label--dev mr-3">DEVELOPMENT</span>
                        <span class="label label--des">DESIGN</span>
                      </div>
                      <h1 class="caseHistoryCompetenze__title">{{textCtaProject.node.title}}</h1>
                      <p
                        class="caseHistoryCompetenze__description"
                      >{{textCtaProject.node.description}}</p>
                      <p
                        class="caseHistoryCompetenze__tags"
                      >{{textCtaProject.node.hashtags}}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <g-link :to="textCtaProject.node.link" class="caseHistoryCompetenze__link">_Scopri di più</g-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container method pt-5 mt-5">
          <div class="row">
            <div class="col-lg-6">
              <h6 class="method__name">{{text.node.section1Name}}</h6>
              <h1 class="method__title">{{text.node.section1Title}}</h1>
              <p class="method__description">{{text.node.section1Abstract}}</p>
            </div>
          </div>
        </div>
        <div v-if="deviceWidth > 992">
          <div class="wrapper" id="js-wrapper">
            <div class="sections" id="js-slideContainer">
              <div class="step">
                <div class="container container--custom">
                  <div class="row">
                    <div class="col-lg-6 col-left d-flex flex-column">
                      <div class="col-left">
                        <h1 class="step__name">{{text.node.slider1Slide1Title}}</h1>
                        <div class="d-flex align-items-center">
                          <h6 class="step__num">{{text.node.slider1Slide1Number}}</h6>
                          <g-image
                            src="~/assets/images/deco-short2.svg"
                            class="step__shortDeco ml-3"
                          />
                        </div>
                        <p class="step__description">{{text.node.slider1Slide1Abstract}}</p>
                      </div>
                      <div class="col-right">
                        <h6 class="step__keyWord">{{text.node.slider1Slide1ToolsName}}</h6>
                        <p class="step__list">{{text.node.slider1Slide1ToolsTitle}}</p>
                        <!-- <p class="step__list">{{text.node.slider1Slide1ToolsTitle}}</p> -->
                      </div>
                    </div>
                    <div class="col-lg-6 col-right">
                      <h6 class="step__keyWord mt-4">{{text.node.slider1Slide1StepName}}</h6>
                      <h2 class="step__title">{{text.node.slider1Slide1StepTitle}}</h2>
                      <g-image :src="text.node.slider1Slide1Image" class="step__deco" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step step--inverted">
                <div class="container container--custom">
                  <div class="row">
                    <div class="col-lg-6 col-left d-flex flex-column">
                      <div class="col-left">
                        <h1 class="step__name">{{text.node.slider1Slide2Title}}</h1>
                        <div class="d-flex align-items-center">
                          <h6 class="step__num">{{text.node.slider1Slide2Number}}</h6>
                          <g-image
                            src="~/assets/images/deco-short2.svg"
                            class="step__shortDeco ml-3"
                          />
                        </div>
                        <p class="step__description">{{text.node.slider1Slide2Abstract}}</p>
                      </div>
                      <div class="col-right">
                        <h6 class="step__keyWord">{{text.node.slider1Slide2ToolsName}}</h6>
                        <p class="step__list">{{text.node.slider1Slide2ToolsTitle}}</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-right">
                      <h6 class="step__keyWord mt-4">{{text.node.slider1Slide2StepName}}</h6>
                      <h2 class="step__title">{{text.node.slider1Slide2StepTitle}}</h2>
                      <g-image :src="text.node.slider1Slide2Image" class="step__deco" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="container container--custom">
                  <div class="row">
                    <div class="col-lg-6 col-left d-flex flex-column">
                      <div class="col-left">
                        <h1 class="step__name">{{text.node.slider1Slide3Title}}</h1>
                        <div class="d-flex align-items-center">
                          <h6 class="step__num">{{text.node.slider1Slide3Number}}</h6>
                          <g-image
                            src="~/assets/images/deco-short2.svg"
                            class="step__shortDeco ml-3"
                          />
                        </div>
                        <p class="step__description">{{text.node.slider1Slide3Abstract}}</p>
                      </div>
                      <div class="col-right">
                        <h6 class="step__keyWord">{{text.node.slider1Slide3ToolsName}}</h6>
                        <p class="step__list">{{text.node.slider1Slide3ToolsTitle}}</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-right">
                      <h6 class="step__keyWord mt-4">{{text.node.slider1Slide3StepName}}</h6>
                      <h2 class="step__title">{{text.node.slider1Slide3StepTitle}}</h2>
                      <g-image :src="text.node.slider1Slide3Image" class="step__deco" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step step--inverted">
                <div class="container container--custom">
                  <div class="row">
                    <div class="col-lg-6 col-left d-flex flex-column">
                      <div class="col-left">
                        <h1 class="step__name">{{text.node.slider1Slide4Title}}</h1>
                        <div class="d-flex align-items-center">
                          <h6 class="step__num">{{text.node.slider1Slide4Number}}</h6>
                          <g-image
                            src="~/assets/images/deco-short2.svg"
                            class="step__shortDeco ml-3"
                          />
                        </div>
                        <p class="step__description">{{text.node.slider1Slide4Abstract}}</p>
                      </div>
                      <div class="col-right">
                        <h6 class="step__keyWord">{{text.node.slider1Slide4ToolsName}}</h6>
                        <p class="step__list">{{text.node.slider1Slide4ToolsTitle}}</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-right">
                      <h6 class="step__keyWord mt-4">{{text.node.slider1Slide4StepName}}</h6>
                      <h2 class="step__title">{{text.node.slider1Slide4StepTitle}}</h2>
                      <g-image :src="text.node.slider1Slide4Image" class="step__deco" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <div
                  class="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div class="d-flex align-items-end justify-content-between">
                    <h6 class="step__num">{{text.node.slider1Slide1Number}}</h6>
                    <h1 class="step__name">{{text.node.slider1Slide1Title}}</h1>
                    <div>
                      <i class="fas fa-plus text-white"></i>
                    </div>
                  </div>
                  <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
                </div>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p class="step__description">{{text.node.slider1Slide1Abstract}}</p>

                  <div class="col-right">
                    <h6 class="step__keyWord">{{text.node.slider1Slide1ToolsName}}</h6>
                    <p class="step__list">{{text.node.slider1Slide1ToolsTitle}}</p>
                  </div>
                  <div class="col-right">
                    <h6 class="step__keyWord mt-4">{{text.node.slider1Slide1StepName}}</h6>
                    <h2 class="step__title">{{text.node.slider1Slide1StepTitle}}</h2>
                    <g-image :src="text.node.slider1Slide1Image" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingTwo">
                <div
                  class="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <div class="d-flex align-items-end justify-content-between">
                    <h6 class="step__num">{{text.node.slider1Slide2Number}}</h6>
                    <h1 class="step__name">{{text.node.slider1Slide2Title}}</h1>
                    <div>
                      <i class="fas fa-plus text-white"></i>
                    </div>
                  </div>
                  <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
                </div>
              </div>

              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p class="step__description">{{text.node.slider1Slide2Abstract}}</p>

                  <div class="col-right">
                    <h6 class="step__keyWord">{{text.node.slider1Slide2ToolsName}}</h6>
                    <p class="step__list">{{text.node.slider1Slide2ToolsTitle}}</p>
                  </div>
                  <div class="col-right">
                    <h6 class="step__keyWord mt-4">{{text.node.slider1Slide2StepName}}</h6>
                    <h2 class="step__title">{{text.node.slider1Slide2StepTitle}}</h2>
                    <g-image :src="text.node.slider1Slide2Image" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <div
                  class="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  <div class="d-flex align-items-end justify-content-between">
                    <h6 class="step__num">{{text.node.slider1Slide3Number}}</h6>
                    <h1 class="step__name">{{text.node.slider1Slide3Title}}</h1>
                    <div>
                      <i class="fas fa-plus text-white"></i>
                    </div>
                  </div>
                  <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
                </div>
              </div>

              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p class="step__description">{{text.node.slider1Slide1Abstract}}</p>

                  <div class="col-right">
                    <h6 class="step__keyWord">{{text.node.slider1Slide3ToolsName}}</h6>
                    <p class="step__list">{{text.node.slider1Slide3ToolsTitle}}</p>
                  </div>
                  <div class="col-right">
                    <h6 class="step__keyWord mt-4">{{text.node.slider1Slide3StepName}}</h6>
                    <h2 class="step__title">{{text.node.slider1Slide3StepTitle}}</h2>
                    <g-image :src="text.node.slider1Slide3Image" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour">
                <div
                  class="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  <div class="d-flex align-items-end justify-content-between">
                    <h6 class="step__num">{{text.node.slider1Slide4Number}}</h6>
                    <h1 class="step__name">{{text.node.slider1Slide4Title}}</h1>
                    <div>
                      <i class="fas fa-plus text-white"></i>
                    </div>
                  </div>
                  <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
                </div>
              </div>

              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p class="step__description">{{text.node.slider1Slide4Abstract}}</p>

                  <div class="col-right">
                    <h6 class="step__keyWord">{{text.node.slider1Slide4ToolsName}}</h6>
                    <p class="step__list">{{text.node.slider1Slide4ToolsTitle}}</p>
                  </div>
                  <div class="col-right">
                    <h6 class="step__keyWord mt-4">{{text.node.slider1Slide4StepName}}</h6>
                    <h2 class="step__title">{{text.node.slider1Slide4StepTitle}}</h2>
                    <g-image :src="text.node.slider1Slide4Image" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="expertise pt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto mb-5 mb-lg-0">
              <h6 class="expertise__name">{{text.node.section2Name}}</h6>
              <h1 class="expertise__title">{{text.node.section2Title}}</h1>
              <p class="expertise__description">{{text.node.section2Abstract}}</p>
            </div>
          </div>
        </div>
        <div class="container pt-5">
          <div class="row mb-5">
            <div class="col-lg-9 d-flex align-items-center skill skill--right py-5 mb-4">
              <div class="skill__body">
                <div class="my-3">
                  <span class="label label--dev mr-2">Development</span>
                  <span class="label label--des mx-2">Design</span>
                </div>
                <h1 class="skill__title">{{text.node.competence1Title}}</h1>
                <div class="skill__line mb-3"></div>
                <p class="skill__description">{{text.node.competence1Abstract}}</p>
                <g-link
                  :to="text.node.competence1Link"
                  class="btn btn-secondary"
                >Approfondisci expertise</g-link>
              </div>

              <g-image :src="text.node.competence1Img" class="skill__img" />
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-9 d-flex align-items-center skill py-5 mb-4">
              <div class="skill__body">
                <div class="my-3">
                  <span class="label label--dev mr-2">Development</span>
                </div>
                <h1 class="skill__title">{{text.node.competence2Title}}</h1>
                <div class="skill__line mb-3"></div>
                <p class="skill__description">{{text.node.competence2Abstract}}</p>
                <g-link
                  :to="text.node.competence2Link"
                  class="btn btn-secondary"
                >Approfondisci expertise</g-link>
              </div>

              <g-image :src="text.node.competence2Img" class="skill__img" />
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-9 d-flex align-items-center skill skill--right py-5 mb-4">
              <div class="skill__body">
                <div class="my-3">
                  <span class="label label--des mx-2">Design</span>
                </div>
                <h1 class="skill__title">{{text.node.competence3Title}}</h1>
                <div class="skill__line mb-3"></div>
                <p class="skill__description">{{text.node.competence3Abstract}}</p>
                <g-link
                  :to="text.node.competence3Link"
                  class="btn btn-secondary"
                >Approfondisci expertise</g-link>
              </div>

              <g-image :src="text.node.competence3Img" class="skill__img" />
            </div>
          </div>
          <div class="row mb-0">
            <div class="col-lg-9 d-flex align-items-center skill py-5">
              <div class="skill__body">
                <div class="my-3">
                  <span class="label label--dev mr-2">Development</span>
                  <span class="label label--des mx-2">Design</span>
                </div>
                <h1 class="skill__title">{{text.node.competence4Title}}</h1>
                <div class="skill__line mb-3"></div>
                <p class="skill__description">{{text.node.competence4Abstract}}</p>
                <g-link
                  :to="text.node.competence4Link"
                  class="btn btn-secondary"
                >Approfondisci expertise</g-link>
              </div>

              <g-image :src="text.node.competence4Img" class="skill__img" />
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
        <g-image src="~/assets/images/deco2.svg" class="partnership__deco" />
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
              <a href="http://" class="btn btn-primary mx-1 mx-lg-2">Certo</a>
              <a href="http://" class="btn btn-secondary mx-1 mx-lg-2">Abbastanza</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 pt-5">
        <div class="row">
          <div class="col-lg-10 ml-auto position-relative mt-lg-5">
            <div class="cta cta--black">
              <g-image src="~/assets/images/deco3.svg" class="cta__deco" />
              <div class="d-flex align-items-center justify-content-between w-75">
                <h1 class="cta__title">{{textPartnership.node.ctaTitle}}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  texts: allCompetence {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        section1Name
        section1Title
        section1Abstract
        slider1Slide1Title
        slider1Slide1Number
        slider1Slide1StepName
        slider1Slide1StepTitle
        slider1Slide1ToolsName
        slider1Slide1ToolsTitle
        slider1Slide1Abstract
        slider1Slide1Image
        slider1Slide2Title
        slider1Slide2Number
        slider1Slide2StepName
        slider1Slide2StepTitle
        slider1Slide2ToolsName
        slider1Slide2ToolsTitle
        slider1Slide2Abstract
        slider1Slide2Image
        slider1Slide3Title
        slider1Slide3Number
        slider1Slide3StepName
        slider1Slide3StepTitle
        slider1Slide3ToolsName
        slider1Slide3ToolsTitle
        slider1Slide3Abstract
        slider1Slide3Image
        slider1Slide4Title
        slider1Slide4Number
        slider1Slide4StepName
        slider1Slide4StepTitle
        slider1Slide4ToolsName
        slider1Slide4ToolsTitle
        slider1Slide4Abstract
        slider1Slide4Image
        section2Name
        section2Title
        section2Abstract
        competence1Title
        competence1Link
        competence1Abstract
        competence1Img
        competence2Title
        competence2Link
        competence2Abstract
        competence2Img
        competence3Title
        competence3Link
        competence3Abstract
        competence3Img
        competence4Title
        competence4Link
        competence4Abstract
        competence4Img
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
      }
    }
  }
  textsCtaProject: allCtaProject {
    edges {
      node {
        title
        hashtags
        image
        description
        link
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Competenze - ",
    meta: [
      { name: "description", content: "" },
      { property: "og:title", content: "" },
      {
        property: "og:description",
        content: ""
      },
      {
        property: "og:image",
        content: ""
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: ""
      },
      {
        property: "twitter:description",
        content: ""
      },
      {
        property: "twitter:image",
        content: ""
      },
      { property: "og:url", content: "" },
      { name: "robots", content: "index, follow" }
    ]
  },
  data() {
    return {
      deviceWidth: 0
    };
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
    this.deviceWidth = window.innerWidth;
    if (this.deviceWidth > 992) {
      setTimeout(function() {
        $(function() {
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
            duration: "400%"
          })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        });
      }, 500);
    }
    // AOS.init();
  }
};
</script>
<style lang="scss" scoped>
.hero {
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
  &__deco1 {
    position: absolute;
    left: 0;
    top: 80px;
  }
  &__deco2 {
    position: absolute;
    right: 0;
    bottom: 80px;
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
.caseHistoryCompetenze {
  margin-bottom: 0;
  margin-top: -50px;
}
.method {
  &__name {
    color: #ffffff;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
}
.sections {
  @media screen and (min-width: 992px) {
    width: 400%;
    height: 100%;
  }
}
.wrapper {
  @media screen and (min-width: 992px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
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
    width: calc(100% / 4);
    float: left;
  }
  position: relative;

  .container--custom {
    @media screen and (min-width: 992px) {
      //   margin-left: 60px;
    }
  }
  &__deco {
    width: 80%;
    margin-top: 30px;
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
    width: 70%;
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
      .step__keyWord {
         @media screen and (min-width: 992px) {
        margin-top: 1.5rem;}
      }
      @media screen and (max-width: 992px) {
        order: 1;
      }
    }
  }
}
.expertise {
  &__name {
    color: #000000;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
    text-align: center;
  }
  &__title {
    color: #020202;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
    text-align: center;
    @media screen and (max-width: 992px) {
      font-size: 42px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
    text-align: center;
  }
}
.skill {
  background-color: #f3f5fb;
  position: relative;
  justify-content: space-between;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: -50%;
    bottom: 0;
    background-color: #f3f5fb;
  }
  &__body {
    width: 50%;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
  &__title {
    color: #000000;
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__line {
    width: 30px;
    height: 4px;
    background-color: #000;
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }

  &--right {
    @media screen and (min-width: 992px) {
      justify-content: space-around;
      margin-left: auto;
    }

    &:before {
      left: initial;
      right: -50%;
    }
    .skill__body {
      order: 1;
      @media screen and (max-width: 992px) {
        order: 0;
      }
    }
    .skill__img {
      width: 380px;

      margin-left: -230px;
      order: 0;
      margin-right: initial;
      @media screen and (max-width: 992px) {
        order: 1;
        margin-left: initial;
        width: 150px;
      }
    }
  }
  &__img {
    width: 450px;

    margin-right: -176px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 992px) {
      width: 40%;
      margin-right: initial !important;
      margin-left: 20px !important;
      margin-top: -230px !important;
    }
    @media screen and (max-width: 576px) {
      width: 50%;
      margin-right: initial !important;
      margin-left: -70px !important;
      margin-top: -330px !important;
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
.accordion {
  .card {
    background-color: transparent;
    .card-header {
      background-color: transparent;
    }
  }
}
</style>
