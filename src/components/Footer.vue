<template>
  <div>
    <footer class="footer py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h5 class="mb-4 footer__title">Servizi</h5>

            <ul class="list-unstyled mb-2">
              <li class="mb-lg-2">
                <g-link to="/sviluppo-web-and-mobile"
                  >Sviluppo web e mobile</g-link
                >
              </li>
              <li class="mb-lg-2">
                <a href="https://ai-llm-agent.logix-software.it/"
                  >Soluzioni AI LLM Agent</a
                >
              </li>
              <li class="mb-2">
                <g-link to="/design-research-and-strategy">UX/UI design</g-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 mb-3 mb-lg-0">
            <h5 class="mb-4 footer__title d-none d-lg-block">&nbsp</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <g-link to="/digital-transformation"
                  >Digital transformation</g-link
                >
              </li>
              <li class="mb-2">
                <g-link to="/web3">Progettazione Web3/NFT</g-link>
              </li>
              <li>
                <g-link to="/collaborative-team">Collaborative team</g-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 mb-3 mb-lg-0">
            <h5 class="mb-4 footer__title">Prodotti</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="https://crm.logix-software.it/">CRM su misura</a>
              </li>
              <li class="mb-2">
                <a href="https://sgm.logix-software.it/">SGM su misura</a>
              </li>
              <li class="mb-2">
                <a href="https://wbp.logix-software.it/">WBP su misura</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h5 class="mb-4 footer__title">Su di noi</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <g-link to="/chi-siamo">Chi siamo</g-link>
              </li>
              <li class="mb-2">
                <g-link to="/progetti">I progetti</g-link>
              </li>
              <li>
                <g-link to="/blog">Blog</g-link>
              </li>
              <li>
                <g-link to="/faq">FAQ</g-link>
              </li>
            </ul>
            <!-- <ul class="list-unstyled">
              <li class="mb-2">
                <a
                  href="https://www.iubenda.com/privacy-policy/51005590"
                  class="iubenda-black iubenda-embed iubenda-custom"
                  title="Privacy Policy "
                >
                  Privacy & Cookie Policy
                </a>
              </li>
              <li>
                <a href="/note-legali"> Condizioni Generali di Contratto </a>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
      <div class="container h-px bg-secondary my-5"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="pr-lg-5">
              <h5 class="mb-4 footer__title">A Terni</h5>
              <p>Via di Porta San Giovanni, 28 - 05100 Terni (TR)</p>
            </div>
          </div>
          <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="pr-lg-5">
              <h5 class="mb-4 footer__title">A Roma</h5>
              <p>Via Montenero Sabino, 50 - 00131 Roma (RM)</p>
            </div>
          </div>
          <div class="col-lg-3 mb-3 mb-lg-0">
            <h5 class="mb-4 footer__title">Contattaci</h5>
            <p>
              <a href="mailto:info@logixcorp.it">info@logixcorp.it</a>
            </p>
            <p>
              <a href="tel:+0744283733">0744/283733</a>
            </p>
          </div>
          <div class="col-lg-3 mb-3 mb-lg-0">
            <h5 class="mb-4 footer__title">Seguici</h5>
            <ul class="list-unstyled d-flex">
              <li>
                <a
                  href="https://www.facebook.com/LogixSoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="svg-inline--fa fa-facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/logix.software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="svg-inline--fa fa-instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/logix-srl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    class="svg-inline--fa fa-linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div class="subfooter py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 mb-3 mb-lg-0 text-center text-lg-left">
            <span>
              © Copyright {{ new Date().getFullYear() }} Logix Srl - P.iva:
              01388050559
            </span>
          </div>

          <div class="col-lg-4 mb-3 mb-lg-0 text-center">
            <div class="d-flex justify-content-center">
              <a
                href="https://www.iubenda.com/privacy-policy/51005590"
                class="iubenda-black iubenda-embed iubenda-custom text-white mr-2"
                title="Privacy Policy"
              >
                Privacy
              </a>
              &nbsp;
              <a
                href="https://www.iubenda.com/privacy-policy/51005590/cookie-policy"
                class="iubenda-black iubenda-embed iubenda-custom text-white mr-2"
                title="Privacy Policy"
              >
                Cookie Policy
              </a>
              &nbsp;
              <a
                href="https://www.iubenda.com/termini-e-condizioni/51005590"
                class="iubenda-black iubenda-embed iubenda-custom text-white mr-2"
                title="Privacy Policy"
              >
                Termini e condizioni
              </a>
            </div>
            <div class="pt-1">
              <a href="/note-legali" class="text-white">
                Condizioni Generali di Contratto
              </a>
            </div>
          </div>
          <div
            class="col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center justify-lg-content-end"
          >
            <g-image src="~/assets/images/logo-footer.png" class="w-16rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.subfooter {
  background-color: #000000;
  color: #fff;
  font-family: "DM Sans";
  font-size: 12px;
}
.footer {
  font-family: "Lexend Deca";
  background-color: #141414;
  color: #fff;
  font-size: 16px;
  a {
    color: #fff;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 28px;
    line-height: 24px;
    letter-spacing: -0.5px;
    font-family: "DM Sans";
  }
  &__titleSmall {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.44px;
  }
}
.h-px {
  height: 1px;
  opacity: 0.1;
}
.w-16rem {
  width: 16rem;
}
</style>