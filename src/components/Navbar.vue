<template>
  <div>
    <header
      class="header py-3"
      :class="{
        'header--white': color === 'white',
      }"
    >
      <div
        class="container-fluid d-lg-flex align-items-center justify-content-between"
      >
        <g-link to="/" class>
          <g-image
            src="~/assets/images/logo/logix-software.svg"
            class="header__logo"
            alt="logix-software"
            v-if="color === 'default' || isMenuOpen"
          />
          <g-image
            src="~/assets/images/logo/logix-software-black.svg"
            class="header__logo"
            alt="logix-software"
            v-if="color === 'white' && !isMenuOpen"
          />
        </g-link>
        <nav class="nav">
          <ul class="list-unstyled d-lg-flex align-items-center m-0">
            <li class="mb-4 d-lg-none">
              <g-image
                src="~/assets/images/logo/logix-software.svg"
                class="header__logo mx-3"
                alt="logix-software"
                v-if="color === 'default' || isMenuOpen"
              />
            </li>
            <li class="position-relative py-2 py-lg-0">
              <g-link to="/chi-siamo" class="nav__link mx-3 py-3"
                >Chi siamo</g-link
              >
            </li>
            <li class="position-relative py-2 py-lg-0">
              <g-link to="/competenze" class="nav__link mx-3 py-3">
                Competenze
              </g-link>
            </li>
            <li class="position-relative py-2 py-lg-0 mb-4 mb-lg-0">
              <g-link to="/progetti" class="nav__link mx-3 py-3"
                >Progetti</g-link
              >
            </li>
            <li class="position-relative py-2 py-lg-0">
              <g-link
                to="/contatti"
                class="btn-gradient-border btn-navbar ml-3"
              >
                Contattaci
              </g-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div
      class="navigationHamburger text-white"
      :class="{
        'navigationHamburger--active': isMenuDesktopOpen,
      }"
    >
      <div
        class="container-fluid navigationHamburger__head d-flex justify-content-between"
      >
        <g-image
          src="~/assets/images/logo/logix-software.svg"
          class="header__logo"
          alt="logix-software"
        />
      </div>
      <div class="row h-100">
        <div
          class="col-lg-6 h-100 text-center d-flex align-items-center justify-content-center position-relative"
        >
          <g-image
            src="~/assets/images/bg-menu.svg"
            class="navigationHamburger__deco"
          />
          <div class="position-relative">
            <h2 class="navigationHamburger__title mb-5">
              Parliamo del tuo progetto?
            </h2>
            <g-link
              to="/contatti"
              class="btn btn-gradient-border btn-gradient-border--white"
              >Contattaci</g-link
            >
          </div>
        </div>
        <div
          class="col-lg-6 navigationHamburger__bg h-100 d-flex align-items-center pl-5"
        >
          <ul class="list-unstyled pl-4 w-100">
            <li class="mb-4">
              <g-link
                to="/competenze"
                class="navigationHamburger__titleLink mb-3 d-inline-block"
              >
                Competenze
              </g-link>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <g-link
                        to="/digital-transformation"
                        class="navigationHamburger__link"
                      >
                        > Digital transformation
                      </g-link>
                    </li>
                    <li class="mb-2">
                      <g-link
                        to="/sviluppo-web-and-mobile"
                        class="navigationHamburger__link"
                      >
                        > Sviluppo Web & Mobile
                      </g-link>
                    </li>
                    <li class="mb-2">
                      <g-link
                        to="/design-research-and-strategy"
                        class="navigationHamburger__link"
                      >
                        > Design research & strategy
                      </g-link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <g-link to="/web3" class="navigationHamburger__link"
                        >> Progettazione Web3/NFT
                      </g-link>
                    </li>
                    <li class="mb-2">
                      <g-link
                        to="/collaborative-team"
                        class="navigationHamburger__link"
                      >
                        > Collaborative team
                      </g-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <g-link
                to="/competenze"
                class="navigationHamburger__titleLink mb-3 d-inline-block"
              >
                Prodotti
              </g-link>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a
                    href="https://crm.logix-software.it/"
                    class="navigationHamburger__link"
                  >
                    > CRM su misura
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://wbp.logix-software.it/"
                    class="navigationHamburger__link"
                  >
                    > WBP su misura
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://sgm.logix-software.it/"
                    class="navigationHamburger__link"
                  >
                    > SGM su misura
                  </a>
                </li>
              </ul>
            </li>
            <li class="mb-4">
              <g-link to="/progetti" class="navigationHamburger__titleLink"
                >Progetti</g-link
              >
            </li>
            <li>
              <g-link to="/chi-siamo" class="navigationHamburger__titleLink">
                Chi siamo
              </g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="hamburger-container align-items-center"
      @click="hamburger()"
      :class="{
        'hamburger-container--white': color === 'white',
        'd-flex': widthScreen < 992,
        'd-none': widthScreen > 992 && scrollTop < 200,
        'd-flex': widthScreen > 992 && scrollTop > 200,
      }"
    >
      <div class="hamburger"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    color: {
      type: String,
      required: false,
      validator: (value) => ["default", "white"].includes(value),
      default: () => "default",
    },
  },
  data() {
    return {
      isMenuOpen: false,
      scrollTop: 0,
      widthScreen: null,
      isMenuDesktopOpen: false,
    };
  },
  mounted() {
    var _this = this;
    this.widthScreen = screen.width;

    if (this.widthScreen < 992 && $("html").hasClass("overflow-hidden")) {
      // _this.hamburger();
      document.querySelector("html").classList.remove("overflow-hidden");
    }
    if (this.widthScreen > 992) {
      window.addEventListener("scroll", function () {
        _this.scrollTop = window.pageYOffset;
      });
    }

    window.addEventListener("resize", () => {
      this.widthScreen = screen.width;
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", null);
  },
  methods: {
    hamburger: function (el) {
      if (this.widthScreen < 992) {
        document
          .querySelector(".hamburger")
          .classList.toggle("hamburger--active");
        document.querySelector("nav").classList.toggle("nav--active");
        document.querySelector("header").classList.toggle("header--black");
        document.querySelector("html").classList.toggle("overflow-hidden");
        this.isMenuOpen = !this.isMenuOpen;
      } else {
        document
          .querySelector(".hamburger")
          .classList.toggle("hamburger--active");
        this.isMenuDesktopOpen = !this.isMenuDesktopOpen;
      }
    },

    // removeOverflow: function(){

    //     document
    //     .querySelector(".hamburger")
    //     .classList.toggle("hamburger--active");
    //   document.querySelector("nav").classList.toggle("nav--active");
    //   document.querySelector("header").classList.toggle("header--black");
    //   document.querySelector("html, body").classList.toggle("overflow-hidden");
    // }
  },
};
</script>

<style lang="scss">
.hamburger-container {
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 5px;
  position: fixed;
  top: 23px;
  right: 30px;
  z-index: 11;
  border-radius: 100%;
  background: #000;
  @media screen and (max-width: 992px) {
    top: 10px;
    position: fixed;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 100%;
    padding: 2px;
    background: linear-gradient(45deg, #f60994, #7878f9, #faca00, #36f2b9);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  &--white {
    background: #fff;
    .hamburger {
      background-color: #000;
      &:before,
      &:after {
        background-color: #000;
      }
    }
  }
}
.hamburger {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  left: -1px;
  background-color: #fff;
  z-index: 11;
  position: relative;
  @media screen and (max-width: 992px) {
    top: 19px;
  }
  &:before {
    content: "";
    width: 120%;
    height: 3px;
    background-color: #fff;
    top: 5px;
    position: absolute;
    transition: transform 0.2s;
  }
  &:after {
    content: "";
    width: 120%;
    height: 3px;
    background-color: #fff;
    bottom: 5px;
    position: absolute;
    transition: transform 0.2s;
  }
  &--active {
    background-color: transparent !important;
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
    }
    @media screen and (max-width: 992px) {
      padding-top: 20px;
      padding-bottom: 30px;
      opacity: 0;
      background-color: rgba(0, 0, 0, 1);
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
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
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        right: 0;
        width: 0px;
        height: 1px;
        background-color: #fff;
        transition: 0.2s all;
      }
      &:hover {
        &:after {
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
  &--white {
    @media screen and (min-width: 992px) {
      // background-color: #fff;
      li {
        a {
          color: #000;
        }
      }
    }
  }
}
.navigationHamburger {
  background: #000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateX(-100%);
  opacity: 0;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  &--active {
    transform: translateX(0);
    opacity: 1;
  }
  &__deco {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100;
    object-fit: cover;
  }
  &__bg {
    background: #111;
    overflow-y: auto;
  }
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 72px;
    line-height: 74px;
    letter-spacing: -3px;
  }
  &__titleLink {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 56px;
    line-height: 58px;
    color: #969696;
    letter-spacing: -2.21209px;
    &:hover {
      color: #fff;
    }
  }
  &__link {
    color: #969696;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.44px;
    &:hover {
      color: #fff;
    }
  }
  &__head {
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
  }
}
</style>