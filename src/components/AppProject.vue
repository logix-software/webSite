<template>
  <div class="appProject position-relative">
    <div class="appProject__img mb-4" :class="getClassHeight">
      <img :src="img" :alt="title" />
    </div>
    <div class="col-lg-8">
      <h2
        class="appProject__title"
        :class="{
          'text-white': variant === 'white',
        }"
      >
        {{ title }}
      </h2>
      <ul class="list-unstyled d-flex">
        <li
          class="appProject__label"
          :class="{
            'appProject__label--development':
              label1.toLowerCase() === 'development',
            'appProject__label--design': label1.toLowerCase() === 'design',
            'appProject__label--strategist':
              label1.toLowerCase() === 'strategist',
          }"
          v-if="label1"
        >
          {{ label1 }}
        </li>
        <li
          class="appProject__label mx-1"
          v-if="label2"
          :class="{
            'appProject__label--development':
              label2.toLowerCase() === 'development',
            'appProject__label--design': label2.toLowerCase() === 'design',
            'appProject__label--strategist':
              label2.toLowerCase() === 'strategist',
          }"
        >
          {{ label2 }}
        </li>
        <li
          class="appProject__label"
          v-if="label3"
          :class="{
            'appProject__label--development':
              label3.toLowerCase() === 'development',
            'appProject__label--design': label3.toLowerCase() === 'design',
            'appProject__label--strategist':
              label3.toLowerCase() === 'strategist',
          }"
        >
          {{ label3 }}
        </li>
      </ul>
      <div
        class="appProject__tag"
        :class="{
          'text-white': variant === 'white',
        }"
      >
        {{ hashtags }}
      </div>

      <p
        class="appProject__abstract"
        :class="{
          'text-white': variant === 'white',
        }"
      >
        {{ abstract }}
      </p>
    </div>
    <g-link :to="link" class="appProject__link"></g-link>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      validator: (value) => ["default", "white"].includes(value),
      default: () => "default",
    },
    index: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    label1: {
      type: String,
      required: false,
      default: () => undefined,
    },
    label2: {
      type: String,
      required: false,
      default: () => undefined,
    },
    label3: {
      type: String,
      required: false,
      default: () => undefined,
    },
    hashtags: {
      type: String,
      required: false,
      default: () => undefined,
    },
  },
  computed: {
    // getClassWidth() {
    //   if (this.index % 3 == 0) {
    //     return "col-lg-9";
    //   } else if (this.index % 2 == 0) {
    //     return "col-lg-6";
    //   } else {
    //     return "col-lg-6";
    //   }
    // },
    getClassHeight() {
      if (this.index % 3 == 0) {
        return "appProject__img--1";
      } else if (this.index % 2 == 0) {
        return "appProject__img--1";
      } else {
        return "appProject__img--2";
      }
    },
  },
};
</script>

<style lang="scss">
.appProject {
  font-family: "DM Sans";
  &__img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &--1 {
      height: 32rem;
    }
    &--2 {
      height: 40rem;
    }
  }
  &__label {
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
  &__tag {
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 1px;
  }
  &__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 50px;
    letter-spacing: -1px;
    text-decoration: underline;
  }
  &__abstract {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  &__link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>