<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Lato:300,400,700|Lexend+Deca&display=swap");
body {
  font-family: "Lato", sans-serif;
  // background: #333;
}
html,
body {
  overflow-x: hidden;
}
p {
}
h1 {
}
h2 {
}
h3 {
}
h4 {
}
h5 {
}
h6 {
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lexend Deca", sans-serif;
}
.btn-nvbar {
  padding: 0.375rem 1.4rem !important;
}
.btn {
  padding: 0.575rem 1.4rem !important;
}
.btn-primary {
  border-radius: 0 !important;
  background-color: #3838c4 !important;
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  &:hover {
    border: 1px solid transparent !important;
    background-color: #ffffff !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4 !important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4 !important;
    background-color: #ffffff !important;
  }
}
.btn-secondary {
  border-radius: 0 !important;
  background-color: #e0e7fc !important;
  color: #3838c4 !important;
  font-weight: 700 !important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  &:hover {
    border: 1px solid transparent !important;
    background-color: #e0e7fc !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4 !important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4 !important;
    background-color: #ffffff !important;
  }
}
.btn-default {
  border-radius: 0 !important;
  background-color: #eceafd !important;
  color: #3838c4 !important;
  font-weight: 700 !important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  &:hover {
    border: 1px solid transparent !important;
    background-color: #eceafd !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4 !important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4 !important;
    background-color: #ffffff !important;
  }
}
.text-blue {
  color: #3838c4 !important;
}
.text-green {
  color: #36f2b9 !important;
}
.owl-dots {
  margin-top: 40px !important;
}
.label {
  padding: 3px 8px;
  height: 18px;
  color: #171756;
  font-family: Lato;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 18px;
  @media screen and (max-width: 992px) {
     line-height: initial;
  }
  text-align: center;
  &--dev {
    background-color: #b5f7e3;
  }
  &--des {
    background-color: #d0d0ff;
  }
}
.cta {
  background-color: #ebeff9;
  padding: 31px 130px;
  position: absolute;
  bottom: -30px;
  box-shadow: 0 19px 56px 0 rgba(0, 0, 0, 0.18);

  @media screen and (max-width: 992px) {
    padding: 30px;
    bottom: -80px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px;
    bottom: -150px;
  }
  &__title {
    color: #232323;
    font-size: 26px !important;
    font-weight: 500;
    letter-spacing: -0.89px;
    line-height: 32px;
  }
  &__deco {
    position: absolute;
    left: -150px;
    top: 35px;
  }
  &--black {
    background-color: #000000;
    color: #fff;
    @media screen and (max-width: 992px) {
      bottom: -70px;
    }
    .cta__title {
      color: #fff;
    }
  }
}
.caseHistoryCompetenze {
  border-radius: 2px;
  background-color: #f1f5ff;
  padding: 40px 60px;
  margin-bottom: -60px;
  z-index: 1;
  position: relative;
  @media screen and (max-width: 992px) {
    padding: 20px 15px;
  }
  &__body {
    width: 40%;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__img {
    width: 180px;
  }
  &__title {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 27px;
  }
  &__description {
    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 17px;
  }
  &__tags {
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.59px;
    line-height: 17px;
  }
  &__link {
    color: #3838c4;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.13px;
    line-height: 24px;
    min-width: 120px;
    display: inline-block;
  }
}
.bg-black {
  background-color: #000;
}
.partnership {
  background-color: #f6f7fa;
  position: relative;
  &__box {
    background-color: #000000;
    width: 90%;
    color: #fff;
    position: relative;
  }
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__logo {
    width: 220px;
    @media screen and (max-width: 992px) {
      width: 140px;
    }
    @media screen and (max-width: 576px) {
      width: 100px;
    }
  }
  &__deco {
    position: absolute;
    right: -80px;
    bottom: -80px;
  }
  &__titleClosing {
    color: #020202;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__descriptionClosing {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
.bg-secondary {
  background-color: #f6f7fa !important;
}
.mouse-effect,
.mouse-effect2 {
  // width: 40px;
  // top: 0;
  // left: 0;
  position: absolute;
}
</style>
