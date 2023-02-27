<template>
  <div class="appTeam position-relative">
    <div class="appTeam__img mb-4">
      <img :src="img" :alt="name" />
    </div>
    <div>
      <span
        class="label"
        :class="{
          'label--development': team.toLowerCase()  === 'development',
          'label--design': team.toLowerCase()  === 'design',
          'label--strategist': team.toLowerCase()  === 'strategist',
          'label--operation': team.toLowerCase()  === 'operation',
        }"
        >{{ team }}</span
      >
      <h2 class="appTeam__name">
        {{ name }}
      </h2>
      <span class="d-block appTeam__position">{{ position }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.appTeam {
  font-family: "DM Sans";
  &__img {
    height: 20rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__name {
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 40.8px;
    line-height: 43px;
    letter-spacing: -1.496px;
  }
  &__position {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 22.44px;
    line-height: 28px;
    letter-spacing: -0.4488px;
  }
  &__tag {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>