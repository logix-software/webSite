<template>
  <Layout>
    <div class="heroFaq d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="heroFaq__title">
              Domande o dubbi?<br /><span class="heroFaq__title text-gradient-1"
                >Guarda qui.</span
              >
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Sezione Filtri FAQ -->
    <div class="bg-white py-8">
      <div class="container-faq mx-auto">
        <h2 class="faq-section-title">A cosa sei interessato?</h2>
      </div>
      <div class="faq-tags pl-10">
        <button
          v-for="tag in tags"
          :key="tag"
          @click="selectedTag = tag"
          :class="['faq-tag', { active: selectedTag === tag }]"
        >
          {{ tag }}
        </button>
      </div>
      <div class="container-faq mx-auto">
        <!-- Lista FAQ -->
        <div class="faq-list">
          <div
            v-for="(faq, idx) in filteredFaqs"
            :key="faq.title"
            class="faq-item"
          >
            <h2 class="faq-title">
              <span>{{ faq.title }} ></span>
            </h2>

            <div class="faq-answer">
              <span v-html="formatAbstract(faq.abstract)"></span>
            </div>

            <div
              v-if="idx !== filteredFaqs.length - 1"
              class="faq-divider"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <LetsTalk />
  </Layout>
</template>
<page-query>
  query {
    faqs: allFaqs(order: DESC) {
      edges {
        node {
          title
          abstract
          tag
        }
      }
    },
  }
  </page-query>
<script>
import LetsTalk from "~/components/LetsTalk.vue";

// Sezione script organizzata: Imports, Variabili, Computed, Funzioni, Lifecycle
export default {
  metaInfo: {
    title: "FAQ - Logix Software",
    meta: [
      {
        name: "description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
      },
      { property: "og:title", content: "FAQ - Logix Software" },
      {
        property: "og:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
      },
      {
        property: "og:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "FAQ - Logix Software"
      },
      {
        property: "twitter:description",
        content:
          "Logix Software, azienda informatica con sede a Roma e Terni, è composta da un team di professionisti digital, specializzati nello sviluppo, nel design e nel marketing."
      },
      {
        property: "twitter:image",
        content: "https://www.logix-software.it/uploads/share.jpg"
      },
      { property: "og:url", content: "https://www.logix-software.it/faq" },
      { name: "robots", content: "index, follow" }
    ]
  },
  // Variabili reactive
  data() {
    return {
      selectedTag: "Tutti",
      openFaq: null,
    };
  },
  components: {
    LetsTalk,
  },
  // Computed per i tag unici e le FAQ filtrate
  computed: {
    tags() {
      // Ricava tutti i tag unici dalle FAQ + 'Tutti'
      const tags = this.$page.faqs.edges.map((f) => f.node.tag).filter(Boolean);
      return ["Tutti", ...Array.from(new Set(tags))];
    },
    filteredFaqs() {
      if (this.selectedTag === "Tutti") {
        return this.$page.faqs.edges.map((f) => f.node);
      }
      return this.$page.faqs.edges
        .map((f) => f.node)
        .filter((faq) => faq.tag === this.selectedTag);
    },
  },
  // Funzioni
  methods: {
    // Gestisce l'apertura/chiusura dell'accordion (solo una aperta)
    toggleFaq(idx) {
      this.openFaq = this.openFaq === idx ? null : idx;
    },
    // Formatta l'abstract per evidenziare Logix in grassetto
    formatAbstract(text) {
      return text.replace(/Logix/g, "<b>Logix</b>");
    },
  },
};
</script>

<style lang="scss" >
.heroFaq {
  height: 530px;
  background-color: #000;
  color: #fff;
  margin-bottom: 100px;
  &__title {
    font-size: 75px;
  }
}

// FAQ Section
.faq-section-title {
  font-weight: 400;
  font-size: 32px;
  line-height: 38.5px;
  letter-spacing: -1.25px;
  margin-bottom: 20px;
}
.faq-tags {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.faq-tag {
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  background: #79797933;
  font-family: DM Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.5px;

  border: 0;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  &:hover {
    background: #EAEAFE;
    color: #2727F5;
  }
  &:focus {
    outline: none;
  }
  &.active {
    background: #EAEAFE;
    color: #2727F5;
  }
}
.faq-list {
  background: #fff;
}
.faq-item {
  // nessun bordo, nessuna ombra
}
.faq-title {
  font-weight: 400;
  font-size: 32px;
  line-height: 38.5px;
  letter-spacing: -1.25px;
}
.faq-answer {
  font-family: Lato;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.18px;
}
.faq-divider {
  border-bottom: 1px solid #f2f2f2;
  margin: 1.5rem 0 0.5rem 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.pl-10 {
  padding-left: 10rem;
  @media (max-width: 1200px) {
    padding-left: 3rem;
  }
  @media (max-width: 992px) {
    padding-left: 1rem;
  }
}
.container-faq {
  padding: 0 10rem;
  margin-bottom: 100px;
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }
  @media (max-width: 992px) {
    padding: 0 1rem;
  }
}
</style>