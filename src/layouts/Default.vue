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
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700|Lexend+Deca&display=swap");
body {
  font-family: "Lato", sans-serif;
  // background: #333;
  overflow-x: hidden;
}
p {
  font-size: 21px!important;
}
h1 {
  font-size: 80px!important;
}
h2 {
  font-size: 56px!important;
}
h3 {
  font-size: 40px!important;
}
h4 {
  font-size: 35px!important;
}
h5 {
  font-size: 22px!important;
}
h6 {
  font-size: 20px!important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lexend Deca", sans-serif;
}
.btn {
  padding: 0.375rem 1.4rem;
}
.btn-primary {
  border-radius: 0!important;
  background-color: #3838c4!important;
  color: #fff!important;
  font-weight: 700!important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid transparent;
    background-color: #ffffff!important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4;
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
  color: #3838c4;
  font-weight: 700!important;
  font-size: 17px;
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid transparent;
    background-color: #e0e7fc!important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4!important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4;
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
  border: 1px solid transparent;
  &:hover {
    border: 1px solid transparent;
    background-color: #eceafd!important;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18) !important;
    color: #3838c4!important;
  }
  &:focus,
  &:active {
    box-shadow: none !important;
    color: #3838c4 !important;
    border: 1px solid #3838c4;
    background-color: #ffffff !important;
  }
}
</style>
