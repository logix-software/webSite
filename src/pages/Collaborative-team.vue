<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="hero hero--competenze d-flex align-items-center text-center" :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="hero__title px-lg-5">{{text.node.headerTitle}}</h1>
              <div class="mb-2">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p
                class="hero__description"
              >{{text.node.headerAbstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence py-5 mb-lg-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 text-center mb-5 mx-auto pb-5">
              <h6 class="competence__name">{{text.node.competenceName}}</h6>
              <h1 class="competence__titleSection">{{text.node.competenceAbstract}}</h1>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-4">
              <div class="competence__box text-center">
                <g-image :src="text.node.competenceBox1Icon" class="competence__icon mb-4" />
                <h1 class="competence__title"> {{text.node.competenceBox1Title}}</h1>
                <div class="mb-3">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <ul class="competence__description list-unstyled text-left pl-5">
                  <li>{{text.node.competenceBox1Abstract1}}</li>
                  <li>{{text.node.competenceBox1Abstract2}}</li>
                  <li>{{text.node.competenceBox1Abstract3}}</li>
                  <li>{{text.node.competenceBox1Abstract4}}</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="competence__box text-center">
                <g-image :src="text.node.competenceBox2Icon" class="competence__icon mb-4" />
                <h1 class="competence__title">{{text.node.competenceBox2Title}}</h1>
                <div class="mb-3">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <ul class="competence__description list-unstyled text-left pl-5">
                  <li>{{text.node.competenceBox2Abstract1}}</li>
                  <li>{{text.node.competenceBox2Abstract2}}</li>
                  <li>{{text.node.competenceBox2Abstract3}}</li>
                  <li>{{text.node.competenceBox2Abstract4}}</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="competence__box text-center">
                <g-image :src="text.node.competenceBox3Icon" class="competence__icon mb-4" />
                <h1 class="competence__title">{{text.node.competenceBox3Title}}</h1>
                <div class="mb-3">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <ul class="competence__description list-unstyled text-left pl-5">
                  <li>{{text.node.competenceBox3Abstract1}}</li>
                  <li>{{text.node.competenceBox3Abstract2}}</li>
                  <li>{{text.node.competenceBox3Abstract3}}</li>
                  <li>{{text.node.competenceBox3Abstract4}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" data-toggle="modal"
              data-target="#modalContact">Parliamo di questo servizio</button>
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
              <button class="btn btn-primary mx-1 mx-lg-2" data-toggle="modal"
              data-target="#modalContact">Contattaci</button>
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
  </Layout>
</template>
<page-query>
query {
  texts: allCollaborativeTeam {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        competenceAbstract
        competenceBox1Icon
        competenceBox1Title
        competenceBox1Abstract1
        competenceBox1Abstract2
        competenceBox1Abstract3
        competenceBox1Abstract4
        competenceBox2Icon
        competenceBox2Title
        competenceBox2Abstract1
        competenceBox2Abstract2
        competenceBox2Abstract3
        competenceBox2Abstract4
        competenceBox3Icon
        competenceBox3Title
        competenceBox3Abstract1
        competenceBox3Abstract2
        competenceBox3Abstract3
        competenceBox3Abstract4
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
    title: "Collaborative Team - Logix Software",
    meta: [
      { name: "description", content: "Il team di esperti Logix è in grado di affiancare le aziende clienti per collaborare nell’ambito digital su progetti di ricerca, sviluppo e design." },
      { property: "og:title", content: "Collaborative Team - Logix Software" },
      {
        property: "og:description",
        content: "Il team di esperti Logix è in grado di affiancare le aziende clienti per collaborare nell’ambito digital su progetti di ricerca, sviluppo e design."
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
        content: "Collaborative Team - Logix Software"
      },
      {
        property: "twitter:description",
        content: "Il team di esperti Logix è in grado di affiancare le aziende clienti per collaborare nell’ambito digital su progetti di ricerca, sviluppo e design."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      { property: "og:url", content: "https://www.logix-software.it/collaborative-team" },
      { name: "robots", content: "index, follow" }
    ]
  },
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
    margin-top: -60px;
  }
  &__box {
    border-radius: 3px;
    background-color: #f0fffb;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
    padding-bottom: 50px;
    min-height: 363px;
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
