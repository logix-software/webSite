---
title: Come Freeday15 ha Rivoluzionato la Gestione delle Mense Scolastiche con Logix
tag: Case study
author: Susanna Cirocchi
image: /uploads/copertina_gestione_mense.png
abstract: "Partnership Strategica: quando la tecnologia incontra la visione di
  lungo periodo"
date: 2025-05-15T09:35:31.135Z
---
# **Partnership Strategica: quando la tecnologia incontra la visione di lungo periodo**

Freeday15 non ha mai cercato semplicemente un fornitore. Quando ha identificato la necessità di razionalizzare l'intero ecosistema digitale dedicato alla gestione delle mense scolastiche per Authentica, ha scelto di coinvolgerci come partner progettuale per co-creare una soluzione su misura.

Non si trattava di rispondere a un'urgenza contingente, ma di consolidare una visione strategica: migliorare l'efficienza operativa, semplificare i flussi informativi e creare un'esperienza utente coerente e integrata. Il punto di partenza non era la crisi, ma l'opportunità.

## **Il Cliente: Freeday15, innovation partner a tutto tondo**

Freeday15 è una startup innovativa orientata al tech, con un focus chiaro sull'ottimizzazione dei processi attraverso soluzioni digitali intelligenti. Da anni agisce come braccio operativo IT di Authentica Spa, azienda leader in Italia nella ristorazione collettiva.\
Collaboriamo con Freeday in modo continuativo dal 2020, realizzando insieme piattaforme verticali (come il sistema mense AllFood, oggi Authentica), ambienti digitali per il social living (DomusGo15) e progetti formativi in ambito digitale (come Boostcamp a Terni).

![](/uploads/gestione_mense_schema.png "Gestione mense - schema")

## **Il Contesto: una complessità crescente da gestire in modo integrato**

La gestione dell’ecosistema mense di Authentica si basava su tre ambienti digitali completamente separati:

* Un gestionale per gestire mense, menù e calendarizzazione
* Un CMS per le comunicazioni ai genitori, nelle diverse aree territoriali operative (es. FOODFORFIVE.IT)
* Un'app mobile per il monitoraggio dei pasti rivolta ai genitori (AppFood)

Insieme con il team Freeday abbiamo condotto un’analisi approfondita, evidenziando criticità strutturali legate alla frammentazione dei flussi. L’eterogeneità degli stakeholder coinvolti (manager, addetto alla gestione degli appalti, operatori addetti alla mensa, operatori aree territoriali, scuole e genitori) avrebbe fatto supporre la necessità di un sistema unificato.\
Abbiamo collaborato, attraverso una serie di workshop, di una ecosystem map dettagliata, che ci ha permesso di mappare correttamente ruoli, touchpoint e bisogni reali degli utenti. L’obiettivo: garantire coerenza informativa e operativa lungo tutti i processi operativi di Authentica.

<div style="
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: var(--Indigo-050, #EAEAFE);
">
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="https://www.logix-software.it/uploads/freeday_logo.png" alt="Icona cliente Freeday15" style="width: 60px; height: 60px;">
    <strong style="
      font-family: 'Lexend Deca';
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 38.5px;
      letter-spacing: -1.25px;
    ">Una frase emblematica emersa durante i lavori</strong>
  </div>
  <p style="
    margin: 0;
    font-family: 'DM Sans';
    font-size: 26px;
    font-style: italic;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.4px;
  ">
    “Genitori, operatori delle mense e referenti territoriali non operano in compartimenti stagni. Fanno parte di un ecosistema interconnesso che va gestito in modo integrato e fluido.”
  </p>
</div>

![Soluzione gestione mense screen (dettaglio piatto, lista piatti, scelta menù, news)](/uploads/soluzione_gestione_mense.png)

## **La Soluzione: razionalizzazione, coerenza, scalabilità**

**Prima**: tre strumenti disallineati, curve di apprendimento elevate, inefficienze operative 

**Dopo**: un’unica piattaforma modulare con processi integrati  

**Bridge**: Partendo dalla piattaforma sviluppata insieme e già in uso dagli operatori di Authentica e dalla progressive app pensata per gli utenti finali, Logix ha ri-progettato insieme a Freeday una soluzione che accorpa: 

* La gestione back-office sia per l’organizzazione delle mense, dei menù, della programmazione dei pasti e delle preparazioni; che per tutta la gestione delle comunicazioni e delle news rivolte agli utenti finali attraverso un sistema CMS;
* L’app mobile per le famiglie, da cui fruire di tutti i contenuti prodotti e la visualizzazione del calendario menù con le specifiche su pasti e prodotti.

Lato design, uno dei fattori chiave che ha reso la progettazione estremamente efficiente è stata, la possibilità di sfruttare gli stessi flussi di navigazione e fruizione del sistema già in uso, consentendo la giusta continuità nell’esperienza utente; e l’utilizzo della styleguide condivisa già sviluppata, pubblica e strutturata nel tempo per le interfacce UI. Questo ha incluso:

* Tipografia, palette, set di icone e stili consistenti, progettati per garantire leggibilità, accessibilità e riconoscibilità del brand;
* Griglie fluide e responsive adattabili ai vari device;
* Libreria di componenti UI strutturati;
* Standard consolidati documentati per le micro-interazioni.

L’adattamento di questi asset ha permesso di:

* Accelerare la prototipazione e lo sviluppo
* Garantire consistenza visiva e funzionale tra tutte le interfacce
* Minimizzare la curva di apprendimento per operatori e utenti

Il risultato è stato un ecosistema coerente, scalabile e facilmente manutentibile, con interfacce familiari e intuitive, capaci di garantire continuità e fluidità nell’esperienza d’uso.

## **Un’architettura solida, modulare e pronta a scalare**

Per quel che concerne lo sviluppo, abbiamo sostenuto la nuova piattaforma unificata evolvendo l’architettura esistente in linea con le tecnologie già adottate. Il sistema si basa su microservizi Java Spring Boot, containerizzati con Docker e deployati su VM Google Cloud Platform. L'autenticazione centralizzata con Keycloak e l'uso di database MongoDB dedicati per ogni servizio ci ha permesso di garantire sicurezza, scalabilità e una gestione dei dati distribuita ma armonica.\
L’interfaccia di backoffice, sviluppata in Nuxt 3 e Vue.js, è stata potenziata con moduli dedicati alla gestione mense e un CMS integrato per la pubblicazione autonoma di contenuti informativi su base territoriale.\
Per gli utenti finali, invece, abbiamo deciso di rilasciare una nuova app mobile multipiattaforma (iOS e Android), sviluppata in Nuxt 3 e distribuita con Capacitor, così da garantire prestazioni elevate, coerenza nell’esperienza e un’unica base di codice facilmente manutenibile.\
Grazie alla fase iniziale di analisi, abbiamo deciso che per dare un boost ulteriore alla continuità di utilizzo dell'infrastruttura fosse strategico implementare un sistema di notifiche push avanzato. Abbiamo integrato RabbitMQ con Firebase Cloud Messaging per garantire comunicazioni rapide, affidabili e scalabili, anche in scenari ad alto traffico.

Tutto il sistema è stato progettato in modo modulare per:

* Rilasciare nuove funzionalità più rapidamente
* Scalare senza impatti
* Semplificare la gestione e la manutenzione nel tempo.

![Ecosystem map old gestione mense](/uploads/ecosystem-map-old.png)

![Ecosystem map new gestione mense](/uploads/ecosystem-map.png)

## **I Risultati: impatto misurabile e user adoption**

↓ 40% tempo speso in gestione operativa

↑ +60% efficienza nella comunicazione con i genitori

↓ 70% tempo medio di pubblicazione di avvisi e news

Onboarding nuovi operatori ridotto del 50%

<div style="
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: var(--Indigo-050, #EAEAFE);
">
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="https://www.logix-software.it/uploads/freeday_logo.png" alt="Icona cliente Freeday15" style="width: 60px; height: 60px;">
    <strong style="
      font-family: 'Lexend Deca';
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 38.5px;
      letter-spacing: -1.25px;
    ">La voce del cliente</strong>
  </div>
  <p style="
    margin: 0;
    font-family: 'DM Sans';
    font-size: 26px;
    font-style: italic;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.4px;
  ">
    "Con i ragazzi di Logix ci capiamo al volo: conoscono il nostro contesto, parlano la nostra lingua e sono sempre pronti a proporre soluzioni concrete. Non si limitano a realizzare ciò che chiediamo, ma ci aiutano a migliorarlo. Collaborare con loro ci ha permesso di fare scelte più consapevoli, ottimizzare i flussi e ottenere risultati tangibili in tempi rapidi."
  </p>
</div>

## **Collaborazione e cultura: i valori che hanno fatto la differenza**

La cultura condivisa, la collaborazione costante, la disponibilità e la professionalità dei team ha permesso anche questa volta una corretta integrazione nei workflow e nelle modalità operative di Freeday. 

* Mentalità agile: apertura al cambiamento, iterazione continua e capacità di adattamento alle priorità di progetto
* Feedback continuo: comunicazione diretta e trasparente, con confronti costanti e micro-validazioni
* Approccio product-first: focus sull’utente finale e sull’esperienza d’uso, non solo sulla funzionalità
* Proattività: spesso abbiamo anticipato problemi o colto opportunità proponendo soluzioni migliorative.

<div style="
  display: flex;
  padding: 60px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 20px;
  background: var(--Indigo-050, #EAEAFE);
">
  <!-- Icona + Titoli -->
  <div style="
    display: flex;
    align-items: center;
    gap: 15px;
  ">
    <div style="
      display: flex;
      width: 45px;
      height: 45px;
      padding: 15px 13.682px 13.182px 14.5px;
      justify-content: center;
      align-items: center;
      border-radius: 13.636px;
      border: 1px solid var(--Indigo-100, #C9C9FD);
      background: rgba(169, 169, 251, 0.10);
      flex-shrink: 0;
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" style="
        width: 16.818px;
        height: 16.818px;
      ">
        <g clip-path="url(#clip0_38_1098)">
          <path d="M14.7159 7.00743H2.10226M11.2121 1.40137V4.2044M5.60605 1.40137V4.2044M5.4659 15.4165H11.3523C12.5296 15.4165 13.1183 15.4165 13.568 15.1874C13.9636 14.9858 14.2852 14.6642 14.4868 14.2687C14.7159 13.819 14.7159 13.2303 14.7159 12.0529V6.16652C14.7159 4.98914 14.7159 4.40044 14.4868 3.95074C14.2852 3.55518 13.9636 3.23357 13.568 3.03202C13.1183 2.80288 12.5296 2.80288 11.3523 2.80288H5.4659C4.28852 2.80288 3.69983 2.80288 3.25013 3.03202C2.85456 3.23357 2.53295 3.55518 2.3314 3.95074C2.10226 4.40044 2.10226 4.98914 2.10226 6.16652V12.0529C2.10226 13.2303 2.10226 13.819 2.3314 14.2687C2.53295 14.6642 2.85456 14.9858 3.25013 15.1874C3.69983 15.4165 4.28852 15.4165 5.4659 15.4165Z" stroke="#A9A9FB" stroke-width="1.40152" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_38_1098">
            <rect width="16.8182" height="16.8182" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>

<div style="
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 5px;
    ">
      <div style="
        font-family: 'Lexend Deca';
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 55px;
        letter-spacing: -1.5px;
        color: var(--Indigo-900, #03033D);
      ">
        67 Giornate
      </div>
      <div style="
        font-family: 'Lexend Deca';
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 55px;
        letter-spacing: -1.5px;
        color: var(--Indigo-300, #7878F9);
      ">
        design e sviluppo
      </div>
    </div>
  </div>

  <!-- Linea di separazione -->

  <div style="
    width: 100%;
    height: 1px;
    background: rgba(120, 120, 249, 0.3);
    margin: 10px 0;
  "></div>

  <!-- Tabella -->

  <div style="
    display: flex;
    width: 100%;
    max-width: 1095px;
    justify-content: space-between;
    font-family: 'DM Sans';
    text-align: left;
    gap: 20px;
  ">
    <div style="flex: 1;">
      <div style="color: var(--Indigo-300, #7878F9); font-size: 18px; font-weight: 400; line-height: 25px; letter-spacing: -0.25px;">Inizio lavori</div>
      <div style="color: var(--Indigo-900, #03033D); font-size: 20px; font-weight: 500; line-height: 28px;">22 lug 2024</div>
    </div>
    <div style="flex: 1;">
      <div style="color: var(--Indigo-300, #7878F9); font-size: 18px; font-weight: 400; line-height: 25px; letter-spacing: -0.25px;">Fine lavori</div>
      <div style="color: var(--Indigo-900, #03033D); font-size: 20px; font-weight: 500; line-height: 28px;">17 set 2024</div>
    </div>
    <div style="flex: 1;">
      <div style="color: var(--Indigo-300, #7878F9); font-size: 18px; font-weight: 400; line-height: 25px; letter-spacing: -0.25px;">Revisione</div>
      <div style="color: var(--Indigo-900, #03033D); font-size: 20px; font-weight: 500; line-height: 28px;">17 sett - 10 gen 2025</div>
    </div>
    <div style="flex: 1;">
      <div style="color: var(--Indigo-300, #7878F9); font-size: 18px; font-weight: 400; line-height: 25px; letter-spacing: -0.25px;">Consegna</div>
      <div style="color: var(--Indigo-900, #03033D); font-size: 20px; font-weight: 500; line-height: 28px;">11 gen 2025</div>
    </div>
  </div>
</div>

 <div style="display: flex; align-items: center; gap: 10px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.31684 24.3022C0.766201 24.3022 0.446289 23.6794 0.767022 23.2318L8.44312 12.5196C8.6122 12.2836 8.61187 11.9661 8.44231 11.7305L0.771171 1.07153C0.449147 0.624083 0.768903 0 1.32018 0H5.92481C6.14237 0 6.34665 0.104648 6.47376 0.281214L14.7161 11.7304C14.8858 11.966 14.8861 12.2836 14.7169 12.5196L6.4737 24.0198C6.34666 24.1971 6.14198 24.3022 5.92393 24.3022H1.31684Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6753 23.6744C19.6753 24.0479 19.9781 24.3508 20.3517 24.3508H35.3238C35.6974 24.3508 36.0002 24.0479 36.0002 23.6744V19.2621C36.0002 18.8885 35.6974 18.5857 35.3238 18.5857H20.3517C19.9781 18.5857 19.6753 18.8885 19.6753 19.2621V23.6744Z" fill="white"/>
    </svg>
  </div>
  <h4 style="
    margin: 0;
    font-family: 'Lexend Deca';
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: -1.5px;
    color: white;
    text-align: center;
  ">Hai un progetto simile?</h4>

 <h5 style="
  color: var(--Color-White, #FFF);
  text-align: center;
  font-family: 'DM Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 138.889% */
  letter-spacing: -0.25px;
">
  Se stai scalando un prodotto digitale e hai bisogno di un partner tecnico che parli la tua lingua, siamo pronti a fare squadra.
</h5>
  <a href="#" style="
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 2px solid transparent;
    background: linear-gradient(#141414, #141414) padding-box, linear-gradient(277deg, #36F2B9 0.07%, #FACA00 33.43%, #7878F9 66.31%, #F60994 95.88%) border-box;
    color: #FFF;
    text-align: center;
    font-family: 'DM Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 10px;
  "
  onmouseover="this.style.background='linear-gradient(277deg, #36F2B9 0.07%, #FACA00 33.43%, #7878F9 66.31%, #F60994 95.88%)'; this.style.fontWeight='500';"
  onmouseout="this.style.background='linear-gradient(#141414, #141414) padding-box, linear-gradient(277deg, #36F2B9 0.07%, #FACA00 33.43%, #7878F9 66.31%, #F60994 95.88%) border-box'; this.style.fontWeight='400';"
  onmousedown="this.style.transform='scale(0.96)';"
  onmouseup="this.style.transform='scale(1)'"
  >
    Parlaci del tuo progetto
  </a>
</div>