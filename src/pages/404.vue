<template>
  <Layout>
    <div class="page404 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center">
              <g-image src="~/assets/images/deco-short1.svg" class="" />
            <h1 class="page404__title">Pagina non trovata</h1>
            <h1 class="page404__title mb-4">(-__-;))</h1>
            <p class="page404__description">Oops! La pagina che stavi <br> cercando non esiste,<br> <g-link to="/">torna alla home</g-link> </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.page404 {
  height: 80vh;
  background-color: #000;
  color: #fff;
  &__title {
      font-family: "Lexend Deca";
  font-size: 56px;
  letter-spacing: -2.21px;
  line-height: 58px;
  }
  &__description{
      font-family: "DM Sans";
  font-size: 22px;
//   font-weight: bold;
  letter-spacing: -0.44px;
  line-height: 28px;
      a{
           color: #fff;
          text-decoration: underline;
          font-weight: bold;
      }
  }
}
</style>
