export const site = {
  domain: "https://contabil.ie",
  phoneDisplay: "089 471 4339",
  phoneHref: "+353894714339",
  email: "info@contabil.ie",
  whatsapp: "353894714339",
  formspreeId: "YOUR_FORM_ID",
  taxAgent: "81569Q",
  croAgent: "1361"
};

export const sources = {
  rct: "https://www.revenue.ie/en/self-assessment-and-self-employment/rct/index.aspx",
  rctSubcontractor: "https://www.revenue.ie/en/self-assessment-and-self-employment/rct/rct-subcontractors.aspx",
  taxRegistration: "https://www.revenue.ie/en/starting-a-business/registering-for-tax/how-to-register-for-tax-as-a-sole-trader.aspx",
  lateReturn: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/pay-file-system.aspx",
  mortgageAib: "https://www.aib.ie/help-and-guidance/mortgages-faq/what-is-a-revenue-form-11",
  mortgageBoi: "https://personalbanking.bankofireland.com/borrow/mortgages/documentation-checklist/"
};

export const routes = {
  home: { ro: "index.html", en: "en/index.html", ru: "ru/index.html" },
  services: { ro: "servicii.html", en: "en/services.html", ru: "ru/services.html" },
  registration: { ro: "inregistrare-fiscala.html", en: "en/tax-registration.html", ru: "ru/tax-registration.html" },
  rct: { ro: "rct-constructii.html", en: "en/construction-rct.html", ru: "ru/construction-rct.html" },
  return: { ro: "inchidere-an-form-11.html", en: "en/tax-return.html", ru: "ru/tax-return.html" },
  mortgage: { ro: "documente-mortgage.html", en: "en/mortgage-documents.html", ru: "ru/mortgage-documents.html" },
  contact: { ro: "contact.html", en: "en/contact.html", ru: "ru/contact.html" }
  ,privacy: { ro: "privacy.html", en: "en/privacy.html", ru: "ru/privacy.html" }
};

export const locale = {
  ro: {
    code: "ro",
    htmlLang: "ro-IE",
    label: "Română",
    locale: "ro_IE",
    nav: {
      home: "Acasă",
      services: "Servicii",
      rct: "RCT Construcții",
      return: "Închidere de an",
      mortgage: "Mortgage",
      contact: "Contact"
    },
    common: {
      topbar: "Subcontractor în construcții? Rata RCT poate ajunge la 35%. Verifică înainte de următoarea plată.",
      topbarCta: "Verifică situația",
      free: "Prima discuție este gratuită",
      quote: "Solicită o ofertă",
      whatsapp: "Scrie pe WhatsApp",
      call: "Sună acum",
      getHelp: "Am nevoie de ajutor",
      chooseLanguage: "Alege limba",
      source: "Informație verificată",
      disclaimer: "Fiecare situație fiscală este diferită. Rezultatul și rata RCT sunt stabilite de Revenue. Nu promitem reduceri, rambursări sau aprobări bancare garantate.",
      credential: "Agent fiscal înregistrat 81569Q · Agent CRO pentru depuneri electronice nr. 1361",
      nationwide: "Ajutor în toată Irlanda, prin telefon și online. Consultații în Dublin la cerere.",
      formTitle: "Lasă numărul. Te sunăm noi.",
      formLead: "Spune-ne doar cu ce ai nevoie de ajutor. Fără formulare lungi.",
      name: "Numele tău",
      phone: "Număr de telefon",
      need: "Cu ce ai nevoie de ajutor?",
      submit: "Vreau să fiu contactat",
      privacy: "Prin trimitere, ești de acord să folosim datele doar pentru a răspunde solicitării tale.",
      formDisabled: "Formularul va funcționa după adăugarea ID-ului Formspree. Pentru moment, sună sau scrie-ne pe WhatsApp.",
      footerText: "Servicii fiscale și contabile pentru români și moldoveni din Irlanda.",
      noPrices: "Prețul depinde de situația ta. Primești o ofertă clară înainte să începem.",
      faq: "Întrebări pe care poate ți-e greu să le pui",
      next: "Nu mai amâna până la următoarea plată sau cerere bancară.",
      nextLead: "O conversație de câteva minute îți poate clarifica ce lipsește și care este următorul pas.",
      selectPlaceholder: "Alege un serviciu",
      servicesOptions: ["Înregistrare fiscală", "RCT și construcții", "Închidere de an / Form 11", "Documente pentru mortgage", "VAT", "PAYE și tax refund", "Bookkeeping sau payroll", "Declarații întârziate", "Altceva"]
    },
    pages: {
      home: {
        title: "Contabil pentru Români în Irlanda | RCT, Form 11, Mortgage",
        description: "Contabil și agent fiscal pentru români și moldoveni în Irlanda. Ajutor cu înregistrare fiscală, RCT, Form 11, taxe, VAT și documente pentru mortgage.",
        eyebrow: "Contabil pentru români și moldoveni în Irlanda",
        h1: "Te simți pierdut între Revenue, ROS și RCT?",
        h1Accent: "Începe aici.",
        lead: "Primești explicații în limba română, fără termeni complicați și fără să fii judecat. Punem în ordine taxele, declarațiile și documentele de care ai nevoie.",
        heroNote: "Română · English · Русский",
        riskLabel: "Verificare urgentă",
        riskTitle: "Ți se poate opri 35% din plată prin RCT.",
        riskText: "Revenue aplică rate RCT de 0%, 20% sau 35%, în funcție de situația fiscală. Verifică ce este înregistrat înainte de următoarea plată.",
        riskCta: "Verifică RCT pe WhatsApp",
        painTitle: "Alege problema care nu te lasă să dormi liniștit",
        painLead: "Nu trebuie să știi denumirea formularului. Alege ce vrei să rezolvi și îți spunem ce urmează.",
        cards: [
          { key: "registration", number: "01", title: "Înregistrare fiscală", text: "Începi ca self-employed sau subcontractor? Te ajutăm cu Revenue, ROS, Income Tax, RCT și VAT, unde este necesar.", cta: "Vreau să mă înregistrez" },
          { key: "return", number: "02", title: "Închidere de an", text: "Pregătim Form 11, veniturile, cheltuielile și creditele RCT. Vezi clar cât ai de plată sau ce trebuie corectat.", cta: "Vreau închiderea de an" },
          { key: "mortgage", number: "03", title: "Documente pentru mortgage", text: "Form 11, Notice of Assessment și confirmarea situației fiscale pot fi cerute de bancă. Pregătește dosarul înainte de aplicare.", cta: "Pregătesc dosarul" }
        ],
        familiarLabel: "O situație foarte comună",
        familiarQuote: "«Muncesc, primesc bani, dar nu știu dacă taxele mele sunt în regulă.»",
        familiarText: "Mulți clienți ajung la noi exact așa. Nu trebuie să cunoști sistemul fiscal irlandez. Ne spui ce ai făcut, ce documente ai și ce vrei să obții. Noi transformăm confuzia într-o listă clară de pași.",
        otherTitle: "Mai multe lucruri pe care le putem rezolva",
        otherServices: ["RCT pentru subcontractori", "Declarații întârziate", "VAT Returns", "PAYE tax review și refund", "Bookkeeping", "Payroll", "Tax Clearance", "Revenue correspondence", "Company formation"],
        facts: [
          { value: "35%", label: "rata RCT maximă curentă" },
          { value: "5% / 10%", label: "posibilă suprataxă pentru Form 11 depus târziu" },
          { value: "2 ani", label: "de documente pot fi cerute la unele dosare mortgage pentru self-employed" }
        ],
        faq: [
          ["Nu am fost niciodată înregistrat ca self-employed. Este prea târziu?", "Nu. Începem prin a stabili când ai început activitatea, ce venituri ai avut și ce înregistrări sau declarații lipsesc. Apoi pregătim un plan clar."],
          ["Mi se reține 35% RCT. Poți obține 0%?", "Putem verifica de ce se aplică rata și ce probleme de conformare trebuie rezolvate. Revenue stabilește rata de 0%, 20% sau 35%, deci nicio rată nu poate fi garantată."],
          ["Am nevoie de acte pentru mortgage. Ce trebuie să pregătesc?", "Cerințele diferă între bănci. Pentru self-employed se cer frecvent Form 11 confirmat de Revenue, situația fiscală, conturi și extrase bancare. Pornim de la lista primită de la bancă sau broker."],
          ["Pot vorbi în română?", "Da. Româna este limba principală a serviciului. Putem comunica și în engleză sau rusă."]
        ]
      },
      services: {
        title: "Servicii Contabile și Fiscale în Irlanda pentru Români",
        description: "Servicii fiscale pentru români în Irlanda: self-employed, RCT, Form 11, VAT, PAYE refunds, bookkeeping, payroll, tax clearance și documente mortgage.",
        eyebrow: "Tot ajutorul într-un singur loc",
        h1: "Nu ai nevoie de zece persoane. Ai nevoie de un plan clar.",
        lead: "De la prima înregistrare până la declarația anuală, pregătim, explicăm și urmărim pașii agreați.",
        items: [
          ["Înregistrare self-employed", "Income Tax, ROS, RCT și VAT, în funcție de activitatea și veniturile tale."],
          ["RCT pentru construcții", "Înregistrare, verificarea tranzacțiilor, deducerilor și situației de conformare."],
          ["Form 11 și închidere de an", "Venituri, cheltuieli, credite RCT, calcul fiscal și depunerea declarației."],
          ["Declarații întârziate", "Identificăm anii lipsă și pregătim un plan pentru a aduce situația la zi."],
          ["VAT Returns", "Înregistrare VAT, evidențe, return-uri VAT3, RTD și răspunsuri către Revenue."],
          ["PAYE și tax refund", "Verificarea creditelor fiscale, cheltuielilor eligibile și declarațiilor PAYE."],
          ["Bookkeeping", "Organizarea facturilor, cheltuielilor și evidențelor pentru declarații corecte."],
          ["Payroll", "Înregistrarea angajatorului și suport pentru procesarea salariilor și declarațiilor PAYE."],
          ["Documente mortgage", "Form 11, Notice of Assessment, confirmarea situației fiscale și documentele cerute de broker."],
          ["Tax Clearance", "Cerere, verificarea conformării și rezolvarea problemelor care blochează certificatul."],
          ["Company formation", "Înființare CRO și înregistrări fiscale. Serviciu disponibil la cerere."],
          ["Scrisori de la Revenue", "Explicăm ce se cere și pregătim răspunsul sau declarația necesară."]
        ]
      },
      registration: {
        title: "Înregistrare Self-Employed și Taxe Irlanda | Contabil.ie",
        description: "Înregistrare ca self-employed, sole trader, RCT, VAT și ROS în Irlanda, cu explicații în română pentru subcontractori și freelanceri.",
        eyebrow: "Înregistrare fiscală în Irlanda",
        h1: "Ai început să lucrezi pe cont propriu? Revenue trebuie să știe.",
        lead: "Nu aștepta până când apare prima problemă. Stabilim ce înregistrări ai nevoie și pregătim cererea corectă.",
        alert: "PPSN-ul tău nu devine automat număr fiscal pentru activitatea de sole trader. Trebuie să fii înregistrat la Revenue.",
        checklist: ["Income Tax pentru self-employed", "ROS și autorizarea agentului fiscal", "RCT pentru lucrări de construcții", "VAT, dacă este obligatoriu sau potrivit", "PAYE dacă angajezi personal", "Clarificarea datei de începere și activității"],
        faq: [["Pot lucra până se termină înregistrarea?", "Situația depinde de activitate și contract. Contactează-ne cât mai devreme pentru a verifica ce trebuie făcut înainte de următoarea plată."], ["Am doar PPSN. Este suficient?", "Nu pentru activitatea de sole trader. Revenue explică faptul că PPSN-ul devine Tax Reference Number pentru activitate după înregistrarea fiscală."], ["Trebuie să mă înregistrez pentru VAT?", "Depinde de tipul activității și cifra de afaceri. Verificăm pragurile și dacă înregistrarea voluntară are sens pentru tine."]]
      },
      rct: {
        title: "RCT Irlanda pentru Subcontractori Români | 0%, 20%, 35%",
        description: "Ajutor RCT pentru subcontractori români din construcții în Irlanda. Înregistrare, verificarea ratei 0%, 20% sau 35%, Form 11 și conformare Revenue.",
        eyebrow: "RCT pentru construcții",
        h1: "35% din plată poate fi reținut înainte ca banii să ajungă la tine.",
        lead: "RCT are rate de 0%, 20% și 35%. Revenue stabilește rata după situația ta de conformare. Verifică înainte de următoarea plată.",
        alert: "Rata de 0% nu este automată și nu poate fi promisă. Putem identifica declarațiile, plățile sau înregistrările care trebuie puse în ordine.",
        checklist: ["Înregistrare RCT și ROS", "Verificarea contractelor și plăților raportate", "Deduction Authorisations și credite RCT", "Form 11 cu includerea creditelor RCT", "Declarații lipsă sau întârziate", "Pregătirea poziției pentru următorul Revenue rate review"],
        faq: [["De ce am rata de 35%?", "Revenue face evaluări periodice ale conformării. Declarațiile lipsă, plățile restante sau alte probleme pot afecta rata. Trebuie verificată situația concretă."], ["Banii reținuți prin RCT sunt pierduți?", "Nu neapărat. Revenue creditează RCT-ul dedus în evidența fiscală, iar creditele pot fi compensate cu obligațiile fiscale după depunerea declarației."], ["Puteți schimba rata imediat la 0%?", "Nu putem garanta sau stabili rata. Revenue o determină. Putem corecta problemele identificate și pregăti situația pentru o nouă evaluare."]]
      },
      return: {
        title: "Închidere de An și Form 11 Irlanda în Limba Română",
        description: "Pregătire Form 11 și închidere de an pentru români self-employed și subcontractori în Irlanda. Venituri, cheltuieli, RCT și declarații întârziate.",
        eyebrow: "Form 11 și închidere de an",
        h1: "Declarația amânată nu dispare. Poate deveni mai scumpă.",
        lead: "O declarație depusă târziu poate atrage o suprataxă de 5% sau 10% din taxa datorată, în limitele stabilite de Revenue.",
        alert: "Pentru anul fiscal 2025, termenul standard este 31 octombrie 2026. Revenue poate acorda o extensie separată pentru depunere și plată online prin ROS.",
        checklist: ["Form 11 și self-assessment", "Venituri din activitate și alte surse", "Cheltuieli de afaceri documentate", "Credite RCT și plăți deja efectuate", "Declarații din anii anteriori", "Notice of Assessment și copii pentru evidență"],
        faq: [["Nu am păstrat toate chitanțele. Ce fac?", "Începem cu extrasele, facturile, plățile și documentele disponibile. Îți explicăm ce poate fi susținut și ce nu trebuie estimat fără bază."], ["Nu am depus de câțiva ani. Mă puteți ajuta?", "Da. Stabilim ce ani lipsesc, colectăm documentele disponibile și pregătim declarațiile în ordinea potrivită."], ["RCT-ul reținut apare în Form 11?", "Creditele RCT trebuie reconciliate cu evidența Revenue și luate în calcul în poziția fiscală anuală."]]
      },
      mortgage: {
        title: "Documente Mortgage pentru Self-Employed în Irlanda | Form 11",
        description: "Pregătire documente mortgage pentru români self-employed în Irlanda: Revenue Form 11, Notice of Assessment, situație fiscală și evidențe de venit.",
        eyebrow: "Dosar mortgage pentru self-employed",
        h1: "Ai găsit casa. Nu lăsa documentele fiscale să întârzie dosarul.",
        lead: "Băncile pot cere Form 11 confirmat de Revenue, conturi, extrase bancare și dovada situației fiscale. Pregătește-le înainte de aplicare.",
        alert: "Documentele incomplete pot întârzia evaluarea. Nu putem garanta aprobarea unui credit, dar putem pregăti partea fiscală cerută de bancă sau broker.",
        checklist: ["Revenue Acknowledged Form 11", "Notice of Assessment", "Confirmarea situației fiscale", "Tax Clearance, unde este cerut", "Evidențe de venit și cheltuieli", "Coordonare după lista băncii sau brokerului"],
        faq: [["Câți ani de Form 11 îmi trebuie?", "Depinde de bancă și situație. AIB menționează frecvent doi ani, iar în anumite cazuri poate cere trei. Urmăm lista actuală a băncii sau brokerului tău."], ["Îmi puteți garanta aprobarea mortgage-ului?", "Nu. Decizia aparține băncii și include evaluarea venitului, cheltuielilor, creditului și proprietății. Noi pregătim și clarificăm documentele fiscale."], ["Pot aplica dacă am declarații întârziate?", "Poți discuta cu brokerul, dar dosarul fiscal poate trebui adus la zi înainte ca banca să poată evalua venitul declarat."]]
      },
      contact: {
        title: "Contact Contabil Român Irlanda | Consultație Gratuită",
        description: "Vorbește în română cu un agent fiscal în Irlanda. Consultație inițială gratuită pentru RCT, Form 11, self-employed, VAT și documente mortgage.",
        eyebrow: "Nu trebuie să explici perfect",
        h1: "Spune simplu: «Am nevoie de ajutor cu taxele.»",
        lead: "Te întrebăm noi ce trebuie. Prima discuție este gratuită și poate avea loc prin telefon sau WhatsApp.",
        directTitle: "Alege cea mai simplă cale",
        whatsappText: "Bună, am nevoie de ajutor cu taxele mele în Irlanda."
      }
    }
  },

  en: {
    code: "en",
    htmlLang: "en-IE",
    label: "English",
    locale: "en_IE",
    nav: { home: "Home", services: "Services", rct: "Construction RCT", return: "Tax return", mortgage: "Mortgage", contact: "Contact" },
    common: {
      topbar: "Construction subcontractor? Your RCT rate can be as high as 35%. Check it before your next payment.", topbarCta: "Check your position", free: "Your first conversation is free", quote: "Request a quote", whatsapp: "Message on WhatsApp", call: "Call now", getHelp: "I need help", chooseLanguage: "Choose language", source: "Verified information", disclaimer: "Every tax position is different. Revenue determines the outcome and RCT rate. We do not guarantee reductions, refunds or mortgage approvals.", credential: "Registered Tax Agent 81569Q · CRO Electronic Filing Agent No. 1361", nationwide: "Support across Ireland by phone and online. Dublin consultations by arrangement.", formTitle: "Leave your number. We will call you.", formLead: "Tell us only what you need help with. No long form.", name: "Your name", phone: "Phone number", need: "What do you need help with?", submit: "Request a call", privacy: "By sending, you agree that we may use your details only to respond to your enquiry.", formDisabled: "The form will work after the Formspree ID is added. For now, call or message us on WhatsApp.", footerText: "Tax and accounting support for Romanian and Moldovan people living and working in Ireland.", noPrices: "The fee depends on your situation. You receive a clear quote before work starts.", faq: "Questions you may find difficult to ask", next: "Do not wait for the next payment or bank application.", nextLead: "A short conversation can clarify what is missing and what you should do next.", selectPlaceholder: "Choose a service", servicesOptions: ["Tax registration", "Construction RCT", "Annual tax return / Form 11", "Mortgage documents", "VAT", "PAYE and tax refund", "Bookkeeping or payroll", "Late returns", "Something else"]
    },
    pages: {
      home: {
        title: "Romanian Accountant Ireland | RCT, Form 11, Mortgage Help", description: "Tax and accounting support in Ireland for Romanian and Moldovan workers. Help with tax registration, RCT, Form 11, VAT and mortgage documents.", eyebrow: "Tax help for Romanian and Moldovan people in Ireland", h1: "Lost between Revenue, ROS and RCT?", h1Accent: "Start here.", lead: "Get a clear explanation in your language without judgement or technical language. We put your registrations, returns and requested documents in order.", heroNote: "Română · English · Русский", riskLabel: "Urgent check", riskTitle: "Up to 35% can be withheld from your payment through RCT.", riskText: "Revenue applies RCT rates of 0%, 20% or 35% based on tax compliance. Check your position before the next payment.", riskCta: "Check my RCT on WhatsApp", painTitle: "Choose the problem that is worrying you", painLead: "You do not need to know the form name. Choose the result you need and we will explain the next step.",
        cards: [{ key: "registration", number: "01", title: "Tax registration", text: "Starting as self-employed or a subcontractor? Get help with Revenue, ROS, Income Tax, RCT and VAT where needed.", cta: "Register for tax" }, { key: "return", number: "02", title: "Annual tax return", text: "We prepare Form 11, income, expenses and RCT credits, then explain the result clearly.", cta: "Prepare my return" }, { key: "mortgage", number: "03", title: "Mortgage documents", text: "Banks may request Form 11, a Notice of Assessment and confirmation of your tax position. Prepare before applying.", cta: "Prepare my file" }],
        familiarLabel: "A very common situation", familiarQuote: "“I work and get paid, but I do not know if my tax is in order.”", familiarText: "Many people contact us in exactly this position. You do not need to understand the Irish tax system. Tell us what work you did, what documents you have and what you need to achieve. We turn the confusion into a clear list of actions.", otherTitle: "More issues we can help you resolve", otherServices: ["RCT for subcontractors", "Late returns", "VAT Returns", "PAYE tax review and refund", "Bookkeeping", "Payroll", "Tax Clearance", "Revenue correspondence", "Company formation"], facts: [{ value: "35%", label: "current maximum RCT rate" }, { value: "5% / 10%", label: "possible surcharge for a late Form 11" }, { value: "2 years", label: "of records may be requested for some self-employed mortgage files" }],
        faq: [["I never registered as self-employed. Is it too late?", "No. We first establish when you started, what income you received and which registrations or returns are missing. Then we prepare a clear plan."], ["My RCT rate is 35%. Can you get me 0%?", "We can check why the rate applies and what compliance issues need attention. Revenue determines the rate, so no rate can be guaranteed."], ["What do I need for a mortgage?", "Requirements vary. Self-employed applicants are commonly asked for Revenue-acknowledged Form 11s, evidence of tax position, accounts and bank statements."], ["Can I speak Romanian?", "Yes. Romanian is the main service language. English and Russian are also available."]]
      },
      services: { title: "Tax and Accounting Services Ireland | Contabil.ie", description: "Tax services for Romanian and Moldovan people in Ireland: self-employed, RCT, Form 11, VAT, PAYE refund, bookkeeping, payroll and mortgage documents.", eyebrow: "All your support in one place", h1: "You do not need ten contacts. You need one clear plan.", lead: "From first registration to annual returns, we prepare, explain and follow through on the agreed work.", items: [["Self-employed registration", "Income Tax, ROS, RCT and VAT based on your activity."], ["Construction RCT", "Registration, transaction checks, deductions and compliance support."], ["Form 11 and annual return", "Income, expenses, RCT credits, calculation and filing."], ["Late returns", "Identify missing years and bring the tax position up to date."], ["VAT Returns", "VAT registration, records, VAT3, RTD and Revenue queries."], ["PAYE and tax refund", "Review tax credits, eligible expenses and PAYE returns."], ["Bookkeeping", "Organise invoices, expenses and records for accurate returns."], ["Payroll", "Employer registration and support with payroll and PAYE filings."], ["Mortgage documents", "Form 11, assessment notices, tax position and broker requests."], ["Tax Clearance", "Application and help resolving compliance issues."], ["Company formation", "CRO incorporation and tax registration, available on request."], ["Revenue letters", "Understand the request and prepare the required response."]]},
      registration: { title: "Register as Self-Employed in Ireland | Romanian Tax Help", description: "Self-employed, sole trader, RCT, VAT and ROS registration in Ireland with clear help for Romanian and Moldovan workers.", eyebrow: "Tax registration in Ireland", h1: "Started working for yourself? Revenue needs to know.", lead: "Do not wait for the first problem. We identify which registrations you need and prepare the correct application.", alert: "Your PPSN does not automatically become a business Tax Reference Number. You must register your self-employed activity with Revenue.", checklist: ["Self-employed Income Tax", "ROS and tax-agent authorisation", "RCT for construction work", "VAT where required or appropriate", "PAYE if you employ staff", "Business start date and activity review"], faq: [["Can I work while registration is processing?", "It depends on the activity and contract. Contact us early to check what must be completed before your next payment."], ["I only have a PPSN. Is that enough?", "Not for self-employed trading. Revenue confirms that a PPSN becomes your business Tax Reference Number after tax registration."], ["Must I register for VAT?", "It depends on your activity and turnover. We check the thresholds and whether voluntary registration may suit you."]]},
      rct: { title: "Construction RCT Ireland | Romanian Subcontractor Tax Help", description: "RCT support in Ireland for Romanian subcontractors. Registration, 0%, 20% and 35% rate checks, Form 11 and Revenue compliance.", eyebrow: "RCT for construction", h1: "35% can be withheld before the payment reaches you.", lead: "RCT rates are 0%, 20% and 35%. Revenue determines the rate from your compliance position. Check before the next payment.", alert: "A 0% rate is not automatic and cannot be promised. We can identify the returns, payments or registrations that need attention.", checklist: ["RCT and ROS registration", "Contract and payment records", "Deduction Authorisations and RCT credits", "Form 11 with RCT credits", "Missing or late returns", "Preparation for the next Revenue rate review"], faq: [["Why is my rate 35%?", "Revenue carries out rolling compliance reviews. Missing returns, outstanding balances or other issues can affect the rate."], ["Is deducted RCT lost?", "Not necessarily. Revenue credits deducted RCT to your tax record and may offset it against liabilities after a return is filed."], ["Can you change my rate to 0% immediately?", "No one can guarantee or set the rate except Revenue. We can correct identified issues and prepare your position for review."]]},
      return: { title: "Form 11 and Annual Tax Return Ireland | Romanian Support", description: "Form 11 and annual tax return preparation for Romanian self-employed people and subcontractors in Ireland, including RCT credits and late returns.", eyebrow: "Form 11 and annual return", h1: "A delayed tax return does not disappear. It can cost more.", lead: "A late return can attract a surcharge of 5% or 10% of the tax due, within Revenue limits.", alert: "The standard deadline for the 2025 tax year is 31 October 2026. Revenue may separately announce an extension for qualifying ROS filing and payment.", checklist: ["Form 11 and self-assessment", "Business and other income", "Documented business expenses", "RCT credits and tax paid", "Prior-year returns", "Notice of Assessment and records"], faq: [["I did not keep every receipt. What can I do?", "We start with available bank statements, invoices, payments and records. We explain what can be supported and what should not be guessed."], ["I missed several years. Can you help?", "Yes. We identify missing years and prepare the returns in a sensible order."], ["Does RCT appear in Form 11?", "RCT credits should be reconciled with Revenue records and reflected in the annual tax position."]]},
      mortgage: { title: "Self-Employed Mortgage Documents Ireland | Form 11 Help", description: "Prepare mortgage documents in Ireland: Revenue Form 11, Notice of Assessment, tax confirmation and self-employed income records.", eyebrow: "Mortgage file for self-employed applicants", h1: "You found the home. Do not let missing tax records delay the file.", lead: "Banks may request Revenue-acknowledged Form 11s, accounts, bank statements and confirmation of tax affairs.", alert: "Incomplete records can delay assessment. We cannot guarantee mortgage approval, but we can prepare the requested tax documents.", checklist: ["Revenue-acknowledged Form 11", "Notice of Assessment", "Evidence of tax position", "Tax Clearance where requested", "Income and expense records", "Work from the bank or broker checklist"], faq: [["How many years of Form 11 do I need?", "It depends on the lender. AIB commonly refers to two years and may request three in some cases. We follow your current checklist."], ["Can you guarantee mortgage approval?", "No. The bank assesses affordability, credit and the property. We prepare and explain the tax documents."], ["Can I apply with late returns?", "Speak with your broker, but your tax record may need to be brought up to date before declared income can be assessed."]]},
      contact: { title: "Contact Romanian Tax Agent Ireland | Free First Call", description: "Speak Romanian with a registered tax agent in Ireland. Free first conversation about RCT, Form 11, self-employed tax, VAT or mortgage documents.", eyebrow: "You do not need to explain it perfectly", h1: "Simply say: “I need help with my tax.”", lead: "We will ask the right questions. Your first conversation is free by phone or WhatsApp.", directTitle: "Choose the easiest way", whatsappText: "Hi, I need help with my tax in Ireland." }
    }
  },

  ru: {
    code: "ru",
    htmlLang: "ru-IE",
    label: "Русский",
    locale: "ru_IE",
    nav: { home: "Главная", services: "Услуги", rct: "RCT в строительстве", return: "Годовая декларация", mortgage: "Ипотека", contact: "Контакты" },
    common: {
      topbar: "Работаете субподрядчиком? Ставка RCT может достигать 35%. Проверьте до следующей выплаты.", topbarCta: "Проверить", free: "Первая консультация бесплатна", quote: "Запросить стоимость", whatsapp: "Написать в WhatsApp", call: "Позвонить", getHelp: "Мне нужна помощь", chooseLanguage: "Выберите язык", source: "Проверенная информация", disclaimer: "Каждая налоговая ситуация индивидуальна. Решение и ставку RCT определяет Revenue. Мы не гарантируем снижение ставки, возврат налога или одобрение ипотеки.", credential: "Зарегистрированный налоговый агент 81569Q · Электронный агент CRO № 1361", nationwide: "Помощь по всей Ирландии по телефону и онлайн. Встречи в Дублине по договорённости.", formTitle: "Оставьте номер. Мы вам перезвоним.", formLead: "Укажите только, с чем нужна помощь. Без длинных форм.", name: "Ваше имя", phone: "Номер телефона", need: "С чем вам помочь?", submit: "Заказать звонок", privacy: "Отправляя форму, вы разрешаете использовать данные только для ответа на ваш запрос.", formDisabled: "Форма заработает после добавления Formspree ID. Пока позвоните или напишите в WhatsApp.", footerText: "Налоговая и бухгалтерская помощь в Ирландии для румынской и молдавской общины.", noPrices: "Стоимость зависит от вашей ситуации. До начала работы вы получите чёткое предложение.", faq: "Вопросы, которые бывает неловко задать", next: "Не ждите следующей выплаты или заявки в банк.", nextLead: "Короткий разговор поможет понять, чего не хватает и что делать дальше.", selectPlaceholder: "Выберите услугу", servicesOptions: ["Налоговая регистрация", "RCT в строительстве", "Form 11 / годовая декларация", "Документы для ипотеки", "VAT", "PAYE и возврат налога", "Бухгалтерия или зарплата", "Просроченные декларации", "Другое"]
    },
    pages: {
      home: {
        title: "Бухгалтер в Ирландии | RCT, Form 11, Ипотека", description: "Налоговая и бухгалтерская помощь в Ирландии для румын и молдаван. Регистрация, RCT, Form 11, VAT и документы для ипотеки.", eyebrow: "Налоговая помощь в Ирландии на знакомом языке", h1: "Запутались в Revenue, ROS и RCT?", h1Accent: "Начните здесь.", lead: "Получите понятное объяснение без осуждения и сложных терминов. Мы поможем привести в порядок регистрации, декларации и нужные документы.", heroNote: "Română · English · Русский", riskLabel: "Срочная проверка", riskTitle: "Через RCT могут удержать до 35% выплаты.", riskText: "Revenue применяет ставки RCT 0%, 20% или 35% в зависимости от налогового соответствия. Проверьте ситуацию до следующей выплаты.", riskCta: "Проверить RCT в WhatsApp", painTitle: "Выберите проблему, которая вас беспокоит", painLead: "Необязательно знать название формы. Выберите нужный результат, и мы объясним следующий шаг.",
        cards: [{ key: "registration", number: "01", title: "Налоговая регистрация", text: "Начинаете работать как self-employed или субподрядчик? Поможем с Revenue, ROS, Income Tax, RCT и VAT.", cta: "Зарегистрироваться" }, { key: "return", number: "02", title: "Годовая декларация", text: "Подготовим Form 11, доходы, расходы и RCT credits, затем понятно объясним результат.", cta: "Подготовить декларацию" }, { key: "mortgage", number: "03", title: "Документы для ипотеки", text: "Банк может запросить Form 11, Notice of Assessment и подтверждение налоговой ситуации.", cta: "Подготовить документы" }],
        familiarLabel: "Очень знакомая ситуация", familiarQuote: "«Я работаю и получаю деньги, но не знаю, всё ли в порядке с налогами.»", familiarText: "Многие обращаются именно с этим. Вам не нужно разбираться в ирландской налоговой системе. Расскажите о работе, документах и цели. Мы превратим путаницу в понятный список действий.", otherTitle: "Другие вопросы, с которыми мы помогаем", otherServices: ["RCT для субподрядчиков", "Просроченные декларации", "VAT Returns", "PAYE tax review и возврат", "Bookkeeping", "Payroll", "Tax Clearance", "Письма Revenue", "Регистрация компании"], facts: [{ value: "35%", label: "текущая максимальная ставка RCT" }, { value: "5% / 10%", label: "возможная надбавка за поздний Form 11" }, { value: "2 года", label: "документов могут запросить по ипотеке у self-employed" }],
        faq: [["Я никогда не регистрировался как self-employed. Уже поздно?", "Нет. Сначала выясним дату начала работы, доходы и недостающие регистрации или декларации. Затем составим план."], ["У меня RCT 35%. Вы получите для меня 0%?", "Мы можем выяснить причину ставки и исправить вопросы соответствия. Ставку определяет Revenue, поэтому гарантировать её нельзя."], ["Какие документы нужны для ипотеки?", "Требования различаются. У self-employed часто запрашивают подтверждённые Revenue формы Form 11, налоговую позицию, отчётность и банковские выписки."], ["Можно говорить по-русски?", "Да. Также доступны румынский и английский языки."]]
      },
      services: { title: "Налоговые и бухгалтерские услуги в Ирландии | Contabil.ie", description: "Налоговые услуги в Ирландии: self-employed, RCT, Form 11, VAT, PAYE refund, bookkeeping, payroll и документы для ипотеки.", eyebrow: "Вся помощь в одном месте", h1: "Вам не нужны десять контактов. Нужен один понятный план.", lead: "От первой регистрации до годовой декларации мы готовим документы, объясняем и сопровождаем согласованную работу.", items: [["Регистрация self-employed", "Income Tax, ROS, RCT и VAT в зависимости от деятельности."], ["RCT в строительстве", "Регистрация, проверка операций, удержаний и соответствия."], ["Form 11 и годовая декларация", "Доходы, расходы, RCT credits, расчёт и подача."], ["Просроченные декларации", "Определяем недостающие годы и приводим ситуацию в порядок."], ["VAT Returns", "Регистрация VAT, учёт, VAT3, RTD и запросы Revenue."], ["PAYE и возврат налога", "Проверка налоговых кредитов, расходов и PAYE деклараций."], ["Bookkeeping", "Организация счетов, расходов и записей."], ["Payroll", "Регистрация работодателя и помощь с зарплатой и PAYE."], ["Документы для ипотеки", "Form 11, оценки, налоговая позиция и запросы брокера."], ["Tax Clearance", "Заявка и решение вопросов соответствия."], ["Регистрация компании", "Регистрация CRO и налогов по запросу."], ["Письма Revenue", "Объясняем запрос и готовим ответ."]]},
      registration: { title: "Регистрация Self-Employed в Ирландии | Налоговая помощь", description: "Регистрация self-employed, sole trader, RCT, VAT и ROS в Ирландии с понятной помощью на русском языке.", eyebrow: "Налоговая регистрация в Ирландии", h1: "Начали работать на себя? Revenue должен об этом знать.", lead: "Не ждите первой проблемы. Мы определим нужные регистрации и подготовим правильную заявку.", alert: "PPSN не становится автоматически налоговым номером для бизнеса. Деятельность self-employed нужно зарегистрировать в Revenue.", checklist: ["Income Tax для self-employed", "ROS и авторизация налогового агента", "RCT для строительных работ", "VAT при необходимости", "PAYE при найме сотрудников", "Проверка даты начала и вида деятельности"], faq: [["Можно работать, пока регистрация обрабатывается?", "Это зависит от деятельности и договора. Свяжитесь заранее, чтобы проверить требования до следующей выплаты."], ["У меня есть только PPSN. Этого достаточно?", "Нет для работы self-employed. Revenue подтверждает, что PPSN становится налоговым номером бизнеса после регистрации."], ["Нужна ли регистрация VAT?", "Это зависит от деятельности и оборота. Мы проверим пороги и целесообразность добровольной регистрации."]]},
      rct: { title: "RCT в Ирландии для Субподрядчиков | 0%, 20%, 35%", description: "Помощь с RCT в Ирландии: регистрация, проверка ставок 0%, 20% и 35%, Form 11 и соответствие Revenue.", eyebrow: "RCT в строительстве", h1: "35% могут удержать до того, как деньги поступят вам.", lead: "Ставки RCT составляют 0%, 20% и 35%. Revenue определяет ставку по вашей налоговой ситуации. Проверьте до следующей выплаты.", alert: "Ставка 0% не автоматическая, и её нельзя обещать. Мы можем определить, какие декларации, платежи или регистрации нужно исправить.", checklist: ["Регистрация RCT и ROS", "Договоры и выплаты", "Deduction Authorisations и RCT credits", "Form 11 с RCT credits", "Недостающие декларации", "Подготовка к проверке ставки Revenue"], faq: [["Почему у меня ставка 35%?", "Revenue регулярно проверяет соответствие. Недостающие декларации, долги и другие вопросы могут повлиять на ставку."], ["Удержанный RCT потерян?", "Не обязательно. Revenue зачисляет удержанный RCT в налоговую запись и может зачесть его после подачи декларации."], ["Вы можете сразу изменить ставку на 0%?", "Нет. Ставку определяет Revenue. Мы можем исправить выявленные проблемы и подготовить ситуацию к пересмотру."]]},
      return: { title: "Form 11 и Годовая Декларация в Ирландии", description: "Подготовка Form 11 и годовой декларации для self-employed и субподрядчиков в Ирландии, включая RCT credits и просроченные годы.", eyebrow: "Form 11 и годовая декларация", h1: "Отложенная декларация не исчезает. Она может обойтись дороже.", lead: "Поздняя подача может привести к надбавке 5% или 10% от налога в пределах Revenue.", alert: "Стандартный срок за 2025 налоговый год: 31 октября 2026 года. Revenue может отдельно объявить продление для подачи и оплаты через ROS.", checklist: ["Form 11 и self-assessment", "Доход от бизнеса и другие доходы", "Подтверждённые расходы", "RCT credits и уплаченный налог", "Декларации прошлых лет", "Notice of Assessment и копии"], faq: [["Я сохранил не все чеки. Что делать?", "Начнём с выписок, счетов и доступных записей. Объясним, что можно подтвердить, а что нельзя придумывать."], ["Я пропустил несколько лет. Вы поможете?", "Да. Определим недостающие годы и подготовим декларации в правильном порядке."], ["RCT указывается в Form 11?", "RCT credits нужно сверить с данными Revenue и учесть в годовой налоговой позиции."]]},
      mortgage: { title: "Документы для Ипотеки Self-Employed в Ирландии | Form 11", description: "Подготовка документов для ипотеки: Revenue Form 11, Notice of Assessment, налоговая позиция и доход self-employed.", eyebrow: "Ипотечные документы для self-employed", h1: "Вы нашли дом. Не позволяйте налоговым документам задержать заявку.", lead: "Банки могут запросить подтверждённые Revenue формы Form 11, отчётность, выписки и подтверждение налоговой ситуации.", alert: "Неполные документы могут задержать оценку. Мы не гарантируем одобрение, но подготовим требуемую налоговую часть.", checklist: ["Revenue-acknowledged Form 11", "Notice of Assessment", "Подтверждение налоговой позиции", "Tax Clearance при запросе", "Учёт доходов и расходов", "Работа по списку банка или брокера"], faq: [["Сколько лет Form 11 нужно?", "Зависит от банка. AIB часто указывает два года и иногда может запросить три. Мы следуем вашему актуальному списку."], ["Вы гарантируете ипотеку?", "Нет. Банк оценивает доступность, кредитную историю и объект. Мы готовим налоговые документы."], ["Можно подать заявку с просроченными декларациями?", "Обсудите с брокером, но налоговую ситуацию может потребоваться привести в порядок до оценки дохода."]]},
      contact: { title: "Налоговый Агент в Ирландии | Бесплатная Первая Консультация", description: "Первая бесплатная консультация по RCT, Form 11, self-employed, VAT и ипотечным документам в Ирландии.", eyebrow: "Не нужно объяснять идеально", h1: "Просто скажите: «Мне нужна помощь с налогами.»", lead: "Мы сами зададим нужные вопросы. Первая консультация бесплатна по телефону или WhatsApp.", directTitle: "Выберите самый простой способ", whatsappText: "Здравствуйте, мне нужна помощь с налогами в Ирландии." }
    }
  }
};
