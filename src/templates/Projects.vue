<template>
  <Layout>
    <div class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="hero__title">{{$page.project.title}}</h1>
            <div class="mb-3">
              <span class="label label--dev mr-3">DEVELOPMENT</span>
              <span class="label label--des">DESIGN</span>
            </div>
            <p class="hero__hashtags mb-0">{{$page.project.hashtags}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="imgPrimary" :style="{ 'background-image': 'url(' + $page.project.image1 + ')' }"></div>
    <div class="theProject d-flex align-items-center">
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-12">
            <h1 class="theProject__title">{{$page.project.sectionTitle}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <p class="theProject__description" v-html="$page.project.content"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="info1 d-flex align-items-center py-5" v-if="$page.project.numberSections > 0">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mx-auto d-flex align-items-center justify-content-center order-1 order-lg-0">
            <g-image :src="$page.project.image2" class="info1__img" />
          </div>
          <div class="col-lg-6 mx-auto d-flex align-items-center order-0 order-lg-1">
            <div>
              <h1 class="info1__title mb-3">{{$page.project.title2}}</h1>
              <p class="info1__description">{{$page.project.abstract2}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info2 d-flex align-items-center py-5 mb-5" v-if="$page.project.numberSections > 1">
      <div class="container mb-lg-5">
        <div class="row mb-lg-5">
          <div class="col-lg-6 mx-auto d-flex align-items-center">
            <div>
              <h1 class="info2__title mb-3">{{$page.project.title3}}</h1>
              <p class="info2__description">{{$page.project.abstract3}}</p>
            </div>
          </div>
          <div class="col-lg-4 mx-auto text-center d-flex align-items-center justify-content-center">
            <g-image :src="$page.project.image3" class="info2__img" />
          </div>
        </div>
      </div>
    </div>
    <div class="info1 d-flex align-items-center py-5" v-if="$page.project.numberSections > 2">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mx-auto d-flex align-items-center justify-content-center order-1 order-lg-0" v-if="$page.project.image4">
            <g-image :src="$page.project.image4" class="info1__img" />
          </div>
          <div class="col-lg-6 mx-auto"
            :class="{
              'text-center': !$page.project.image4
            }">
            <div>
              <h1 class="info1__title mb-3">{{$page.project.title4}}</h1>
              <p class="info1__description">{{$page.project.abstract4}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info2 d-flex align-items-center py-5 mb-5" v-if="$page.project.numberSections > 3">
      <div class="container mb-lg-5">
        <div class="row mb-lg-5">
          <div class="col-lg-6 mx-auto d-flex align-items-center"
            :class="{
              'text-center': !$page.project.image5
            }">
            <div>
              <h1 class="info2__title mb-3">{{$page.project.title5}}</h1>
              <p class="info2__description">{{$page.project.abstract5}}</p>
            </div>
          </div>
          <div class="col-lg-4 mx-auto text-center d-flex align-items-center justify-content-center" v-if="$page.project.image5">
            <g-image :src="$page.project.image5" class="info2__img" />
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 my-sm-0">
      <div class="row">
        <div class="col-lg-10 mt-5 mt-sm-0 ml-auto position-relative">
          <div class="cta">
            <g-image src="~/assets/images/deco3.svg" class="cta__deco" alt="decoration"/>
            <div class="d-lg-flex align-items-center justify-content-between">
              <h1 class="cta__title">
                Pronto a realizzare la tua prossima
                <span class="text-blue">innovazione</span>?
              </h1>
               <button class="btn btn-primary " data-toggle="modal"
              data-target="#modalContact">Contattaci</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 d-flex align-items-center">
            <h1 class="testimonial__title">{{$page.project.section2Title}}</h1>
          </div>
          <div class="col-lg-4">
            <h6 class="testimonial__description mb-3">{{$page.project.section2Feedback}}</h6>
            <div class="d-flex align-items-center">
              <div class="mr-3">
                <div
                  class="testimonial__photo"
                  :style="{ 'background-image': 'url(' + $page.project.section2Image + ')' }"
                ></div>
              </div>
              <div>
                <h6 class="testimonial__name">{{$page.project.section2Name}}</h6>
                <p class="testimonial__position mb-0">{{$page.project.section2Position}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projectSecondary py-5 my-lg-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center">
            <h1 class="projectSecondary__title">{{$page.project.section3Title}}</h1>
            <p class="projectSecondary__description mb-5">{{$page.project.section3Abstract}}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <g-image :src="$page.project.section3Image" class="projectSecondary__img" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center py-5">
            <h1 class="title">{{$page.project.cta}}</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="caseHistoryCompetenze">
                <div class="d-lg-flex align-items-center justify-content-between" >
                  <div class="d-lg-flex align-items-start">
                    <g-image :src="$page.project.ctaProjectImage" class="caseHistoryCompetenze__img" />
                    <div class="caseHistoryCompetenze__body ml-4">
                      <div class="mb-2">
                        <span class="label label--dev mr-3">DEVELOPMENT</span>
                        <span class="label label--des">DESIGN</span>
                      </div>
                      <h1 class="caseHistoryCompetenze__title">{{$page.project.ctaProjectTitle}}</h1>
                      <p
                        class="caseHistoryCompetenze__description"
                      >{{$page.project.ctaProjectDescription}}</p>
                      <p class="caseHistoryCompetenze__tags">{{$page.project.ctaProjectHashtags}}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <g-link
                      :to="$page.project.ctaProjectLink"
                      class="caseHistoryCompetenze__link"
                    >_Scopri di più</g-link>
                  </div>
                </div>
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
        <g-image src="~/assets/images/deco2.svg" class="partnership__deco" alt="partnership"/>
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
              <button class="btn btn-primary " data-toggle="modal"
              data-target="#modalContact">Contattaci</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 pt-5">
        <div class="row">
          <div class="col-lg-10 ml-auto position-relative mt-lg-5">
            <div class="cta cta--black">
              <g-image src="~/assets/images/deco3.svg" class="cta__deco" alt="decoration"/>
              <div class="d-flex align-items-center justify-content-between w-75">
                <h1 class="cta__title">{{textPartnership.node.ctaTitle}} <span class="text-green">{{textPartnership.node.ctaGreen}}</span> </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
    project: projects (path: $path) {
        title
        image1
        hashtags
        abstract
        sectionTitle
        numberSections
        image2
        title2
        abstract2
        image3
        title3
        abstract3
        image4
        title4
        abstract4
        image5
        title5
        abstract5
        section2Title
        section2Feedback
        section2Name
        section2Position
        section2Image
        section3Title
        section3Abstract
        section3Image
        ctaProjectTitle
        ctaProjectDescription
        ctaProjectHashtags
        ctaProjectImage
        ctaProjectLink
        cta
        content
        path
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
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.abstract,
        },
        {
          property: "og:title",
          content: this.$page.project.title,
        },
        {
          property: "og:description",
          content: this.$page.project.abstract,
        },
        {
          property: "og:image",
          content:
            "https://www.logix-software.it/uploads/share.jpg"
        },
        {
          property: "twitter:card",
          content: "summary"
        },
        {
          property: "twitter:title",
          content: this.$page.project.title,
        },
        {
          property: "twitter:description",
          content: this.$page.project.abstract,
        },
        {
          property: "twitter:image",
          content:
            "https://www.logix-software.it/uploads/share.jpg"
        },
        {
          property: "og:url",
          content: "https://www.logix-software.it" + this.$page.project.path,
        },
        { name: "robots", content: "index, follow" }
      ]
    };
  },

  data() {
    return {
      //   deviceWidth: 0
    };
  },
  mounted() {
    AOS.init();
  }
};
</script>
<style lang="scss" scoped>
.hero {
  background-color: #111111;
  height: 500px;
  color: #ffffff;
  &__title {
    font-family: "Lexend Deca";
    font-size: 80px;
    letter-spacing: -3.61px;
    line-height: 82px;
    @media screen and (max-width: 992px) {
      font-size: 46px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__hashtags {
    width: 30%;
    margin: 0 auto;
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.59px;
    line-height: 17px;
    @media screen and (max-width: 992px) {
      width: 80%;
    }
  }
}
.imgPrimary {
  width: 100%;
  height: 700px;
  //   background-image: url("~@/assets/images/project.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 992px) {
    height: 250px;
  }
}
.theProject {
  padding: 100px 0px;
  width: 100%;
  height: auto;
  background-color: #111111;
  color: #ffffff;
  &__title {
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -9.63px;
    @media screen and (max-width: 992px) {
      font-size: 60px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
.info1 {
  background-color: #f3f5fb;
  height: 600px;
  @media screen and (max-width: 992px) {
    height: auto;
  }
  width: 100%;
  color: #000000;
  &__img {
    max-width: 100%;
    // margin-bottom: -100px;
    @media screen and (max-width: 992px) {
      max-width: 80%;
      margin: 20px auto;
    }
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
}
.info2 {
  background-color: #fff;
  height: 600px;
  @media screen and (max-width: 992px) {
    height: auto;
  }
  width: 100%;
  color: #000000;
  &__img {
    max-width: 100%;
    // margin-top: -100px;
    @media screen and (max-width: 992px) {
      max-width: 80%;
      margin: 20px auto;
    }
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
}
.testimonial {
  background-color: #1d1d1d;
  color: #fff;
  height: 342px;
  &__title {
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
    position: relative;
    &:before {
      content: '"';
      position: absolute;
      top: -10px;
      left: -10px;
      color: #fff;
      font-size: 36px;
      font-family: Lato;
    }
    &:after {
      content: '"';
      position: absolute;
      bottom: -10px;
      right: -10px;
      color: #fff;
      font-size: 36px;
      font-family: Lato;
    }
  }
  &__name {
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 24px;
  }
  &__position {
    font-family: "Lexend Deca";
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 24px;
  }
  &__photo {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // background-image: url("~@/assets/images/project.jpg");
  }
}
.projectSecondary {
  &__title {
    color: #000000;
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__img {
    margin: 0 auto;
    max-width: 100%;
  }
}
.bg-black {
  .title {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
    line-height: 58px;
  }
}
.caseHistoryCompetenze {
  margin-bottom: -210px;
}
.partnership {
  margin-top: 200px;
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
