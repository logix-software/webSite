<template>
  <div class="cardBlog position-relative">
    <div class="cardBlog__img mb-4" :class="getClassHeight">
      <img :src="img" :alt="title" />
    </div>
    <div class="col-lg-8">
      <h2
        class="cardBlog__title"
        :class="{
          'text-white': variant === 'white',
        }"
      >
        {{ title }}
      </h2>

      <span class="cardBlog__time d-flex align-items-center py-2">
        <g-image
          src="~/assets/images/icons/time.svg"
          class="cardBlog__icon"
        />{{ time }} di lettura</span
      >

      <p
        class="cardBlog__abstract"
        :class="{
          'text-white': variant === 'white',
        }"
      >
        {{ abstract }}
      </p>
      <button class="button-tag mr-2 button-tag--active">{{ tag }}</button>
    </div>
    <g-link :to="link" class="cardBlog__link"></g-link>
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
    time: {
      type: String,
      required: false,
      default: () => undefined,
    },
    tag: {
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
        return "cardBlog__img--1";
      } else if (this.index % 2 == 0) {
        return "cardBlog__img--1";
      } else {
        return "cardBlog__img--2";
      }
    },
  },
};
</script>

<style lang="scss">
.button-tag {
  background-color: rgba(121, 121, 121, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 47px;
  border: 0;
  outline: none;
  &--active {
    background-color: rgba(234, 234, 254, 1);
    color: rgba(39, 39, 245, 1);
  }
}
.cardBlog {
  font-family: "DM Sans";
  &__time {
    font-size: 20px;
    color: rgba(121, 121, 121, 1);
  }
  &__img {
    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
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
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    font-family: "Lexend Deca";
  }
  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  &__abstract {
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: -0.75px;
    font-family: "Lexend Deca";
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