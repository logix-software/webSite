<template>
  <div>
    <footer class="footer py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-4 d-flex align-items-start position-relative">
            <g-image src="~/assets/images/deco3.svg" class="footer__deco pl-5"></g-image>
            <h2 class="footer__title1">Restiamo in contatto</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="pr-lg-5">
              <h3 class="mb-4 footer__title2">Passa da noi</h3>
              <h5 class="footer__title3">Terni</h5>
              <p>Piazza Europa, 5 - 05100 Terni(TR)</p>
              <h5 class="footer__title3">Roma</h5>
              <p>
                Via Marcello Galliani, 62/64 - 00133
                Roma(RM)
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <h5 class="mb-4 footer__title2">Scrivici</h5>
            <p>
              <a href="mailto:info@logixcorp.com">info@logixcorp.com</a>
            </p>
          </div>
          <div class="col-lg-4">
            <h5 class="mb-4 footer__title2">Seguici</h5>
            <ul class="list-unstyled d-flex">
              <li>
                <a
                  href="https://www.facebook.com/SupportLogixSoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-3"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/logix-srl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-3"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/logix.software/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <a
              href="https://www.iubenda.com/privacy-policy/51005590"
              class="iubenda-black iubenda-embed iubenda-custom"
              title="Privacy Policy "
            >Privacy Policy</a>
            <!-- <p>Condizioni Generali di Contarato</p> -->
          </div>
        </div>
      </div>
    </footer>
    <div class="subfooter d-flex align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 d-lg-flex align-items-center justify-content-between">
            <p class="mb-3 mb-lg-0">© Copyright 2019 - Logix Srl</p>
            <p>P.iva: 01388050559</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.subfooter {
  background-color: #000000;
  color: #fff;
  height: 82px;
  @media screen and (max-width: 992px) {
    height: 120px;
  }
  p {
    font-size: 16px;
    margin-bottom: 0;
  }
}
.footer {
  background-color: #1d1d1d;
  color: #fff;
  a {
    color: #fff;
    &:hover,&:active,&:focus{
 color: #fff;
    }
  }
  p {
    font-size: 16px;
  }
  &__deco {
    position: absolute;
    left: -200px;
    top: 12px;
  }
  &__title1 {
    font-family: "DM Sans";
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -1.76px;
  }
  &__title2 {
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1.28px;
  }
  &__title3 {
    font-family: "DM Sans";
    font-size: 22px;
    letter-spacing: -0.44px;
  }
}
</style>