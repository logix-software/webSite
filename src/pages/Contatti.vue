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
                <label class="labelForm">Name</label>
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
                <input
                  type="text"
                  name="company"
                  v-model="formData.company"
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="labelForm">Azienda</label>
              </div>
            </div>
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Ci contatti per</span>
              <div class="button-radio">
                <input
                  name="contact-for"
                  type="radio"
                  id="radio1"
                  value="Digital tranformation"
                  v-model="formData.contactFor"
                />
                <label for="radio1">Digital transformation</label>

                <input
                  name="contact-for"
                  type="radio"
                  id="radio2"
                  value="Sviluppo"
                  v-model="formData.contactFor"
                />
                <label for="radio2">Sviluppo</label>

                <input
                  name="contact-for"
                  type="radio"
                  id="radio3"
                  value="Design"
                  v-model="formData.contactFor"
                />
                <label for="radio3">Design</label>
                <input
                  name="contact-for"
                  type="radio"
                  id="radio4"
                  value="Collaborative"
                  v-model="formData.contactFor"
                />
                <label for="radio4">Collaborative</label>
                <input
                  name="contact-for"
                  type="radio"
                  id="radio5"
                  value="Posizione lavoro"
                  v-model="formData.contactFor"
                />
                <label for="radio5">Posizione lavoro</label>
              </div>
            </div>
            <!-- <div class="col-lg-6">
              <div class="group">
                <select v-model="formData.reason" name="reason" required>
                  <option value="Ci contatti per">Ci contatti per</option>
                  <option value="Digital">Digital tranformation</option>
                  <option value="Development">Sviluppo</option>
                  <option value="Design">Design</option>
                  <option value="Collaborative">Collaborative Team</option>
                  <option value="Job">Posizione lavorativa</option>
                </select>
              </div>
            </div> -->
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Hai un budget di</span>
              <div class="button-radio">
                <input
                  name="Budget"
                  type="radio"
                  id="radio6"
                  value="Meno di 30.000€"
                  v-model="formData.budget"
                />
                <label for="radio6">Meno di 30.000€</label>

                <input
                  name="Budget"
                  type="radio"
                  id="radio7"
                  value="30.000 - 70.000€"
                  v-model="formData.budget"
                />
                <label for="radio7">30.000 - 70.000€</label>

                <input
                  name="Budget"
                  type="radio"
                  id="radio8"
                  value="Più di 70.000€"
                  v-model="formData.budget"
                />
                <label for="radio8">Più di 70.000€</label>
              </div>
            </div>
            <!-- <div class="col-lg-6">
              <div class="group">
                <select v-model="formData.budget" name="budget">
                  <option value="Hai un budget di">Hai un budget di</option>
                  <option value="Non lo so">Non lo so ancora</option>
                  <option value="-30">meno di 30.000 €</option>
                  <option value="30-70">tra 30.000€ - 70.000€</option>
                  <option value="70+">più di 70.000€</option>
                </select>
              </div>
            </div> -->
            <div class="col-lg-12 group">
              <span class="labelRadio mb-1 d-block">Hai fissato una scadenza per</span>
              <div class="button-radio">
                <input
                  name="expire"
                  type="radio"
                  id="radio9"
                  value="Non lo so ancora"
                  v-model="formData.expire"
                />
                <label for="radio9">Non lo so ancora</label>

                <input
                  name="expire"
                  type="radio"
                  id="radio10"
                  value="3 mesi +"
                  v-model="formData.expire"
                />
                <label for="radio10">3 mesi +</label>

                <input
                  name="expire"
                  type="radio"
                  id="radio11"
                  value="6 mesi +"
                  v-model="formData.expire"
                />
                <label for="radio11">6 mesi +</label>
                <input
                  name="expire"
                  type="radio"
                  id="radio12"
                  value="12 mesi +"
                  v-model="formData.expire"
                />
                <label for="radio12">12 mesi +</label>
              </div>
            </div>
            <!-- <div class="col-lg-6">
              <div class="group">
                <select v-model="formData.deadline" name="deadline">
                  <option value="Hai fissato una scadenza per">
                    Hai fissato una scadenza per
                  </option>
                  <option value="Non lo so">Non lo so ancora</option>
                  <option value="3+">3 mesi +</option>
                  <option value="6+">6 mesi +</option>
                  <option value="12+">12 mesi +</option>
                </select>
              </div>
            </div> -->
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
                <label class="labelForm">Messaggio</label>
              </div>
            </div>
            <div class="col-lg-12 text-right">
              <small v-if="errorForm" class="d-block mb-2"
                >Compila tutti i dati in modo corretto</small
              >
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
export default {
  // inizio
  // metaInfo: {
  //   title: "Contatti - Logix Software",
  //   meta: [
  //     {
  //       name: "description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
  //     },
  //     { property: "og:title", content: "Contatti - Logix Software" },
  //     {
  //       property: "og:description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
  //     },
  //     {
  //       property: "og:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg",
  //     },
  //     {
  //       property: "twitter:card",
  //       content: "summary",
  //     },
  //     {
  //       property: "twitter:title",
  //       content: "Contatti - Logix Software",
  //     },
  //     {
  //       property: "twitter:description",
  //       content:
  //         "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing.",
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.logix-software.it/uploads/share.jpg",
  //     },
  //     { property: "og:url", content: "https://www.logix-software.it/contatti" },
  //     { name: "robots", content: "index, follow" },
  //   ],
  // },
  // fine
  data() {
    return {
      formData: {
        reason: "Ci contatti per",
        budget: "Hai un budget di",
        deadline: "Hai fissato una scadenza per",
        contactFor: "",
        budget: "",
        expire: "",
      },
      fullInput: false,

      errorForm: false,
    };
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
        this.formData.contactFor &&
        this.formData.budget &&
        this.formData.expire
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

.button-radio input[type="radio"] {
  display: none;
}

.button-radio label {
  display: inline-block;
  padding: 8px 26px;
  margin: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  opacity: 0.6;
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