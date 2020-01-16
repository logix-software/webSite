<template>
  <header class="header py-3">
    <div class="container d-lg-flex align-items-center justify-content-between">
      <g-link to="/" class>
        <g-image src="~/assets/images/logo/logix-software.svg" class="header__logo aos-animate" />
      </g-link>
      <nav class="nav">
        <ul class="list-unstyled d-lg-flex align-items-center m-0">
          <li class="position-relative py-2 py-lg-0">
            <g-link to class="nav__link mx-3 py-3">Chi siamo</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link to class="nav__link mx-3 py-3">Competenze</g-link>
            <ul class="dropdown list-unstyled">
              <li>
                <g-link class="nav__link mx-3 py-1 d-inline-block" to>link</g-link>
              </li>
              <li>
                <g-link class="nav__link mx-3 py-1 d-inline-block" to>link</g-link>
              </li>
              <li>
                <g-link class="nav__link mx-3 py-1 d-inline-block" to>link</g-link>
              </li>
              <li>
                <g-link class="nav__link mx-3 py-1 d-inline-block" to>link</g-link>
              </li>
              <li>
                <g-link class="nav__link mx-3 py-1 d-inline-block" to>link</g-link>
              </li>
            </ul>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link to class="nav__link mx-3 py-3">Progetti</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
              <g-link to class="btn btn-default mx-3">Contattaci</g-link>
            
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
  methods: {
    hamburger: function(el) {
      document
        .querySelector(".hamburger")
        .classList.toggle("hamburger--active");
      document.querySelector("nav").classList.toggle("nav--active");
      document.querySelector("html, body").classList.toggle("overflow-hidden");
    }
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
  background-color: #FFF;
  z-index: 9;
  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #FFF;
    top: 0;
    position: absolute;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #FFF;
    top: 100%;
    position: absolute;
    transition: all 0.2s;
  }
  &--active {
    background-color: transparent;
    &:before {
      background-color: #FFF;
      top: 50%;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #FFF;
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
  &__logo {
    width: 160px;
    z-index: 9;
    position: relative;
  }
  .nav {
    z-index: 9;
    &__link {
      position: relative;
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
      background-color:rgba(0,0,0,.4);
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
  .dropdown {
    position: absolute;
    top: 120%;
    background: #fff;
    padding: 20px 0;
    display: none;
    z-index: 1;
    width: 250px;
    -webkit-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    -moz-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
  }
  @media screen and (max-width: 992px) {
  }
  li {
      
    a {
      color: #fff;
      text-decoration: none;
      @media screen and (max-width: 992px) {
        font-size: 22px;
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
}
</style>