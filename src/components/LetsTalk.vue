<template>
  <div>
    <div
      v-for="text in $static.texts.edges"
      :key="text.id"
      class="letsTalk py-5 position-relative"
      :class="{
        'letsTalk--black': isIntersectingElement2,
      }"
    >
      <g-image
        src="~/assets/images/icon-bg.png"
        class="letsTalk__deco"
        :class="{
          'd-none': !isIntersectingElement2,
          'd-block': isIntersectingElement2,
        }"
      />

      <div class="container text-center py-5">
        <intersection-observer
          class="letsTalk__intersection"
          sentinal-name="sentinal-letsTalk"
          @on-intersection-element="onIntersectionElement2"
        ></intersection-observer>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2 class="letsTalk__title mb-5">
              {{ text.node.title }}
            </h2>
            <p class="letsTalk__description mb-4 mx-auto">
              {{ text.node.description }}
            </p>
            <g-link to="/contatti" class="btn btn-gradient-border mb-5">
              Contattaci
            </g-link>
            <div>
              <g-image
                src="~/assets/images/logo/logix-short.svg"
                class="letsTalk__logo mx-auto"
                :class="{
                  'd-none': isIntersectingElement2,
                  'd-block': !isIntersectingElement2,
                }"
                alt="logo Logix"
              />
              <g-image
                src="~/assets/images/logo/logix-short-white.svg"
                class="letsTalk__logo mx-auto"
                :class="{
                  'd-none': !isIntersectingElement2,
                  'd-block': isIntersectingElement2,
                }"
                alt="logo Logix"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  texts: allLetsTalk {
    edges {
      node {
        id
        title
        description
      }
    }
  },
}
</static-query>


<script>
import IntersectionObserver from "~/components/IntersectionObserver.vue";

export default {
  components: {
    IntersectionObserver,
  },
  data() {
    return {
      isIntersectingElement2: false,
    };
  },
  methods: {
    onIntersectionElement2(value) {
      this.isIntersectingElement2 = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.letsTalk {
  &__deco {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &--black {
    background: #000;
    color: #fff;
    .btn {
      color: #fff;
    }
  }
  &__intersection {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 50%;
  }
  &__title {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 40px;
    @media screen and (min-width: 992px) {
      font-size: 105px;
      line-height: 94px;
      letter-spacing: -5.61316px;
    }
  }
  &__description {
    font-family: "Lexend Deca";
    font-weight: 200;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: -0.21px;
    width: 75%;
  }
  &__logo {
    width: 4.5rem;
  }
}
</style>