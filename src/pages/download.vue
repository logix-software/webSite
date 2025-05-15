<template>
  <Layout class="bg-black text-white">
    <div class="container min-h-screen d-flex align-items-center py-5">
      <div class="row py-5">
        <div class="col-lg-4">
          <h1 class="modalContact__title">Scarica ora il report!</h1>
          <p class="modalContact__description mb-5">
            Qualunque sia la sfida saremo sempre felici 😃 di parlare con te.
            Scrivici e ti risponderemo al più presto!
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Scrivici: </span>
            <a href="mailto:info@logixcorp.it" class="text-white"
              >info@logixcorp.it</a
            >
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Chiamaci: </span>
            <a href="tel:+0744283733" class="text-white">0744/283733</a>
          </p>
          <p class="modalContact__text">
            <span class="text-green-contact">Passa da noi:</span> Via di Porta
            San Giovanni, 28 - 05100 Terni (TR)
          </p>
        </div>

        <form
          class="col-lg-8 px-5 d-flex align-items-center bg-custom-contact py-5"
          name="download"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="download" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <input
            type="hidden"
            id="param"
            name="param"
            :value="formData.param"
          />

          <div class="row">
            <div class="col-lg-6">
              <div class="group">
                <input
                  type="text"
                  name="firstName"
                  v-model="formData.firstName"
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="labelForm">Nome</label>
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
                  class="labelForm"
                  :class="{
                    'valid-email': fullInput,
                  }"
                  >Email</label
                >
              </div>
            </div>
            <div class="col-lg-12">
              <div class="group">
                <input type="text" name="company" v-model="formData.company" />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label
                  class="labelForm"
                  :class="{
                    'super-custom': !formData.company,
                  }"
                  >Azienda (opzionale)</label
                >
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Settore aziendale</span>
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio1"
                    value="Servizi"
                    v-model="formData.sector"
                  />
                  <label for="radio1">Servizi</label>
                </div>

                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio2"
                    value="Tecnologia ICT"
                    v-model="formData.sector"
                  />
                  <label for="radio2">Tecnologia ICT</label>
                </div>

                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio3"
                    value="Manifatturiero"
                    v-model="formData.sector"
                  />
                  <label for="radio3">Manifatturiero</label>
                </div>

                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio4"
                    value="Commercio"
                    v-model="formData.sector"
                  />
                  <label for="radio4">Commercio</label>
                </div>
                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio5"
                    value="PA"
                    v-model="formData.sector"
                  />
                  <label for="radio5">PA</label>
                </div>
                <div class="position-relative">
                  <input
                    name="sector"
                    type="radio"
                    id="radio6"
                    value="Altro"
                    v-model="formData.sector"
                  />
                  <label for="radio6">Altro</label>
                </div>
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Grandezza azienda</span>
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    :disabled="formData.sector === 'Posizione lavoro'"
                    name="employees"
                    type="radio"
                    id="radio7"
                    value="1-10 dipendenti"
                    v-model="formData.employees"
                  />
                  <label for="radio7">1-10 dipendenti</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.sector === 'Posizione lavoro'"
                    name="employees"
                    type="radio"
                    id="radio8"
                    value="11-50 dipendenti"
                    v-model="formData.employees"
                  />
                  <label for="radio8">11-50 dipendenti</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.sector === 'Posizione lavoro'"
                    name="employees"
                    type="radio"
                    id="radio9"
                    value="51-250 dipendenti"
                    v-model="formData.employees"
                  />
                  <label for="radio9">51-250 dipendenti</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.sector === 'Posizione lavoro'"
                    name="employees"
                    type="radio"
                    id="radio10"
                    value="251 + dipendenti"
                    v-model="formData.employees"
                  />
                  <label for="radio10">251 + dipendenti</label>
                </div>
              </div>
            </div>

            <div class="col-lg-12 text-right">
              <small v-if="errorForm" class="d-block mb-2">
                Compila tutti i campi per inviare il messaggio
              </small>
              <button type="submit" class="btn btn-gradient-border text-white">
                Scarica
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
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  },
  data() {
    return {
      formData: {
        sector: "",
        employees: "",
      },
      fullInput: false,
      errorForm: false,
    };
  },
  watch: {
    "formData.sector": function (val) {
      if (val === "Posizione lavoro") {
        this.formData.employees = "";
      }
    },
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
      // gtag("event", "conversion", {
      //   send_to: "AW-358917451/gN_YCOnc1MEDEMvKkqsB",
      // });
      if (this.formData.sector && this.formData.employees) {
        this.errorForm = false;
        var _this = this;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formData,
          }),
        })
          .then(() => {
            this.$router.push("/thank-you-download");
          })
          .catch((error) => alert(error));
      } else {
        this.errorForm = true;
      }
    },
  },
};
</script>

<style lang="postcss">
.valid-email {
  top: -20px;
  font-size: 14px;
  color: #fff;
}

.button-radio {
  display: flex;
  flex-wrap: wrap;
}

.button-radio input[type="radio"] {
  opacity: 0;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}

.button-radio label {
  display: inline-block;
  padding: 8px 26px;
  margin: 5px;
  background-color: transparent;
  border: 2px solid #fff;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  opacity: 0.6;
  &:hover {
    opacity: 0.75;
  }
}
.labelRadio {
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.7px;
  color: #ffffff;
}
.button-radio input[type="radio"]:checked + label {
  opacity: 1;
  font-size: 16px;
}
.button-radio input[type="radio"] + label {
  font-size: 16px;
}
.button-radio input[required] + label {
  font-size: 16px;
}
.bg-custom-contact {
  background: linear-gradient(
    177.7deg,
    #3a3a3a 14.55%,
    rgba(43, 43, 43, 0) 137.51%
  );
  border-radius: 5px;
}
</style>