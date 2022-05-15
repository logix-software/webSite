<template>
  <Layout class="bg-black text-white">
    <div class="container min-h-screen d-flex align-items-center py-5">
      <div class="row py-5">
        <div class="col-lg-4">
          <g-image
            src="~/assets/images/deco-square.svg"
            class="modalContact__deco"
            alt="decoration"
          />
          <h1 class="modalContact__title">Contattaci</h1>
          <p class="modalContact__description mb-5">
            Qualunque sia la sfida saremo sempre felici 😃 di parlare con te.
            Scrivici e ti risponderemo al più presto!
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Scrivici:</span> info@logixcorp.it
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Chiamaci:</span> 0744/283733
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Passa:</span> Via di Porta San
            Giovanni, 28 - 05100 Terni (TR)
          </p>
        </div>
        <div
          class="col-lg-8 pl-lg-5 d-flex align-items-center text-center"
          v-if="formSent == true"
        >
          <div class="formSent text-center">
            <h1 class="modalContact__title">Grazie per averci contattato</h1>
            <g-image
              src="~/assets/images/icons/sent.svg"
              class="mt-3 mx-auto"
              alt="check sent"
            />
          </div>
        </div>
        <form
          v-else
          class="col-lg-8 pl-lg-5 d-flex align-items-center"
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <div class="row">
            <div class="col-lg-6">
              <div class="group">
                <input
                  type="text"
                  name="name"
                  v-model="formData.name"
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="group">
                <input
                  type="email"
                  name="email"
                  v-model="formData.email"
                  required
                  @input="onInputEmail()"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label
                  :class="{
                    'valid-email': fullInput,
                  }"
                  >Email</label
                >
              </div>
            </div>
            <div class="col-lg-6">
              <div class="group">
                <input
                  type="text"
                  name="company"
                  v-model="formData.company"
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Azienda (opzionale)</label>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="group">
                <select v-model="formData.reason" name="reason" required>
                  <option value="Ci contatti per" selected>
                    Ci contatti per
                  </option>
                  <option value="Digital">Digital tranformation</option>
                  <option value="Development">Sviluppo</option>
                  <option value="Design">Design</option>
                  <option value="Collaborative">Collaborative Team</option>
                  <option value="Job">Posizione lavorativa</option>
                </select>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="group">
                <textarea
                  name="message"
                  v-model="formData.message"
                  required
                  row="6"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Messaggio</label>
              </div>
            </div>
            <div class="col-lg-12 text-right">
              <button type="submit" class="btn btn-secondary">
                Invia messaggio
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contatti - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
      },
      { property: "og:title", content: "Contatti - Logix Software" },
      {
        property: "og:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
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
        content: "Contatti - Logix Software",
      },
      {
        property: "twitter:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg",
      },
      { property: "og:url", content: "https://www.logix-software.it/contatti" },
      { name: "robots", content: "index, follow" },
    ],
  },
  data() {
    return {
      formData: {
        reason: "Ci contatti per",
      },
      formSent: false,
      fullInput: false,
    };
  },

  methods: {
    onInputEmail() {
      if (this.formData.email) {
        this.fullInput = true;
      } else {
        this.fullInput = false;
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      var _this = this;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => (_this.formSent = true))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style>
.valid-email {
  top: -20px;
  font-size: 14px;
  color: #fff;
}
</style>