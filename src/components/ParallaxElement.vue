<template>
  <div
    class="h-full w-full"
    :style="{
      transform:
        windowWidth > 1024
          ? `translate3d(0, ${offset}px, 0)`
          : 'translate3d(0, 0, 0)',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ParallaxElement",
  inject: ["parallaxContainer"],
  props: {
    factor: {
      default: 0.25,
      type: Number,
    },
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    offset() {
      const { height, scrollFactor } = this.parallaxContainer;
      // The offset is relative to the height of
      // the element. This means, if the factor is
      // 0.5, the element is moved half its height
      // over the full scroll distance of the viewport.
      return scrollFactor * height * this.factor;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>