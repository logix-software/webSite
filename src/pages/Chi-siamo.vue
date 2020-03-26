<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="hero hero--projects d-flex align-items-center justify-content-center text-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <g-image src="~/assets/images/deco-hero-projects.svg" class="hero__deco1" />
        <g-image src="~/assets/images/deco-hero-projects.svg" class="hero__deco2" />
        <div class="mx-auto">
          <h1
            class="hero__title"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="700"
          >{{text.node.headerTitle1}}</h1>
          <h1
            class="hero__title"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
          >{{text.node.headerTitle2}}</h1>
        </div>
      </div>
      <div class="aboutUs pt-5">
        <div class="py-5">
          <div class="container mb-5">
            <div class="row">
              <div class="col-lg-9">
                <h6 class="aboutUs__title">{{text.node.sectionTitle}}</h6>
              </div>
            </div>
          </div>
          <h1 class="aboutUs__bgText ml-auto text-right mb-5">{{text.node.sectionBgText1}}</h1>
        </div>

        <div v-if="deviceWidth > 992">
          <div class="wrapper" id="js-wrapper">
            <div class="sections" id="js-slideContainer">
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person1Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person1Color">{{text.node.person1Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person1Name}}</h1>
                    <h4 class="team__position">{{text.node.person1Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person2Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person2Color">{{text.node.person2Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person2Name}}</h1>
                    <h4 class="team__position">{{text.node.person2Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person3Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person3Color">{{text.node.person3Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person3Name}}</h1>
                    <h4 class="team__position">{{text.node.person3Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person4Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person4Color">{{text.node.person4Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person4Name}}</h1>
                    <h4 class="team__position">{{text.node.person4Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person5Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person5Color">{{text.node.person5Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person5Name}}</h1>
                    <h4 class="team__position">{{text.node.person5Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person6Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person6Color">{{text.node.person6Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person6Name}}</h1>
                    <h4 class="team__position">{{text.node.person6Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person7Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person7Color">{{text.node.person7Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person7Name}}</h1>
                    <h4 class="team__position">{{text.node.person7Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person8Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person8Color">{{text.node.person8Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person8Name}}</h1>
                    <h4 class="team__position">{{text.node.person8Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person9Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person9Color">{{text.node.person9Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person9Name}}</h1>
                    <h4 class="team__position">{{text.node.person9Position}}</h4>
                  </div>
                </div>
              </div>
              <div class="step">
                <div class="team">
                  <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                  <div class="team__body ml-auto">
                    <div
                      class="team__photo mb-3"
                      :style="{ 'background-image': 'url(' + text.node.person10Img + ')' }"
                    ></div>
                    <span :class="'team__team team__team--'+text.node.person10Color">{{text.node.person10Team}}</span>
                    <h1 class="team__name mb-3 mt-4">{{text.node.person10Name}}</h1>
                    <h4 class="team__position">{{text.node.person10Position}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="v-else">
          <div class="owl-carousel owl-theme owl-carousel-team">
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person1Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person1Color">{{text.node.person1Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person1Name}}</h1>
                  <h4 class="team__position">{{text.node.person1Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person2Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person2Color">{{text.node.person2Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person2Name}}</h1>
                  <h4 class="team__position">{{text.node.person2Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person3Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person3Color">{{text.node.person3Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person3Name}}</h1>
                  <h4 class="team__position">{{text.node.person3Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person4Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person4Color">{{text.node.person4Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person4Name}}</h1>
                  <h4 class="team__position">{{text.node.person4Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person5Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person5Color">{{text.node.person5Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person5Name}}</h1>
                  <h4 class="team__position">{{text.node.person5Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person6Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person6Color">{{text.node.person6Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person6Name}}</h1>
                  <h4 class="team__position">{{text.node.person6Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person7Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person7Color">{{text.node.person7Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person7Name}}</h1>
                  <h4 class="team__position">{{text.node.person7Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person8Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person8Color">{{text.node.person8Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person8Name}}</h1>
                  <h4 class="team__position">{{text.node.person8Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person9Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person9Color">{{text.node.person9Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person9Name}}</h1>
                  <h4 class="team__position">{{text.node.person9Position}}</h4>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team">
                <g-image src="~/assets/images/deco-square.svg" class="team__deco" />
                <div class="team__body ml-auto">
                  <div
                    class="team__photo mb-3"
                    :style="{ 'background-image': 'url(' + text.node.person10Img + ')' }"
                  ></div>
                  <span :class="'team__team team__team--'+text.node.person10Color">{{text.node.person10Team}}</span>
                  <h1 class="team__name mb-3 mt-4">{{text.node.person10Name}}</h1>
                  <h4 class="team__position">{{text.node.person10Position}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="aboutUs__bgText ml-auto text-left mb-5 mt-5 mt-lg-0">{{text.node.sectionBgText2}}</h1>
        <div class="workForUs py-5" v-if="text.node.numberPosition > 0">
          <div class="container py-5">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="workForUs__title">{{text.node.workForUsTitle}}</h1>
                <p class="workForUs__description">{{text.node.workForUsDescription1}}</p>
              </div>
            </div>
            <div class="row py-5">
              <div class="col-lg-6 position mb-5" v-if="text.node.numberPosition > 0">
                <div class="position__body">
                  <h1 class="position__title">{{text.node.position1Title}}</h1>
                  <p class="position__place mb-0">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    {{text.node.position1Location}}
                  </p>
                </div>
              </div>
              <div class="col-lg-6 position mb-5" v-if="text.node.numberPosition > 1">
                <div class="position__body">
                  <h1 class="position__title">{{text.node.position2Title}}</h1>
                  <p class="position__place mb-0">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    {{text.node.position2Location}}
                  </p>
                </div>
              </div>
              <div class="col-lg-6 position mb-5" v-if="text.node.numberPosition > 2">
                <div class="position__body">
                  <h1 class="position__title">{{text.node.position3Title}}</h1>
                  <p class="position__place mb-0">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    {{text.node.position3Location}}
                  </p>
                </div>
              </div>
              <div class="col-lg-6 position mb-5" v-if="text.node.numberPosition > 3">
                <div class="position__body">
                  <h1 class="position__title">{{text.node.position4Title}}</h1>
                  <p class="position__place mb-0">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    {{text.node.position4Location}}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <p class="workForUs__description">{{text.node.workForUsDescription2}}</p>
                <a href="mailto:info@logixcorp.it" class="workForUs__link">info@logixcorp.it</a>
                <p class="workForUs__description">{{text.node.workForUsDescription3}}</p>
                <button class="btn btn-secondary" data-toggle="modal"
                  data-target="#modalContact">Contattaci</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="partnership pb-5"
        v-for="textPartnership in $page.textsPartnership.edges"
        :key="textPartnership.id"
      >
        <div class="partnership__box mb-5 py-5">
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
                <button
                  class="btn btn-primary mx-1 mx-lg-2"
                  data-toggle="modal"
                  data-target="#modalContact"
                >Contattaci</button>
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
                  <h1 class="cta__title">{{textPartnership.node.ctaTitle}} <span class="text-green">{{textPartnership.node.ctaGreen}}</span></h1>
                </div>
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
 texts: allAbout {
    edges {
      node {
        title
        headerTitle1
        headerTitle2
        headerImage
        sectionTitle
        sectionBgText1
        sectionBgText2
        person1Name
        person1Team
        person1Color
        person1Position
        person1Img
        person2Name
        person2Team
        person2Color
        person2Position
        person2Img
        person3Name
        person3Team
        person3Color
        person3Position
        person3Img
        person4Name
        person4Team
        person4Color
        person4Position
        person4Img
        person5Name
        person5Team
        person5Color
        person5Position
        person5Img
        person6Name
        person6Team
        person6Color
        person6Position
        person6Img
        person7Name
        person7Team
        person7Color
        person7Position
        person7Img
        person8Name
        person8Team
        person8Color
        person8Position
        person8Img
        person9Name
        person9Team
        person9Color
        person9Position
        person9Img
        person10Name
        person10Team
        person10Color
        person10Position
        person10Img
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
export default {
  metaInfo: {
    title: "Chi siamo - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
      },
      { property: "og:title", content: "Chi siamo - Logix Software" },
      {
        property: "og:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
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
        content: "Chi siamo - Logix Software"
      },
      {
        property: "twitter:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      { property: "og:url", content: "https://www.logix-software.it/chi-siamo" },
      { name: "robots", content: "index, follow" }
    ]
  },
  data() {
    return {
      deviceWidth: 0
    };
  },
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
    } else {
      setTimeout(function() {
        $(".owl-carousel-team").owlCarousel({
          loop: true,
          nav: false,
          items: 1
        });
      }, 500);
    }
    AOS.init();
  }
  // metaInfo: {
  //   title: "My blog"
  // },
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
    &--operation{
      background-color: #F9B35F;
    }
    &--dev{
      background-color: #B5F7E3;
    }
    &--marketing{
      background-color: #FFA5D6;
    }
    &--design{
      background-color: #D0D0FF;
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
    width: calc(100% / 10);
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
