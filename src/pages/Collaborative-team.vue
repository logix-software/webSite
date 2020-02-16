<template>
  <Layout>
    <div class="hero hero--competenze d-flex align-items-center text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 class="hero__title px-lg-5">Collaborative team</h1>
            <div class="mb-2">
              <span class="label label--dev mr-3">DEVELOPMENT</span>
              <span class="label label--des">DESIGN</span>
            </div>
            <p
              class="hero__description"
            >Collaborare con aziende che operano nel digital è per noi un’importante opportunità. Per ovviare a tempi stretti e scadenze incombenti che richiederebbero l’assunzione di personale qualificato, iI nostro team di professionisti è in grado di affiancare le aziende clienti, offrendo le professionalità, le competenze, gli strumenti ed i metodi migliori, in tempi rapidi.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="competence py-5 mb-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-center mb-5 mx-auto pb-5">
            <h6 class="competence__name">COMPETENZE</h6>
            <h1 class="competence__titleSection">Possiamo affiancare team in ambiti differenti</h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-4 ">
            <div class="competence__box text-center">
              <g-image src="~/assets/images/icon-digital.svg" class="competence__icon mb-4" />
              <h1 class="competence__title">Progetto</h1>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <ul class="competence__description list-unstyled text-left pl-5">
                <li>> Scenario research</li>
                <li>> Project management</li>
                <li>> Lean product development</li>
              </ul>
            </div>
          </div>
           <div class="col-lg-4 ">
            <div class="competence__box text-center">
              <g-image src="~/assets/images/icon-digital.svg" class="competence__icon mb-4" />
              <h1 class="competence__title">Progetto</h1>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <ul class="competence__description list-unstyled text-left pl-5">
                <li>> Scenario research</li>
                <li>> Project management</li>
                <li>> Lean product development</li>
              </ul>
            </div>
          </div>
           <div class="col-lg-4 ">
            <div class="competence__box text-center">
              <g-image src="~/assets/images/icon-digital.svg" class="competence__icon mb-4" />
              <h1 class="competence__title">Progetto</h1>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <ul class="competence__description list-unstyled text-left pl-5">
                <li>> Scenario research</li>
                <li>> Project management</li>
                <li>> Lean product development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
          <a href="http://" class="btn btn-primary">Scopri</a>
      </div>
    </div>
     <div class="partnership py-5">
      <div class="partnership__box my-5 py-5">
        <g-image src="~/assets/images/deco2.svg" class="partnership__deco" />
        <div class="container">
          <div class="row">
            <div class="col-lg-11 ml-auto pl-lg-5">
              <h6 class="pl-2 pl-lg-4 partnership__name">Partnership</h6>
              <h1 class="pl-2 pl-lg-4 partnership__title">Hanno già creduto in noi</h1>
              <div class="d-flex flex-wrap align-items-center">
                <g-image src="~/assets/images/logo-aosp.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-ast.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-cogne.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-umbriadigitale.png" class="partnership__logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center py-5">
            <h1 class="partnership__titleClosing mb-4">Sei sicuro della tua nuova idea?</h1>
            <p class="partnership__descriptionClosing mb-5">
              When you enter into any new area of science, you almost
              always find yourself with a baffling new language.
            </p>
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
                <h1 class="cta__title">
                  Consiglio last minute? Parla con Bottino oppure chiama al
                  <span
                    class="text-green"
                  >0744/33434522</span>
                </h1>
              </div>
            </div>
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
      //   deviceWidth: 0
    };
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
    AOS.init();
  }
};
</script>
<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 750px;
  background-image: url("~@/assets/images/hero-design.jpg");
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
  &__name {
    color: #000000;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__titleSection {
    color: #000000;
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__icon {
    width: 150px;
    margin-top: -60px
  }
  &__box{
      border-radius: 3px;	background-color: #F0FFFB;	box-shadow: 0 19px 56px 0 rgba(25,25,141,0.2); padding-bottom: 50px;
      @media screen and (max-width: 992px) {
      margin-bottom: 150px;
    }
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 35px;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__description {
    color: #000000;
    font-family: "DM Sans";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 33px;
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
