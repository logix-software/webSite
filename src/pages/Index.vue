<template>
  <Layout>
    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-flex">
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
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-flex">
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
     <div class="wrapper" id="js-wrapper">
        <div class="sections" id="js-slideContainer">
          <section class="section">
            <span class="section__title" id="title1">Section One</span>
            <span id="trigger--title1"></span>
          </section>
          <section class="section">
            <span class="section__title" id="title2">Section Two</span>
            <span id="trigger--title2"></span>
          </section>
          <section class="section">
            <span class="section__title" id="title3">Section Three</span>
            <span id="trigger--title3"></span>
          </section>
          <section class="section">
            <span class="section__title" id="title4">Section Four</span>
            <span id="trigger--title4"></span>
          </section>
          <section class="section">
            <span class="section__title" id="title5">Section Five</span>
            <span id="trigger--title5"></span>
          </section>
        </div>
      </div>
   <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-flex">
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
     
    </div> <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-flex">
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
    title: 'About us',
    // meta: [
    //   { name: 'author', content: 'John Doe' }
    // ],
    // link: [
    //   { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' },
    // ],
   
  },
  // metaInfo: {
  //   title: "My blog"
  // },
  mounted(){
    $(function () { // wait for document ready
  
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-20%"})	
  .to("#js-slideContainer", 1,   {x: "-40%"})
  .to("#js-slideContainer", 1,   {x: "-60%"})
  .to("#js-slideContainer", 1,   {x: "-80%"})


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
  }
};
</script>
<style>
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

.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -webkit-perspective: 1000;
          perspective: 1000;
          background: #F64747;
}

.section {
  height: 100%;
  width: calc( 100% / 5 );
  float: left;
  position: relative;
  
}
.section:nth-child(1) {
  background: #F64747;
}
.section:nth-child(2) {
  background: #22A7F0;
}
.section:nth-child(3) {
  background: #F9690E;
}
.section:nth-child(4) {
  background: #9B59B6;
}
.section:nth-child(5) {
  background: #03C9A9;
}
.sections {
  width: 500%;
  height: 100%;
}
.section__title {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 30px;
  color: #fff;
}

</style>
