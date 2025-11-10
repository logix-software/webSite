<template>
  <Layout class="bg-black text-white">
    <div class="container min-h-screen d-flex align-items-center py-5">
      <div class="row py-5">
        <div class="col-lg-4">
          <h1 class="modalContact__title">Contattaci</h1>
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

          <input
            type="hidden"
            id="param"
            name="param"
            :value="formData.param"
          />
          <input type="hidden" name="gclid" :value="formData.gclid" />
          <input type="hidden" name="fclid" :value="formData.fclid" />
          <input type="hidden" name="mclid" :value="formData.mclid" />

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
                  type="text"
                  name="lastName"
                  v-model="formData.lastName"
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="labelForm">Cognome</label>
              </div>
            </div>
            <div class="col-lg-6">
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
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block"
                >Cosa vuoi realizzare insieme a noi?</span
              >
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio1"
                    value="Digital transformation"
                    v-model="formData.contactFor"
                  />
                  <label for="radio1">Digital transformation</label>
                </div>

                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio2"
                    value="Sviluppo"
                    v-model="formData.contactFor"
                  />
                  <label for="radio2">Sviluppo</label>
                </div>

                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio3"
                    value="Design"
                    v-model="formData.contactFor"
                  />
                  <label for="radio3">Design</label>
                </div>

                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio4"
                    value="Collaborazione"
                    v-model="formData.contactFor"
                  />
                  <label for="radio4">Collaborazione</label>
                </div>
                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio5"
                    value="Consulenza"
                    v-model="formData.contactFor"
                  />
                  <label for="radio5">Consulenza</label>
                </div>
                <div class="position-relative">
                  <input
                    name="contactFor"
                    type="radio"
                    id="radio6"
                    value="Posizione lavoro"
                    v-model="formData.contactFor"
                  />
                  <label for="radio6">Posizione lavoro</label>
                </div>
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block"
                >Quanto budget hai deciso di investire?</span
              >
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="budget"
                    type="radio"
                    id="radio7"
                    value="5.000 - 15.000€"
                    v-model="formData.budget"
                  />
                  <label for="radio7">5.000 - 15.000€</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="budget"
                    type="radio"
                    id="radio8"
                    value="15.000 - 30.000€"
                    v-model="formData.budget"
                  />
                  <label for="radio8">15.000 - 30.000€</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="budget"
                    type="radio"
                    id="radio9"
                    value="30.000 - 70.000€"
                    v-model="formData.budget"
                  />
                  <label for="radio9">30.000 - 70.000€</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="budget"
                    type="radio"
                    id="radio10"
                    value="Più di 70.000€"
                    v-model="formData.budget"
                  />
                  <label for="radio10">Più di 70.000€</label>
                </div>
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block"
                >Entro quanto tempo vuoi realizzare il tuo progetto?</span
              >
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="expire"
                    type="radio"
                    id="radio11"
                    value="Non lo so ancora"
                    v-model="formData.expire"
                  />
                  <label for="radio11">Non lo so ancora</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="expire"
                    type="radio"
                    id="radio12"
                    value="3 mesi +"
                    v-model="formData.expire"
                  />
                  <label for="radio12">3 mesi +</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="expire"
                    type="radio"
                    id="radio13"
                    value="6 mesi +"
                    v-model="formData.expire"
                  />
                  <label for="radio13">6 mesi +</label>
                </div>

                <div class="position-relative">
                  <input
                    :disabled="formData.contactFor === 'Posizione lavoro'"
                    name="expire"
                    type="radio"
                    id="radio14"
                    value="12 mesi +"
                    v-model="formData.expire"
                  />
                  <label for="radio14">12 mesi +</label>
                </div>
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Come ci hai trovato?</span>
              <div class="button-radio">
                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio15"
                    value="Passaparola"
                    v-model="formData.howFound"
                  />
                  <label for="radio15">Passaparola</label>
                </div>

                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio16"
                    value="Social"
                    v-model="formData.howFound"
                  />
                  <label for="radio16">Social</label>
                </div>

                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio17"
                    value="Eventi online"
                    v-model="formData.howFound"
                  />
                  <label for="radio17">Eventi online</label>
                </div>

                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio18"
                    value="Eventi offline"
                    v-model="formData.howFound"
                  />
                  <label for="radio18">Eventi offline</label>
                </div>

                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio19"
                    value="Pubblicità"
                    v-model="formData.howFound"
                  />
                  <label for="radio19">Pubblicità</label>
                </div>
                <div class="position-relative">
                  <input
                    name="howFound"
                    type="radio"
                    id="radio20"
                    value="Ricerca diretta"
                    v-model="formData.howFound"
                  />
                  <label for="radio20">Ricerca diretta</label>
                </div>
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
                <label class="labelForm">Dicci qualcosa in più</label>
              </div>
            </div>
            <div class="col-lg-12 text-right">
              <small v-if="errorForm" class="d-block mb-2">
                Compila tutti i campi per inviare il messaggio
              </small>
              <button type="submit" class="btn btn-gradient-border text-white">
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
import {
  persistAttributionParams,
  readAttributionParam,
} from "~/utils/attribution";
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
        budget: "Hai un budget di",
        deadline: "Hai fissato una scadenza per",
        contactFor: "",
        budget: "",
        expire: "",
        howFound: "",
        param: "",
        gclid: "",
        fclid: "",
        mclid: "",
      },
      fullInput: false,
      errorForm: false,
    };
  },
  watch: {
    "formData.contactFor": function (val) {
      if (val === "Posizione lavoro") {
        this.formData.budget = "";
        this.formData.expire = "";
      }
    },
  },
  mounted() {
    var script = document.createElement("script");
    var fun = document.createTextNode(`
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof url != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          send_to: "AW-358917451/gN_YCOnc1MEDEMvKkqsB",
          event_callback: callback,
        });
        return false;
      }
    `);
    script.appendChild(fun);
    document.body.appendChild(script);
    persistAttributionParams(this.$route.query);
    const storedParam = readAttributionParam("param");
    if (storedParam) {
      this.formData.param = storedParam;
    }

    ["gclid", "fclid", "mclid"].forEach((key) => {
      const value = readAttributionParam(key);
      if (value) {
        this.formData[key] = value;
      }
    });
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
      if (
        this.formData.contactFor === "Posizione lavoro" ||
        (this.formData.contactFor &&
          this.formData.budget &&
          this.formData.expire)
      ) {
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
            window.dataLayer.push({
              event: "contactFormLogixWebsite",
              formId: 1,
              inputs: [
                { name: "budget", value: this.formData.budget },
                { name: "company", value: this.formData.company },
                { name: "contactFor", value: this.formData.contactFor },
                { name: "deadline", value: this.formData.deadline },
                { name: "email", value: this.formData.email },
                { name: "expire", value: this.formData.expire },
                { name: "firstName", value: this.formData.firstName },
                { name: "howFound", value: this.formData.howFound },
                {
                  name: "lastName",
                  value: this.formData.lastName,
                },
                {
                  name: "message",
                  value: this.formData.message,
                },
                { name: "param", value: this.formData.param },
              ],
            });

            this.$router.push("/thank-you");
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
