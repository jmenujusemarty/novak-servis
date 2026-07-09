(function () {
  const STORAGE_KEY = "autoservisJanovCmsContent";
  const CONTENT_URL = "cms-content.json";

  const defaults = {
    meta: {
      title: "Autoservis Janov | Servis v Janově u Nového Boru",
    },
    assets: {
      logoSrc: "assets/logo-autoservis-janov.svg",
      logoAlt: "Autoservis Janov",
      heroImageSrc: "assets/exterior.png",
      heroImageAlt: "Exteriér autoservisu",
      processImageSrc: "assets/workshop.png",
      processImageAlt: "Interiér autoservisu",
      footerLogoSrc: "assets/logo-autoservis-janov.svg",
      footerLogoAlt: "Autoservis Janov",
    },
    nav: {
      ariaLabel: "Hlavní navigace",
      brandAriaLabel: "Autoservis Janov",
      menuAriaLabel: "Menu",
      mobileToggleAriaLabel: "Otevřít navigaci",
      mobileCall: "Zavolat",
      links: [
        { label: "Služby", href: "#sluzby" },
        { label: "Specializace", href: "#specializace" },
        { label: "Ceník", href: "#cenik" },
        { label: "Recenze", href: "#recenze" },
        { label: "Kontakt", href: "#kontakt" },
      ],
      phoneButton: "777 832 015",
      primaryCta: "Domluvit termín",
      primaryCtaHref: "#kontakt",
    },
    contactDetails: {
      phone: "777 832 015",
      phoneHref: "+420777832015",
      email: "info@autoservisjanov.cz",
      address: "Janov 166, 473 01 Nový Bor",
      addressLine1: "Janov 166",
      addressLine2: "473 01 Nový Bor",
      hours: "Po-Pá 8:00-17:00",
      hoursDays: "Pondělí-pátek",
      hoursTime: "8:00-17:00",
      noteLabel: "Po domluvě",
      note: "Odtah a náhradní vůz",
      towing: "Odtah po domluvě",
      replacementCar: "Náhradní vůz po domluvě",
    },
    hero: {
      heading: "Autoservis v Janově u Nového Boru",
      lead: "Domluvíme termín, zkontrolujeme vůz a navrhneme další postup. Běžný servis, pneuservis i diagnostika na jednom místě.",
      primaryCta: "Domluvit termín",
      primaryCtaHref: "#kontakt",
      secondaryCta: "Zavolat 777 832 015",
      locationTitle: "Janov 166, 473 01 Nový Bor",
      locationText: "Servis pro Nový Bor a okolí.",
      hoursTitle: "Po-Pá 8:00-17:00",
      hoursText: "Odtah a náhradní vůz po domluvě.",
      imageCaptionTitle: "Autoservis Janov",
      imageCaptionText: "Janov 166, Nový Bor. Termín domluvíme telefonicky nebo přes formulář.",
    },
    services: {
      overviewAriaLabel: "Rychlý přehled služeb",
      heading: "Služby",
      lead: "Přehled nejčastějších prací. Rozsah a termín upřesníme podle konkrétního vozu.",
      chips: [
        { label: "Autoservis", href: "#sluzby" },
        { label: "Pneuservis", href: "#sluzby" },
        { label: "Diagnostika", href: "#sluzby" },
        { label: "Klimatizace", href: "#sluzby" },
        { label: "Brzdy", href: "#sluzby" },
        { label: "Oleje", href: "#sluzby" },
        { label: "STK", href: "#sluzby" },
        { label: "Geometrie", href: "#sluzby" },
        { label: "Odtah po domluvě", href: "#kontakt" },
        { label: "Náhradní vůz", href: "#kontakt" },
      ],
      extraPrefix: "+ další:",
      cards: [
        {
          title: "Autoservis a údržba",
          count: "8 úkonů",
          text: "Pravidelné servisní práce a běžné opravy.",
          tags: ["Výměna oleje", "Brzdy", "Podvozek", "Filtry"],
          extra: "pravidelný servis, baterie, rozvody a běžné opravy.",
        },
        {
          title: "Pneuservis",
          count: "5 úkonů",
          text: "Sezónní práce kolem kol a pneumatik.",
          tags: ["Přezutí kol", "Vyvážení kol", "Kontrola pneu"],
          extra: "oprava defektu a TPMS kontrola.",
        },
        {
          title: "Diagnostika",
          count: "7 úkonů",
          text: "Elektronika, závady a kontrola před dalším postupem.",
          tags: ["Diagnostika závad", "Řídicí jednotky", "Elektronika vozu", "Kontrola před koupí"],
          extra: "mazání chyb, VW diagnostika a Opel diagnostika.",
        },
        {
          title: "Klimatizace, STK a další",
          count: "10 úkonů",
          text: "Komfort, kontrola vozu a zajištění mobility po domluvě.",
          tags: ["Servis klimatizace", "STK", "Geometrie", "Odtah"],
          extra: "plnění a dezinfekce klimatizace, emise a náhradní vůz.",
        },
      ],
    },
    specialization: {
      heading: "Naše specializace",
      lead: "Dlouhodobě pracujeme hlavně s těmito značkami a jejich servisními postupy.",
      tags: [
        { label: "VW", tone: "default" },
        { label: "Škoda", tone: "default" },
        { label: "Seat", tone: "default" },
        { label: "Audi", tone: "default" },
        { label: "Opel", tone: "default" },
        { label: "Digitální servisní knížka VW Group", tone: "red" },
        { label: "Oleje Castrol", tone: "default" },
      ],
    },
    process: {
      heading: "Postup práce",
      lead: "Nejdřív ověříme stav vozu, potom domluvíme rozsah, termín a orientační cenu.",
      tags: ["Diagnostika", "Domluva postupu", "Orientační nacenění", "Servisní záznam"],
    },
    prices: {
      heading: "Orientační ceník",
      lead: "Ceny doplníme později. U ostatních prací cenu upřesníme podle typu vozu, rozsahu práce a použitých dílů.",
      cta: "Zeptat se na cenu",
      ctaHref: "#kontakt",
      items: [
        {
          title: "Diagnostika",
          text: "Elektronická diagnostika, čtení závad a návrh dalšího postupu.",
          status: "Cena později",
        },
        { title: "Přezutí kol", text: "Přezutí, kontrola pneumatik a vyvážení.", status: "Cena později" },
        {
          title: "Výměna oleje",
          text: "Olej Castrol nebo jiný vhodný olej podle specifikace vozu, filtr a servisní reset.",
          status: "Cena později",
        },
        {
          title: "Ostatní práce",
          text: "Brzdy, podvozek, klimatizace, geometrie, STK, odtah a náhradní vůz podle domluvy.",
          status: "Po domluvě",
        },
      ],
    },
    reviews: {
      heading: "Recenze zákazníků z Google",
      lead: "Z veřejně dostupných recenzí vychází hodnocení 4,6 / 5 ze 45 GoogleMap hodnocení.",
      stars: "★★★★★",
      starsAriaLabel: "Pět hvězdiček",
      summary: "4,6 / 45 hodnocení",
      cta: "Zobrazit hodnocení",
      ctaHref: "https://www.zlatafirma.cz/company/novak-castrol-autoservis-1004637",
      source: "Hodnocení je převzaté z veřejně dostupného profilu.",
      items: [
        { quote: "Příjemné jednání", text: "Jan J. zmiňuje odborný přístup při řešení problému.", meta: "Jan J. · GoogleMap" },
        { quote: "Odborník na svém místě.", text: "Lukáš M. oceňuje ochotu, jednání a užitečné rady.", meta: "Lukáš M. · GoogleMap" },
        { quote: "Velmi ochotný, milý.", text: "Kirsten M. zmiňuje ochotu a příjemný přístup.", meta: "Kirsten M. · GoogleMap" },
      ],
    },
    contact: {
      heading: "Domluva termínu",
      lead: "Termíny řešíme nejraději telefonicky nebo osobně přímo v servisu. Je to nejrychlejší způsob, jak upřesnit vůz, rozsah práce a vhodný čas.",
      preferenceHeading: "Preferujeme telefon nebo osobní domluvu",
      preferenceText: "Krátký hovor většinou stačí k domluvě termínu a prvního postupu. Pokud jste poblíž, můžete se zastavit v otevírací době.",
      phoneCta: "Zavolat 777 832 015",
      addressCta: "Ukázat adresu",
      addressHref: "https://maps.google.com/?q=Janov%20166%2C%20473%2001%20Nov%C3%BD%20Bor",
      formToggle: "Otevřít kontaktní formulář",
      items: [
        { label: "Telefon", type: "phone", value: "777 832 015" },
        { label: "E-mail", type: "email", value: "info@autoservisjanov.cz" },
        { label: "Adresa", type: "text", value: "Janov 166, 473 01 Nový Bor" },
        { label: "Otevírací doba", type: "text", value: "Po-Pá 8:00-17:00" },
        { label: "Po domluvě", type: "text", value: "Odtah a náhradní vůz" },
      ],
      form: {
        sections: [
          {
            legend: "Kontakt",
            fields: [
              { name: "name", label: "Jméno a příjmení", required: true, placeholder: "Jan Novák", help: "" },
              { name: "phone", label: "Telefon", required: true, placeholder: "777 000 000", help: "" },
              { name: "email", label: "E-mail", required: false, placeholder: "vas@email.cz", help: "" },
            ],
          },
          {
            legend: "Termín a vůz",
            fields: [
              { name: "car", label: "Značka a model auta", required: true, placeholder: "Škoda Octavia", help: "" },
              { name: "vin", label: "VIN", required: false, placeholder: "Nepovinné", help: "Pomůže s ověřením dílů." },
              { name: "date", label: "Preferovaný den", required: true, placeholder: "", help: "" },
              { name: "time", label: "Čas", required: false, placeholder: "", help: "", options: ["Kdykoliv", "Ráno", "Dopoledne", "Odpoledne"] },
            ],
          },
          {
            legend: "Požadavek",
            fields: [
              {
                name: "service",
                label: "Typ služby",
                required: true,
                placeholder: "Vyberte typ služby",
                help: "",
                options: ["Diagnostika", "Pneuservis", "Výměna oleje", "Brzdy", "Klimatizace", "STK / geometrie", "Jiný požadavek"],
              },
              { name: "message", label: "Popis závady nebo požadavku", required: false, placeholder: "Stručně popište požadavek.", help: "" },
            ],
          },
        ],
        requiredMark: "*",
        submit: "Odeslat dotaz",
        success: "Děkujeme. Ozveme se telefonicky nebo e-mailem.",
      },
    },
    people: {
      heading: "Lidé v servisu",
      lead: "Zakázky a technickou domluvu řeší Martin Novák a Luděk Loos.",
      note: "Fotografie lidí lze doplnit po focení v servisu.",
      items: [
        {
          name: "Martin Novák",
          role: "příjem zakázek a termíny",
          text: "Příjem zakázek, domluva termínu a orientační nacenění.",
          imageSrc: "assets/workshop.png",
          imageAlt: "Záběr dílny pro kartu Martina Nováka",
        },
        {
          name: "Luděk Loos",
          role: "technická domluva",
          text: "Technická domluva, servisní postup a komunikace během opravy.",
          imageSrc: "assets/exterior.png",
          imageAlt: "Záběr autoservisu pro kartu Luďka Loose",
        },
      ],
    },
    footer: {
      heading: "Autoservis Janov",
      text: "Autoservis v Janově u Nového Boru se zkušeností s vozy VW Group a Opel.",
      columns: [
        {
          heading: "Kontakt",
          items: [
            { label: "Janov 166", href: "" },
            { label: "473 01 Nový Bor", href: "" },
            { label: "777 832 015", href: "tel:+420777832015" },
            { label: "info@autoservisjanov.cz", href: "mailto:info@autoservisjanov.cz" },
          ],
        },
        {
          heading: "Otevírací doba",
          items: [
            { label: "Pondělí-pátek", href: "" },
            { label: "8:00-17:00", href: "" },
            { label: "Odtah po domluvě", href: "" },
            { label: "Náhradní vůz po domluvě", href: "" },
          ],
        },
        {
          heading: "Servis",
          items: [
            { label: "Martin Novák", href: "" },
            { label: "Luděk Loos", href: "" },
            { label: "VW, Škoda, Seat, Audi, Opel", href: "" },
            { label: "Autoservis, pneuservis, diagnostika, STK, geometrie", href: "" },
          ],
        },
      ],
      bottomLeft: "Autoservis Janov, Janov 166, 473 01 Nový Bor",
      bottomRight: "Termín domluvíme telefonicky nebo přes formulář.",
    },
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));

  const deepMerge = (base, next) => {
    if (Array.isArray(base)) return Array.isArray(next) ? next : clone(base);
    if (!base || typeof base !== "object") return next ?? base;
    const output = clone(base);
    if (!next || typeof next !== "object") return output;
    Object.keys(next).forEach((key) => {
      output[key] = deepMerge(base[key], next[key]);
    });
    return output;
  };

  const getLocal = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    } catch (error) {
      console.warn("Lokální CMS data nejdou načíst.", error);
      return null;
    }
  };

  const load = () => deepMerge(defaults, getLocal() || {});

  const loadPublished = async () => {
    if (window.location.protocol === "file:") {
      return clone(defaults);
    }
    try {
      const response = await fetch(CONTENT_URL, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return deepMerge(defaults, await response.json());
    } catch (error) {
      console.warn("Publikovaný CMS obsah nejde načíst, používám výchozí obsah.", error);
      return clone(defaults);
    }
  };

  const loadForWebsite = async () => {
    const preview = getLocal();
    if (preview) return deepMerge(defaults, preview);
    return loadPublished();
  };

  const save = (content) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deepMerge(defaults, content)));
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  const setText = (selector, value, root = document) => {
    const element = root.querySelector(selector);
    if (element && value !== undefined) element.textContent = value;
  };

  const setAttr = (selector, attr, value, root = document) => {
    const element = root.querySelector(selector);
    if (element && value !== undefined) element.setAttribute(attr, value);
  };

  const phoneHref = (phone) => `tel:${String(phone).replace(/[^\d+]/g, "")}`;
  const mailHref = (email) => `mailto:${email}`;

  const textOrStrongListItem = (item) => {
    const li = document.createElement("li");
    const content = item.strong ? document.createElement("strong") : document.createTextNode(item.label);
    if (item.strong) content.textContent = item.label;
    if (item.href) {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      li.append(link);
    } else {
      li.append(content);
    }
    return li;
  };

  const renderFooterList = (container, items) => {
    if (!container) return;
    container.replaceChildren(...items.map(textOrStrongListItem));
  };

  const renderLinkedChips = (container, chips) => {
    if (!container) return;
    container.replaceChildren(
      ...chips.map((item) => {
        const chip = document.createElement("a");
        chip.className = "chip";
        chip.href = item.href || "#sluzby";
        chip.textContent = item.label || item;
        return chip;
      }),
    );
  };

  const renderInlineChips = (container, chips) => {
    if (!container) return;
    container.replaceChildren(
      ...chips.map((item) => {
        const chip = document.createElement("span");
        chip.className = item.tone === "red" ? "chip red" : "chip";
        chip.textContent = item.label || item;
        return chip;
      }),
    );
  };

  const renderNav = (content) => {
    setAttr(".nav", "aria-label", content.nav.ariaLabel);
    setAttr(".brand-link", "aria-label", content.nav.brandAriaLabel);
    setAttr(".brand-logo", "src", content.assets.logoSrc);
    setAttr(".brand-logo", "alt", content.assets.logoAlt);
    setAttr(".nav-toggle", "aria-label", content.nav.mobileToggleAriaLabel);
    setAttr(".nav-menu-button", "aria-label", content.nav.menuAriaLabel);
    setText(".mobile-call", content.nav.mobileCall);
    setText(".nav-cta .button-outline", content.nav.phoneButton);
    setText(".nav-cta .button", content.nav.primaryCta);
    setAttr(".nav-cta .button", "href", content.nav.primaryCtaHref);

    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      navLinks.replaceChildren(
        ...content.nav.links.map((item) => {
          const link = document.createElement("a");
          link.href = item.href;
          link.textContent = item.label;
          return link;
        }),
      );
    }
  };

  const renderServices = (content) => {
    setAttr(".service-overview", "aria-label", content.services.overviewAriaLabel);
    renderLinkedChips(document.querySelector(".service-strip-inner"), content.services.chips);
    setText("#sluzby .section-head h2", content.services.heading);
    setText("#sluzby .section-head p", content.services.lead);
    document.querySelectorAll("#sluzby .service-card").forEach((card, index) => {
      const item = content.services.cards[index];
      if (!item) return;
      setText("h3", item.title, card);
      setText(".service-count", item.count, card);
      setText("p:not(.service-extra)", item.text, card);
      renderInlineChips(card.querySelector(".chip-list"), item.tags || []);
      setText(".service-extra", `${content.services.extraPrefix} ${item.extra}`, card);
    });
  };

  const renderPrices = (content) => {
    setText("#cenik h2", content.prices.heading);
    setText("#cenik .section-head p", content.prices.lead);
    setText("#cenik .button-outline", content.prices.cta);
    setAttr("#cenik .button-outline", "href", content.prices.ctaHref);
    const priceList = document.querySelector("#cenik .price-list");
    if (!priceList) return;
    priceList.replaceChildren(
      ...content.prices.items.map((item) => {
        const row = document.createElement("div");
        row.className = "price-row";
        const body = document.createElement("div");
        const title = document.createElement("h3");
        const text = document.createElement("p");
        const status = document.createElement("span");
        title.textContent = item.title;
        text.textContent = item.text;
        status.className = "price-status";
        status.textContent = item.status;
        body.append(title, text);
        row.append(body, status);
        return row;
      }),
    );
  };

  const renderReviews = (content) => {
    setText("#recenze h2", content.reviews.heading);
    setText("#recenze .section-head p", content.reviews.lead);
    setText(".rating-summary .stars", content.reviews.stars);
    setText(".rating-summary span:last-child", content.reviews.summary);
    const reviewGrid = document.querySelector("#recenze .grid-3");
    if (reviewGrid) {
      reviewGrid.replaceChildren(
        ...content.reviews.items.map((item) => {
          const article = document.createElement("article");
          article.className = "review-card";
          const stars = document.createElement("div");
          const quote = document.createElement("blockquote");
          const text = document.createElement("p");
          const meta = document.createElement("div");
          stars.className = "stars";
          stars.setAttribute("aria-label", content.reviews.starsAriaLabel);
          stars.textContent = content.reviews.stars;
          quote.textContent = `„${item.quote}“`;
          text.textContent = item.text;
          meta.className = "review-meta";
          meta.textContent = item.meta;
          article.append(stars, quote, text, meta);
          return article;
        }),
      );
    }
    setText(".review-actions .button-outline", content.reviews.cta);
    setAttr(".review-actions .button-outline", "href", content.reviews.ctaHref);
    setText(".source-note", content.reviews.source);
  };

  const renderContact = (content) => {
    setText("#kontakt h2", content.contact.heading);
    setText("#kontakt .lead", content.contact.lead);
    setText(".contact-preference h3", content.contact.preferenceHeading);
    setText(".contact-preference p", content.contact.preferenceText);
    setText(".contact-actions .button", content.contact.phoneCta);
    setAttr(".contact-actions .button", "href", phoneHref(content.contactDetails.phoneHref || content.contactDetails.phone));
    setText(".contact-actions .button-outline", content.contact.addressCta);
    setAttr(".contact-actions .button-outline", "href", content.contact.addressHref);
    setText(".form-disclosure summary", content.contact.formToggle);
    const list = document.querySelector(".contact-list");
    if (list) {
      list.replaceChildren(
        ...content.contact.items.map((item) => {
          const row = document.createElement("div");
          row.className = "contact-item";
          const label = document.createElement("strong");
          label.textContent = item.label;
          if (item.type === "phone" || item.type === "email") {
            const link = document.createElement("a");
            link.href = item.type === "phone" ? phoneHref(content.contactDetails.phoneHref || item.value) : mailHref(item.value);
            link.textContent = item.value;
            row.append(label, link);
          } else {
            const value = document.createElement("span");
            value.textContent = item.value;
            row.append(label, value);
          }
          return row;
        }),
      );
    }

    content.contact.form.sections.forEach((section, sectionIndex) => {
      const fieldset = document.querySelectorAll("#service-form fieldset")[sectionIndex];
      if (!fieldset) return;
      setText("legend", section.legend, fieldset);
      section.fields.forEach((field) => {
        const control = fieldset.querySelector(`[name="${field.name}"]`);
        if (!control) return;
        const label = control.closest("label");
        const labelText = label?.querySelector(".label-text");
        if (labelText) {
          labelText.textContent = field.label;
          if (field.required) {
            const mark = document.createElement("span");
            mark.className = "required";
            mark.textContent = ` ${content.contact.form.requiredMark}`;
            labelText.append(mark);
          }
        }
        if ("placeholder" in field) control.setAttribute("placeholder", field.placeholder);
        if (field.required) control.setAttribute("required", "");
        else control.removeAttribute("required");
        const help = label?.querySelector(".field-help");
        if (help) help.textContent = field.help || "";
        if (control.tagName === "SELECT" && Array.isArray(field.options)) {
          const currentDisabled = control.querySelector("option[disabled]");
          control.replaceChildren();
          if (field.placeholder) {
            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = field.placeholder;
            placeholder.disabled = Boolean(currentDisabled);
            placeholder.selected = true;
            control.append(placeholder);
          }
          field.options.forEach((optionText, index) => {
            const option = document.createElement("option");
            option.value = index === 0 && !field.placeholder ? "" : optionText;
            option.textContent = optionText;
            control.append(option);
          });
        }
      });
    });
    setText('#service-form button[type="submit"]', content.contact.form.submit);
    setText(".form-success", content.contact.form.success);
  };

  const applyToWebsite = (content = load()) => {
    document.title = content.meta.title;
    document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      link.href = phoneHref(content.contactDetails.phoneHref || content.contactDetails.phone);
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.href = mailHref(content.contactDetails.email);
    });

    renderNav(content);

    setText(".hero h1", content.hero.heading);
    setText(".hero .lead", content.hero.lead);
    setText(".hero-actions .button", content.hero.primaryCta);
    setAttr(".hero-actions .button", "href", content.hero.primaryCtaHref);
    setText(".hero-actions .button-outline", content.hero.secondaryCta);
    setAttr(".hero-actions .button-outline", "href", phoneHref(content.contactDetails.phoneHref || content.contactDetails.phone));
    setText(".facts .fact:nth-child(1) strong", content.hero.locationTitle);
    setText(".facts .fact:nth-child(1) span", content.hero.locationText);
    setText(".facts .fact:nth-child(2) strong", content.hero.hoursTitle);
    setText(".facts .fact:nth-child(2) span", content.hero.hoursText);
    setAttr(".hero-media img", "src", content.assets.heroImageSrc);
    setAttr(".hero-media img", "alt", content.assets.heroImageAlt);
    setText(".media-note strong", content.hero.imageCaptionTitle);
    setText(".media-note span", content.hero.imageCaptionText);

    renderServices(content);

    setText("#specializace h2", content.specialization.heading);
    setText("#specializace p", content.specialization.lead);
    renderInlineChips(document.querySelector("#specializace .chip-list"), content.specialization.tags || []);

    setText(".wide-layout h2", content.process.heading);
    setText(".wide-layout .lead", content.process.lead);
    setAttr(".wide-media img", "src", content.assets.processImageSrc);
    setAttr(".wide-media img", "alt", content.assets.processImageAlt);
    renderInlineChips(document.querySelector(".wide-layout .chip-list"), content.process.tags || []);

    renderPrices(content);
    renderReviews(content);
    renderContact(content);

    setText("#lide h2", content.people.heading);
    setText("#lide .people-intro p", content.people.lead);
    setText("#lide .photo-note", content.people.note);
    document.querySelectorAll("#lide .person-card").forEach((card, index) => {
      const item = content.people.items[index];
      if (!item) return;
      setText(".photo-label", item.name, card);
      setText("h3", item.name, card);
      setText(".person-role", item.role, card);
      setText(".person-body p", item.text, card);
      setAttr("img", "src", item.imageSrc, card);
      setAttr("img", "alt", item.imageAlt, card);
    });

    setAttr(".footer-logo", "src", content.assets.footerLogoSrc);
    setAttr(".footer-logo", "alt", content.assets.footerLogoAlt);
    setText(".footer h2", content.footer.heading);
    setText(".footer-inner > div:first-child p", content.footer.text);
    content.footer.columns.forEach((column, index) => {
      const footerColumn = document.querySelector(`.footer-inner > div:nth-child(${index + 2})`);
      if (!footerColumn) return;
      setText("h3", column.heading, footerColumn);
      renderFooterList(footerColumn.querySelector("ul"), column.items);
    });
    const bottomItems = document.querySelectorAll(".footer-bottom span");
    if (bottomItems[0]) bottomItems[0].textContent = content.footer.bottomLeft;
    if (bottomItems[1]) bottomItems[1].textContent = content.footer.bottomRight;
  };

  window.SiteCMS = {
    STORAGE_KEY,
    CONTENT_URL,
    defaults,
    deepMerge,
    load,
    loadPublished,
    loadForWebsite,
    save,
    reset,
    applyToWebsite,
  };
})();
