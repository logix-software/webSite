<template>
  <Layout>
    <div class="coursePage">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 mx-auto">
              ciao
            <h1 class="text-center mb-5 coursePage__title">{{$page.article.title}}</h1>
           
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    article: articles (path: $path) {
      title
    }
}
</page-query>

<script>
export default {
  components: {
  
  },
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  }
};
</script>
<style >

</style>

