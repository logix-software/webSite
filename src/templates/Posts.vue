<template>
  <div>
    <Navbar :color="scrollTop < 200 ? 'white' : 'default'" />
    <div class="container main-container">
      <span class="button-tag mb-2 d-inline-block">{{ $page.post.tag }}</span>
      <h1 class="post__title">{{ $page.post.title }}</h1>
      <div class="d-flex align-items-center justify-content-between mb-5">
        <div class="d-flex align-items-center">
          <span class="post__author mr-2 d-inline-flex align-items-center">
            <span class="post__small d-inline-block mr-1">By</span>
            {{ $page.post.author }}
          </span>
          <span class="post__time d-inline-flex align-items-center">
            <g-image src="~/assets/images/icons/time.svg" class="icon mr-1" />10
            min di lettura</span
          >
        </div>
        <div class="d-flex align-items-center">
          <span class="post__small mr-2">share</span>
          <div>
            <button class="button-icon" @click="shareOnFacebook">
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
            </button>
          </div>
          <div>
            <button class="button-icon" @click="shareOnLinkedin">
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
            </button>
          </div>
        </div>
      </div>
      <img :src="$page.post.image" alt="post image" class="post__image" />
      <div class="post__content my-5 py-5">
        <div v-html="$page.post.content"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<page-query>
  query ($path: String!) {
      post: posts (path: $path) {
        title
        abstract
        author
        image
        content
        date
        tag
        path
      },
  }
  </page-query>
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.abstract,
        },
        {
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          property: "og:description",
          content: this.$page.post.abstract,
        },
        {
          property: "og:image",
          content: "https://www.logix-software.it/uploads/share.jpg",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:title",
          content: this.$page.post.title,
        },
        {
          property: "twitter:description",
          content: this.$page.post.abstract,
        },
        {
          property: "twitter:image",
          content: "https://www.logix-software.it/uploads/share.jpg",
        },
        {
          property: "og:url",
          content: "https://www.logix-software.it" + this.$page.post.path,
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      scrollTop: 0,
      widthScreen: null,
    };
  },
  methods: {
    shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(this.$page.post.title);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
    },
    shareOnLinkedin() {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(this.$page.post.title);
      const summary = encodeURIComponent(this.$page.post.abstract || '');
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`, '_blank');
    }
  },
  mounted() {
    var _this = this;
    this.widthScreen = screen.width;
    window.addEventListener("scroll", function () {
      _this.scrollTop = window.pageYOffset;
    });

    if (Object.keys(this.$route.query).length !== 0 && this.$route.query.cmp) {
      localStorage.setItem("param", this.$route.query.cmp);
    }
  },
};
</script>

<style lang="scss" scoped>
.button-tag {
  background-color: rgba(234, 234, 254, 1);
  color: rgba(39, 39, 245, 1);
  padding: 0.5rem 1.5rem;
  border-radius: 47px;
  border: 0;
  outline: none;
  white-space: nowrap;
}
.post__title {
  font-size: 72px;
  color: #000;
  font-family: "Lexend Deca";
}
.post__author {
  font-size: 20px;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}
.post__time {
  font-size: 20px;
  color: rgba(121, 121, 121, 1);
}
.post__small {
  font-size: 16px;
  color: rgba(3, 3, 61, 1);
  font-weight: 500;
}
.post__image {
  width: 100%;
  height: 472px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 300px;
  }
}
.post__content img{
  max-width: 100% !important;
  height: auto !important;
}

@media (max-width: 768px) {
  .post__content img,
  .post__content p img,
  .post__content div img,
  .post__content [data-v-3a5c6014] img {
    height: 300px !important;
    width: auto !important;
    object-fit: contain !important;
  }
}

.main-container {
  padding-top: 10rem;
}
.icon {
  width: 20px;
  height: 20px;
}
.button-icon {
  background-color: #000;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
}

.button-icon svg {
  width: 15px;
  height: 15px;
}
</style>

<style lang="scss">
/* Stili globali per il contenuto dei post */
.post__content img {
  max-width: 100% !important;
  height: auto !important;
  display: block !important;
  margin: 20px auto !important;
}

@media (max-width: 768px) {
  .post__content img {
    height: 300px !important;
    width: auto !important;
    object-fit: contain !important;
  }
}
</style>
