<template>
  <Layout>
    <div class="hero py-5 d-flex align-items-end">
      <video
        autoplay
        muted
        loop
        playsinline
        id="myVideo"
        :poster="$page.project.imageNoVideo"
        v-if="$page.project.urlVideo && $page.project.urlVideo !== ' '"
      >
        <source :src="$page.project.urlVideo" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <img v-else class="hero__img" :src="$page.project.imageNoVideo" />

      <div class="container">
        <h1 class="hero__title">{{ $page.project.title }}</h1>
        <h6 class="hero__subtitle">{{ $page.project.subTitle }}</h6>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 client">
          <g-image
            :src="$page.project.logoClient"
            class="client__logo mb-4"
          ></g-image>
          <p class="client__abstract mb-5">
            {{ $page.project.descriptionLogo }}
          </p>
          <div class="flex items-center mb-3">
            <span
              class="label label--development"
              :class="{
                'label--development': $page.project.label1 == 'DEVELOPMENT',
                'label--design': $page.project.label1 == 'DESIGN',
                'label--strategist': $page.project.label1 == 'STRATEGIST',
              }"
              v-if="$page.project.label1 && $page.project.label1 !== ' '"
              >{{ $page.project.label1 }}</span
            >
            <span
              class="label label--design mx-1"
              :class="{
                'label--development': $page.project.label2 == 'DEVELOPMENT',
                'label--design': $page.project.label2 == 'DESIGN',
                'label--strategist': $page.project.label2 == 'STRATEGIST',
              }"
              v-if="$page.project.label2 && $page.project.label2 !== ' '"
              >{{ $page.project.label2 }}</span
            >
            <span
              class="label label--strategist"
              :class="{
                'label--development': $page.project.label3 == 'DEVELOPMENT',
                'label--design': $page.project.label3 == 'DESIGN',
                'label--strategist': $page.project.label3 == 'STRATEGIST',
              }"
              v-if="$page.project.label3 && $page.project.label3 !== ' '"
              >{{ $page.project.label3 }}</span
            >
          </div>
          <p class="client__hashtags">
            {{ $page.project.hashtags }}
          </p>
        </div>
        <div class="col-lg-9 pl-lg-5">
          <div class="pl-lg-5 mb-5">
            <h2 class="title">L'esigenza</h2>
            <p class="description">
              {{ $page.project.descriptionClient }}
            </p>
          </div>
          <div class="pl-lg-5 mb-5">
            <h2 class="title">Il progetto</h2>
            <div class="description" v-html="$page.project.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row">
        <g-image
          v-if="$page.project.image1"
          :src="$page.project.image1"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image1Style === 'horizontal',
            'col-lg-6': $page.project.image1Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image2"
          :src="$page.project.image2"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image2Style === 'horizontal',
            'col-lg-6': $page.project.image2Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image3"
          :src="$page.project.image3"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image3Style === 'horizontal',
            'col-lg-6': $page.project.image3Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image4"
          :src="$page.project.image4"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image4Style === 'horizontal',
            'col-lg-6': $page.project.image4Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image5"
          :src="$page.project.image5"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image5Style === 'horizontal',
            'col-lg-6': $page.project.image5Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image6"
          :src="$page.project.image6"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image6Style === 'horizontal',
            'col-lg-6': $page.project.image6Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image7"
          :src="$page.project.image7"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image7Style === 'horizontal',
            'col-lg-6': $page.project.image7Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image8"
          :src="$page.project.image8"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image8Style === 'horizontal',
            'col-lg-6': $page.project.image8Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image9"
          :src="$page.project.image9"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image9Style === 'horizontal',
            'col-lg-6': $page.project.image9Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image10"
          :src="$page.project.image10"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image10Style === 'horizontal',
            'col-lg-6': $page.project.image10Style !== 'horizontal',
          }"
        ></g-image>
        <g-image
          v-if="$page.project.image11"
          :src="$page.project.image11"
          class="image mb-4 h-100"
          :class="{
            'col-lg-12': $page.project.image11Style === 'horizontal',
            'col-lg-6': $page.project.image11Style !== 'horizontal',
          }"
        ></g-image>
      </div>
    </div>
    <div class="container py-5">
      <h5 class="titleTeam mb-5">Team operativo</h5>
      <div
        class="theTeam"
        v-if="
          $page.project.team1Position1 ||
          $page.project.team1Position2 ||
          $page.project.team1Position3 ||
          $page.project.team1Position4 ||
          $page.project.team1Position5 ||
          $page.project.team1Position6
        "
      >
        <h6
          class="theTeam__titleTeam mb-4"
          :class="{
            'text-gradient-development':
              $page.project.titleTeam1.toLowerCase() === 'development',
            'text-gradient-design':
              $page.project.titleTeam1.toLowerCase() === 'design',
            'text-gradient-strategy':
              $page.project.titleTeam1.toLowerCase() === 'strategy',
          }"
        >
          {{ $page.project.titleTeam1 }}
        </h6>
        <ul class="row list-unstyled">
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position1">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position1 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name1 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position2">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position2 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name2 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position3">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position3 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name3 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position4">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position4 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name4 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position5">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position5 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name5 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team1Position6">
            <span class="d-block theTeam__position">
              {{ $page.project.team1Position6 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team1Name6 }}
            </span>
          </li>
        </ul>
      </div>

      <div
        class="theTeam"
        v-if="
          $page.project.team2Position1 ||
          $page.project.team2Position2 ||
          $page.project.team2Position3 ||
          $page.project.team2Position4 ||
          $page.project.team2Position5 ||
          $page.project.team2Position6
        "
      >
        <h6
          class="theTeam__titleTeam mb-4"
          :class="{
            'text-gradient-development':
              $page.project.titleTeam2.toLowerCase() === 'development',
            'text-gradient-design':
              $page.project.titleTeam2.toLowerCase() === 'design',
            'text-gradient-strategy':
              $page.project.titleTeam2.toLowerCase() === 'strategy',
          }"
        >
          {{ $page.project.titleTeam2 }}
        </h6>
        <ul class="row list-unstyled">
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position1">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position1 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name1 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position2">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position2 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name2 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position3">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position3 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name3 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position4">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position4 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name4 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position5">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position5 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name5 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team2Position6">
            <span class="d-block theTeam__position">
              {{ $page.project.team2Position6 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team2Name6 }}
            </span>
          </li>
        </ul>
      </div>

      <div
        class="theTeam"
        v-if="
          $page.project.team3Position1 ||
          $page.project.team3Position2 ||
          $page.project.team3Position3 ||
          $page.project.team3Position4 ||
          $page.project.team3Position5 ||
          $page.project.team3Position6
        "
      >
        <h6
          class="theTeam__titleTeam mb-4"
          :class="{
            'text-gradient-development':
              $page.project.titleTeam3.toLowerCase() === 'development',
            'text-gradient-design':
              $page.project.titleTeam3.toLowerCase() === 'design',
            'text-gradient-strategy':
              $page.project.titleTeam3.toLowerCase() === 'strategy',
          }"
        >
          {{ $page.project.titleTeam3 }}
        </h6>
        <ul class="row list-unstyled">
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position1">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position1 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name1 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position2">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position2 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name2 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position3">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position3 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name3 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position4">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position4 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name4 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position5">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position5 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name5 }}
            </span>
          </li>
          <li class="col-lg-3 mb-3" v-if="$page.project.team3Position6">
            <span class="d-block theTeam__position">
              {{ $page.project.team3Position6 }}
            </span>
            <span class="d-block theTeam__name">
              {{ $page.project.team3Name6 }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <h1>{{ $page.project }}</h1> -->
  </Layout>
</template>
<page-query>
query ($path: String!) {
    project: projects (path: $path) {
        title
        subTitle
        logoClient
        hashtags
        urlVideo
        descriptionLogo
        descriptionClient
        content
        label1
        label2
        label3
        imageList
        imageNoVideo
        image1
        image1Style
        image2
        image2Style
        image3
        image3Style
        image4
        image4Style
        image5
        image5Style
        image6
        image6Style
        image7
        image7Style
        image8
        image8Style
        image9
        image9Style
        image10
        image10Style
        titleTeam1
        team1Position1
        team1Name1
        team1Position2
        team1Name2
        team1Position3
        team1Name3
        team1Position4
        team1Name4
        team1Position5
        team1Name5
        team1Position6
        team1Name6
        titleTeam2
        team2Position1
        team2Name1
        team2Position2
        team2Name2
        team2Position3
        team2Name3
        team2Position4
        team2Name4
        team2Position5
        team2Name5
        team2Position6
        team2Name6
        titleTeam3
        team3Position1
        team3Name1
        team3Position2
        team3Name2
        team3Position3
        team3Name3
        team3Position4
        team3Name4
        team3Position5
        team3Name5
        team3Position6
        team3Name6
        path
    },
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.abstract,
        },
        {
          property: "og:title",
          content: this.$page.project.title,
        },
        {
          property: "og:description",
          content: this.$page.project.abstract,
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
          content: this.$page.project.title,
        },
        {
          property: "twitter:description",
          content: this.$page.project.abstract,
        },
        {
          property: "twitter:image",
          content: "https://www.logix-software.it/uploads/share.jpg",
        },
        {
          property: "og:url",
          content: "https://www.logix-software.it" + this.$page.project.path,
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },

  data() {
    return {
      //   deviceWidth: 0
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 48px;
  line-height: 55px;
  letter-spacing: -1.5px;
}
.description {
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.5px;

  color: #292929;
}
.hero {
  overflow: auto;
  height: 100vh;
  max-height: 1079px;
  position: relative;
  overflow: hidden;
  color: #fff;
  font-family: "Lexend Deca";
  &:before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &__title {
    position: relative;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.25px;
  }
  &__subtitle {
    position: relative;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -1.25px;
  }
  &__img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
#myVideo {
  // width: 100vw;
  // height: 100vh;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.client {
  &__logo {
    width: 85px;
  }
  &__abstract {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.5px;
    color: #808080;
  }

  &__hashtags {
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1px;
  }
}
.label {
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  &--development {
    background: linear-gradient(103.3deg, #36f2b9 75.53%, #7878f9 131.85%);
  }
  &--design {
    background: linear-gradient(102.23deg, #36f2b9 -39.46%, #7878f9 30.96%);
  }
  &--strategist {
    background: linear-gradient(
      103.38deg,
      #36f2b9 -114.97%,
      #7878f9 -10.09%,
      #f60994 131.51%
    );
  }
}
.image {
  height: 540px;
  object-fit: cover;
}

.titleTeam {
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: -0.6px;
}

.theTeam {
  &__titleTeam {
    // font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.25px;
  }
  &__position {
    font-weight: 500;
    font-size: 28px;
    line-height: 44px;
    letter-spacing: -0.5px;
    color: #6a6a6a;
  }
  &__name {
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.4px;
    color: #6a6a6a;
  }
}
.text-gradient-development {
  background-image: linear-gradient(177deg, #36f2b9 18.36%, #7878f9 105.51%);
}
.text-gradient-design {
  background-image: linear-gradient(
    179deg,
    #36f2b9 -39.46%,
    #7878f9 68.85%,
    #f60994 126.03%
  );
}
.text-gradient-strategy {
  background-image: linear-gradient(181deg, #7878f9 -10.09%, #f60994 131.51%);
}
</style>
