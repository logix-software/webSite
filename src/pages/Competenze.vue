<template>
  <Layout>
    <div class="hero d-flex align-items-center">
      <g-image src="~/assets/images/deco-with-arrow1.svg" class="hero__deco1" />
      <g-image src="~/assets/images/deco-with-arrow2.svg" class="hero__deco2" />
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="hero__title">Guidiamo le aziende nella loro forma digitale.</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 ml-auto">
            <p
              class="hero__description"
            >Studiando, progettando e sviluppando su specifiche esigenze dell’azienda e dei singoli processi che la caratterizzano, costruiamo prodotti pensati per gli utenti che li utilizzano.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="caseHistoryCompetenze">
              <div class="d-lg-flex align-items-center justify-content-between">
                <div class="d-lg-flex align-items-start">
                  <g-image src="~/assets/images/cta-case.png" class="caseHistoryCompetenze__img" />
                  <div class="caseHistoryCompetenze__body ml-4">
                    <div class="mb-2">
                      <span class="label label--dev mr-3">DEVELOPMENT</span>
                      <span class="label label--des">DESIGN</span>
                    </div>
                    <h1 class="caseHistoryCompetenze__title">Acta: il registro elettronico</h1>
                    <p
                      class="caseHistoryCompetenze__description"
                    >Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for convention.</p>
                    <p
                      class="caseHistoryCompetenze__tags"
                    >#WEB APPLICATION #GESTIONE DEL PERSONALE #SOFTWARE</p>
                  </div>
                </div>
                <div class="text-right">
                  <g-link to class="caseHistoryCompetenze__link">_Scopri di più</g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container method pt-5 mt-5">
        <div class="row">
          <div class="col-lg-6">
            <h6 class="method__name">METODO</h6>
            <h1 class="method__title">Il nostro approccio olistico</h1>
            <p
              class="method__description"
            >In stretta collaborazione con le aziende seguiamo la progettazione, la realizzazione ed il test di ogni componente, prodotto e servizio. Metodologie di management AGILE che seguono un percorso iterativo che ci lega al cliente, alla sua azienda ed agli utenti che utilizzano i prodotti collettivamente realizzati.</p>
          </div>
        </div>
      </div>
      <!-- <div class="step step--inverted py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-left d-flex flex-column">
              <div class="col-left">
                <h1 class="step__name">Learn</h1>
                <div class="d-flex align-items-center">
                  <h6 class="step__num">01</h6>
                  <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
                </div>
                <p
                  class="step__description"
                >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-right">
              <h6 class="step__keyWord mt-4">STEP</h6>
              <h2 class="step__title">
                Exploration
                Market research
                Ux research
              </h2>
              <g-image src="~/assets/images/step.svg" class="step__deco" />
            </div>
          </div>
        </div>
      </div>-->
      <div v-if="deviceWidth > 992">
        <div class="wrapper" id="js-wrapper">
          <div class="sections" id="js-slideContainer">
            <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image
                          src="~/assets/images/deco-short2.svg"
                          class="step__shortDeco ml-3"
                        />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step step--inverted">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image
                          src="~/assets/images/deco-short2.svg"
                          class="step__shortDeco ml-3"
                        />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image
                          src="~/assets/images/deco-short2.svg"
                          class="step__shortDeco ml-3"
                        />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
            <div class="step step--inverted">
              <div class="container container--custom">
                <div class="row">
                  <div class="col-lg-6 col-left d-flex flex-column">
                    <div class="col-left">
                      <h1 class="step__name">Learn</h1>
                      <div class="d-flex align-items-center">
                        <h6 class="step__num">01</h6>
                        <g-image
                          src="~/assets/images/deco-short2.svg"
                          class="step__shortDeco ml-3"
                        />
                      </div>
                      <p
                        class="step__description"
                      >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>
                    </div>
                    <div class="col-right">
                      <h6 class="step__keyWord">STRUMENTI</h6>
                      <ul class="list-unstyled">
                        <li class="step__list">Workshop</li>
                        <li class="step__list">Stakeholder interview</li>
                        <li class="step__list">Competive analysis</li>
                        <li class="step__list">Behaviour analysis</li>
                        <li class="step__list">User interview</li>
                        <li class="step__list">Surveys & test</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-right">
                    <h6 class="step__keyWord mt-4">STEP</h6>
                    <h2 class="step__title">
                      Exploration
                      Market research
                      Ux research
                    </h2>
                    <g-image src="~/assets/images/step.svg" class="step__deco" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <div
              class="collapsed"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div class="d-flex align-items-end justify-content-between">
                <h6 class="step__num">01</h6>
                <h1 class="step__name">Learn</h1>
                <div>
                  <i class="fas fa-plus text-white"></i>
                </div>
              </div>
              <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
            </div>
          </div>

          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p
                class="step__description"
              >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>

              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord mt-4">STEP</h6>
                <h2 class="step__title">
                  Exploration
                  Market research
                  Ux research
                </h2>
                <g-image src="~/assets/images/step.svg" class="step__deco" />
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <div
              class="collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <div class="d-flex align-items-end justify-content-between">
                <h6 class="step__num">01</h6>
                <h1 class="step__name">Learn</h1>
                <div>
                  <i class="fas fa-plus text-white"></i>
                </div>
              </div>
              <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
            </div>
          </div>

          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p
                class="step__description"
              >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>

              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord mt-4">STEP</h6>
                <h2 class="step__title">
                  Exploration
                  Market research
                  Ux research
                </h2>
                <g-image src="~/assets/images/step.svg" class="step__deco" />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <div
              class="collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <div class="d-flex align-items-end justify-content-between">
                <h6 class="step__num">01</h6>
                <h1 class="step__name">Learn</h1>
                <div>
                  <i class="fas fa-plus text-white"></i>
                </div>
              </div>
              <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
            </div>
          </div>

          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p
                class="step__description"
              >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>

              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord mt-4">STEP</h6>
                <h2 class="step__title">
                  Exploration
                  Market research
                  Ux research
                </h2>
                <g-image src="~/assets/images/step.svg" class="step__deco" />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFour">
            <div
              class="collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <div class="d-flex align-items-end justify-content-between">
                <h6 class="step__num">01</h6>
                <h1 class="step__name">Learn</h1>
                <div>
                  <i class="fas fa-plus text-white"></i>
                </div>
              </div>
              <g-image src="~/assets/images/deco-short2.svg" class="step__shortDeco ml-3" />
            </div>
          </div>

          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p
                class="step__description"
              >Attraverso workshop partecipativi cerchiamo di comprendere le reali esigenze del cliente. Ci proponiamo di indagare ed esplorare, nel senso più ampio possibile il contesto in cui il progetto si inserisce per capire punti di forza e di debolezza, sia che si parli di progetti nuovi o già esistenti.</p>

              <div class="col-right">
                <h6 class="step__keyWord">STRUMENTI</h6>
                <ul class="list-unstyled">
                  <li class="step__list">Workshop</li>
                  <li class="step__list">Stakeholder interview</li>
                  <li class="step__list">Competive analysis</li>
                  <li class="step__list">Behaviour analysis</li>
                  <li class="step__list">User interview</li>
                  <li class="step__list">Surveys & test</li>
                </ul>
              </div>
              <div class="col-right">
                <h6 class="step__keyWord mt-4">STEP</h6>
                <h2 class="step__title">
                  Exploration
                  Market research
                  Ux research
                </h2>
                <g-image src="~/assets/images/step.svg" class="step__deco" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>

    <div class="expertise pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto mb-5 mb-lg-0">
            <h6 class="expertise__name">EXPERTISE</h6>
            <h1 class="expertise__title">Attraverso il nostro approccio possiamo offrire</h1>
            <p
              class="expertise__description"
            >Che si tratti di un nuovo prodotto, di un’integrazione o restauro, accompagniamo le aziende verso le opportune logiche digitali.</p>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="row mb-5">
          <div class="col-lg-9 d-flex align-items-center skill skill--right py-5 mb-4">
            <div class="skill__body">
              <div class="my-3">
                <span class="label label--dev mr-2">Development</span>
                <span class="label label--des mx-2">Design</span>
              </div>
              <h1 class="skill__title">Digital transformation</h1>
              <div class="skill__line mb-3"></div>
              <p
                class="skill__description"
              >Che si tratti di una nuova startup o la ristrutturazione di servizi e processi, offririamo le soluzioni più adatte al cliente ed agli utilizzatori finali.</p>
              <a href="http://" class="btn btn-secondary">Approfondisci expertise</a>
            </div>

            <g-image src="~/assets/images/competenze-digital.png" class="skill__img" />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-9 d-flex align-items-center skill py-5 mb-4">
            <div class="skill__body">
              <div class="my-3">
                <span class="label label--dev mr-2">Development</span>
                <span class="label label--des mx-2">Design</span>
              </div>
              <h1 class="skill__title">Sviluppo Web & Mobile</h1>
              <div class="skill__line mb-3"></div>
              <p
                class="skill__description"
              >Seguendo la metodologia agile dall’analisi al test costruiamo prodotti in linea con le esigenze di ciascun cliente, realizzando progetti web e mobile che si adattano alle diverse piattaforme esistenti.</p>
              <a href="http://" class="btn btn-secondary">Approfondisci expertise</a>
            </div>

            <g-image src="~/assets/images/competenze-sviluppo.png" class="skill__img" />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-9 d-flex align-items-center skill skill--right py-5 mb-4">
            <div class="skill__body">
              <div class="my-3">
                <span class="label label--dev mr-2">Development</span>
                <span class="label label--des mx-2">Design</span>
              </div>
              <h1 class="skill__title">Design research & strategy</h1>
              <div class="skill__line mb-3"></div>
              <p
                class="skill__description"
              >In Logix ci occupiamo dello sviluppo software con esperienza decennale e realizzazione di progetti sulla base delle reali esigenze delle aziende clienti.</p>
              <a href="http://" class="btn btn-secondary">Approfondisci expertise</a>
            </div>

            <g-image src="~/assets/images/competenze-design.png" class="skill__img" />
          </div>
        </div>
        <div class="row mb-0">
          <div class="col-lg-9 d-flex align-items-center skill py-5">
            <div class="skill__body">
              <div class="my-3">
                <span class="label label--dev mr-2">Development</span>
                <span class="label label--des mx-2">Design</span>
              </div>
              <h1 class="skill__title">Collaborative team</h1>
              <div class="skill__line mb-3"></div>
              <p
                class="skill__description"
              >I nostro team di professionisti è in grado di offrire alle aziende clienti le professionalità, le competenze, gli strumenti ed i metodi migliori nel breve periodo.</p>
              <a href="http://" class="btn btn-secondary">Approfondisci expertise</a>
            </div>

            <g-image src="~/assets/images/competenze-collaborative.png" class="skill__img" />
          </div>
        </div>
      </div>
    </div>
    <div class="partnership py-5">
      <div class="partnership__box my-5 py-5">
        <g-image src="~/assets/images/deco2.svg" class="partnership__deco" />
        <div class="container">
          <div class="row">
            <div class="col-lg-11 ml-auto pl-lg-5">
              <h6 class="pl-2 pl-lg-4 partnership__name">Partnership</h6>
              <h1 class="pl-2 pl-lg-4 partnership__title">Hanno già creduto in noi</h1>
              <div class="d-flex flex-wrap align-items-center">
                <g-image src="~/assets/images/logo-aosp.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-ast.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-cogne.png" class="partnership__logo" />
                <g-image src="~/assets/images/logo-umbriadigitale.png" class="partnership__logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto text-center py-5">
            <h1 class="partnership__titleClosing mb-4">Sei sicuro della tua nuova idea?</h1>
            <p class="partnership__descriptionClosing mb-5">
              When you enter into any new area of science, you almost
              always find yourself with a baffling new language.
            </p>
            <div>
              <a href="http://" class="btn btn-primary mx-1 mx-lg-2">Certo</a>
              <a href="http://" class="btn btn-secondary mx-1 mx-lg-2">Abbastanza</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 pt-5">
        <div class="row">
          <div class="col-lg-10 ml-auto position-relative mt-lg-5">
            <div class="cta cta--black">
              <g-image src="~/assets/images/deco3.svg" class="cta__deco" />
              <div class="d-flex align-items-center justify-content-between w-75">
                <h1 class="cta__title">
                  Consiglio last minute? Parla con Bottino oppure chiama al
                  <span
                    class="text-green"
                  >0744/33434522</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  //   metaInfo: {
  //     title: "About us"
  // meta: [
  //   { name: 'author', content: 'John Doe' }
  // ],
  // link: [
  //   { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' },
  // ],
  //   },
  //   metaInfo: {
  //     title: "About us",
  //     meta: [
  //       //   { name: 'author', content: 'John Doe' }
  //     ],
  //     link: [
  //       { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
  //     ],
  //     script: [{ src: "https://unpkg.com/aos@2.3.1/dist/aos.js", body: true }]
  //     // etc...
  //   },
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
            .to("#js-slideContainer", 1, { x: "-74%" });

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
    } 
    // AOS.init();
  }
};
</script>
<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 750px;
  background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 600px;
  }
  &__deco1 {
    position: absolute;
    left: 0;
    top: 80px;
  }
  &__deco2 {
    position: absolute;
    right: 0;
    bottom: 80px;
  }
  &__title {
    font-family: "Lexend Deca";
    font-size: 80px;
    letter-spacing: -3.61px;
    line-height: 82px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      line-height: initial;
      letter-spacing: initial;
    }
  }
  &__description {
    margin-top: -40px;
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 27px;
    @media screen and (max-width: 992px) {
      margin-top: 20px;
    }
  }
}
.caseHistoryCompetenze {
  margin-bottom: 0;
  margin-top: -50px;
}
.method {
  &__name {
    color: #ffffff;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
  }
}
.sections {
  @media screen and (min-width: 992px) {
    width: 400%;
    height: 100%;
  }
}
.wrapper {
  @media screen and (min-width: 992px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
  }
  /* background: #F64747; */

  //   padding-top: 4%;
  //   padding-bottom: 4%;
  //   @media screen and (max-width: 992px) {
  //     padding-left: 5%;
  //     padding-top: 200px;
  //     padding-bottom: 200px;
  //   }
}
.step {
  @media screen and (min-width: 992px) {
    height: 100%;
    width: calc(100% / 4);
    float: left;
  }
  position: relative;

  .container--custom {
    @media screen and (min-width: 992px) {
      //   margin-left: 60px;
    }
  }
  &__deco {
    width: 100%;
  }
  &__name {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 161px;
    letter-spacing: -8.72px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: initial;
    }
  }
  &__title {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 44px;
    width: 50%;
    @media screen and (max-width: 992px) {
      width: 100%;
      font-size: 30px;
    }
  }
  &__description {
    color: #ffffff;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }
  &__list {
    color: #ffffff;
    font-family: "Lexend Deca";
    font-size: 16px;
    letter-spacing: -0.32px;
    line-height: 26px;
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
  &__keyWord {
    color: #f9b35f;
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.24px;
    line-height: 25px;
  }
  &__num {
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 35px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 37px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: initial;
    }
  }
  &__shortDeco {
    width: 65px !important;
  }
  &--inverted {
    .col-left {
      order: 1;
      @media screen and (max-width: 992px) {
        order: 0;
      }
    }
    .col-right {
      order: 0;
      @media screen and (max-width: 992px) {
        order: 1;
      }
    }
  }
}
.expertise {
  &__name {
    color: #000000;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
    text-align: center;
  }
  &__title {
    color: #020202;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
    text-align: center;
    @media screen and (max-width: 992px) {
      font-size: 42px;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
    text-align: center;
  }
}
.skill {
  background-color: #f3f5fb;
  position: relative;
  justify-content: space-between;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: -50%;
    bottom: 0;
    background-color: #f3f5fb;
  }
  &__body {
    width: 50%;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
  &__title {
    color: #000000;
    font-family: "Lexend Deca";
    font-size: 40px;
    letter-spacing: -1.47px;
    line-height: 42px;
  }
  &__line {
    width: 30px;
    height: 4px;
    background-color: #000;
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.18px;
    line-height: 25px;
  }

  &--right {
    @media screen and (min-width: 992px) {
      justify-content: space-around;
      margin-left: auto;
    }

    &:before {
      left: initial;
      right: -50%;
    }
    .skill__body {
      order: 1;
      @media screen and (max-width: 992px) {
        order: 0;
      }
    }
    .skill__img {
      width: 380px;

      margin-left: -230px;
      order: 0;
      margin-right: initial;
      @media screen and (max-width: 992px) {
        order: 1;
        margin-left: initial;
        width: 150px;
      }
    }
  }
  &__img {
    width: 450px;

    margin-right: -176px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 992px) {
      width: 40%;
      margin-right: initial !important;
      margin-left: 20px !important;
      margin-top: -230px !important;
    }
    @media screen and (max-width: 576px) {
      width: 50%;
      margin-right: initial !important;
      margin-left: -70px !important;
      margin-top: -330px !important;
    }
  }
}

.cta {
  @media screen and (max-width: 992px) {
    bottom: -60px;
  }
  &--black {
    @media screen and (max-width: 992px) {
      bottom: -80px;
    }
    @media screen and (max-width: 576px) {
      bottom: -120px;
    }
  }
}
.accordion {
  .card {
    background-color: transparent;
    .card-header {
      background-color: transparent;
    }
  }
}
</style>
