import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, sources, routes, locale } from "../src/site-data.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const pageOrder = ["home", "services", "registration", "rct", "return", "mortgage", "contact"];
const languageOrder = ["ro", "en", "ru"];

function outputPath(route) {
  return path.join(root, route);
}

function write(route, content) {
  const destination = outputPath(route);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const cleaned = `${content.trimStart().split("\n").map((line) => line.trimEnd()).join("\n").trimEnd()}\n`;
  fs.writeFileSync(destination, cleaned, "utf8");
}

function relativeLink(fromRoute, toRoute) {
  const fromDir = path.dirname(fromRoute);
  const value = path.relative(fromDir, toRoute).split(path.sep).join("/");
  return value || path.basename(toRoute);
}

function absolute(route) {
  return `${site.domain}/${route === "index.html" ? "" : route}`;
}

function whatsapp(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

function jsonLd(lang, pageKey, data, faq = []) {
  const entries = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Contabil.ie",
      url: site.domain,
      telephone: site.phoneHref,
      email: site.email,
      areaServed: { "@type": "Country", name: "Ireland" },
      availableLanguage: ["Romanian", "English", "Russian"],
      description: data.description,
      identifier: [
        { "@type": "PropertyValue", name: "Registered Tax Agent", value: site.taxAgent },
        { "@type": "PropertyValue", name: "CRO Electronic Filing Agent", value: site.croAgent }
      ]
    }
  ];

  if (faq.length) {
    entries.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    });
  }

  return `<script type="application/ld+json">${JSON.stringify(entries)}</script>`;
}

function languageLinks(fromRoute, pageKey, activeLang) {
  return languageOrder.map((lang) => {
    const target = routes[pageKey][lang];
    const active = lang === activeLang ? ' aria-current="true"' : "";
    return `<a href="${relativeLink(fromRoute, target)}" lang="${locale[lang].htmlLang}"${active}>${locale[lang].label}</a>`;
  }).join("");
}

function header(lang, pageKey, fromRoute) {
  const l = locale[lang];
  const c = l.common;
  const navKeys = ["home", "services", "rct", "return", "mortgage"];
  const nav = navKeys.map((key) => {
    const current = key === pageKey ? ' aria-current="page"' : "";
    return `<a href="${relativeLink(fromRoute, routes[key][lang])}"${current}>${l.nav[key]}</a>`;
  }).join("");
  const contact = relativeLink(fromRoute, routes.contact[lang]);

  return `
  <div class="attention-bar">
    <div class="shell attention-inner">
      <span><strong>35%</strong> ${c.topbar}</span>
      <a href="${relativeLink(fromRoute, routes.rct[lang])}">${c.topbarCta} <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="${relativeLink(fromRoute, routes.home[lang])}" aria-label="Contabil.ie">
        <span class="brand-mark"><i></i><i></i><i></i></span>
        <span>contabil<em>.ie</em></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary">${nav}</nav>
      <div class="header-actions">
        <div class="language-switcher" role="group" aria-label="${c.chooseLanguage}">${languageLinks(fromRoute, pageKey, lang)}</div>
        <a class="button button-small" href="${contact}">${c.getHelp}</a>
        <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>
      </div>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">${nav}<a href="${contact}">${l.nav.contact}</a></nav>
    <nav class="mobile-language-ribbon" aria-label="${c.chooseLanguage}">${languageLinks(fromRoute, pageKey, lang)}</nav>
  </header>`;
}

function footer(lang, fromRoute) {
  const l = locale[lang];
  const c = l.common;
  return `
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div>
        <a class="brand brand-light" href="${relativeLink(fromRoute, routes.home[lang])}"><span class="brand-mark"><i></i><i></i><i></i></span><span>contabil<em>.ie</em></span></a>
        <p>${c.footerText}</p>
        <p class="credential">${c.credential}</p>
      </div>
      <div><h2>${l.nav.services}</h2><a href="${relativeLink(fromRoute, routes.registration[lang])}">${l.pages.registration.eyebrow}</a><a href="${relativeLink(fromRoute, routes.rct[lang])}">${l.pages.rct.eyebrow}</a><a href="${relativeLink(fromRoute, routes.return[lang])}">${l.pages.return.eyebrow}</a><a href="${relativeLink(fromRoute, routes.mortgage[lang])}">${l.pages.mortgage.eyebrow}</a></div>
      <div><h2>${l.nav.contact}</h2><a href="tel:${site.phoneHref}">${site.phoneDisplay}</a><a href="mailto:${site.email}">${site.email}</a><a href="${whatsapp(l.pages.contact.whatsappText)}" target="_blank" rel="noopener">WhatsApp</a></div>
    </div>
    <div class="shell footer-bottom"><span>© <span data-year></span> Contabil.ie</span><a href="${relativeLink(fromRoute, routes.privacy[lang])}">Privacy</a><span>${c.disclaimer}</span></div>
  </footer>
  <nav class="mobile-contact" aria-label="Quick contact"><a class="button button-ghost" href="tel:${site.phoneHref}">${c.call}</a><a class="button" href="${whatsapp(l.pages.contact.whatsappText)}" target="_blank" rel="noopener">WhatsApp</a></nav>`;
}

function primaryCards(lang, fromRoute, cards) {
  return cards.map((card) => `
    <a class="outcome-card" href="${relativeLink(fromRoute, routes[card.key][lang])}">
      <span class="outcome-number">${card.number}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
      <span class="text-link">${card.cta} <span aria-hidden="true">↗</span></span>
    </a>`).join("");
}

function faqBlock(common, faq) {
  if (!faq?.length) return "";
  return `<section class="section faq-section"><div class="shell narrow"><p class="section-label">FAQ</p><h2>${common.faq}</h2><div class="faq-list">${faq.map(([q, a], index) => `<details${index === 0 ? " open" : ""}><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("")}</div></div></section>`;
}

function contactForm(lang, fromRoute, compact = false) {
  const l = locale[lang];
  const c = l.common;
  const options = c.servicesOptions.map((option) => `<option>${option}</option>`).join("");
  return `<div class="lead-form${compact ? " lead-form-compact" : ""}">
    <p class="section-label">${c.free}</p><h2>${c.formTitle}</h2><p>${c.formLead}</p>
    <form action="https://formspree.io/f/${site.formspreeId}" method="post" data-contact-form>
      <input type="hidden" name="language" value="${l.label}">
      <input type="hidden" name="_subject" value="New Contabil.ie enquiry">
      <div class="form-grid"><label>${c.name}<input type="text" name="name" autocomplete="name" required></label><label>${c.phone}<input type="tel" name="phone" autocomplete="tel" required></label></div>
      <label>${c.need}<select name="service" required><option value="">${c.selectPlaceholder}</option>${options}</select></label>
      <button class="button" type="submit">${c.submit} <span aria-hidden="true">↗</span></button>
      <small>${c.privacy} <a href="${relativeLink(fromRoute, routes.privacy[lang])}">Privacy</a></small>
      <p class="form-status" data-form-status tabindex="-1">${c.formDisabled}</p>
    </form>
  </div>`;
}

function homeBody(lang, fromRoute) {
  const l = locale[lang];
  const p = l.pages.home;
  const c = l.common;
  const quickMessage = lang === "ro" ? "Bună, vreau să verific situația mea RCT înainte de următoarea plată." : lang === "ru" ? "Здравствуйте, я хочу проверить мою ситуацию RCT до следующей выплаты." : "Hi, I want to check my RCT position before my next payment.";

  return `
  <main id="main">
    <section class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${p.eyebrow}</p>
          <h1>${p.h1} <em>${p.h1Accent}</em></h1>
          <p class="hero-lead">${p.lead}</p>
          <div class="hero-actions"><a class="button" href="${whatsapp(l.pages.contact.whatsappText)}" target="_blank" rel="noopener">${c.whatsapp} <span aria-hidden="true">↗</span></a><a class="button button-outline" href="tel:${site.phoneHref}">${c.call}</a></div>
          <div class="hero-proof"><span>${c.free}</span><span>${c.nationwide}</span><span>${p.heroNote}</span></div>
        </div>
        <aside class="risk-card">
          <div class="risk-top"><span>${p.riskLabel}</span><strong>RCT</strong></div>
          <div class="risk-value">35<span>%</span></div>
          <h2>${p.riskTitle}</h2><p>${p.riskText}</p>
          <a class="button button-light" href="${whatsapp(quickMessage)}" target="_blank" rel="noopener">${p.riskCta}</a>
          <a class="source-link" href="${sources.rct}" target="_blank" rel="noopener">${c.source}: Revenue.ie ↗</a>
        </aside>
      </div>
      <div class="hero-ledger" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
    </section>

    <section class="section outcomes-section"><div class="shell"><div class="section-heading"><p class="section-label">01 · ${l.nav.services}</p><h2>${p.painTitle}</h2><p>${p.painLead}</p></div><div class="outcome-grid">${primaryCards(lang, fromRoute, p.cards)}</div></div></section>

    <section class="section familiar-section"><div class="shell familiar-grid"><div class="familiar-quote"><p class="section-label">${p.familiarLabel}</p><blockquote>${p.familiarQuote}</blockquote></div><div class="familiar-copy"><p>${p.familiarText}</p><a class="text-link" href="${relativeLink(fromRoute, routes.contact[lang])}">${c.free} <span aria-hidden="true">↗</span></a></div></div></section>

    <section class="facts-section"><div class="shell facts-grid">${p.facts.map((fact) => `<div><strong>${fact.value}</strong><span>${fact.label}</span></div>`).join("")}</div><div class="shell fact-sources"><a href="${sources.rct}" target="_blank" rel="noopener">Revenue RCT</a><a href="${sources.lateReturn}" target="_blank" rel="noopener">Revenue late filing</a><a href="${sources.mortgageAib}" target="_blank" rel="noopener">AIB mortgage documents</a></div></section>

    <section class="section services-cloud"><div class="shell"><div class="section-heading"><p class="section-label">02 · ${l.nav.services}</p><h2>${p.otherTitle}</h2></div><div class="pill-cloud">${p.otherServices.map((item) => `<span>${item}</span>`).join("")}</div><div class="center-action"><a class="button button-outline" href="${relativeLink(fromRoute, routes.services[lang])}">${l.nav.services} <span aria-hidden="true">↗</span></a></div></div></section>

    <section class="section form-section"><div class="shell form-layout"><div><p class="section-label">03 · ${c.free}</p><h2>${c.next}</h2><p>${c.nextLead}</p><div class="direct-links"><a href="tel:${site.phoneHref}"><strong>${site.phoneDisplay}</strong><span>${c.call}</span></a><a href="mailto:${site.email}"><strong>${site.email}</strong><span>Email</span></a></div></div>${contactForm(lang, fromRoute, true)}</div></section>
    ${faqBlock(c, p.faq)}
  </main>`;
}

function servicesBody(lang, fromRoute) {
  const l = locale[lang];
  const p = l.pages.services;
  const c = l.common;
  const keyOrder = ["registration", "rct", "return", "mortgage"];
  return `<main id="main">
    <section class="page-hero"><div class="shell"><p class="eyebrow">${p.eyebrow}</p><h1>${p.h1}</h1><p>${p.lead}</p><a class="button" href="${relativeLink(fromRoute, routes.contact[lang])}">${c.quote} <span aria-hidden="true">↗</span></a></div></section>
    <section class="section"><div class="shell service-list">${p.items.map(([title, text], index) => `<article id="${index === 10 ? "company-formation" : `service-${index + 1}`}" class="service-row"><span>${String(index + 1).padStart(2, "0")}</span><h2>${title}</h2><p>${text}</p><a href="${index < 4 ? relativeLink(fromRoute, routes[keyOrder[index]][lang]) : relativeLink(fromRoute, routes.contact[lang])}" aria-label="${title}">↗</a></article>`).join("")}</div></section>
    <section class="section quote-strip"><div class="shell"><h2>${c.noPrices}</h2><a class="button button-light" href="${relativeLink(fromRoute, routes.contact[lang])}">${c.quote}</a></div></section>
  </main>`;
}

function detailSource(pageKey, c) {
  if (pageKey === "registration") return `<a href="${sources.taxRegistration}" target="_blank" rel="noopener">${c.source}: Revenue tax registration ↗</a>`;
  if (pageKey === "rct") return `<a href="${sources.rct}" target="_blank" rel="noopener">${c.source}: Revenue RCT ↗</a>`;
  if (pageKey === "return") return `<a href="${sources.lateReturn}" target="_blank" rel="noopener">${c.source}: Revenue late filing ↗</a>`;
  return `<a href="${sources.mortgageAib}" target="_blank" rel="noopener">${c.source}: AIB ↗</a><a href="${sources.mortgageBoi}" target="_blank" rel="noopener">Bank of Ireland ↗</a>`;
}

function detailBody(lang, pageKey, fromRoute) {
  const l = locale[lang];
  const p = l.pages[pageKey];
  const c = l.common;
  const message = lang === "ro" ? `Bună, am nevoie de ajutor cu: ${p.eyebrow}.` : lang === "ru" ? `Здравствуйте, мне нужна помощь: ${p.eyebrow}.` : `Hi, I need help with: ${p.eyebrow}.`;
  return `<main id="main">
    <section class="page-hero detail-hero"><div class="shell detail-hero-grid"><div><p class="eyebrow">${p.eyebrow}</p><h1>${p.h1}</h1><p>${p.lead}</p><div class="hero-actions"><a class="button" href="${whatsapp(message)}" target="_blank" rel="noopener">${c.whatsapp} <span aria-hidden="true">↗</span></a><a class="button button-outline" href="tel:${site.phoneHref}">${c.call}</a></div></div><aside class="alert-card"><span>!</span><p>${p.alert}</p><div class="source-row">${detailSource(pageKey, c)}</div></aside></div></section>
    <section class="section"><div class="shell detail-grid"><div><p class="section-label">${l.nav.services}</p><h2>${lang === "ro" ? "Ce putem pregăti pentru tine" : lang === "ru" ? "Что мы можем подготовить" : "What we can prepare for you"}</h2></div><ul class="check-grid">${p.checklist.map((item) => `<li><span>✓</span>${item}</li>`).join("")}</ul></div></section>
    <section class="section form-section"><div class="shell form-layout"><div><p class="section-label">${c.free}</p><h2>${c.next}</h2><p>${c.nextLead}</p><div class="direct-links"><a href="tel:${site.phoneHref}"><strong>${site.phoneDisplay}</strong><span>${c.call}</span></a><a href="${whatsapp(message)}" target="_blank" rel="noopener"><strong>WhatsApp</strong><span>${c.whatsapp}</span></a></div></div>${contactForm(lang, fromRoute, true)}</div></section>
    ${faqBlock(c, p.faq)}
  </main>`;
}

function contactBody(lang, fromRoute) {
  const l = locale[lang];
  const p = l.pages.contact;
  const c = l.common;
  return `<main id="main">
    <section class="page-hero contact-hero"><div class="shell"><p class="eyebrow">${p.eyebrow}</p><h1>${p.h1}</h1><p>${p.lead}</p></div></section>
    <section class="section"><div class="shell contact-layout"><div class="contact-direct"><p class="section-label">${p.directTitle}</p><a href="tel:${site.phoneHref}"><span>01</span><strong>${site.phoneDisplay}</strong><small>${c.call}</small></a><a href="${whatsapp(p.whatsappText)}" target="_blank" rel="noopener"><span>02</span><strong>WhatsApp</strong><small>${c.whatsapp}</small></a><a href="mailto:${site.email}"><span>03</span><strong>${site.email}</strong><small>Email</small></a><p>${c.nationwide}</p><p class="credential-dark">${c.credential}</p></div>${contactForm(lang, fromRoute)}</div></section>
  </main>`;
}

function privacyBody(lang) {
  const c = locale[lang].common;
  const copy = lang === "ro" ? {
    title: "Confidențialitate", lead: "Cum folosim informațiile trimise prin acest website.", sections: [["Ce colectăm", "Numele, numărul de telefon, serviciul selectat și informațiile pe care alegi să ni le trimiți."], ["Cum folosim datele", "Folosim datele pentru a răspunde, a evalua solicitarea și a pregăti o ofertă. Nu vindem datele tale."], ["Ce să nu trimiți", "Nu trimite PPSN, parole, date bancare sau documente fiscale sensibile prin formularul public."], ["Furnizori", "Formularul este pregătit pentru Formspree. WhatsApp, emailul și operatorul telefonic pot prelucra date conform propriilor politici."], ["Drepturile tale", `Poți cere acces, corectare sau ștergere la ${site.email}.`]]
  } : lang === "ru" ? {
    title: "Конфиденциальность", lead: "Как используются данные, отправленные через сайт.", sections: [["Что мы собираем", "Имя, телефон, выбранную услугу и информацию, которую вы решили отправить."], ["Как используются данные", "Для ответа, оценки запроса и предложения стоимости. Мы не продаём ваши данные."], ["Что не отправлять", "Не отправляйте PPSN, пароли, банковские данные или конфиденциальные налоговые документы через публичную форму."], ["Провайдеры", "Форма подготовлена для Formspree. WhatsApp, email и оператор связи применяют собственные правила."], ["Ваши права", `Запросить доступ, исправление или удаление можно по адресу ${site.email}.`]]
  } : {
    title: "Privacy", lead: "How we use information sent through this website.", sections: [["What we collect", "Your name, phone number, selected service and information you choose to send."], ["How we use it", "To respond, assess your enquiry and provide a quote. We do not sell your information."], ["What not to send", "Do not send a PPSN, passwords, bank details or sensitive tax documents through the public form."], ["Providers", "The form is prepared for Formspree. WhatsApp, email and phone providers process data under their own terms."], ["Your rights", `You can request access, correction or deletion at ${site.email}.`]]
  };
  return `<main id="main"><section class="page-hero"><div class="shell"><p class="eyebrow">Privacy</p><h1>${copy.title}</h1><p>${copy.lead}</p></div></section><section class="section"><div class="shell narrow legal-copy">${copy.sections.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join("")}<p>${c.disclaimer}</p></div></section></main>`;
}

function documentHtml(lang, pageKey, fromRoute, body, data, faq = []) {
  const l = locale[lang];
  const canonical = absolute(routes[pageKey][lang]);
  const alternates = languageOrder.map((code) => `<link rel="alternate" hreflang="${code}" href="${absolute(routes[pageKey][code])}">`).join("\n  ");
  return `<!DOCTYPE html>
<html lang="${l.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${data.title}</title>
  <meta name="description" content="${data.description}">
  <link rel="canonical" href="${canonical}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${absolute(routes[pageKey].ro)}">
  <link rel="icon" href="${relativeLink(fromRoute, "assets/favicon.svg")}" type="image/svg+xml">
  <link rel="stylesheet" href="${relativeLink(fromRoute, "assets/css/styles.css")}">
  <meta name="theme-color" content="#2a211e">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${l.locale}">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Contabil.ie">
  <meta property="og:image" content="${site.domain}/assets/og-${lang}.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${site.domain}/assets/og-${lang}.png">
  ${jsonLd(lang, pageKey, data, faq)}
</head>
<body data-language="${lang}" data-page="${pageKey}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(lang, pageKey, fromRoute)}
  ${body}
  ${footer(lang, fromRoute)}
  <script src="${relativeLink(fromRoute, "assets/js/main.js")}" defer></script>
</body>
</html>`;
}

function buildPage(lang, pageKey) {
  const route = routes[pageKey][lang];
  const p = locale[lang].pages[pageKey];
  let body;
  if (pageKey === "home") body = homeBody(lang, route);
  else if (pageKey === "services") body = servicesBody(lang, route);
  else if (pageKey === "contact") body = contactBody(lang, route);
  else body = detailBody(lang, pageKey, route);
  write(route, documentHtml(lang, pageKey, route, body, p, p.faq || []));
}

function buildPrivacy(lang) {
  const route = routes.privacy[lang];
  const title = lang === "ro" ? "Confidențialitate | Contabil.ie" : lang === "ru" ? "Конфиденциальность | Contabil.ie" : "Privacy | Contabil.ie";
  const description = lang === "ro" ? "Informații despre folosirea datelor pe Contabil.ie." : lang === "ru" ? "Информация об использовании данных на Contabil.ie." : "Information about data use on Contabil.ie.";
  write(route, documentHtml(lang, "privacy", route, privacyBody(lang), { title, description }));
}

function redirect(target, lang = "ro") {
  return `<!DOCTYPE html><html lang="${locale[lang].htmlLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${site.domain}/${target}"><title>Contabil.ie</title></head><body><p><a href="${target}">Contabil.ie</a></p></body></html>`;
}

for (const lang of languageOrder) {
  for (const pageKey of pageOrder) buildPage(lang, pageKey);
  buildPrivacy(lang);
}

write("construction.html", redirect("rct-constructii.html"));
write("individuals.html", redirect("servicii.html"));
write("company-formation.html", redirect("servicii.html#company-formation"));
write("services.html", redirect("servicii.html"));

write("thank-you.html", `<!DOCTYPE html><html lang="ro-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="stylesheet" href="assets/css/styles.css"><title>Mulțumim | Contabil.ie</title></head><body><main class="status-page"><div><a class="brand brand-centered" href="index.html"><span class="brand-mark"><i></i><i></i><i></i></span><span>contabil<em>.ie</em></span></a><p class="eyebrow">Mesaj primit</p><h1>Mulțumim.</h1><p>Te vom contacta folosind numărul trimis.</p><a class="button" href="index.html">Înapoi acasă</a></div></main></body></html>`);
write("404.html", `<!DOCTYPE html><html lang="ro-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="stylesheet" href="assets/css/styles.css"><title>Pagina nu există | Contabil.ie</title></head><body><main class="status-page"><div><a class="brand brand-centered" href="index.html"><span class="brand-mark"><i></i><i></i><i></i></span><span>contabil<em>.ie</em></span></a><p class="eyebrow">404</p><h1>Pagina nu există.</h1><a class="button" href="index.html">Înapoi acasă</a></div></main></body></html>`);

const publicRoutes = pageOrder.flatMap((key) => languageOrder.map((lang) => routes[key][lang]));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${publicRoutes.map((route) => `  <url><loc>${absolute(route)}</loc></url>`).join("\n")}\n</urlset>\n`;
write("sitemap.xml", sitemap);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);

console.log(`Built ${publicRoutes.length + 3} public pages in Romanian, English and Russian.`);
