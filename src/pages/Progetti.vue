<template>
  <Layout>
    <div class="hero hero--projects d-flex align-items-center" v-for="text in $page.texts.edges" :key="text.id">
      <g-image src="~/assets/images/deco-hero-projects.svg" class="hero__deco1" />
      <g-image src="~/assets/images/deco-hero-projects.svg" class="hero__deco2" />
      <div class="w-100">
        <h1
          class="hero__title text-left"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="700"
        >{{text.node.headerTitle1}}</h1>
        <h1
          class="hero__title text-right"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="700"
        >{{text.node.headerTitle2}}</h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <g-image :src="text.node.headerImage" class="hero__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="list-projects">
      <!-- <h2 v-for="project in $page.projects.edges" :key="project.id">{{project.node.title}}</h2> -->
      <div class="project py-5" v-for="project in $page.projects.edges" :key="project.id">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6 col-left">
              <div class="project__img" :style="{ 'background-image': 'url(' + project.node.image1 + ')' }">
                <g-image src="~/assets/images/deco3.svg" class="integration__img" />
              </div>
            </div>
            <div class="col-lg-6 pl-lg-5 col-right d-flex align-items-center">
              <div class="pl-lg-5">
                <h1 class="project__title mb-3">{{project.node.title}}</h1>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <p class="project__hashtags mb-3">{{project.node.hashtags}}</p>
                <p class="project__description mb-4">
                  {{project.node.abstract}}
                </p>
                <g-link :to="project.node.path" class="btn btn-secondary">Scopri di più</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tools py-5 my-lg-5" v-for="text in $page.texts.edges" :key="text.id">
      <div class="container mb-4">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center mb-5">
            <h6 class="tools__name">{{text.node.toolsName}}</h6>
            <h1 class="tools__titleSection">{{text.node.toolsTitle}}</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox1Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox1Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox1Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox1Description}}</p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox2Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox2Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox2Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox2Description}}</p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="tools__box">
              <h1 class="tools__title">{{text.node.toolsBox3Title}}</h1>
              <h6 class="tools__subtitle mb-3">{{text.node.toolsBox3Subtitle}}</h6>
              <div class="mb-3">
                <span class="label label--dev mr-3">DEVELOPMENT</span>
                <span class="label label--des">DESIGN</span>
              </div>
              <p class="tools__hashtags mb-4">{{text.node.toolsBox3Hashtags}}</p>
              <p
                class="tools__description"
              >{{text.node.toolsBox3Description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="list-projects">
      <div class="project project--comingSoon py-5" v-for="project in $page.projectsComingSoon.edges" :key="project.id">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6 col-left">
              <div class="project__img" :style="{ 'background-image': 'url(' + project.node.image + ')' }">
                <g-image src="~/assets/images/deco3.svg" class="integration__img" />
              </div>
            </div>
            <div class="col-lg-6 pl-lg-5 col-right d-flex align-items-center">
              <div class="pl-lg-5">
                <h1 class="project__title mb-3">{{project.node.title}}</h1>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <p class="project__hashtags mb-3">{{project.node.hashtags}}</p>
                <p class="project__description mb-4">
                 {{project.node.abstract}}
                </p>
                <a href="/" class="btn btn-secondary">Coming soon</a>
              </div>
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
  texts: allProjectsPage {
    edges {
      node {
        title
        headerTitle1
        headerTitle2
        headerImage
        toolsName
        toolsTitle
        toolsBox1Title
        toolsBox1Subtitle
        toolsBox1Hashtags
        toolsBox1Description
        toolsBox2Title
        toolsBox2Subtitle
        toolsBox2Hashtags
        toolsBox2Description
        toolsBox3Title
        toolsBox3Subtitle
        toolsBox3Hashtags
        toolsBox3Description
      }
    }
  },
  projects: allProjects(order: DESC) {
    edges {
      node {
        title
        image1
        hashtags
        abstract
        path
      }
    }
  },
  projectsComingSoon: allProjectsComingSoon(order: DESC) {
    edges {
      node {
        title
        image
        hashtags
        abstract
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
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Progetti - Logix Software",
    meta: [
      { name: "description", content: "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile." },
      { property: "og:title", content: "Progetti - Logix Software" },
      {
        property: "og:description",
        content: "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile."
      },
      {
        property: "og:image",
        content: "https://www.logix-software.it/assets/static/uploads/share.jpg"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Progetti - Logix Software"
      },
      {
        property: "twitter:description",
        content: "Logix Software collabora da più di 10 anni con aziende ed istituzioni nell’ambito industriale, scolastico, sanitario e logistico, per lo sviluppo di progetti web e mobile."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/assets/static/uploads/share.jpg"
      },
      { property: "og:url", content: "https://www.logix-software.it/progetti" },
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
  background-color: #111111;
  min-height: 800px;
  position: relative;
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
  &__deco2 {
  }
  &__title {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    @media screen and (max-width: 992px) {
      font-size: 50px;
      letter-spacing: initial;
    }
  }
  &__img {
    margin-top: -20px;
    @media screen and (max-width: 992px) {
      margin-top: 0;
    }
  }
}
.project {
  position: relative;
  &:nth-child(odd) {
    background-color: #1d1d1d;
    .project__img {
      img {
        position: absolute;
        right: -60px;
        top: 60px;
      }
    }
    .project__title,
    .project__hashtags,
    .project__description {
      color: #fff;
    }
  }
  &:nth-child(even) {
    background-color: #fff;
    .project__img {
      img {
        position: absolute;
        left: -60px;
        top: 60px;
      }
    }
    &:before {
      background-color: #f3f5fb;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 70%;
      height: 100%;
    }
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
    .project__title,
    .project__hashtags,
    .project__description {
      color: #000;
    }
  }
  &--comingSoon {
    opacity: 0.8;
    pointer-events: none;
    &:nth-child(odd) {
      .btn-secondary{
        color: #fff!important;
        border: 2px solid #fff!important;
        background-color: transparent!important;
      }
    }
    &:nth-child(even) {
       .btn-secondary{
          background-color: transparent!important;
        color:#3838C4!important;
        border: 2px solid #3838C4!important;
      }
    }
  }
  &__img {
    width: 100%;
    height: 700px;
    border-radius: 5px;
    // background-image: url("~@/assets/images/project.png");
    background-size: cover;
    background-position: center;
    position: relative;
    img {
      position: absolute;
      right: -60px;
      top: 60px;
    }
    @media screen and (max-width: 992px) {
      height: 300px;
      margin-bottom: 30px;
    }
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__hashtags {
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.59px;
    line-height: 17px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
.tools {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 200px;
    bottom: -50px;
    width: 70%;
    background-color: #f3f5fb;
  }
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
  &__title {
    font-family: "Lexend Deca";
    font-size: 35px;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__subtitle {
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 16.08px;
  }
  &__hashtags {
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.59px;
    line-height: 17px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 20px;
  }
  &__box {
    border-radius: 3px;
    background-color: #000000;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
    color: #fff;
    padding: 40px 30px;
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
