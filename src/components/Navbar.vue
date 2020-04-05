<template>
  <header class="header py-3">
    <div class="container-fluid d-lg-flex align-items-center justify-content-between">
      <g-link to="/" class>
        <g-image src="~/assets/images/logo/logix-software.svg" class="header__logo" />
      </g-link>
      <nav class="nav">
        <ul class="list-unstyled d-lg-flex align-items-center m-0">
          <li class="position-relative py-2 py-lg-0">
            <g-link to="/chi-siamo" class="nav__link mx-3 py-3">Chi siamo</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link to="/competenze" class="nav__link mx-3 py-3">
              Competenze
              <!--  class="fas fa-chevron-down ml-2"></i> -->
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </g-link>
            <ul class="dropdown list-unstyled">
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/digital-transformation"
                >> Digital transformation</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/sviluppo-web-and-mobile"
                >> Sviluppo web & mobile</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/design-research-and-strategy"
                >> Design research & strategy</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/collaborative-team"
                >> Collaborative team</g-link>
              </li>
            </ul>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link to="/progetti" class="nav__link mx-3 py-3">Progetti</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <button
              class="btn btn-default btn-navbar mx-3"
              data-toggle="modal"
              data-target="#modalContact"
            >Contattaci</button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hamburger-container d-flex align-items-center d-lg-none" @click="hamburger()">
      <div class="hamburger"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    var _this = this;
    var width = screen.width;

    if (width < 992 && $("html").hasClass("overflow-hidden")) {
      // _this.hamburger();
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  },
  methods: {
    hamburger: function(el) {
      console.log("test2--");
      document
        .querySelector(".hamburger")
        .classList.toggle("hamburger--active");
      document.querySelector("nav").classList.toggle("nav--active");
      document.querySelector("header").classList.toggle("header--black");
      document.querySelector("html").classList.toggle("overflow-hidden");
    }

    // removeOverflow: function(){

    //     document
    //     .querySelector(".hamburger")
    //     .classList.toggle("hamburger--active");
    //   document.querySelector("nav").classList.toggle("nav--active");
    //   document.querySelector("header").classList.toggle("header--black");
    //   document.querySelector("html, body").classList.toggle("overflow-hidden");
    // }
  }
};
</script>

<style lang="scss">

.hamburger-container {
  width: 30px;
  height: 20px;
  position: absolute;
  top: 23px;
  right: 30px;
  z-index: 9;
}
.hamburger {
  width: 26px;
  height: 1px;
  background-color: #fff;
  z-index: 9;
  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: 0;
    position: absolute;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: 100%;
    position: absolute;
    transition: all 0.2s;
  }
  &--active {
    background-color: transparent;
    &:before {
      background-color: #fff;
      top: 50%;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #fff;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
}
.header {
  //   color: #333;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  &--black {
    background-color: #000;
    z-index: 3;
  }
  &__logo {
    width: 160px;
    z-index: 9;
    position: relative;
  }
  .nav {
    z-index: 9;
    .fa-chevron-down {
      width: 14px;
    }
    &__link {
      position: relative;
      font-size: 18px;
      @media screen and (max-width: 992px) {
        font-size: 24px;
      }
      //   &:after {
      //     content: "";
      //     height: 1px;
      //     background-color: #743237;
      //     width: 0;
      //     position: absolute;
      //     bottom: 3px;
      //     left: 50%;
      //     transition: all 0.2s;
      //   }
      //   &:hover {
      //     color: #743237;
      //     &:after {
      //       left: 0%;
      //       width: 100%;
      //     }
      //   }
    }
    @media screen and (max-width: 992px) {
      padding-top: 30px;
      padding-bottom: 30px;
      opacity: 0;
      background-color: rgba(0, 0, 0, 1);
      height: 100%;
      width: 100%;
      position: fixed;
      top: 55px;
      right: 0;
      bottom: 0;
      left: -100%;
      transition: all 0.2s;
      z-index: 9;
    }
    &--active {
      @media screen and (max-width: 992px) {
        left: 0%;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 992px) {
  }
  ul {
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
  li {
    a {
      color: #fff;
      text-decoration: none;
      position: relative;
      @media screen and (max-width: 992px) {
        font-size: 24px;
      }
      &:after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        right: 0;
        width: 0px;
        height: 1px;
        background-color: #fff;
        transition: .2s all;
      }
      &:hover{
        &:after{
          left: 0;
          width: 100%;
        }
      }
    }
    // .btn{
    //       a{
    //           color: #3838c4!important;
    //       }
    //   }
    &:hover {
      .dropdown {
        display: block;
      }
    }
  }
  .dropdown {
    position: absolute;
    top: 120%;

    border-radius: 5px;
    padding: 25px 0;
    display: none;
    z-index: 1;
    width: 240px;
    @media screen and (max-width: 992px) {
      width: 100%;
      margin-left: 15px;
      position: relative;
    }
    // -webkit-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    // -moz-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    // box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    a {
      font-size: 16px;
      font-weight: 300;
      color: #fff;
      @media screen and (min-width: 992px) {
        color: rgba(255, 255, 255, 0.8);
        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
      @media screen and (max-width: 992px) {
        font-size: 22px;
        margin: 6px 0;
      }
    }
  }
}
</style>