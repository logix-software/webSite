<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div
        class="heroHome d-flex align-items-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-10 position-relative mx-auto text-center">
              <g-image
              :src="
                  require(`~/assets/images/deco-designer-${randomNumberDesigner}.png`)
                "
                class="heroHome__decoDesigner mouse-effect"
                alt="designer"
              />
              <g-image
                :src="
                  require(`~/assets/images/deco-developer-${randomNumberDeveloper}.png`)
                "
                class="heroHome__decoDeveloper mouse-effect2"
                alt="dev"
              />
              <g-image
                src="~/assets/images/deco-strategist.png"
                class="heroHome__decoStrategist mouse-effect3"
                alt="dev"
              />

              <h1
                class="heroHome__title mb-5 mb-lg-0"
                v-html="text.node.headerTitle"
              ></h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-5 mx-auto text-center">
              <g-link to="/contatti" class="heroHome__description">{{
                text.node.headerAbstract
              }}</g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-dark pb-5">
        <div class="owl-carousel owl-theme owl-partners py-2 owl-loaded">
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
              <h2
                class="services__title mb-4"
                v-html="text.node.section1Title"
              ></h2>
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
                :label1="project.node.label1"
                :label2="project.node.label2"
                :label3="project.node.label3"
                :hashtags="project.node.hashtags"
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
                v-html="text.node.ourApproachTitle"
              ></h2>
              <p class="ourWay__description mb-4">
                {{ text.node.ourApproachDescription }}
              </p>
              <g-link
                :to="text.node.ourApproachLink"
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
        <div class="owl-carousel owl-theme owl-tech py-2 owl-loaded">
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
          <div class="aboutUs__text aboutUs__text--1">
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
          <div class="aboutUs__text aboutUs__text--2">
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
          <div class="aboutUs__text aboutUs__text--1">
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
        hashtags
        abstract
        label1
        label2
        label3
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
        section1Title
        section1Abstract
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
      randomNumberDeveloper: this.getRandomNumberDeveloper(),
      randomNumberDesigner: this.getRandomNumberDesigner(),
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
    setInterval(() => {
      this.randomNumberDesigner = this.getRandomNumberDesigner();
    }, 2000);
    setInterval(() => {
      this.randomNumberDeveloper = this.getRandomNumberDeveloper();
    }, 1500);
  },
  methods: {
    getRandomNumberDeveloper() {
      return Math.floor(Math.random() * 10) + 1;
    },
    getRandomNumberDesigner() {
      return Math.floor(Math.random() * 3) + 1;
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
.heroHome {
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
      width: 140px;
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
      width: 140px;
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
      width: 140px;
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
    @media screen and (max-width: 1200px) {
      line-height: 106px;
    }
    @media screen and (max-width: 992px) {
      font-size: 60px !important;
      letter-spacing: -0.05em;
      line-height: 4.25rem;
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

.services {
  color: #fff;
  font-family: "Lexend Deca";
  &__title {
    font-weight: 300;
    font-size: 77px;
    line-height: 77px;
    letter-spacing: -3.5px;
    @media screen and (max-width: 992px) {
      font-size: 45px;
      line-height: 2.8rem;
      letter-spacing: -0.05em;
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

.serviceList {
  &__title {
    font-weight: 400;
    font-size: 35px;
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
    @media screen and (max-width: 992px) {
      letter-spacing: -0.025em;
    }
  }
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
    height: 100%;
    top: 30%;
  }
  &__title {
    font-weight: 300;
    font-size: 40px;
    @media screen and (min-width: 992px) {
      font-size: 65px;
      line-height: 57px;
      letter-spacing: -0.025em;
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
    font-family: "DM Sans";
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
</style>
