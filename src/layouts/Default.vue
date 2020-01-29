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
html,body{overflow-x: hidden;}
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
  padding: 0.375rem 1.4rem!important;
}
.btn {
  padding: 0.575rem 1.4rem!important;
}
.btn-primary {
  border-radius: 0!important;
  background-color: #3838c4!important;
  color: #fff!important;
  font-weight: 700!important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent!important;
  &:hover {
    border: 1px solid transparent!important;
    background-color: #ffffff!important;
    box-shadow: 0 19px 56px 0 rgba(25,25,141,0.18)!important;
    color: #3838c4!important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4!important;
    background-color: #ffffff !important;
  }
}
.btn-secondary {
  border-radius: 0!important;
  background-color: #e0e7fc!important;
  color: #3838c4!important;
  font-weight: 700!important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent!important;
  &:hover {
    border: 1px solid transparent!important;
    background-color: #e0e7fc!important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4!important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4!important;
    background-color: #ffffff !important;
  }
}
.btn-default {
  border-radius: 0!important;
  background-color: #eceafd!important;
  color: #3838c4!important;
  font-weight: 700!important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent!important;
  &:hover {
    border: 1px solid transparent!important;
    background-color: #eceafd!important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4!important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4!important;
    background-color: #ffffff !important;
  }
}
.text-blue{
  color: #3838c4 !important;
}
.text-green{
  color: #36F2B9 !important;
}
.owl-dots{
  margin-top: 40px!important;
}
.label{
  padding: 3px 8px;
  height: 18px;		color: #171756;	font-family: Lato;	font-size: 10px;	letter-spacing: 1px;	line-height: 18px;	text-align: center;
  &--dev{
    background-color: #B5F7E3;

  }
  &--des{
 background-color: #D0D0FF;
  }
}
.cta {
  background-color: #ebeff9;
  padding: 31px 130px;
  position: absolute;
  bottom: -30px;
  box-shadow: 0 19px 56px 0 rgba(0,0,0,0.18);

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
</style>
