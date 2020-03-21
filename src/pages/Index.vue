<template>
  <Layout>
    <div v-for="text in $page.texts.edges" :key="text.id">
      <!-- {{text}} -->
      <div
        class="hero hero--home d-flex align-items-center"
        :style="{ 'background-image': 'url(' + text.node.headerImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 position-relative ml-auto">
              <g-image src="~/assets/images/deco.svg" class="hero__deco" />
              <g-image
                src="~/assets/images/deco-designer.svg"
                class="hero__decoDesigner mouse-effect"
              />
              <g-image
                src="~/assets/images/deco-developer.svg"
                class="hero__decoDeveloper mouse-effect2"
              />

              <!-- <svg width="340px" height="340px"  viewBox="0 0 340 340" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> -->

              <h1 class="hero__title mb-5 mb-lg-0">{{text.node.headerTitle}}</h1>
            </div>
            <div class="col-lg-5"></div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-5 ml-auto">
              <p class="hero__description">{{text.node.headerAbstract}}</p>
            </div>
          </div>
        </div>
        <div class="hero__partnership">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 ml-auto">
                <h6 class="pl-2 pl-lg-4">Partnership</h6>
                <div class="d-flex align-items-center">
                  <g-image :src="text.node.headerLogo1" class="hero__partnershipLogo" />
                  <g-image :src="text.node.headerLogo2" class="hero__partnershipLogo" />
                  <g-image :src="text.node.headerLogo3" class="hero__partnershipLogo" />
                  <g-image :src="text.node.headerLogo4" class="hero__partnershipLogo" />
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
          </div>
        </div>
      </div>

      <div class="container services mt-5 pt-5">
        <div class="row">
          <div class="col-lg-6 mx-auto mt-5">
            <h6 class="services__name">{{text.node.section1Name}}</h6>
            <h2 class="services__title">{{text.node.section1Title}}</h2>
            <p class="services__description">{{text.node.section1Abstract}}</p>
          </div>
        </div>
      </div>
      <div v-if="deviceWidth > 992">
        <div class="wrapper" id="js-wrapper">
          <div class="sections" id="js-slideContainer">
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide1Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide1Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide1Abstract}}</p>
              </div>
              <span id="trigger--title1"></span>
            </section>
            <section class="section section--2">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide2Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-development.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide2Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide2Abstract}}</p>
              </div>
              <span id="trigger--title2"></span>
            </section>
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide3Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide3Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide3Abstract}}</p>
              </div>
              <span id="trigger--title3"></span>
            </section>
            <section class="section section--2">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide4Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-development.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide4Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide4Abstract}}</p>
              </div>
              <span id="trigger--title4"></span>
            </section>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="owl-carousel owl-theme owl-carousel-services">
          <div class="item">
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide1Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide1Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide1Abstract}}</p>
              </div>
            </section>
          </div>
          <div class="item">
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide2Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-development.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide2Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide2Abstract}}</p>
              </div>
            </section>
          </div>
          <div class="item">
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide3Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-digital.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide3Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide3Abstract}}</p>
              </div>
            </section>
          </div>
          <div class="item">
            <section class="section">
              <div
                class="section__img"
                :style="{ 'background-image': 'url(' + text.node.slider1Slide4Image + ')' }"
              ></div>
              <g-image src="~/assets/images/deco2.svg" class="section__deco" />
              <div class="section__body">
                <div class="section__shadow"></div>
                <g-image src="~/assets/images/icon-development.svg" class="section__icon" />
                <p></p>
                <div class="mb-2">
                  <span class="label label--dev mr-3">DEVELOPMENT</span>
                  <span class="label label--des">DESIGN</span>
                </div>
                <h1 class="section__title">{{text.node.slider1Slide4Title}}</h1>
                <div class="section__line mb-3"></div>
                <p class="section__description">{{text.node.slider1Slide4Abstract}}</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12">
            <a href="/competenze" class="btn btn-primary">Scopri le competenze</a>
          </div>
        </div>
      </div>
      <div class="container-fluid position-relative caseHistory my-5">
        <div class="caseHistory__body">
          <h6 class="caseHistory__name">{{text.node.caseHistoryName}}</h6>
          <h1 class="caseHistory__title mb-lg-5">{{text.node.caseHistoryTitleSection}}</h1>

          <div class="position-relative caseHistory__container">
            <div
              class="caseHistory__img mb-4 mb-lg-0"
              :style="{ 'background-image': 'url(' + text.node.caseHistoryImage + ')' }"
            >
              <!-- <h1 class="caseHistory__textBg">{{text.node.caseHistoryBgText}}</h1> -->
              <g-image src="~/assets/images/deco-plane.svg" class="caseHistory__deco2" />
            </div>
            <div class="position-relative">
              <g-image src="~/assets/images/deco3.svg" class="caseHistory__deco" />
              <h4 class="caseHistory__titleProject">{{text.node.caseHistoryTitle}}</h4>
            </div>
            <div class="mb-2">
              <span class="label label--dev mr-3">DEVELOPMENT</span>
              <span class="label label--des">DESIGN</span>
            </div>
            <p class="caseHistory__description mb-5">{{text.node.caseHistoryAbstract}}</p>

            <div class="testimonial">
              <p class="testimonial__cit">{{text.node.caseHistoryTestimonialDescription}}</p>

              <div class="d-flex align-items-center mb-5">
                <div>
                  <div class="testimonial__pic mr-2" :style="{ 'background-image': 'url(' + text.node.caseHistoryTestimonialPhoto + ')' }"></div>
                </div>
                <div>
                  <h6 class="testimonial__name mb-0">{{text.node.caseHistoryTestimonialName}}</h6>
                  <p class="testimonial__position mb-0">{{text.node.caseHistoryTestimonialPosition}}</p>
                </div>
              </div>
              <div class="testimonial__logo"></div>
            </div>
            <g-link :to="text.node.caseHistoryLink" class="btn btn-secondary">Scopri di più</g-link>
          </div>
        </div>
      </div>
      <div class="tools py-5">
        <div class="container my-lg-5">
          <div class="row">
            <div class="col-lg-6">
              <h6 class="tools__name">{{text.node.section2Name}}</h6>
              <h1 class="tools__title">{{text.node.section2Title}}</h1>
              <p class="tools__description">{{text.node.section2Abstract}}</p>
            </div>
            <div class="col-lg-3 ml-auto position-relative text-center">
              <g-image src="~/assets/images/deco2.svg" class="tools__deco" />
              <g-image src="~/assets/images/icon-code.png" class="tools__icon" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 d-inline-block align-items-center py-5 mb-5 mb-sm-0">
              <g-image :src="text.node.section2Logo1" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo2" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo3" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo4" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo5" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo6" class="tools__logo mr-4 mr-lg-5" />
              <g-image :src="text.node.section2Logo7" class="tools__logo mr-4 mr-lg-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 my-sm-0">
        <div class="row">
          <div class="col-lg-10 mt-5 mt-sm-0 ml-auto position-relative">
            <div class="cta">
              <g-image src="~/assets/images/deco3.svg" class="cta__deco" />
              <div class="d-lg-flex align-items-center justify-content-between">
                <h1 class="cta__title">{{text.node.cta1Title}}</h1>
                <g-link :to="text.node.cta1Link" class="btn btn-primary">Contattaci</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cause">
        <div class="container mb-5">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h1 class="cause__title mb-4">{{text.node.section3Title}}</h1>
              <p class="cause__description">{{text.node.section3Abstract}}</p>
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
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide1Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide1BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide1Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide1Abstract}}</p>
                  </div>
                </div>
                <span id="trigger2--title1"></span>
              </section>
              <section class="section2">
                <div class="d-flex align-items-start">
                  <h1 class="section2__num mx-2 mx-lg-0">2</h1>
                  <div>
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide2Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide2BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide2Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide2Abstract}}</p>
                  </div>
                </div>
                <span id="trigger2--title2"></span>
              </section>
              <section class="section2">
                <div class="d-flex align-items-start">
                  <h1 class="section2__num mx-2 mx-lg-0">3</h1>
                  <div>
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide3Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide3BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide3Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide3Abstract}}</p>
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
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide1Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide1BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide1Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide1Abstract}}</p>
                  </div>
                </div>
                <span id="trigger2--title1"></span>
              </section>
            </div>
            <div class="item">
              <section class="section2">
                <div class="d-flex align-items-start">
                  <h1 class="section2__num mx-2 mx-lg-0">2</h1>
                  <div>
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide2Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide2BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide2Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide2Abstract}}</p>
                  </div>
                </div>
                <span id="trigger2--title1"></span>
              </section>
            </div>
            <div class="item">
              <section class="section2">
                <div class="d-flex align-items-start">
                  <h1 class="section2__num mx-2 mx-lg-0">3</h1>
                  <div>
                    <div
                      class="section2__img mx-2 mx-lg-3"
                      :style="{ 'background-image': 'url(' + text.node.slider2slide3Image + ')' }"
                    >
                      <g-image src="~/assets/images/deco2.svg" class="section2__deco" />
                      <h1 class="section2__textBg">{{text.node.slider2slide3BgText}}</h1>
                    </div>
                  </div>
                  <div class="section2__body ml-3">
                    <h1 class="section2__title">{{text.node.slider2slide3Title}}</h1>
                    <p class="section2__description">{{text.node.slider2slide3Abstract}}</p>
                  </div>
                </div>
                <span id="trigger2--title1"></span>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="container bg-black-mobile">
        <div class="row">
          <div class="col-lg-12">
            <div class="values py-5">
              <div class="values__body">
                <g-image src="~/assets/images/deco2.svg" class="values__deco" />
                <div class="w-75 mb-5">
                  <h6 class="values__name">{{text.node.section4Name}}</h6>
                  <h1 class="values__title">{{text.node.section4Title}}</h1>
                  <p class="values__description">{{text.node.section4Abstract}}</p>
                </div>
                <div
                  class="container-values d-block d-sm-flex flex-wrap justify-content-center justify-content-sm-end"
                >
                  <div class="value mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox1" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox1}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox1}}</p>
                  </div>
                  <div class="value value--2 mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox2" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox2}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox2}}</p>
                  </div>
                  <div class="value mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox3" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox3}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox3}}</p>
                  </div>
                  <div class="value value--2 mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox4" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox4}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox4}}</p>
                  </div>
                  <div class="value mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox5" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox5}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox5}}</p>
                  </div>
                  <div class="value value--2 mx-lg-0 mr-lg-4 mb-4">
                    <g-image :src="text.node.section4IconBox6" class="value__icon" />
                    <h2 class="value__title">{{text.node.section4TitleBox6}}</h2>
                    <p class="value__description">{{text.node.section4AbstractBox6}}</p>
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
              <h1 class="idea__title mb-3">{{text.node.section5Title}}</h1>
              <p class="idea__descrition mb-5">{{text.node.section5Abstract}}</p>
              <button class="btn btn-primary mx-1 mx-lg-2" data-toggle="modal"
              data-target="#modalContact">Contattaci</button>
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
                <h1 class="cta__title">{{text.node.cta2Title}} <span class="text-green">{{text.node.cta2green}}</span> </h1>
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
    </div>
  </Layout>
</template>
<page-query>
query {
  texts: allHome {
    edges {
      node {
        title
        headerTitle
        headerAbstract
        headerImage
        headerLogo1
        headerLogo2
        headerLogo3
        headerLogo4
        section1Name
        section1Title
        section1Abstract
        slider1Slide1Title
        slider1Slide1Abstract
        slider1Slide1Image
        slider1Slide2Title
        slider1Slide2Abstract
        slider1Slide2Image
        slider1Slide3Title
        slider1Slide3Abstract
        slider1Slide3Image
        slider1Slide4Title
        slider1Slide4Abstract
        slider1Slide4Image
        slider1Slide5Title
        slider1Slide5Abstract
        slider1Slide5Image
        caseHistoryName
        caseHistoryTitleSection
        caseHistoryBgText
        caseHistoryTitle
        caseHistoryAbstract
        caseHistoryTestimonialDescription
        caseHistoryTestimonialName
        caseHistoryTestimonialPosition
        caseHistoryTestimonialPhoto
        caseHistoryLink
        caseHistoryImage
        section2Name
        section2Title
        section2Abstract
        section2Logo1
        section2Logo2
        section2Logo3
        section2Logo4
        section2Logo5
        section2Logo6
        section2Logo7
        cta1Title
        cta1Link
        section3Title
        section3Abstract
        slider2slide1Title
        slider2slide1BgText
        slider2slide1Abstract
        slider2slide1Image
        slider2slide2Title
        slider2slide2BgText
        slider2slide2Abstract
        slider2slide2Image
        slider2slide3Title
        slider2slide3BgText
        slider2slide3Abstract
        slider2slide3Image
        section4Name
        section4Title
        section4Abstract
        section4IconBox1
        section4TitleBox1
        section4AbstractBox1
        section4IconBox2
        section4TitleBox2
        section4AbstractBox2
        section4IconBox3
        section4TitleBox3
        section4AbstractBox3
        section4IconBox4
        section4TitleBox4
        section4AbstractBox4
        section4IconBox5
        section4TitleBox5
        section4AbstractBox5
        section4IconBox6
        section4TitleBox6
        section4AbstractBox6
        section5Title
        section5Abstract
        cta2Title
        cta2Green
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Logix Software - progettazione e sviluppo software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software è un’azienda informatica che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile."
      },
      {
        property: "og:title",
        content: "Logix Software - progettazione e sviluppo software"
      },
      {
        property: "og:description",
        content:
          "Logix Software è un’azienda informatica che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile."
      },
      {
        property: "og:image",
        content: "https://www.logix-software.it/assets/static/uploads/share.jpg"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Logix Software - progettazione e sviluppo software"
      },
      {
        property: "twitter:description",
        content:
          "Logix Software è un’azienda informatica che offre a professionisti, aziende pubbliche e private, servizi di design e sviluppo per la realizzazione e il restauro di soluzioni digitali, in ambito web e mobile."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/assets/static/uploads/share.jpg"
      },
      { name: "robots", content: "index, follow" }
    ]
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
    const el = document.querySelector(".mouse-effect");
    //  const el2 = document.querySelector(".mouse-effect2");
    let lastMove = 0;

    function updateMouse(x, y) {
      el.style.transform = `translate(${x}px, ${y}px)`;
      // el2.style.transform = `translate(${x}px, ${y}px)`;
    }
    function render(a) {
      if (Date.now() - lastMove > 500) {
        const noiseX = (noise.simplex3(2, 0, a * 0.00014) + 1) / 2;
        const noiseY = (noise.simplex3(10, 0, a * 0.00014) + 1) / 2;
        const x = noiseX * 100;
        const y = noiseY * 100;
        updateMouse(x, y);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // const el = document.querySelector(".mouse-effect");
    const el2 = document.querySelector(".mouse-effect2");

    function updateMouse2(x, y) {
      el2.style.transform = `translate(${x}px, ${y}px)`;
      // el2.style.transform = `translate(${x}px, ${y}px)`;
    }
    function render2(a) {
      if (Date.now() - lastMove > 500) {
        const noiseX = (noise.simplex3(2, 0, a * 0.00012) + 1) / 2;
        const noiseY = (noise.simplex3(10, 0, a * 0.00012) + 1) / 2;
        const x = noiseX * 100;
        const y = noiseY * 100;
        updateMouse2(x, y);
      }
      requestAnimationFrame(render2);
    }
    requestAnimationFrame(render2);

    // const el2 = document.querySelector(".mouse-effect2");
    // let lastMove2 = 0;

    // function updateMouse2(x, y) {
    //   el2.style.transform = `translate(${x}px, ${y}px)`;
    // }
    // function render2(a) {
    //   if (Date.now() - lastMove2 > 500) {
    //     const noiseX2 = (noise.simplex3(2, 0, a * 0.0004) + 1) / 2;
    //     const noiseY2 = (noise.simplex3(10, 0, a * 0.0004) + 1) / 2;
    //     const x2 = noiseX * innerWidth;
    //     const y2 = noiseY * innerHeight;
    //     updateMouse2(x, y);
    //   }
    //   requestAnimationFrame2(render);
    // }
    // requestAnimationFrame2(render);

    if (this.deviceWidth > 992) {
      setTimeout(function() {
        $(function() {
          // wait for document ready

          var controller = new ScrollMagic.Controller();

          var horizontalSlide = new TimelineMax()
            // animate panels
            .to("#js-slideContainer", 1, { x: "-15%" })
            .to("#js-slideContainer", 1, { x: "-30%" })
            .to("#js-slideContainer", 1, { x: "-45%" })
            .to("#js-slideContainer", 1, { x: "-60%" });

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
            .to("#js-slideContainer2", 1, { x: "-50%" });

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
  right: 60%;
  top: 0;
  background-color: #f3f5fb;
  width: 9999px;
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
  z-index: 2;
  // min-width: 100%;
  // min-height: 100%;
}

.hero {
  width: 100%;
  height: 800px;
  // background-image: url("~@/assets/images/hero-home.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    height: 700px;
  }
  &__deco {
    position: absolute;
    top: -10px;
    left: -80px;
    @media screen and (max-width: 1025px) {
      top: -14px;
      left: -84px;
      width: 30%;
    }
    @media screen and (max-width: 992px) {
      top: -14px;
      left: -84px;
      width: 20%;
    }
    @media screen and (max-width: 576px) {
      top: -3px;
      left: -46px;
      width: 26%;
    }
  }
  &__decoDesigner {
    position: absolute;
    top: -140px;
    right: -20px;
    @media screen and (max-width: 992px) {
      top: -180px;
      right: 100px;
    }
    @media screen and (max-width: 576px) {
      top: -150px;
      right: 110px;
      width: 100px;
    }
  }
  &__decoDeveloper {
    position: absolute;
    bottom: 10px;
    right: 80px;
    @media screen and (max-width: 992px) {
      bottom: 0px;
      right: 110px;
    }
    @media screen and (max-width: 576px) {
      bottom: 30px;
      right: 100px;
      width: 100px;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    font-family: "Lexend Deca";
    font-size: 80px;
    letter-spacing: -3.61px;
    line-height: 82px;
    @media screen and (max-width: 1025px) {
      font-size: 70px;
    }
    @media screen and (max-width: 576px) {
      font-size: 50px !important;
      letter-spacing: initial;
      line-height: initial;
    }
  }
  &__description {
    font-family: "Lexend Deca";
    font-size: 22px;
    letter-spacing: -0.44px;
    line-height: 27px;
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
.services {
  &__name {
    color: #000000;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 0.94px;
    line-height: 25px;
  }
  &__title {
    color: #020202;
    font-family: "Lexend Deca";
    font-size: 56px;
    letter-spacing: -1.91px;
    line-height: 58px;
    @media screen and (max-width: 992px) {
      font-size: 40px;
      line-height: initial;
      letter-spacing: initial;
    }
  }
  &__description {
    color: #000000;
    font-family: Lato;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.21px;
    line-height: 25px;
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
  width: calc(100% / 4);
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
    // background-image: url("~@/assets/images/bg-pic.png");
  }
  &--2 {
    .section__img {
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
    &:before {
      content: "";
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
  &__shadow {
    position: absolute;
    box-shadow: 0 19px 56px 0 rgba(25, 25, 141, 0.18);
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
    @media screen and (min-width: 992px) {
      width: 40%;
    }
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
    // background-image: url("https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
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
    color: rgba(255, 255, 255, 1);
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
  // &__textBg {
  //   position: absolute;
  //   opacity: 0.42;
  //   color: #ffffff;
  //   font-family: "Lexend Deca";
  //   font-size: 161px !important;
  //   letter-spacing: -4.03px;
  //   line-height: 42px;
  //   left: 10%;
  //   bottom: 100px;
  //   z-index: 1;
  //   @media screen and (max-width: 992px) {
  //     font-size: 90px !important;
  //     bottom: 40px;
  //   }
  // }
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
    // &:before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   left: 0;
    //   bottom: 0;
    //   background-color: rgba(0, 0, 0, 0.2);
    // }
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: -360px;
    height: 615px;
    width: 500px;
    background-position: center;
    background-size: cover;
    // background-image: url("https://images.unsplash.com/photo-1573496130103-a442a3754d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
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
    width: 70px;
    @media screen and (max-width: 992px) {
      width: 50px;
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

.cause {
  background-color: #111111;
  color: #fff;
  padding: 145px 0px;
  @media screen and (max-width: 992px) {
    padding: 100px 0px;
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
  @media screen and (max-width: 992px) {
    // width: 105%;
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
    width: 80%;
    margin: 15px 10%;
    padding: 50px 20px;
  }

  // @media screen and (max-width: 370px) {
  //   width: 138px;
  //   padding: 20px 10px;
  // }
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
    @media screen and (max-width: 992px) {
      height: 70px;
    }
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
#Rectangle {
  position: relative;
  z-index: 1;
}
#arrow {
  transform-origin: 105px 75px;
  // transform: translateX(-100px);
  animation: rotate 16s linear infinite;
  position: relative;
  z-index: 0;
}
#arrow2 {
  transform-origin: 0px 45px;
  // transform: translateX(-100px);
  animation: rotate2 16s linear infinite;
  position: relative;
  z-index: 0;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  100% {
    transform: rotate(-360deg);
  }
}
// svg{
//   overflow: visible!important  ;
// box-shadow : 0px -0px 10000px transparent
// }
</style>
