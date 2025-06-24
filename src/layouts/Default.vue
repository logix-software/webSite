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
    Footer,
  },
  // data() {
  //   return {
  //     formData: {
  //       reason: "Ci contatti per",
  //     },
  //     formSent: false,
  //   };
  // },
  mounted() {
    if (Object.keys(this.$route.query).length !== 0 && this.$route.query.cmp) {
      localStorage.setItem("param", this.$route.query.cmp);
    }
  },
  // methods: {
  //   encode(data) {
  //     return Object.keys(data)
  //       .map(
  //         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //       )
  //       .join("&");
  //   },
  //   handleSubmit(e) {
  //     var _this = this;
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: this.encode({
  //         "form-name": e.target.getAttribute("name"),
  //         ...this.formData,
  //       }),
  //     })
  //       .then(() => (_this.formSent = true))
  //       .catch((error) => alert(error));
  //   },
  // },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lato:wght@300;400;700&family=Lexend+Deca:wght@300&display=swap");
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
.overflow-hidden {
  overflow: hidden;
}
.btn-nvbar {
  padding: 0.375rem 1.4rem !important;
}
.btn {
  padding: 0.675rem 1.4rem !important;
  //  font-family: "Lato", sans-serif!important;
}
.btn-sm {
  padding: 0.5rem 0.8rem !important;
  //  font-family: "Lato", sans-serif!important;
}
.btn-outline {
  background-color: transparent !important;
  color: #000 !important;
  font-size: 16px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid #000 !important;

  &:hover {
    border: 1px solid #000 !important;
    background-color: #000 !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #fff !important;
  }
  &:focus,
  &:active {
    border: 1px solid #000 !important;
    background-color: #000 !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #fff !important;
  }
}
.btn-outline-white {
  background-color: transparent !important;
  color: #fff !important;
  font-size: 16px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid #fff !important;

  &:hover {
    border: 1px solid #fff !important;
    background-color: #fff !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #000 !important;
  }
  &:focus,
  &:active {
    border: 1px solid #fff !important;
    background-color: #fff !important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #000 !important;
  }
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
.btn-gradient-border {
  position: relative;
  font-family: "DM Sans";
  border-radius: 5px;
  padding: 0.675rem 1.4rem !important;
  border: 0;
  &--white {
    color: #fff !important;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 5px;
    padding: 2px;
    border: 0 !important;
    background: linear-gradient(45deg, #f60994, #7878f9, #faca00, #36f2b9);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: gradient-animation 1.6s linear infinite alternate;
  }
  &:hover {
    background: linear-gradient(45deg, #f60994, #7878f9, #faca00, #36f2b9);
    color: #fff !important;
    text-decoration: none;
    border: 0 !important;
    animation: gradient-animation 1.6s linear infinite alternate;
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
  @keyframes gradient-animation {
    0% {
      background: linear-gradient(45deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    10% {
      background: linear-gradient(65deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    20% {
      background: linear-gradient(85deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    30% {
      background: linear-gradient(95deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    40% {
      background: linear-gradient(105deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    50% {
      background: linear-gradient(125deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    60% {
      background: linear-gradient(135deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    70% {
      background: linear-gradient(145deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    80% {
      background: linear-gradient(155deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    90% {
      background: linear-gradient(165deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
    100% {
      background: linear-gradient(175deg, #f60994, #7878f9, #faca00, #36f2b9);
    }
  }
  &:hover {
    // border: 1px solid transparent !important;
    // background-color: #eceafd !important;
    // box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    // color: #3838c4 !important;
  }
  &:focus,
  &:active {
    // box-shadow: none !important;
    // color: #3838c4 !important;
    // border: 1px solid #3838c4 !important;
    // background-color: #ffffff !important;
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
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  &--client{
    background: #A9EDFF;
  }
  &--development {
    background: linear-gradient(103.3deg, #36f2b9 75.53%, #7878f9 131.85%);
  }
  &--design {
    background: linear-gradient(102.23deg, #36f2b9 -39.46%, #7878f9 30.96%);
  }
  &--operation {
    background: #f9b35f;
  }
  &--strategist {
    background: linear-gradient(
      103.38deg,
      #36f2b9 -114.97%,
      #7878f9 -10.09%,
      #f60994 131.51%
    );
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
.text-black {
  color: #000;
}
.text-white {
  color: #fff;
}
.text-underline {
  text-decoration: underline;
}
.bg-gradient {
  background: linear-gradient(
    97.6deg,
    #98ffe2 -58.24%,
    #8f8ff4 82.58%,
    #f60994 142.61%
  );
  animation: gradient 3s linear infinite;
}

@keyframes gradient {
  0% {
    background: linear-gradient(
      97.6deg,
      #98ffe2 -58.24%,
      #8f8ff4 82.58%,
      #f60994 142.61%
    );
  }
  50% {
    background: linear-gradient(
      97.6deg,
      #98ffe2 -58.24%,
      #a9a9ff -13.46%,
      #fd5cba 142.61%
    );
  }
  100% {
    background: linear-gradient(
      98.38deg,
      #98ffe2 6.41%,
      #7878f9 146.16%,
      #f60994 193.86%
    );
  }
}
.text-gradient-1 {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    98.09deg,
    #36f2b9 37.9%,
    #7878f9 50.47%,
    #f60994 98.93%
  );
}
.text-gradient-2 {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    -123.52deg,
    #36f2b9 -296.84%,
    #7878f9 60.85%,
    #f60994 115.74%
  );
}
.text-gradient-3 {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    287.05deg,
    #36f2b9 15.43%,
    #7878f9 45.24%,
    #f60994 123.92%
  );
}
.text-gradient-4 {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(103.3deg, #36f2b9 15.36%, #7878f9 127.51%);
}
.text-gradient-5 {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    99.97deg,
    #36f2b9 7.48%,
    #7878f9 42.43%,
    #f60994 89.62%
  );
}
.text-gradient-design {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    102.23deg,
    #36f2b9 -39.46%,
    #7878f9 68.85%,
    #f60994 140.03%
  );
}
.text-gradient-development {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(103.3deg, #36f2b9 15.36%, #7878f9 107.51%);
}
.text-gradient-strategy {
  padding-right: 2px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    103.38deg,
    #7878f9 -10.09%,
    #f60994 131.51%
  );
}
.bg-gray-dark {
  background-color: #141414;
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
textarea,
select {
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
select {
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
.labelForm {
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

input:not(:focus) ~ .super-custom{
  font-size: 18px!important;
  top: 10px!important
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

.text-green-contact {
  color: #36f2b9;
}

.min-h-screen {
  min-height: 100vh;
}
</style>
