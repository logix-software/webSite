<template>
  <Layout>
    <div class="hero d-flex align-items-center">
      <g-image src="~/assets/images/deco-with-arrow.svg" class="hero__deco1" />
      <!-- <g-image src="~/assets/images/deco-with-arrow.svg" class="hero__deco2" /> -->
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="hero__title">Guidiamo le aziende nella loro forma digitale.</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 ml-auto">
            <p
              class="hero__description"
            >Studiando, progettando e sviluppando su specifiche esigenze dell’azienda e dei singoli processi che la caratterizzano, costruiamo prodotti pensati per gli utenti che li utilizzano.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="caseHistoryCompetenze">
              <div class="d-lg-flex align-items-center justify-content-between">
                <div class="d-lg-flex align-items-start">
                  <g-image src="~/assets/images/cta-case.png" class="caseHistoryCompetenze__img" />
                  <div class="caseHistoryCompetenze__body ml-4">
                    <div class="mb-2">
                      <span class="label label--dev mr-3">DEVELOPMENT</span>
                      <span class="label label--des">DESIGN</span>
                    </div>
                    <h1 class="caseHistoryCompetenze__title">Acta: il registro elettronico</h1>
                    <p
                      class="caseHistoryCompetenze__description"
                    >Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for convention.</p>
                    <p
                      class="caseHistoryCompetenze__tags"
                    >#WEB APPLICATION #GESTIONE DEL PERSONALE #SOFTWARE</p>
                  </div>
                </div>
                <div class="text-right">
                  <g-link to class="caseHistoryCompetenze__link">_Scopri di più</g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container method pt-5 mt-5">
        <div class="row">
          <div class="col-lg-6">
            <h6 class="method__name">METODO</h6>
            <h1 class="method__title">Il nostro approccio olistico</h1>
            <p
              class="method__description"
            >In stretta collaborazione con le aziende seguiamo la progettazione, la realizzazione ed il test di ogni componente, prodotto e servizio. Metodologie di management AGILE che seguono un percorso iterativo che ci lega al cliente, alla sua azienda ed agli utenti che utilizzano i prodotti collettivamente realizzati.</p>
          </div>
        </div>
      </div>
      <!-- <div class="step step--inverted py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-left d-flex flex-column">
              <div class="col-left">
                <h1 class="step__name">Learn</h1>
                <div class="d-flex align-items-center">
                  <h6 class="step__num">01</h6>
                  <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                </div>
                <p
                  class="step__description"
                >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-right">
              <h6 class="step__keyWord mt-4">STEP</h6>
              <h2 class="step__title">
                Exploration
                Market research
                Ux research
              </h2>
              <g-image src="~/assets/images/step.svg" class="step__deco" />
            </div>
          </div>
        </div>
      </div>-->
      <div v-if="deviceWidth > 992">
        <div class="wrapper" id="js-wrapper">
          <div class="sections" id="js-slideContainer">
            <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step step--inverted">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step step--inverted">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="owl-carousel owl-theme owl-carousel-steps">
          <div class="item">
             <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
             <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
             <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
             <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image src="~/assets/images/deco-short.svg" class="step__shortDeco ml-3" />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="hero d-flex align-items-center">
      <g-image src="~/assets/images/deco-with-arrow.svg" class="hero__deco1" />
      <!-- <g-image src="~/assets/images/deco-with-arrow.svg" class="hero__deco2" /> -->
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="hero__title">Guidiamo le aziende nella loro forma digitale.</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 ml-auto">
            <p
              class="hero__description"
            >Studiando, progettando e sviluppando su specifiche esigenze dell’azienda e dei singoli processi che la caratterizzano, costruiamo prodotti pensati per gli utenti che li utilizzano.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  //   metaInfo: {
  //     title: "About us"
  // meta: [
  //   { name: 'author', content: 'John Doe' }
  // ],
  // link: [
  //   { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' },
  // ],
  //   },
  //   metaInfo: {
  //     title: "About us",
  //     meta: [
  //       //   { name: 'author', content: 'John Doe' }
  //     ],
  //     link: [
  //       { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
  //     ],
  //     script: [{ src: "https://unpkg.com/aos@2.3.1/dist/aos.js", body: true }]
  //     // etc...
  //   },
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
    } else {
      setTimeout(function() {
        $(".owl-carousel-steps").owlCarousel({
          loop: true,
          nav: false,
          items: 1
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
  background-image: url("~@/assets/images/hero-home.jpg");
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
  height: 100%;}
}
.wrapper {
     @media screen and (min-width: 992px) {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;}
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
  float: left;}
  position: relative;

  .container--custom{
      @media screen and (min-width: 992px) {
      margin-left: 60px;}
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
      font-size: 60px;
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
  }
  &__shortDeco {
    width: 25px;
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
</style>
