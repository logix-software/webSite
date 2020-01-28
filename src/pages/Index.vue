<template>
  <Layout>
    <div class="hero hero--home d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 position-relative ml-auto">
            <g-image src="~/assets/images/deco.svg" class="hero__deco" />
            <g-image src="~/assets/images/deco-designer.svg" class="hero__decoDesigner" />
            <g-image src="~/assets/images/deco-developer.svg" class="hero__decoDeveloper" />
            <h1 class="hero__title">Sviluppiamo nuove logiche digitali</h1>
          </div>
          <div class="col-lg-5"></div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-5 ml-auto">
            <p
              class="hero__description"
            >Collaboriamo da più di 10 anni con le aziende per costruire soluzioni digitali personalizzate e adatte agli utenti che le utilizzano.</p>
          </div>
        </div>
      </div>
      <div class="hero__partnership">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 ml-auto">
              <h6 class="pl-2 pl-lg-4">Partnership</h6>
              <div class="d-flex align-items-center">
                <g-image src="~/assets/images/logo-aosp.png" class="hero__partnershipLogo" />
                <g-image src="~/assets/images/logo-ast.png" class="hero__partnershipLogo" />
                <g-image src="~/assets/images/logo-cogne.png" class="hero__partnershipLogo" />
                <g-image
                  src="~/assets/images/logo-umbriadigitale.png"
                  class="hero__partnershipLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container position-relative">
      <div class="bgLeft"></div>
      <div class="row">
        <div class="col-lg-9 ml-auto">
          <div class="video position-relative">
            <g-image src="~/assets/images/deco2.svg" class="video__deco" />
            <video autoplay loop muted playsinline id="myVideo" preload="auto">
              <source src="@/assets/images/video.mp4" type="video/mp4" />Your browser does not support HTML5 video.
            </video>
          </div>
          <!-- ~/assets/images/logo-aosp.png -->
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <h1>List articles</h1>
      <a href="http://" class="btn btn-primary">Ciao</a>
      <a href="http://" class="btn btn-secondary">Ciao</a>
      <a href="http://" class="btn btn-default">Ciao</a>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>-->
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-lg-6 mx-auto mt-5">
          <h6>SERVIZI</h6>
          <h2>Offriamo le nostre competenze per i tuoi risultati</h2>
          <p>Logix si propone come punto di riferimento dallo sviluppo all’assistenza nel tempo. Affianchiamo le aziende in ogni fase del ciclo di sviluppo del software: dalla ricerca, al design e sviluppo, alla creazione di MVP, al ridimensionamento, al restauro dei prodotti digitali.</p>
        </div>
      </div>
    </div>
    <!-- v-if="deviceWidth > 992" -->
    <div v-if="deviceWidth > 992">
      <div class="wrapper" id="js-wrapper">
        <div class="sections" id="js-slideContainer">
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
              <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
            <span id="trigger--title1"></span>
          </section>
          <section class="section section--2">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label section__label--2">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
            <span id="trigger--title2"></span>
          </section>
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label section__label--2">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
            <span id="trigger--title3"></span>
          </section>
          <section class="section section--2">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label section__label--2">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
            <span id="trigger--title4"></span>
          </section>
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label section__label--2">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
            <span id="trigger--title5"></span>
          </section>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="owl-carousel owl-theme owl-carousel-services">
        <div class="item">
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
          </section>
        </div>
        <div class="item">
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
          </section>
        </div>
        <div class="item">
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
          </section>
        </div>
        <div class="item">
          <section class="section">
            <div class="section__img"></div>
            <g-image src="~/assets/images/deco2.svg" class="section__deco" />
            <div class="section__body">
               <div class="section__shadow"></div>
              <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
              <p></p>
              <div class="d-flex align-items-center">
                <p class="section__label mr-3">Development</p>
                <p class="section__label">Design</p>
              </div>
              <h1 class="section__title">
                Digital
                <br />transformation
              </h1>
              <div class="section__line mb-3"></div>
              <p
                class="section__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="container pb-5 mt-5">
      <div class="row">
        <div class="col-lg-12">
          <a href="#" class="btn btn-primary">Scopri le competenze</a>
        </div>
      </div>
    </div>
    <div class="container-fluid position-relative caseHistory my-5">
      <div class="caseHistory__body">
        <h6 class="caseHistory__name">CASE HISTORY</h6>
        <h1 class="caseHistory__title mb-lg-5">Tra gli ultimi lavori realizzati</h1>

        <div class="position-relative caseHistory__container">
          <div class="caseHistory__img mb-4 mb-lg-0">
            <h1 class="caseHistory__textBg">Education</h1>
            <g-image src="~/assets/images/deco-plane.svg" class="caseHistory__deco2" />
          </div>
          <div class="position-relative">
            <g-image src="~/assets/images/deco3.svg" class="caseHistory__deco" />
            <h4 class="caseHistory__titleProject">Acta Logix - registro elettronico</h4>
          </div>
          <div class="d-flex align-items-center mt-3 mb-4">
            <p class="section__label mr-3 mb-0">Development</p>
            <p class="section__label section__label--2 mb-0">Design</p>
          </div>
          <p class="caseHistory__description mb-5">
            When you enter into any new area of science, you almost
            always find yourself with a baffling new language of technical terms to learn before.
          </p>

          <div class="testimonial">
            <p
              class="testimonial__cit"
            >Abbiamo portato avanti il progetto! 👍👍 una collaborazione che dura da anni.</p>

            <div class="d-flex align-items-center mb-5">
              <div>
                <div class="testimonial__pic mr-2"></div>
              </div>
              <div>
                <h6 class="testimonial__name mb-0">Giovanna Miriani</h6>
                <p class="testimonial__position mb-0">Preside scolastico - Istituto M. Rosselli</p>
              </div>
            </div>
            <div class="testimonial__logo"></div>
          </div>
          <a href="http://" class="btn btn-secondary">Scopri di più</a>
        </div>
      </div>
    </div>
    <div class="tools py-5">
      <div class="container my-lg-5">
        <div class="row">
          <div class="col-lg-6">
            <h6 class="tools__name">STRUMENTI</h6>
            <h1 class="tools__title">Utilizziamo i linguaggi ed i framework più potenti e stabili</h1>
            <p
              class="tools__description"
            >Rimanere al passo con i tempi ed utilizzare i migliori strumenti fa parte del nostro lavoro.</p>
          </div>
          <div class="col-lg-3 ml-auto position-relative text-center">
            <g-image src="~/assets/images/deco2.svg" class="tools__deco" />
            <g-image src="~/assets/images/icon-code.png" class="tools__icon" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 d-inline-block align-items-center py-5">
            <g-image src="~/assets/images/logo/vue.png" class="tools__logo" />
            <g-image src="~/assets/images/logo/react.png" class="tools__logo" />
            <g-image src="~/assets/images/logo/angular.png" class="tools__logo" />
            <g-image src="~/assets/images/logo/ionic.png" class="tools__logo" />
            <g-image src="~/assets/images/logo/net.png" class="tools__logo" />
            <g-image src="~/assets/images/logo/java.png" class="tools__logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 ml-auto position-relative">
          <div class="cta">
            <g-image src="~/assets/images/deco3.svg" class="cta__deco" />
            <div class="d-lg-flex align-items-center justify-content-between">
              <h1 class="cta__title">
                Pronto a realizzare la tua prossima
                <span class="text-blue">innovazione</span>?
              </h1>
              <a href="http://" class="btn btn-primary">Contattaci</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cause">
      <div class="container mb-5">
        <div class="row">
          <div class="col-lg-7 mx-auto text-center">
            <h1 class="cause__title mb-4">Cosa vogliamo perseguire</h1>
            <p
              class="cause__description"
            >Come sviluppatori, come designer, come professionisti, ma soprattutto come persone, qui in Logix crediamo nel nostro lavoro e pensiamo che attravreso i nostri progetti, almeno un po’, il mondo possa cambiare.</p>
          </div>
        </div>
      </div>
      <div v-if="deviceWidth > 992">
        <div class="wrapper2" id="js-wrapper2">
          <div class="sections2" id="js-slideContainer2">
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title1"></span>
            </section>
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title2"></span>
            </section>
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title3"></span>
            </section>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="owl-carousel owl-theme owl-carousel-causes">
          <div class="item">
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title1"></span>
            </section>
          </div>
          <div class="item">
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title1"></span>
            </section>
          </div>
          <div class="item">
            <section class="section2">
              <div class="d-flex align-items-start">
                <h1 class="section2__num mx-2 mx-lg-0">1</h1>
                <div>
                  <div class="section2__img mx-2 mx-lg-3">
                    <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                    <h1 class="section2__textBg">Made in Italy</h1>
                  </div>
                </div>
                <div class="section2__body ml-3">
                  <h1 class="section2__title">Made in Italy</h1>
                  <p
                    class="section2__description"
                  >Siamo sempre felici di poter contribuire a progetti che tutelano e sostengono il Made in Italy.</p>
                </div>
              </div>
              <span id="trigger2--title1"></span>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="values py-5">
            <div class="values__body">
              <g-image src="~/assets/images/deco2.svg" class="values__deco" />
              <div class="w-75 mb-5">
                <h6 class="values__name">VALORI</h6>
                <h1 class="values__title">Cosa non dimentichiamo mai</h1>
                <p
                  class="values__description"
                >Rimanere al passo con i tempi ed utilizzare i migliori strumenti fa parte del nostro lavoro.</p>
              </div>
              <div class="container-values d-flex flex-wrap justify-content-end">
                <div class="value mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/trasparenza.svg" class="value__icon" />
                  <h2 class="value__title">Trasparenza</h2>
                  <p
                    class="value__description"
                  >I nostri clienti sono attivamente coinvolti in tutte le fasi di progettazione e realizzazione.</p>
                </div>
                <div class="value value--2 mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/curiosita.svg" class="value__icon" />
                  <h2 class="value__title">Curiosità</h2>
                  <p
                    class="value__description"
                  >Siamo una squadra appassionata sempre alla ricerca di sfide nuove ed importanti.</p>
                </div>
                <div class="value mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/disponibilita.svg" class="value__icon" />
                  <h2 class="value__title">Disponibilità</h2>
                  <p
                    class="value__description"
                  >Siamo aperti ad ogni sfida e ad ogni tipo di suggerimento per ascoltare e comprendere tutte le esigenze dei nostri clienti.</p>
                </div>
                <div class="value value--2 mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/positivita.svg" class="value__icon" />
                  <h2 class="value__title">Positività</h2>
                  <p
                    class="value__description"
                  >Cerchiamo di non rinunciare mai al sorriso, ingrendiente fondamentale per rispondere al meglio alle sfide quotidiane.</p>
                </div>
                <div class="value mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/caffe.svg" class="value__icon" />
                  <h2 class="value__title">Caffè</h2>
                  <p
                    class="value__description"
                  >Litri e litri di caffè che ci aiutano a svolgere al meglio il nostro lavoro! ;)</p>
                </div>
                <div class="value value--2 mx-1 mx-lg-0 mr-lg-4 mb-4">
                  <g-image src="~/assets/images/icons/metodo.svg" class="value__icon" />
                  <h2 class="value__title">Metodo</h2>
                  <p
                    class="value__description"
                  >Il nostro approccio olistico ci permette di arrivare, insieme ai nostri clienti, ai migliori risultati, nei tempi stabiliti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="idea py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center py-5">
            <h1 class="idea__title mb-3">Sei sicuro della tua nuova idea?</h1>
            <p class="idea__descrition mb-5">
              When you enter into any new area of science, you almost
              always find yourself with a baffling new language.
            </p>
            <a href="http://" class="btn btn-primary mr-lg-3">Certo</a>
            <a href="http://" class="btn btn-secondary">Abbastanza</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-10 ml-auto position-relative">
          <div class="cta cta--black">
            <g-image src="~/assets/images/deco3.svg" class="cta__deco" />
            <div class="d-flex align-items-center justify-content-between w-75">
              <h1 class="cta__title">
                Pronto a realizzare la tua prossima
                <span class="text-green">innovazione</span>?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-lg-flex">
        <div>
          <div
            class="article__img"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>-->
  </Layout>
</template>
<page-query>
query {
  articles: allArticles {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "About us"
    // meta: [
    //   { name: 'author', content: 'John Doe' }
    // ],
    // link: [
    //   { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' },
    // ],
  },
  data() {
    return {
      deviceWidth: 0
    };
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted() {
    this.deviceWidth = window.innerWidth;
    if (this.deviceWidth > 992) {
      setTimeout(function() {
        $(function() {
          // wait for document ready

          var controller = new ScrollMagic.Controller();

          var horizontalSlide = new TimelineMax()
            // animate panels
            .to("#js-slideContainer", 1, { x: "-20%" })
            .to("#js-slideContainer", 1, { x: "-40%" })
            .to("#js-slideContainer", 1, { x: "-60%" })
            .to("#js-slideContainer", 1, { x: "-63%" });

          // create scene to pin and link animation
          new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: "400%"
          })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        });
      }, 500);
    } else {
      setTimeout(function() {
        $(".owl-carousel-services").owlCarousel({
          loop: true,
          nav: false,
          items: 1
        });
      }, 500);
    }
    if (this.deviceWidth > 992) {
      setTimeout(function() {
        $(function() {
          // wait for document ready

          var controller2 = new ScrollMagic.Controller();

          var horizontalSlide2 = new TimelineMax()
            // animate panels
            .to("#js-slideContainer2", 1, { x: "-20%" })
            .to("#js-slideContainer2", 1, { x: "-40%" })
            .to("#js-slideContainer2", 1, { x: "-54%" });

          // create scene to pin and link animation
          new ScrollMagic.Scene({
            triggerElement: "#js-wrapper2",
            triggerHook: "onLeave",
            duration: "400%"
          })
            .setPin("#js-wrapper2")
            .setTween(horizontalSlide2)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller2);
        });
      }, 500);
    } else {
      setTimeout(function() {
        $(".owl-carousel-causes").owlCarousel({
          loop: true,
          nav: false,
          items: 1
        });
      }, 500);
    }
  }
};
</script>
<style lang="scss">
.bgLeft {
  position: absolute;
  left: -100px;
  top: 0;
  background-color: #f3f5fb;
  width: 630px;
  height: 780px;
  @media screen and (max-width: 992px) {
    width: 60%;
    height: 260px;
  }
}
.video {
  height: 464px;
  margin-top: -20px;
  margin-right: -169px;
  @media screen and (max-width: 1200px) {
 margin-right: -109px;
  }
   @media screen and (max-width: 1025px) {
 margin-right: -46px;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 210px;
    
  }
  &__deco {
    position: absolute;
    left: 0px;
    bottom: -30px;
    z-index: 1;
  }
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index:2;
  // min-width: 100%;
  // min-height: 100%;
}

.hero {
  width: 100%;
  height: 800px;
  background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 700px;
  }
  &__deco {
    position: absolute;
    top: -2px;
    left: -80px;
  }
  &__decoDesigner {
    position: absolute;
    top: 0;
    right: -100px;
    @media screen and (max-width: 992px) {
      top: -110px;
      right: 10px;
    }
  }
  &__decoDeveloper {
    position: absolute;
    bottom: -50px;
    right: 80px;
    @media screen and (max-width: 992px) {
      bottom: -70px;
      right: 50px;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    font-family: "Lexend Deca";	font-size: 80px;	letter-spacing: -3.61px;	line-height: 82px;
    @media screen and (max-width: 992px) {
      font-size: 40px !important;
    }
  }
  &__description {
   font-family: "Lexend Deca";	font-size: 22px;	letter-spacing: -0.44px;	line-height: 27px;
  }
  &__partnership {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
  }
  &__partnershipLogo {
    width: 210px;
    @media screen and (max-width: 1025px) {
      width: 160px;
    }
    @media screen and (max-width: 992px) {
      width: 80px;
    }
    @media screen and (max-width: 370px) {
      width: 70px;
    }
  }
}
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}

.wrapper,
.wrapper2 {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  /* background: #F64747; */
  padding-left: 5%;
  padding-top: 8%;
  padding-bottom: 8%;
  @media screen and (max-width: 992px) {
    padding-left: 5%;
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
.wrapper2 {
  background-color: #111111;
  padding-left: 10%;
   padding-top: 6%;
  padding-bottom: 6%;
  color: #fff;
  @media screen and (max-width: 992px) {
    height: 68vh;
  }
}

.section {
  height: 100%;
  width: calc(100% / 5);
  float: left;
  position: relative;
  
  @media screen and (max-width: 992px) {
    height: 525px;
    width: 100%;
  }
  &__img {
    width: 300px;
    height: 300px;
    // @media screen and (max-width: 992px) {
    //    width: 300px;
    // }
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("~@/assets/images/bg-pic.png");
  }
  &--2{
    .section__img{
      height: 450px;
      @media screen and (max-width: 992px) {
       height: 300px;
    }
    }
  }
  &__body {
    width: 50%;
    height: 400px;
    background-color: #eceff8;
    position: absolute;
    top: 18%;
    left: 200px;
    padding: 90px 50px;
    border-radius: 8px;
    z-index: 1;
    &:before{
      content: '';
      background-color: #eceff8;
      position: absolute;
      height: 100px;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    }
    @media screen and (max-width: 992px) {
      width: 90%;
      left: 20px;
      padding: 30px 20px;
      height: auto;
    }
    // overflow-x: hidden;
  }
  &__shadow{
   
    position: absolute;
    box-shadow: 0 19px 56px 0 rgba(25,25,141,0.18);
    width: 84%;
    left: 8%;
    right: 8%;
    bottom: 0;
    height: 50px;
    z-index: 0;
  }
  &__deco {
    position: absolute;
    top: 50px;
    left: 200px;
    @media screen and (max-width: 992px) {
      width: 180px !important;
    }
  }
  &__icon {
    position: absolute;
    top: -30px;
    left: 20px;
    @media screen and (max-width: 992px) {
      top: -50px;
      width: 100px !important;
    }
  }
  &__label {
    background-color: #b5f7e3;
    font-size: 10px !important;
    height: 18px;
    letter-spacing: 1px;
    padding: 2px 8px;
    &--2 {
      background-color: #d0d0ff !important;
    }
  }
  &__title {
    font-size: 40px !important;
    letter-spacing: -1.47px;
    line-height: 42px;
    z-index: 4;
    position: relative;
  }
  &__description {
    font-size: 18px;
    font-weight: 300;
    z-index: 4;
    position: relative;
  }
  &__line {
    height: 1px;
    width: 30px;
    border: 3px solid #000000;
    z-index: 4;
    position: relative;
  }
  &__textBg {
    color: #ffffff;
    font-size: 160px;
    position: absolute;
    top: 30%;
    right: -50%;
  }
}
.section:nth-child(1) {
  // background: #f64747;
  //  margin-left: 4%;
}
.section:nth-child(2) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(3) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(4) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section:nth-child(5) {
  // background: #22a7f0;
  @media screen and (min-width: 992px) {
    margin-left: -4%;
  }
}
.section2 {
  height: 100%;
  width: calc(100% / 3);
  float: left;
  position: relative;
  z-index: 2;
  background-color: #111111;
  color: #fff;
  @media screen and (max-width: 992px) {
    height: 440px;
    width: 100%;
    padding: 0 100px;
  }
  @media screen and (max-width: 576px) {
    height: 440px;
    width: 100%;
    padding: 0;
  }
  &__num {
    font-size: 146px !important;
    line-height: 102px;
    @media screen and (max-width: 992px) {
      font-size: 66px !important;
    }
  }
  &__body {
    width: 20%;
    @media screen and (max-width: 992px) {
      position: absolute;

      width: 70%;
      bottom: 0;
    }
    @media screen and (max-width: 576px) {
      width: 90%;
      bottom: 32px;
    }
  }
  &__img {
    position: relative;
    height: 548px;
    width: 421px;
    background-size: cover;
    background-position: center;
    background-image: url("https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    @media screen and (max-width: 992px) {
      height: 320px;
      width: 400px;
    }
    @media screen and (max-width: 576px) {
      height: 250px;
      width: 240px;
    }
  }
  &__deco {
    position: absolute;
    bottom: 0;
    right: 0;
    @media screen and (max-width: 992px) {
      width: 60% !important;
    }
  }
  &__textBg {
    color: rgba(255, 255, 255, 0.5);
    font-family: "Lexend Deca";
    font-size: 161px !important;
    letter-spacing: -9.63px;
    position: absolute;
    bottom: 100px;
    left: 10%;
    width: 280%;
    @media screen and (max-width: 992px) {
      font-size: 86px !important;
      bottom: 10px;
    }
  }
  &__title {
    font-size: 35px !important;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 20px;
  }
}
.section2:nth-child(1) {
  // background: #f64747;
}
.section2:nth-child(2) {
  @media screen and (min-width: 992px) {
    margin-left: -8%;
  }
  // background: #22a7f0;
}
.section2:nth-child(3) {
  @media screen and (min-width: 992px) {
    margin-left: -8%;
  }
  // background: #f9690e;
}

.sections {
  width: 500%;
  height: 100%;
}
.sections2 {
  width: 300%;
  height: 100%;
}
// .section__title {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   font-size: 30px;
//   color: #fff;
// }
.caseHistory {
  height: 1100px;
  @media screen and (max-width: 992px) {
    height: 880px;
  }
  @media screen and (max-width: 576px) {
    height: 1060px;
  }
  &__body {
    padding: 76px 80px;

    background-color: #111111;
    color: #ffffff;
    position: absolute;
    right: 0;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 992px) {
      padding: 50px 20px;
      width: 100%;
    }
     @media screen and (max-width: 576px) {
      padding: 50px 20px;
      width: 100%;
    }
  }
  &__container {
    width: 85%;
    padding-left: 240px;
    padding-top: 80px;
    @media screen and (max-width: 1025px) {
    width: 95%;
  }
    @media screen and (max-width: 992px) {
      width: 100%;
      padding-left: 0px;
      padding-top: 30px;
    }
  }
  &__textBg {
    position: absolute;
    opacity: 0.42;
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 161px !important;
    letter-spacing: -4.03px;
    line-height: 42px;
    left: 10%;
    bottom: 100px;
    z-index: 1;
    @media screen and (max-width: 992px) {
      font-size: 90px !important;
      bottom: 40px;
    }
  }
  &__deco {
    position: absolute;
    left: -250px;
    @media screen and (max-width: 992px) {
      left: -15px;
      top: -60px;
      z-index: 0;
    }
  }
  &__deco2 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &__img {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: -360px;
    height: 615px;
    width: 500px;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1573496130103-a442a3754d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
    @media screen and (max-width: 992px) {
      position: relative;
      height: 250px;
      width: 90%;
      left: 0px;
      margin: 0 auto;
      z-index: 1;
    }
  }
  &__name {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.24px;
    font-family: Lato;
  }
  &__title {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -2.21px;
    @media screen and (max-width: 992px) {
      font-size: 38px !important;
    }
    // line-height: 58px;
  }
  &__titleProject {
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
.testimonial {
  &__cit {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__pic {
    background-position: center;
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
  }
  &__name {
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 24px;
  }
  &__position {
    font-family: "Lexend Deca";
    font-size: 12px !important;
    letter-spacing: -0.24px;
    line-height: 24px;
  }
  &__logo {
    max-height: 50px;
  }
}
.tools {
  color: #000;
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 40px !important;
    letter-spacing: -1.47px;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
  &__logo {
    width: 105px;
    @media screen and (max-width: 992px) {
      width: 70px;
    }
  }
  &__icon {
    position: absolute;
    width: 88px;
    height: 88px;
    top: 26px;
    right: 20px;
    // @media screen and (max-width: 992px) {
    //     right: 60px;
    //   }
  }
}
.cta {
  background-color: #ebeff9;
  padding: 31px 130px;
  position: absolute;
  bottom: -30px;

  @media screen and (max-width: 992px) {
    padding: 30px;
    bottom: -80px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px;
    bottom: -150px;
  }
  &__title {
    color: #232323;
    font-size: 26px !important;
    font-weight: 500;
    letter-spacing: -0.89px;
    line-height: 32px;
  }
  &__deco {
    position: absolute;
    left: -150px;
    top: 35px;
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
.cause {
  background-color: #111111;
  color: #fff;
  padding: 145px 0px;
  @media screen and (max-width: 992px) {
    padding: 200px 0px 100px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 56px !important;
    letter-spacing: -2.21px;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
}
.values {
  background-color: #111111;
  color: #fff;
  height: 740px;
  width: 70%;
  position: relative;
  @media screen and (max-width: 992px) {
    height: auto;
    width: 80%;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #111111;
    position: absolute;
    left: -50%;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  &__body {
    position: relative;
    z-index: 1;
  }
  &__name {
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
    color: #fff;
  }
  &__title {
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    color: #fff;
  }
  &__description {
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
    color: #fff;
  }
  &__deco {
    position: absolute;
    right: 100px;
    bottom: 40px;
  }
}
.value {
  background-color: #f0fffb;
  text-align: center;
  border-radius: 3px;
  padding: 36px 24px;
  width: 226px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 992px) {
height: 299px;
  }
  @media screen and (max-width: 992px) {
    width: 155px;
    padding: 20px 14px;
  }
  @media screen and (max-width: 370px) {
    width: 138px;
    padding: 20px 10px;
  }
  // display: inline-block;
  box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.2);
  &--2 {
    background-color: #f9f9fa;
  }
  &__icon {
    height: 53px;
    width: 53px;
  }
  &__title {
    color: #141414;
    font-size: 22px !important;
    font-weight: bold;
    letter-spacing: -0.77px;
    line-height: 32px;
  }
  &__description {
    font-family: Lato;
    color: #141414;
    font-size: 15px !important;
    font-weight: 300;
    letter-spacing: -0.15px;
    line-height: 20px;
    height: 118px;
  }
}
.container-values {
  width: 129%;
  text-align: right;
  @media screen and (max-width: 992px) {
    width: 144%;
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    width: 126%;
  }
}
.idea {
  background-color: #f6f7fa;
  color: #020202;
  &__idea {
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
  }
  &__description {
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
}
</style>
