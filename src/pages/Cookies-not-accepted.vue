<template>
  <Layout>
    <div class="page404 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto text-center">
              <g-image src="~/assets/images/deco-short1.svg" class="" />
            <h1 class="page404__title">Non hai accettato i cookies :(</h1>
            <h1 class="page404__title mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cookie" class="svg-inline--fa fa-cookie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
          </h1>
            <p class="page404__description">Ti suggeriamo di accettarli<br> per una navigazione del sito più piacevole. <br> <g-link to="/">Torna alla home</g-link> </p>
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
  .svg-inline--fa{
    width: 36px;
  }
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
