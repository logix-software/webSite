<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <div class="hero hero--competenze d-flex align-items-center text-center" :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="hero__title">{{text.node.headerTitle}}</h1>
              <div class="my-4">
                <span class="label label--dev mx-2">Development</span>
              </div>
              <p
                class="hero__description"
              >{{text.node.headerAbstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence position-relative py-5">
        <div class="container position-relative py-lg-5">
          <h1 class="competence__bigText" data-aos="fade-left">{{text.node.section1BgText}}</h1>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <g-image :src="text.node.section1Image" class="competence__img" />
            </div>
            <div class="col-lg-5 ml-lg-5">
              <h1 class="competence__title my-3">{{text.node.section1Title}}</h1>
              <p
                class="competence__description mb-4"
              >{{text.node.Section1Abstract}}</p>
              <a href class="btn btn-secondary">Parliamo di questo servizio</a>
            </div>
          </div>
        </div>
      </div>
      <div class="tool py-5">
        <div class="container py-5 position-relative">
          <g-image src="~/assets/images/deco2.svg" class="tool__deco" />
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.toolsName}}</h6>
              <h1
                class="tool__titleSection"
              >{{text.node.toolsAbstract}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox1Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox1Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox1Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox2Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox2Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox2Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox3Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox3Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox3Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox4Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox4Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox4Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox5Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox5Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox5Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox6Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox6Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox6Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox7Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox7Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox7Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.toolsBox8Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.toolsBox8Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.toolsBox8Abstract}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="integration py-5">
        <div class="container d-lg-flex align-items-start align-items-lg-center">
          <div class="mr-lg-5">
            <h1 class="integration__name">> {{text.node.integrationName}}</h1>
          </div>
          <div class="d-flex align-items-center mx-lg-5 px-lg-5 my-4 my-lg-0">
            <g-image :src="text.node.integration1Icon" class="integration__img" />
            <h2 class="integration__title ml-3">{{text.node.integration1}}</h2>
          </div>
          <div class="d-flex align-items-center ml-lg-5">
            <g-image :src="text.node.integration2Icon" class="integration__img" />
            <h2 class="integration__title ml-3">{{text.node.integration2}}</h2>
          </div>
        </div>
      </div>
      <div class="methods py-5">
        <div class="container py-5">
          <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center">
              <g-image src="~/assets/images/method.svg" class="methods__img" />
              <h1 class="methods__title">{{text.node.methodsName}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 mx-auto mb-4 mb-lg-0">
              <h1 class="methods__title">{{text.node.methodsBox1Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.methodsBox1Abstract}}</p>
            </div>
            <div class="col-lg-4 mx-auto">
              <h1 class="methods__title">{{text.node.methodsBox2Title}}</h1>
              <p
                class="methods__description"
              >{{text.node.methodsBox2Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competence competence--inverted position-relative py-5">
        <div class="container position-relative py-5">
          <h1 class="competence__bigText" data-aos="fade-right">{{text.node.section2BgText}}</h1>
          <div class="row align-items-center">
            <div class="col-lg-6 cont-img">
              <g-image :src="text.node.section2Image" class="competence__img" />
            </div>
            <div class="col-lg-5 ml-lg-5 cont-body">
              <h1 class="competence__title my-3">{{text.node.section2Title}}</h1>
              <p
                class="competence__description mb-4"
              >{{text.node.Section2Abstract}}</p>
              <a href class="btn btn-secondary">Parliamo di questo servizio</a>
            </div>
          </div>
        </div>
      </div>
      <div class="tool tool--inverted py-5">
        <div class="container py-5 position-relative">
          <g-image src="~/assets/images/deco2.svg" class="tool__deco" />
          <div class="row">
            <div class="col-lg-5 mx-auto text-center">
              <h6 class="tool__name">{{text.node.tools2Name}}</h6>
              <h1
                class="tool__titleSection"
              >{{text.node.tools2Abstract}}</h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box1Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box1Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box1Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="tool__card tool__card--lightGreen d-flex align-items-center justify-content-center"
              >
                <div>
                  <g-image :src="text.node.tools2Box2Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box2Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box2Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="tool__card tool__card--light d-flex align-items-center justify-content-center"
              >
                <div>
                  <g-image :src="text.node.tools2Box3Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box3Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box3Abstract}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image
                    :src="text.node.tools2Box4Icon"
                    class="tool__img"
                  />
                  <h2 class="tool__title">{{text.node.tools2Box4Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box4Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box5Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box5Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box5Abstract}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tool__card d-flex align-items-center justify-content-center">
                <div>
                  <g-image :src="text.node.tools2Box6Icon" class="tool__img" />
                  <h2 class="tool__title">{{text.node.tools2Box6Title}}</h2>
                  <p
                    class="tool__description"
                  >{{text.node.tools2Box6Abstract}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="technology py-5 bg-secondary">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4 ml-lg-auto">
              <g-image :src="text.node.section3Image" class="technology__img mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-4 mr-lg-auto">
              <h1 class="technology__title">{{text.node.section3Title}}</h1>
              <p
                class="technology__description"
              >{{text.node.section3Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="technology technology--inverted py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4 mr-lg-auto col-left">
              <g-image :src="text.node.section4Image" class="technology__img mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-4 ml-lg-auto col-right">
              <h1 class="technology__title">{{text.node.section4Title}}</h1>
              <p
                class="technology__description"
              >{{text.node.section4Abstract}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="techs py-5">
        <div class="container d-inline-block d-lg-flex align-items-center justify-content-around">
          <g-image :src="text.node.logo1" class="techs__img mx-3" />
          <g-image :src="text.node.logo2" class="techs__img mx-3" />
          <g-image :src="text.node.logo3" class="techs__img mx-3" />
          <g-image :src="text.node.logo4" class="techs__img mx-3" />
          <g-image :src="text.node.logo5" class="techs__img mx-3" />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="caseHistoryCompetenze">
              <div class="d-lg-flex align-items-center justify-content-between" v-for="textCtaProject in $page.textsCtaProject.edges" :key="textCtaProject.id">
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
  texts: allSviluppoWeb {
    edges {
      node {
        title
        headerTitle
        headerImage
        headerAbstract
        section1Title
        Section1Abstract
        section1BgText
        section1Link
        section1Image
        toolsAbstract
        toolsBox1Icon
        toolsBox1Title
        toolsBox1Abstract
        toolsBox2Icon
        toolsBox2Title
        toolsBox2Abstract
        toolsBox3Icon
        toolsBox3Title
        toolsBox3Abstract
        toolsBox4Icon
        toolsBox4Title
        toolsBox4Abstract
        toolsBox5Icon
        toolsBox5Title
        toolsBox5Abstract
        toolsBox6Icon
        toolsBox6Title
        toolsBox6Abstract
        toolsBox7Icon
        toolsBox7Title
        toolsBox7Abstract
        toolsBox8Icon
        toolsBox8Title
        toolsBox8Abstract
        integrationName
        integration1
        integration1Icon
        integration2
        integration2Icon
        methodsName
        methodsBox1Title
        methodsBox1Abstract
        methodsBox2Title
        methodsBox2Abstract
        section2Title
        Section2Abstract
        section2BgText
        section2Link
        section2Image
        tools2Name
        tools2Abstract
        tools2Box1Icon
        tools2Box1Title
        tools2Box1Abstract
        tools2Box2Icon
        tools2Box2Title
        tools2Box2Abstract
        tools2Box3Icon
        tools2Box3Title
        tools2Box3Abstract
        tools2Box4Icon
        tools2Box4Title
        tools2Box4Abstract
        tools2Box5Icon
        tools2Box5Title
        tools2Box5Abstract
        tools2Box6Icon
        tools2Box6Title
        tools2Box6Abstract
        section3Title
        section3Abstract
        section3Image
        section4Title
        section4Abstract
        section4Image
        logo1
        logo2
        logo3
        logo4
        logo5
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
    title: "Sviluppo Web & Mobile - ",
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
    height: 600px;
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
  background-color: #000000;
  color: #fff;
  &__img {
    width: 100%;
  }
  &__body {
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__bigText {
    position: absolute;
    right: -100px;
    bottom: 80px;
    color: rgba(255, 255, 255, 1);
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    line-height: 41px;
  }
  &--inverted {
    .competence__bigText {
      left: -100px;
      bottom: -30px;
    }
    .cont-body {
      order: 0;
    }
    .cont-img {
      order: 1;
    }
  }
}
.tool {
  color: #000;
  position: relative;
  &__deco {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 80%;
    bottom: 20%;
    background-color: #f3f5fb;
  }
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__titleSection {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__img {
    height: 53px;
    width: 53px;
  }
  &__card {
    width: 226px;
    margin: 30px auto;
    height: 245px;
    text-align: center;
    padding: 20px 15px;
    border-radius: 3px;
    background-color: #000000;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
    &--lightGreen {
      background-color: #f0fffb !important;
      .tool__title {
        color: #000 !important;
      }
      .tool__description {
        color: #000 !important;
      }
    }
    &--light {
      background-color: #f9f9fa !important;
      .tool__title {
        color: #000 !important;
      }
      .tool__description {
        color: #000 !important;
      }
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.77px;
    line-height: 32px;
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 20px;
    margin-bottom: 0;
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
  &--inverted {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0%;
      width: 80%;
      bottom: 60%;
      background-color: #f3f5fb;
    }
  }
}
.integration {
  &__name {
    color: #111111;
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__title {
    color: #111111;
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 24px;
  }
  &__img {
    height: 53px;
    width: 53px;
  }
}
.methods {
  background-color: #1d1d1d;
  color: #fff;
  &__img {
  }
  &__title {
    font-family: "DM Sans";
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
.technology {
  color: #000;
  &__img {
    width: 100%;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &--inverted {
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
  }
}
.techs {
  background-color: #000;
  &__img {
    max-width: 180px;
    @media screen and (max-width: 992px) {
      max-width: 80px;
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
.mouse-effect {
  width: 40px;
  top: 0;
  left: 0;
  position: fixed;
}
</style>
