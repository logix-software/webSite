<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="hero hero--home d-flex align-items-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-10 position-relative mx-auto text-center">
              <g-image
                src="~/assets/images/deco-designer.png"
                class="hero__decoDesigner mouse-effect"
                alt="designer"
              />
              <g-image
                src="~/assets/images/deco-developer.png"
                class="hero__decoDeveloper mouse-effect2"
                alt="dev"
              />
              <g-image
                src="~/assets/images/deco-strategist.png"
                class="hero__decoStrategist mouse-effect3"
                alt="dev"
              />

              <h1
                class="hero__title mb-5 mb-lg-0"
                v-html="wrapAsteriskWords(text.node.headerTitle)"
              ></h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-5 mx-auto text-center">
              <g-link to="/contatti" class="hero__description">{{
                text.node.headerAbstract
              }}</g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-dark pb-5">
        <div class="owl-carousel owl-theme owl-partners py-2">
          <div
            class="item listPartners"
            v-for="partner in $page.partners.edges"
            :key="partner.id"
          >
            <g-image
              :src="partner.node.image"
              :alt="partner.node.title"
              class="partnership__logo"
            />
          </div>
        </div>
        <div class="container services my-5 py-5 text-center">
          <div class="row">
            <div class="col-lg-11 mx-auto mt-5">
              <h2 class="services__title mb-4">
                {{ text.node.section1Title }}
              </h2>
              <p class="services__description">
                {{ text.node.section1Abstract }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gradient py-5 serviceList position-relative">
        <div class="container py-5">
          <div class="row" id="accordion" role="tablist">
            <div
              class="col-lg-6"
              v-for="(service, index) in $page.services.edges.slice(0, 6)"
              :key="service.id"
            >
              <div role="tab" :id="`heading-${index}`">
                <h2>
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    :href="`#collapseOne-${index}`"
                    aria-expanded="false"
                    :aria-controls="`collapseOne-${index}`"
                    class="serviceList__title"
                  >
                    {{ service.node.title }}
                  </a>
                </h2>
              </div>
              <div
                role="tabpanel"
                :aria-labelledby="`heading-${index}`"
                :id="`collapseOne-${index}`"
                class="collapse serviceList__description"
              >
                <ul class="list-unstyled">
                  <li>{{ service.node.list1 }}</li>
                  <li>{{ service.node.list2 }}</li>
                  <li>{{ service.node.list3 }}</li>
                  <li>{{ service.node.list4 }}</li>
                  <li>{{ service.node.list5 }}</li>
                  <li>{{ service.node.list6 }}</li>
                </ul>
                <g-link :to="service.node.link" class="btn btn-sm btn-outline"
                  >Approfondisci</g-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-5">
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
        <div class="row text-center">
          <div class="col-lg-12">
            <g-link to="/progetti" class="text-dark text-underline">
              Vedi tutti i progetti >
            </g-link>
          </div>
        </div>
      </div>
      <div
        class="position-relative ourWay"
        :class="{
          'ourWay--black': isIntersectingElement,
        }"
      >
        <intersection-observer
          class="ourWay__intersection"
          sentinal-name="sentinal-ourway"
          @on-intersection-element="onIntersectionElement"
        ></intersection-observer>

        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6">
              <h2
                class="ourWay__title mb-5 pb-4"
                v-html="wrapAsteriskWords(text.node.ourApproachTitle)"
              ></h2>
              <p class="ourWay__description mb-4">
                {{ text.node.ourApproachDescription }}
              </p>
              <g-link
                :to="text.node.ourApproachDescriptionLink"
                class="btn btn-sm"
                :class="{
                  'btn-outline': !isIntersectingElement,
                  'btn-outline-white': isIntersectingElement,
                }"
              >
                Approfondisci
              </g-link>
            </div>
            <div class="col-lg-6">
              <g-image src="~/assets/images/our-way.svg" class="ourWay__deco" />
            </div>
          </div>
        </div>
        <div class="owl-carousel owl-theme owl-tech py-2">
          <div
            class="item listPartners"
            v-for="logo in $page.listTech.edges"
            :key="logo.id"
          >
            <g-image
              :src="logo.node.image"
              :alt="logo.node.title"
              class="partnership__logo"
            />
          </div>
        </div>
      </div>
      <div class="bg-black text-white aboutUs py-5">
        <div class="container mb-5">
          <div class="row">
            <div class="col-lg-7">
              <h2 class="aboutUs__title mb-4">{{ text.node.aboutUsTitle }}</h2>
              <p class="aboutUs__description">
                {{ text.node.aboutUsDescription }}
              </p>
            </div>
          </div>
        </div>
        <div class="position-relative overflow-hidden mb-5">
          <div class="aboutUs__text aboutUs__text--1 aboutUs__sentence">
            <div v-for="i in 10" :key="i">
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/trasparenza.svg"
                  class="aboutUs__icon"
                />
                <span> Trasparenza e collaborazione in tutte le fasi </span>
              </div>
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/curiosita.svg"
                  class="aboutUs__icon"
                />
                <span> Curiosità </span>
              </div>
            </div>
          </div>
          <div class="aboutUs__text aboutUs__text--2 aboutUs__sentence">
            <div v-for="i in 10" :key="i">
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/disponibilita.svg"
                  class="aboutUs__icon"
                />
                <span> Disponibilità per qualunque esigenza </span>
              </div>
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/positivita.svg"
                  class="aboutUs__icon"
                />
                <span> Positività e proattività </span>
              </div>
            </div>
          </div>
          <div class="aboutUs__text aboutUs__text--1 aboutUs__sentence">
            <div v-for="i in 10" :key="i">
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/metodologia.svg"
                  class="aboutUs__icon"
                />
                <span> Metodologia Agile </span>
              </div>
              <div class="d-inline-flex align-items-center mr-5">
                <g-image
                  src="~/assets/images/caffe.svg"
                  class="aboutUs__icon"
                />
                <span> Caffè & Arcade </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container listClients p-5">
          <div class="row mb-4">
            <div class="col-lg-4">
              <g-image
                :src="text.node.aboutUsClientLogo1"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle1"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription1 }}
              </p>
            </div>
            <div class="col-lg-4 mb-4">
              <g-image
                :src="text.node.aboutUsClientLogo2"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle2"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription2 }}
              </p>
            </div>
            <div class="col-lg-4 mb-4">
              <g-image
                :src="text.node.aboutUsClientLogo3"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle3"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription3 }}
              </p>
            </div>
            <div class="col-lg-4 mb-4">
              <g-image
                :src="text.node.aboutUsClientLogo4"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle4"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription4 }}
              </p>
            </div>
            <div class="col-lg-4">
              <g-image
                :src="text.node.aboutUsClientLogo5"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle5"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription5 }}
              </p>
            </div>
            <div class="col-lg-4">
              <g-image
                :src="text.node.aboutUsClientLogo6"
                class="listClients__logo mb-4"
                :alt="text.node.aboutUsClientTitle6"
              />
              <p class="listClients__text">
                {{ text.node.aboutUsClientDescription6 }}
              </p>
            </div>
          </div>
          <div class="text-center">
            <g-link to="/progetti" class="text-white text-underline"
              >Approfondisci progetti</g-link
            >
          </div>
        </div>
      </div>
      <LetsTalk />
    </div>
  </Layout>
</template>
<page-query>
query {
  services: allServices(order: DESC) {
    edges {
      node {
        title
        list1
        list2
        list3
        list4
        list5
        link
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
  partners: allListPartners {
    edges {
      node {
        id
        title
        image
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
  texts: allHome {
    edges {
      node {
        title
        headerTitle
        headerAbstract
        headerImage
        headerLogo1
        headerLogo2
        headerLogo3
        headerLogo4
        section1Title
        section1Abstract
        slider1Slide1Title
        slider1Slide1Abstract
        slider1Slide1Image
        slider1Slide2Title
        slider1Slide2Abstract
        slider1Slide2Image
        slider1Slide3Title
        slider1Slide3Abstract
        slider1Slide3Image
        slider1Slide4Title
        slider1Slide4Abstract
        slider1Slide4Image
        slider1Slide5Title
        slider1Slide5Abstract
        slider1Slide5Image
        caseHistoryName
        caseHistoryTitleSection
        caseHistoryBgText
        caseHistoryTitle
        caseHistoryAbstract
        caseHistoryTestimonialDescription
        caseHistoryTestimonialName
        caseHistoryTestimonialPosition
        caseHistoryTestimonialPhoto
        caseHistoryLink
        caseHistoryImage
        section2Name
        section2Title
        section2Abstract
        section2Logo1
        section2Logo2
        section2Logo3
        section2Logo4
        section2Logo5
        section2Logo6
        section2Logo7
        cta1Title
        cta1Link
        section3Title
        section3Abstract
        slider2slide1Title
        slider2slide1BgText
        slider2slide1Abstract
        slider2slide1Image
        slider2slide2Title
        slider2slide2BgText
        slider2slide2Abstract
        slider2slide2Image
        slider2slide3Title
        slider2slide3BgText
        slider2slide3Abstract
        slider2slide3Image
        section4Name
        section4Title
        section4Abstract
        section4IconBox1
        section4TitleBox1
        section4AbstractBox1
        section4IconBox2
        section4TitleBox2
        section4AbstractBox2
        section4IconBox3
        section4TitleBox3
        section4AbstractBox3
        section4IconBox4
        section4TitleBox4
        section4AbstractBox4
        section4IconBox5
        section4TitleBox5
        section4AbstractBox5
        section4IconBox6
        section4TitleBox6
        section4AbstractBox6
        section5Title
        section5Abstract
        cta2Title
        cta2Green
        ourApproachTitle
        ourApproachDescription
        ourApproachLink
        aboutUsTitle
        aboutUsDescription
        aboutUsClientLogo1
        aboutUsClientTitle1
        aboutUsClientDescription1
        aboutUsClientLogo2
        aboutUsClientTitle2
        aboutUsClientDescription2
        aboutUsClientLogo3
        aboutUsClientTitle3
        aboutUsClientDescription3
        aboutUsClientLogo4
        aboutUsClientTitle4
        aboutUsClientDescription4
        aboutUsClientLogo5
        aboutUsClientTitle5
        aboutUsClientDescription5
        aboutUsClientLogo6
        aboutUsClientTitle6
        aboutUsClientDescription6
      }
    }
  }
}
</page-query>
<script>
import AppProject from "~/components/AppProject.vue";
import LetsTalk from "~/components/LetsTalk.vue";
import IntersectionObserver from "~/components/IntersectionObserver.vue";

import ParallaxElement from "~/components/ParallaxElement.vue";
import ParallaxContainer from "~/components/ParallaxContainer.vue";

export default {
  metaInfo: {
    title: "Logix Software - progettazione e sviluppo software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software è un’azienda informatica, con sede a Terni e Roma, che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile.",
      },
      {
        property: "og:title",
        content: "Logix Software - progettazione e sviluppo software",
      },
      {
        property: "og:description",
        content:
          "Logix Software è un’azienda informatica, con sede a Terni e Roma, che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile.",
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
        content: "Logix Software - progettazione e sviluppo software",
      },
      {
        property: "twitter:description",
        content:
          "Logix Software è un’azienda informatica, con sede a Terni e Roma, che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile.",
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      { name: "robots", content: "index, follow" },
    ],
  },
  components: {
    AppProject,
    LetsTalk,
    IntersectionObserver,
    ParallaxElement,
    ParallaxContainer,
  },
  data() {
    return {
      deviceWidth: 0,
      isIntersectingElement: false,
    };
  },
  mounted() {
    this.deviceWidth = window.innerWidth;
    const el = document.querySelector(".mouse-effect");
    //  const el2 = document.querySelector(".mouse-effect2");
    let lastMove = 0;

    function updateMouse(x, y) {
      el.style.transform = `translate(${x}px, ${y}px)`;
      // el2.style.transform = `translate(${x}px, ${y}px)`;
    }
    function render(a) {
      if (Date.now() - lastMove > 500) {
        const noiseX = (noise.simplex3(2, 0, a * 0.00014) + 1) / 2;
        const noiseY = (noise.simplex3(10, 0, a * 0.00014) + 1) / 2;
        const x = noiseX * 100;
        const y = noiseY * 100;
        updateMouse(x, y);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // const el = document.querySelector(".mouse-effect");
    const el2 = document.querySelector(".mouse-effect2");

    function updateMouse2(x, y) {
      el2.style.transform = `translate(${x}px, ${y}px)`;
      // el2.style.transform = `translate(${x}px, ${y}px)`;
    }
    function render2(a) {
      if (Date.now() - lastMove > 500) {
        const noiseX = (noise.simplex3(2, 0, a * 0.00012) + 1) / 2;
        const noiseY = (noise.simplex3(10, 0, a * 0.00012) + 1) / 2;
        const x = noiseX * 100;
        const y = noiseY * 100;
        updateMouse2(x, y);
      }
      requestAnimationFrame(render2);
    }
    requestAnimationFrame(render2);

    const el3 = document.querySelector(".mouse-effect3");

    function updateMouse3(x, y) {
      el3.style.transform = `translate(${x}px, ${y}px)`;
      // el2.style.transform = `translate(${x}px, ${y}px)`;
    }
    function render3(a) {
      if (Date.now() - lastMove > 500) {
        const noiseX = (noise.simplex3(2, 0, a * 0.0001) + 1) / 2;
        const noiseY = (noise.simplex3(10, 0, a * 0.0001) + 1) / 2;
        const x = noiseX * 100;
        const y = noiseY * 100;
        updateMouse3(x, y);
      }
      requestAnimationFrame(render3);
    }
    requestAnimationFrame(render3);

    if (this.deviceWidth > 992) {
      setTimeout(function () {
        $(function () {
          // wait for document ready

          var controller = new ScrollMagic.Controller();

          var horizontalSlide = new TimelineMax()
            // animate panels
            .to("#js-slideContainer", 1, { x: "-15%" })
            .to("#js-slideContainer", 1, { x: "-30%" })
            .to("#js-slideContainer", 1, { x: "-45%" })
            .to("#js-slideContainer", 1, { x: "-60%" });

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
        $(".owl-carousel-services").owlCarousel({
          loop: true,
          nav: false,
          items: 1,
        });
      }, 500);
    }
    if (this.deviceWidth > 992) {
      setTimeout(function () {
        $(function () {
          // wait for document ready

          var controller2 = new ScrollMagic.Controller();

          var horizontalSlide2 = new TimelineMax()
            // animate panels
            .to("#js-slideContainer2", 1, { x: "-20%" })
            .to("#js-slideContainer2", 1, { x: "-40%" })
            .to("#js-slideContainer2", 1, { x: "-50%" });

          // create scene to pin and link animation
          new ScrollMagic.Scene({
            triggerElement: "#js-wrapper2",
            triggerHook: "onLeave",
            duration: "400%",
          })
            .setPin("#js-wrapper2")
            .setTween(horizontalSlide2)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller2);
        });
      }, 500);
    } else {
      setTimeout(function () {
        $(".owl-carousel-causes").owlCarousel({
          loop: true,
          nav: false,
          items: 1,
        });
      }, 500);
    }
    setTimeout(function () {
      $(".owl-partners").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 3,
          },
          992: {
            items: 7,
          },
        },
      });
    }, 500);
    setTimeout(function () {
      $(".owl-tech").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 4,
          },
          992: {
            items: 12,
          },
        },
      });
    }, 500);
  },
  methods: {
    wrapAsteriskWords(str) {
      var regex = /\*\w+/g;
      var replaced = str.replace(regex, function (match) {
        return "<span>" + match.slice(1) + "</span>";
      });
      return replaced;
    },
    onIntersectionElement(value) {
      this.isIntersectingElement = value;
    },
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
.bgLeft {
  position: absolute;
  right: 60%;
  top: 0;
  background-color: #f3f5fb;
  width: 9999px;
  height: 780px;
  @media screen and (max-width: 992px) {
    width: 60%;
    height: 260px;
  }
}
.video {
  height: 464px;
  margin-top: -20px;
  margin-right: -169px;
  @media screen and (max-width: 1200px) {
    margin-right: -109px;
  }
  @media screen and (max-width: 1025px) {
    margin-right: -46px;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 210px;
  }
  &__deco {
    position: absolute;
    left: 0px;
    bottom: -30px;
    z-index: 1;
  }
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  // min-width: 100%;
  // min-height: 100%;
}

.hero {
  width: 100%;
  height: 800px;
  // background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    height: 700px;
  }
  &__deco {
    position: absolute;
    top: -10px;
    left: -80px;
    @media screen and (max-width: 1025px) {
      top: -14px;
      left: -84px;
      width: 30%;
    }
    @media screen and (max-width: 992px) {
      top: -14px;
      left: -84px;
      width: 20%;
    }
    @media screen and (max-width: 576px) {
      top: -3px;
      left: -46px;
      width: 26%;
    }
  }
  &__decoDesigner {
    position: absolute;
    width: 156px;
    top: -180px;
    right: -20px;
    @media screen and (max-width: 992px) {
      top: -180px;
      right: 100px;
    }
    @media screen and (max-width: 576px) {
      top: -150px;
      right: 110px;
      width: 100px;
    }
  }
  &__decoDeveloper {
    position: absolute;
    bottom: -100px;
    right: -80px;
    width: 156px;
    @media screen and (max-width: 992px) {
      bottom: 0px;
      right: 110px;
    }
    @media screen and (max-width: 576px) {
      bottom: 30px;
      right: 100px;
      width: 100px;
    }
  }
  &__decoStrategist {
    position: absolute;
    bottom: -100px;
    left: -150px;
    width: 156px;
    @media screen and (max-width: 992px) {
      bottom: 0px;
      left: 0px;
    }
    @media screen and (max-width: 576px) {
      bottom: 30px;
      right: 100px;
      width: 100px;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    font-family: "Lexend Deca";
    font-size: 105px;
    font-weight: 300;
    letter-spacing: -5.61316px;
    line-height: 94px;
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
    @media screen and (max-width: 1025px) {
      font-size: 70px;
    }
    @media screen and (max-width: 576px) {
      font-size: 50px !important;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__description {
    font-family: "DM Sans";
    font-size: 20px;
    letter-spacing: -0.5px;
    line-height: 24px;
    text-decoration: underline;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.listPartners {
  &__logo {
    width: 178px;
    @media screen and (max-width: 1025px) {
      width: 160px;
    }
    @media screen and (max-width: 992px) {
      width: 80px;
    }
    @media screen and (max-width: 370px) {
      width: 70px;
    }
  }
}
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}
.services {
  color: #fff;
  font-family: "Lexend Deca";
  &__title {
    font-weight: 300;
    font-size: 77px;
    line-height: 77px;
    letter-spacing: -3.5px;
    span {
      &:nth-child(1) {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          286.48deg,
          #36f2b9 -26.84%,
          #7878f9 60.85%,
          #f60994 115.74%
        );
      }
      &:nth-child(2) {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          287.05deg,
          #36f2b9 15.43%,
          #7878f9 45.24%,
          #f60994 66.92%
        );
      }
      &:nth-child(3) {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          103.3deg,
          #36f2b9 15.36%,
          #7878f9 107.51%
        );
      }
    }
    @media screen and (max-width: 992px) {
      font-size: 40px;
      line-height: initial;
      letter-spacing: initial;
    }
  }
  &__description {
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.25px;
    @media screen and (max-width: 992px) {
      font-size: 20px;
      line-height: initial;
      letter-spacing: initial;
    }
  }
}
.wrapper,
.wrapper2 {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  /* background: #F64747; */
  padding-left: 5%;
  padding-top: 8%;
  padding-bottom: 8%;
  @media screen and (max-width: 992px) {
    padding-left: 5%;
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
.wrapper2 {
  background-color: #111111;
  padding-left: 10%;
  padding-top: 6%;
  padding-bottom: 6%;
  color: #fff;
  @media screen and (max-width: 992px) {
    height: 68vh;
  }
}

.section {
  height: 100%;
  width: calc(100% / 4);
  float: left;
  position: relative;

  @media screen and (max-width: 992px) {
    height: 525px;
    width: 100%;
  }
  &__img {
    width: 300px;
    height: 300px;
    // @media screen and (max-width: 992px) {
    //    width: 300px;
    // }
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    // background-image: url("~@/assets/images/bg-pic.png");
  }
  &--2 {
    .section__img {
      height: 450px;
      @media screen and (max-width: 992px) {
        height: 300px;
      }
    }
  }
  &__body {
    width: 50%;
    height: 400px;
    background-color: #eceff8;
    position: absolute;
    top: 18%;
    left: 200px;
    padding: 90px 50px;
    border-radius: 8px;
    z-index: 1;
    &:before {
      content: "";
      background-color: #eceff8;
      position: absolute;
      height: 100px;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    }
    @media screen and (max-width: 992px) {
      width: 90%;
      left: 20px;
      padding: 30px 20px;
      height: auto;
    }
    // overflow-x: hidden;
  }
  &__shadow {
    position: absolute;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18);
    width: 84%;
    left: 8%;
    right: 8%;
    bottom: 0;
    height: 50px;
    z-index: 0;
  }
  &__deco {
    position: absolute;
    top: 50px;
    left: 200px;
    @media screen and (max-width: 992px) {
      width: 180px !important;
    }
  }
  &__icon {
    position: absolute;
    top: -30px;
    left: 20px;
    @media screen and (max-width: 992px) {
      top: -50px;
      width: 100px !important;
    }
  }
  &__label {
    background-color: #b5f7e3;
    font-size: 10px !important;
    height: 18px;
    letter-spacing: 1px;
    padding: 2px 8px;
    &--2 {
      background-color: #d0d0ff !important;
    }
  }
  &__title {
    font-size: 40px !important;
    letter-spacing: -1.47px;
    line-height: 42px;
    z-index: 4;
    position: relative;
    @media screen and (min-width: 992px) {
      width: 40%;
    }
  }
  &__description {
    font-size: 18px;
    font-weight: 300;
    z-index: 4;
    position: relative;
  }
  &__line {
    height: 1px;
    width: 30px;
    border: 3px solid #000000;
    z-index: 4;
    position: relative;
  }
  &__textBg {
    color: #ffffff;
    font-size: 160px;
    position: absolute;
    top: 30%;
    right: -50%;
  }
}
.section:nth-child(1) {
  // background: #f64747;
  //  margin-left: 4%;
}
.section:nth-child(2) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(3) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(4) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(5) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section2 {
  height: 100%;
  width: calc(100% / 3);
  float: left;
  position: relative;
  z-index: 2;
  background-color: #111111;
  color: #fff;
  @media screen and (max-width: 992px) {
    height: 440px;
    width: 100%;
    padding: 0 100px;
  }
  @media screen and (max-width: 576px) {
    height: 440px;
    width: 100%;
    padding: 0;
  }
  &__num {
    font-size: 146px !important;
    line-height: 102px;
    @media screen and (max-width: 992px) {
      font-size: 66px !important;
    }
  }
  &__body {
    width: 20%;
    @media screen and (max-width: 992px) {
      position: absolute;

      width: 70%;
      bottom: 0;
    }
    @media screen and (max-width: 576px) {
      width: 90%;
      bottom: 32px;
    }
  }
  &__img {
    position: relative;
    height: 548px;
    width: 421px;
    background-size: cover;
    background-position: center;
    // background-image: url("https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    @media screen and (max-width: 992px) {
      height: 320px;
      width: 400px;
    }
    @media screen and (max-width: 576px) {
      height: 250px;
      width: 240px;
    }
  }
  &__deco {
    position: absolute;
    bottom: 0;
    right: 0;
    @media screen and (max-width: 992px) {
      width: 60% !important;
    }
  }
  &__textBg {
    color: rgba(255, 255, 255, 1);
    font-family: "Lexend Deca";
    font-size: 161px !important;
    letter-spacing: -9.63px;
    position: absolute;
    bottom: 100px;
    left: 10%;
    width: 280%;
    @media screen and (max-width: 992px) {
      font-size: 86px !important;
      bottom: 10px;
    }
  }
  &__title {
    font-size: 35px !important;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 20px;
  }
}
.section2:nth-child(1) {
  // background: #f64747;
}
.section2:nth-child(2) {
  @media screen and (min-width: 992px) {
    margin-left: -8%;
  }
  // background: #22a7f0;
}
.section2:nth-child(3) {
  @media screen and (min-width: 992px) {
    margin-left: -8%;
  }
  // background: #f9690e;
}

.sections {
  width: 500%;
  height: 100%;
}
.sections2 {
  width: 300%;
  height: 100%;
}
// .section__title {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   font-size: 30px;
//   color: #fff;
// }
.caseHistory {
  height: 1100px;
  @media screen and (max-width: 992px) {
    height: 880px;
  }
  @media screen and (max-width: 576px) {
    height: 1060px;
  }
  &__body {
    padding: 76px 80px;

    background-color: #111111;
    color: #ffffff;
    position: absolute;
    right: 0;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 992px) {
      padding: 50px 20px;
      width: 100%;
    }
    @media screen and (max-width: 576px) {
      padding: 50px 20px;
      width: 100%;
    }
  }
  &__container {
    width: 85%;
    padding-left: 240px;
    padding-top: 80px;
    @media screen and (max-width: 1025px) {
      width: 95%;
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      padding-left: 0px;
      padding-top: 30px;
    }
  }
  // &__textBg {
  //   position: absolute;
  //   opacity: 0.42;
  //   color: #ffffff;
  //   font-family: "Lexend Deca";
  //   font-size: 161px !important;
  //   letter-spacing: -4.03px;
  //   line-height: 42px;
  //   left: 10%;
  //   bottom: 100px;
  //   z-index: 1;
  //   @media screen and (max-width: 992px) {
  //     font-size: 90px !important;
  //     bottom: 40px;
  //   }
  // }
  &__deco {
    position: absolute;
    left: -250px;
    @media screen and (max-width: 992px) {
      left: -15px;
      top: -60px;
      z-index: 0;
    }
  }
  &__deco2 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &__img {
    // &:before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   left: 0;
    //   bottom: 0;
    //   background-color: rgba(0, 0, 0, 0.2);
    // }
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: -360px;
    height: 615px;
    width: 500px;
    background-position: center;
    background-size: cover;
    // background-image: url("https://images.unsplash.com/photo-1573496130103-a442a3754d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
    @media screen and (max-width: 992px) {
      position: relative;
      height: 250px;
      width: 90%;
      left: 0px;
      margin: 0 auto;
      z-index: 1;
    }
  }
  &__name {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.24px;
    font-family: Lato;
  }
  &__title {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
    @media screen and (max-width: 992px) {
      font-size: 38px !important;
    }
    // line-height: 58px;
  }
  &__titleProject {
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
.testimonial {
  &__cit {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__pic {
    background-position: center;
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
  }
  &__name {
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 24px;
  }
  &__position {
    font-family: "Lexend Deca";
    font-size: 12px !important;
    letter-spacing: -0.24px;
    line-height: 24px;
  }
  &__logo {
    max-height: 50px;
  }
}
.tools {
  color: #000;
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px !important;
    letter-spacing: -1.47px;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
  &__logo {
    width: 70px;
    @media screen and (max-width: 992px) {
      width: 50px;
    }
  }
  &__icon {
    position: absolute;
    width: 88px;
    height: 88px;
    top: 26px;
    right: 20px;
    // @media screen and (max-width: 992px) {
    //     right: 60px;
    //   }
  }
}

.cause {
  background-color: #111111;
  color: #fff;
  padding: 145px 0px;
  @media screen and (max-width: 992px) {
    padding: 100px 0px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 56px !important;
    letter-spacing: -2.21px;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
}
.values {
  background-color: #111111;
  color: #fff;
  height: 740px;
  width: 70%;
  position: relative;
  @media screen and (max-width: 992px) {
    height: auto;
    width: 80%;
  }
  @media screen and (max-width: 992px) {
    // width: 105%;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #111111;
    position: absolute;
    left: -50%;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  &__body {
    position: relative;
    z-index: 1;
  }
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
    color: #fff;
  }
  &__title {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    color: #fff;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
    color: #fff;
  }
  &__deco {
    position: absolute;
    right: 100px;
    bottom: 40px;
  }
}
.value {
  background-color: #f0fffb;
  text-align: center;
  border-radius: 3px;
  padding: 36px 24px;
  width: 226px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 992px) {
    height: 299px;
  }
  @media screen and (max-width: 992px) {
    width: 80%;
    margin: 15px 10%;
    padding: 50px 20px;
  }

  // @media screen and (max-width: 370px) {
  //   width: 138px;
  //   padding: 20px 10px;
  // }
  // display: inline-block;
  box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
  &--2 {
    background-color: #f9f9fa;
  }
  &__icon {
    height: 53px;
    width: 53px;
  }
  &__title {
    color: #141414;
    font-size: 22px !important;
    font-weight: bold;
    letter-spacing: -0.77px;
    line-height: 32px;
  }
  &__description {
    font-family: Lato;
    color: #141414;
    font-size: 15px !important;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 20px;
    height: 118px;
    @media screen and (max-width: 992px) {
      height: 70px;
    }
  }
}
.container-values {
  width: 129%;
  text-align: right;
  @media screen and (max-width: 992px) {
    width: 144%;
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    width: 126%;
  }
}
.idea {
  background-color: #f6f7fa;
  color: #020202;
  &__idea {
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
#Rectangle {
  position: relative;
  z-index: 1;
}
#arrow {
  transform-origin: 105px 75px;
  // transform: translateX(-100px);
  animation: rotate 16s linear infinite;
  position: relative;
  z-index: 0;
}
#arrow2 {
  transform-origin: 0px 45px;
  // transform: translateX(-100px);
  animation: rotate2 16s linear infinite;
  position: relative;
  z-index: 0;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  100% {
    transform: rotate(-360deg);
  }
}
.serviceList {
  &__title {
    font-weight: 400;
    font-size: 26px;
    text-decoration: underline;
    color: #000;
    font-family: "Lexend Deca";
    @media screen and (min-width: 992px) {
      font-size: 38px;
      line-height: 82px;
    }
    &:hover {
      color: #000;
    }
  }
  &__description {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
  }
}
.sentinel-home {
  position: absolute;
  top: 50%;
}
.ourWay {
  font-family: "Lexend Deca";
  color: #000;
  &--black {
    background: #000;
    color: #fff;
  }
  &__intersection {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 50%;
  }
  &__title {
    font-weight: 300;
    font-size: 40px;
    @media screen and (min-width: 992px) {
      font-size: 65px;
      line-height: 57px;
      letter-spacing: -0.025em;
    }
    span {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        98.97deg,
        #36f2b9 24.02%,
        #7878f9 48.35%,
        #f60994 74.9%
      );
    }
  }
  &__description {
    font-weight: 200;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: -0.21px;
  }
  &__deco {
    width: 100%;
  }
}
.aboutUs {
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 40px;
    @media screen and (min-width: 992px) {
      font-size: 65px;
      line-height: 69px;
      letter-spacing: -0.02em;
    }
  }
  &__description {
    font-family: "Lexend Deca";
    font-weight: 200;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: -0.21px;
  }
  &__icon {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    @media screen and (min-width: 992px) {
      width: 90px;
      height: 90px;
    }
  }
  &__text {
    display: inline-block;
    white-space: nowrap;
    animation-direction: alternate;
    width: 100%;
    color: #d8d8d8;
    font-weight: 400;
    font-size: 40px;
    display: flex;
    @media screen and (min-width: 992px) {
      font-size: 60px;
      line-height: 65px;
      letter-spacing: -2.00198px;
    }
    &:hover {
      animation-play-state: paused;
    }
    &--1 {
      animation: animationText1 120s infinite linear;
    }
    &--2 {
      animation: animationText2 120s infinite linear;
      margin-left: -100%;
    }
  }
  @keyframes animationText1 {
    to {
      transform: translateX(-30%);
    }
  }
  @keyframes animationText2 {
    to {
      transform: translateX(30%);
    }
  }
}
.listClients {
  background: linear-gradient(180deg, #2b2b2b 0%, rgba(43, 43, 43, 0) 100%);
  border-radius: 5px;
  color: #fff;
  &__logo {
    width: 11rem;
    display: block;
  }
  &__text {
    font-family: "Lexend Deca";
    font-weight: 200;
    font-size: 14.0781px;
    line-height: 20px;
    letter-spacing: -0.173906px;
  }
}
.owl-carousel .owl-stage-outer {
    opacity: 1!important;
    display: block!important;
}
</style>
