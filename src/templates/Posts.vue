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
          <div class="share-buttons d-flex">
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
            <button class="button-icon" @click="shareOnTwitter">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                class="svg-inline--fa fa-twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </button>
            <button class="button-icon" @click="shareOnWhatsapp">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                class="svg-inline--fa fa-whatsapp"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
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
    // Costruisco l'URL completo per i metadati
    const absoluteUrl = 'https://www.logix-software.it' + this.$page.post.path;
    // Immagine del post se disponibile, altrimenti immagine di default
    const imageUrl = this.$page.post.image ? this.$page.post.image : 'https://www.logix-software.it/uploads/share.jpg';
    
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
          content: imageUrl,
        },
        {
          property: "og:url",
          content: absoluteUrl,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
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
          content: imageUrl,
        },
        {
          property: "twitter:url",
          content: absoluteUrl,
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
      let fullUrl;
      if (process.isClient) {
        fullUrl = encodeURIComponent(window.location.href);
      } else {
        fullUrl = encodeURIComponent('https://www.logix-software.it' + this.$page.post.path);
      }
      
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`, '_blank', 'width=600,height=600');
    },
    shareOnLinkedin() {
      let fullUrl;
      if (process.isClient) {
        fullUrl = encodeURIComponent(window.location.href);
      } else {
        fullUrl = encodeURIComponent('https://www.logix-software.it' + this.$page.post.path);
      }
      
      const title = encodeURIComponent(this.$page.post.title);
      const summary = encodeURIComponent(this.$page.post.abstract || '');
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${fullUrl}`, '_blank', 'width=600,height=600');
    },
    shareOnTwitter() {
      let fullUrl;
      if (process.isClient) {
        fullUrl = encodeURIComponent(window.location.href);
      } else {
        fullUrl = encodeURIComponent('https://www.logix-software.it' + this.$page.post.path);
      }
      
      const text = encodeURIComponent(this.$page.post.title);
      window.open(`https://twitter.com/intent/tweet?url=${fullUrl}&text=${text}`, '_blank', 'width=600,height=600');
    },
    shareOnWhatsapp() {
      let fullUrl;
      if (process.isClient) {
        fullUrl = encodeURIComponent(window.location.href);
      } else {
        fullUrl = encodeURIComponent('https://www.logix-software.it' + this.$page.post.path);
      }
      
      const text = encodeURIComponent(`${this.$page.post.title}`);
      window.open(`https://api.whatsapp.com/send?text=${text}%20${fullUrl}`, '_blank', 'width=600,height=600');
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
.share-buttons {
  display: flex;
  align-items: center;
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
