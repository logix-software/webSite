---
title: Quando i dati genetici diventano uno strumento alimentare concreto con GeneFood
tag: Case study
author: Susanna Cirocchi
image: /uploads/copertina_genefood.png
abstract: I referti genetici sono uno strumento prezioso, ma da soli non
  bastano. L'obiettivo del progetto era creare un’esperienza personalizzata
  sulla base di quei risultati
date: 2025-07-08T13:17:18.011Z
---
Altamedica, struttura del Gruppo Artemisia, è specializzata nella diagnostica genetica avanzata ed è riconosciuta come centro d’eccellenza nella medicina personalizzata.\
Nel 2024, il team Genefood ci ha contattati con una richiesta chiara: progettare un’app capace di trasformare i risultati del test genetico in uno strumento semplice e utile per le scelte alimentari quotidiane.\
L’obiettivo era chiaro: superare il referto fine a se stesso, e costruire uno strumento digitale capace di accompagnare l’utente nella vita reale – al supermercato, in cucina – trasformando i dati genetici in indicazioni semplici, immediate e personalizzate.

## La sfida: rendere fruibili dati clinici complessi

I referti genetici sono uno strumento prezioso, ma da soli non bastano. L'obiettivo del progetto era creare un’esperienza personalizzata sulla base di quei risultati: un'app connessa al profilo genetico dell’utente, capace di tradurre quei dati in indicazioni alimentari operative, chiare e utilizzabili ogni giorno.

![schema: back-office; app mobile (Mostra feedback e frequenze consigliate); modulo ai (Calcola lo score di prodotto e ingredienti, Usa modelli quantizzati, Fallback su llm in cloud, Memorizza i risultati per efficienza) )](/uploads/contesto__genefood.png "Schema ecosystem genefood")

## La risposta di Logix: co-progettazione e sviluppo iterativo

Abbiamo affrontato il progetto come una vera partnership progettuale. Il team Genefood aveva già una visione chiara e un set di flussi iniziali ben definiti. Il nostro compito è stato tradurre questa visione in un’esperienza digitale efficace e scalabile.\
Il lavoro è stato strutturato in tre fasi distinte ma complementari, con l’obiettivo di tradurre rapidamente la visione di Altamedica in una soluzione concreta.\
\
**1. Analisi condivisa e mappatura dei flussi**\
Insieme al team Genefood, abbiamo tracciato l’intero percorso dell’utente: dalla ricezione del risultato genetico fino all’interazione quotidiana con l’app. Questo ci ha permesso di identificare con chiarezza le priorità, i punti critici e i contesti d’uso più ricorrenti.\
\
**2. Design e prototipazione UX/UI** \
Abbiamo progettato interfacce semplici, focalizzate sull’immediatezza delle informazioni e sulla gestione multi-utente. Ogni proposta è stata validata in tempo reale con il team medico, mantenendo il giusto equilibrio tra rigore scientifico e usabilità.\
\
**3. Sviluppo agile e test continui** \
Ogni due settimane abbiamo rilasciato nuove funzionalità, testate insieme al team Genefood. Questo approccio ci ha permesso di ottimizzare la user experience sulla base di dati reali e comportamenti d’uso.

![UI element app mobile genefood](/uploads/ui_genefood.jpg "UI element")

## La piattaforma: due ambienti, un unico flusso

**Back-office clinico per il team sanitario** 

* Connessione con i sistemi di laboratorio per ricezione automatica dei referti genetici
* Creazione e gestione della profilazione dei pazienti
* Monitoraggio stato degli account

**App mobile per l’utente finale** 

* Scanner dei prodotti tramite codice a barre
* Feedback visivo: consigliato, tollerato, sconsigliato, intollerato
* Dettaglio degli ingredienti con punteggio di tollerabilità
* Visualizzazione della frequenza settimanale consigliata per ciascun alimento
* Possibilità di creare e gestire più profili (es. figli, partner)

![Scan genefood and schema](/uploads/screen_genefood.jpg "Schema funzionamento sintetico")

## Stack tecnologico usato

* Capacitor, Nuxt3, Vue3, Tailwind CSS → sviluppo mobile fluido e cross-platform
* Supabase → autenticazione, database, storage
* Netlify → hosting e CI/CD del back-office
* Open Food Facts API → decodifica automatica degli alimenti
* Figma + Git → collaborazione e versionamento continuo
* Modelli AI → Runpod, OpenAI, modelli quantizzati Mistral AI



## Cosa abbiamo imparato

* Valorizzare contenuti specialistici (in questo caso clinici) con tecnologie moderne
* Costruire strumenti realmente usabili e accessibili
* Integrare AI in modo sostenibile, ottimizzando performance e costi
* Rilasciare valore reale in tempi brevi, iterando con intelligenza

<div style=" padding-top:  32px!important;
padding-bottom:  32px!important;"><div>

<div style="
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  background: #141414;
  border-radius: 24px;
  gap: 24px;
  font-family: 'DM Sans', sans-serif;
  color: white;
">
  <!-- Icona terminale stylized -->
  <svg style="
    width: 32px
  " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 50"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.95 49.9a1 1 0 0 1-.82-1.58L17.5 25.48a1 1 0 0 0 0-1.17L1.14 1.58A1 1 0 0 1 1.95 0h10.41a1 1 0 0 1 .82.42l17.2 23.9a1 1 0 0 1 0 1.16l-17.2 24a1 1 0 0 1-.82.42H1.95ZM40.4 49a1 1 0 0 0 1 1h31.52a1 1 0 0 0 1-1v-9.84a1 1 0 0 0-1-1H41.4a1 1 0 0 0-1 1V49Z" fill="#fff"/></svg>

  <!-- Titolo -->

  <h2 style="padding-top: 16px!important;padding-bottom: 0px!important;
    font-family: Lexend Deca;
font-weight: 400;
font-size: 48px;
line-height: 55px;
letter-spacing: -1.5px;
text-align: center;
    margin: 0;
  ">Hai un progetto simile?</h2>

  <!-- Sottotitolo -->

  <p style="color: white!important;
    max-width: 700px;
   font-family: DM Sans!important;
font-weight: 400;
font-size: 18px!important;
line-height: 25px;
letter-spacing: -0.25px;
text-align: center;
    margin: 0;
  ">
    Se stai scalando un prodotto digitale e hai bisogno di un partner tecnico che parli la tua lingua, siamo pronti a fare squadra.
  </p>

  <!-- Bottone con bordo gradiente -->

  <a href="/contatti" class="btn btn-gradient-border text-white">
  Parlaci del tuo progetto

  </a>
</div>