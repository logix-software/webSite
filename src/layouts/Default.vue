<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
    <div class="cookies py-4">
      <div class="container">
        <div class="row">
          <div class="col-2 col-lg-1 d-flex align-items-center justify-content-between">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cookie" class="svg-inline--fa fa-cookie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
            </div>
          </div>
          <div class="col-10 col-lg-8 d-flex align-items-center">
            <p class="mb-0">
              Questo sito fa uso di cookie per migliorare l’esperienza di navigazione degli utenti e per raccogliere informazioni sull’utilizzo del sito stesso. Può conoscere i dettagli consultando la nostra privacy policy
              <a
                href="https://www.iubenda.com/privacy-policy/51005590"
                target="_blank"
                rel="noopener noreferrer"
              >qui</a>. Selezionando accetta si acconsente all’uso dei cookie.
            </p>
          </div>
          <div class="col-lg-3 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
            <g-link to="/cookies-not-accepted" class="btn btn-negative mr-3">Nega</g-link>
            <button class="btn btn-primary" @click="hideCookies()">Accetta</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade modalContact"
      id="modalContact"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalContactLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-11 position-relative">
                  <g-link to="/" class>
                    <g-image src="~/assets/images/logo/logix-software.svg" class="header__logo" alt="logix-software"/>
                  </g-link>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                      <title>Group@3x</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id="UI"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="square"
                      >
                        <g
                          id="A.2.0---Contattaci"
                          transform="translate(-1233.000000, -43.000000)"
                          stroke="#FFFFFF"
                          stroke-width="1.44"
                        >
                          <g
                            id="Group"
                            transform="translate(1243.000000, 53.000000) scale(-1, 1) translate(-1243.000000, -53.000000) translate(1234.000000, 44.000000)"
                          >
                            <line
                              x1="0.0967741935"
                              y1="17.5714286"
                              x2="17.516129"
                              y2="0.428571429"
                              id="Line-3-Copy"
                            />
                            <line
                              x1="0.0967741935"
                              y1="17.5714286"
                              x2="17.516129"
                              y2="0.428571429"
                              id="Line-3-Copy"
                              transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) "
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <g-image src="~/assets/images/deco-square.svg" class="modalContact__deco" alt="decoration"/>
                  <h1 class="modalContact__title">Contattaci</h1>
                  <p
                    class="modalContact__description mb-5"
                  >Qualunque sia la sfida saremo sempre felici 😃 di parlare con te. Scrivici e ti risponderemo al più presto!</p>
                  <p class="modalContact__text"> <span class="text-green-contact">Scrivici:</span> info@logixcorp.it</p>
                  <p class="modalContact__text"><span class="text-green-contact">Chiamaci:</span> 0744/283733</p>
                  <p class="modalContact__text"><span class="text-green-contact">Passa:</span> Piazza Europa, 5 - 05100 Terni(TR)</p>
                </div>
                <div
                  class="col-lg-8 pl-lg-5 d-flex align-items-center text-center"
                  v-if="formSent==true"
                >
                  <div class="formSent text-center">
                    <h1 class="modalContact__title">Grazie per averci contattato</h1>
                    <g-image src="~/assets/images/icons/sent.svg" class="mt-3 mx-auto" alt="check sent"/>
                  </div>
                </div>
                <form
                  v-else
                  class="col-lg-8 pl-lg-5 d-flex align-items-center"
                  name="contact"
                  method="post"
                  v-on:submit.prevent="handleSubmit"
                  action="/success/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="group">
                        <input type="text" name="name" v-model="formData.name" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="group">
                        <input type="email" name="email" v-model="formData.email" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="group">
                        <input type="text" name="company" v-model="formData.company" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Azienda (opzionale)</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="group">
                        <select v-model="formData.reason" name="reason" required>
                          <option value="Ci contatti per" selected>Ci contatti per</option>
                          <option value="Digital">Digital tranformation</option>
                          <option value="Development">Sviluppo</option>
                          <option value="Design">Design</option>
                          <option value="Collaborative">Collaborative Team</option>
                          <option value="Job">Posizione lavorativa</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="group">
                        <textarea name="message" v-model="formData.message" required row="6" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Messaggio</label>
                      </div>
                    </div>
                    <div class="col-lg-12 text-right">
                      <button type="submit" class="btn btn-secondary">Invia messaggio</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>-->
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      formData: {
        reason: "Ci contatti per"
      },
      formSent: false
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      var _this = this;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => (_this.formSent = true))
        .catch(error => alert(error));
    },

    checkCookies: function() {
      if (document.cookie.match(/cookies=1/gi)) {
        $(".cookies").hide();
      }
    },
    hideCookies: function() {
      document.cookie =
        "cookies=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
      this.checkCookies();
    }
  },
  mounted() {
    if (document.cookie.match(/cookies=1/gi)) {
      $(".cookies").hide();
    }
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
  padding: 0.675rem 1.4rem !important;
  //  font-family: "Lato", sans-serif!important;
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
.btn-negative {
  border-radius: 0 !important;
  background-color: transparent !important;
  color: #3838c4 !important;
  font-weight: 700 !important;
  font-size: 17px;
  outline: none !important;
  opacity: 0.8;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  &:hover {
    border: 1px solid transparent !important;
    background-color: transparent !important;
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
  text-transform: uppercase;
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
    bottom: 0px;
    left: 0;
  }

  &__title {
    color: #232323;
    font-size: 26px !important;
    font-weight: 500;
    letter-spacing: -0.89px;
    line-height: 32px;
    z-index: 1;
    position: relative;
  }
  &__deco {
    position: absolute;
    left: -150px;
    top: 35px;
    z-index: 0;
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
    width: 60%;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__img {
    width: 180px;
  }
  &__title {
    // color: #ffffff;
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
    @media screen and (max-width: 992px) {
      width: 100%;
    }
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
.bg-black-mobile {
  @media screen and (max-width: 576px) {
    background-color: #111111;
  }
}
.modal-dialog {
  max-width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.modal-content {
  background-color: #000 !important;
}
.modal-header {
  border: 0 !important;
}
.modal-content {
  height: auto !important;
  min-height: 100% !important;
  border-radius: 0 !important;
}
.close {
  position: absolute !important;
  right: 15px !important;
  top: 0 !important;
}
.modalContact {
  color: #ffffff !important;
  &__deco {
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
  }
  &__description {
    font-family: "DM Sans";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 28px;
  }
  &__text {
    font-family: "Lexend Deca";
    font-size: 16px;
    letter-spacing: -0.32px;
  }
}
.group {
  position: relative;
  margin-bottom: 45px;
}
input,
textarea, select {
  outline: none;
  border-radius: 0;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent !important;
  color: #fff;
}
select{
  height: 48px;
  //  -webkit-appearance: none;
  //   -moz-appearance: none;
  //    background-position: right 50%;
  //   background-repeat: no-repeat;
  //   background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"><path d="M4 8L0 4h8z"/></svg>')!important;
}
input:focus,
textarea:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #fff;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after,
textarea:focus ~ .bar:before,
textarea:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: transparent;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: transparent;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: transparent;
  }
  to {
    width: 0;
    background: transparent;
  }
}
.cookies {
  background-color: #000;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  .svg-inline--fa{
    width: 36px;
  }
  p {
    font-size: 12px;
    a {
      color: #fff;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
.text-green-contact{
  color: #36F2B9;
}
</style>
