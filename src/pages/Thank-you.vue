<template>
  <Layout class="bg-black text-white">
    <div
      class="
        container
        min-h-screen
        d-flex
        align-items-center
        justify-content-center
        py-5
      "
    >
      <div
        class="
          col-lg-8
          pl-lg-5
          d-flex
          align-items-center
          text-center
          position-relative
        "
      >
        <g-image
          src="~/assets/images/deco-square.svg"
          class="modalContact__deco position-absolute custom-position-thankyou"
          alt="decoration"
        />
        <div class="formSent text-center">
          <h1 class="modalContact__title">Grazie per averci contattato</h1>
          <p>
            Il tuo messaggio è stato inviato correttamente, ti contatteremo a breve.
          </p>
          <g-image
            src="~/assets/images/icons/sent.svg"
            class="mt-3 mx-auto"
            alt="check sent"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
    metaInfo: {
    title: "Thank you - Logix Software",
    meta: [
      { name: "robots", content: "noindex, nofollow" },
    ],
  },
};
</script>

<style>
.custom-position-thankyou {
  top: -2rem;
  right: -2rem;
}
</style>