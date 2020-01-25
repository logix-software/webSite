<template>
  <Layout>
    <div class="hero hero--home d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 position-relative ml-auto">
            <g-image src="~/assets/images/deco.svg" class="hero__deco" />
            <g-image src="~/assets/images/deco-designer.svg" class="hero__decoDesigner" />
            <g-image src="~/assets/images/deco-developer.svg" class="hero__decoDeveloper" />
            <h1 class="hero__title">Sviluppiamo nuove logiche digitali</h1>
          </div>
          <div class="col-lg-5"></div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-5 ml-auto">
            <p
              class="hero__description"
            >Collaboriamo da più di 10 anni con le aziende per costruire soluzioni digitali personalizzate e adatte agli utenti che le utilizzano.</p>
          </div>
        </div>
      </div>
      <div class="hero__partnership">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 ml-auto">
              <h6 class="pl-2 pl-lg-4">Partnership</h6>
              <div class="d-flex align-items-center">
                <g-image src="~/assets/images/logo-aosp.png" class="hero__partnershipLogo" />
                <g-image src="~/assets/images/logo-ast.png" class="hero__partnershipLogo" />
                <g-image src="~/assets/images/logo-cogne.png" class="hero__partnershipLogo" />
                <g-image
                  src="~/assets/images/logo-umbriadigitale.png"
                  class="hero__partnershipLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container position-relative">
      <div class="bgLeft"></div>
      <div class="row">
        <div class="col-lg-9 ml-auto">
          <div class="video position-relative">
            <g-image src="~/assets/images/deco2.svg" class="video__deco" />
            <video autoplay muted loop id="myVideo">
              <source src="@/assets/images/video.mp4" type="video/mp4" />Your browser does not support HTML5 video.
            </video>
          </div>
          <!-- ~/assets/images/logo-aosp.png -->
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <h1>List articles</h1>
      <a href="http://" class="btn btn-primary">Ciao</a>
      <a href="http://" class="btn btn-secondary">Ciao</a>
      <a href="http://" class="btn btn-default">Ciao</a>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>-->
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-lg-6 mx-auto mt-5">
          <h6>SERVIZI</h6>
          <h2>Offriamo le nostre competenze per i tuoi risultati</h2>
          <p>Logix si propone come punto di riferimento dallo sviluppo all’assistenza nel tempo. Affianchiamo le aziende in ogni fase del ciclo di sviluppo del software: dalla ricerca, al design e sviluppo, alla creazione di MVP, al ridimensionamento, al restauro dei prodotti digitali.</p>
        </div>
      </div>
    </div>
    <div class="wrapper" id="js-wrapper">
      <div class="sections" id="js-slideContainer">
        <section class="section">
          <div class="section__img"></div>
          <g-image src="~/assets/images/deco2.svg" class="section__deco" />
          <div class="section__body">
            <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
            <p></p>
            <div class="d-flex align-items-center">
              <p class="section__label mr-3">Development</p>
              <p class="section__label">Design</p>
            </div>
            <h1 class="section__title">
              Digital
              <br />transformation
            </h1>
            <div class="section__line"></div>
            <p
              class="section__descirption"
            >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
          </div>
          <span id="trigger--title1"></span>
        </section>
        <section class="section">
          <div class="section__img"></div>
          <g-image src="~/assets/images/deco2.svg" class="section__deco" />
          <div class="section__body">
            <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
            <p></p>
            <div class="d-flex align-items-center">
              <p class="section__label mr-3">Development</p>
              <p class="section__label section__label--2">Design</p>
            </div>
            <h1 class="section__title">
              Digital
              <br />transformation
            </h1>
            <div class="section__line"></div>
            <p
              class="section__descirption"
            >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
          </div>
          <span id="trigger--title2"></span>
        </section>
        <section class="section">
          <div class="section__img"></div>
          <g-image src="~/assets/images/deco2.svg" class="section__deco" />
          <div class="section__body">
            <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
            <p></p>
            <div class="d-flex align-items-center">
              <p class="section__label mr-3">Development</p>
              <p class="section__label section__label--2">Design</p>
            </div>
            <h1 class="section__title">
              Digital
              <br />transformation
            </h1>
            <div class="section__line"></div>
            <p
              class="section__descirption"
            >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
          </div>
          <span id="trigger--title3"></span>
        </section>
        <section class="section">
          <div class="section__img"></div>
          <g-image src="~/assets/images/deco2.svg" class="section__deco" />
          <div class="section__body">
            <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
            <p></p>
            <div class="d-flex align-items-center">
              <p class="section__label mr-3">Development</p>
              <p class="section__label section__label--2">Design</p>
            </div>
            <h1 class="section__title">
              Digital
              <br />transformation
            </h1>
            <div class="section__line"></div>
            <p
              class="section__descirption"
            >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
          </div>
          <span id="trigger--title4"></span>
        </section>
        <section class="section">
          <div class="section__img"></div>
          <g-image src="~/assets/images/deco2.svg" class="section__deco" />
          <div class="section__body">
            <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
            <p></p>
            <div class="d-flex align-items-center">
              <p class="section__label mr-3">Development</p>
              <p class="section__label section__label--2">Design</p>
            </div>
            <h1 class="section__title">
              Digital
              <br />transformation
            </h1>
            <div class="section__line"></div>
            <p
              class="section__descirption"
            >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
          </div>
          <span id="trigger--title5"></span>
        </section>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <a href="#" class="btn btn-primary">Scopri le competenze</a>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  articles: allArticles {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "About us"
    // meta: [
    //   { name: 'author', content: 'John Doe' }
    // ],
    // link: [
    //   { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' },
    // ],
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
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
  }
};
</script>
<style lang="scss">
.bgLeft {
  position: absolute;
  left: -100px;
  top: 0;
  background-color: #f3f5fb;
  width: 630px;
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
  // min-width: 100%;
  // min-height: 100%;
}

.hero {
  width: 100%;
  height: 800px;
  background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 700px;
  }
  &__deco {
    position: absolute;
    top: -2px;
    left: -80px;
  }
  &__decoDesigner {
    position: absolute;
    top: 0;
    right: -100px;
    @media screen and (max-width: 992px) {
      top: -110px;
      right: 10px;
    }
  }
  &__decoDeveloper {
    position: absolute;
    bottom: -50px;
    right: 80px;
    @media screen and (max-width: 992px) {
      bottom: -70px;
      right: 50px;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    @media screen and (max-width: 992px) {
      font-size: 40px !important;
    }
  }
  &__description {
    font-size: 22px;
  }
  &__partnership {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
  }
  &__partnershipLogo {
    width: 210px;
    @media screen and (max-width: 992px) {
      width: 80px;
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

.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  /* background: #F64747; */
  padding-left: 5%;
  padding-top: 70px;
  padding-bottom: 70px;
  @media screen and (max-width: 992px) {
    padding-left: 5%;
    padding-top: 200px;
    padding-bottom: 200px;
  }
}

.section {
  height: 100%;
  width: calc(100% / 5);
  float: left;
  position: relative;

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
    background-image: url("~@/assets/images/bg-pic.png");
  }
  &__body {
    width: 662px;
    height: 400px;
    background-color: #eceff8;
    position: absolute;
    top: 18%;
    left: 200px;
    padding: 90px 50px;
    border-radius: 8px;
    @media screen and (max-width: 992px) {
      width: 90%;
      left: 20px;
      padding: 30px 20px;
      height: auto;
    }
    // overflow-x: hidden;
  }
  &__deco {
    position: absolute;
    top: 50px;
    left: 200px;
  }
  &__icon {
    position: absolute;
    top: -30px;
    left: 20px;
    @media screen and (max-width: 992px) {
      top: -80px;
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
  }
  &__description {
    font-size: 18px;
    font-weight: 300;
  }
  &__line {
    height: 1px;
    width: 30px;
    border: 3px solid #000000;
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
  // background: #f9690e;
  @media screen and (min-width: 992px) {
  }
  .section:nth-child(4) {
    // background: #9b59b6;
    margin-left: -4%;
  }
  .section:nth-child(5) {
    // background: #03c9a9;
  }
}
.sections {
  width: 500%;
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
</style>
