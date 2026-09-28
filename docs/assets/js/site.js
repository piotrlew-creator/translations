/* Piotr Lewandowski — tłumacz. Drobne interakcje strony (bez bibliotek). */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Nagłówek: cień po przewinięciu --- */
  var header = $("[data-header]");
  var onScroll = function () { header && header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* --- Menu mobilne --- */
  var btn = $("[data-menu-btn]"), nav = $("[data-nav]");
  var setMenu = function (open) {
    if (!btn || !nav) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  };
  if (btn) btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
  $$("[data-nav] a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", function (e) {
    if (nav && nav.classList.contains("is-open") && !nav.contains(e.target) && !btn.contains(e.target)) setMenu(false);
  });

  /* --- Podświetlanie aktywnej sekcji w menu --- */
  var links = $$(".nav a[href^='#']");
  if ("IntersectionObserver" in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) so.observe(el); });
  }

  /* --- Pojawianie się elementów --- */
  var reveals = $$(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); ro.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Array.prototype.indexOf.call(el.parentNode.children, el) % 4) * 70 + "ms";
      ro.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* --- Kalkulator --- */
  var calc = $("[data-calc]");
  if (calc) {
    var lang = calc.getAttribute("data-lang") || "pl";
    var locale = lang === "pl" ? "pl-PL" : "en-GB";
    var cur = calc.getAttribute("data-currency");
    var express = parseFloat(calc.getAttribute("data-express")) || 0;
    var minimum = parseFloat(calc.getAttribute("data-minimum")) || 0;
    var ta = $("[data-calc-text]", calc), pagesIn = $("[data-calc-pages]", calc), exIn = $("[data-calc-express]", calc);
    var out = $("[data-calc-out]", calc), meta = $("[data-calc-meta]", calc);
    var nf0 = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
    var nf1 = new Intl.NumberFormat(locale, { maximumFractionDigits: 1, minimumFractionDigits: 0 });
    var fromText = false;

    var compute = function () {
      var dir = ($("input[name='calc-dir']:checked", calc) || {}).value || "en_pl";
      var rate = parseFloat(calc.getAttribute("data-rate-" + dir)) || 0;
      var pages;
      if (fromText) {
        var chars = ta.value.replace(/\r\n/g, "\n").length;
        pages = chars / 1800;
        pagesIn.value = pages ? nf1.format(Math.round(pages * 10) / 10) : "";
        meta.textContent = chars ? nf0.format(chars) + " " + meta.getAttribute("data-chars") + " ≈ " + nf1.format(pages) + " " + meta.getAttribute("data-pages-unit") : "";
      } else {
        pages = parseFloat(String(pagesIn.value).replace(",", ".")) || 0;
        meta.textContent = pages ? nf1.format(pages) + " " + meta.getAttribute("data-pages-unit") + " × " + nf0.format(rate) + " " + cur : "";
      }
      if (!pages) { out.textContent = "—"; return; }
      var billable = Math.max(pages, minimum);
      var price = billable * rate * (exIn.checked ? 1 + express / 100 : 1);
      out.textContent = "≈ " + nf0.format(Math.round(price)) + " " + cur;
    };
    ta.addEventListener("input", function () { fromText = ta.value.length > 0; compute(); });
    pagesIn.addEventListener("input", function () { fromText = false; if (ta.value) ta.value = ""; compute(); });
    $$("input[name='calc-dir']", calc).forEach(function (r) { r.addEventListener("change", compute); });
    exIn.addEventListener("change", compute);
    compute();
  }

  /* --- Kopiowanie adresu e-mail --- */
  var toast = $("[data-toast]"), toastT;
  var showToast = function () {
    if (!toast) return;
    toast.classList.add("is-visible"); clearTimeout(toastT);
    toastT = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  };
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = b.getAttribute("data-copy");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showToast, function () {});
      } else {
        var t = document.createElement("textarea"); t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
        document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); showToast(); } catch (e) {}
        document.body.removeChild(t);
      }
    });
  });

  /* --- Pasek akcji na telefonie: widoczny po minięciu przycisków w hero, ukryty w sekcji kontakt --- */
  var bar = $("[data-actionbar]"), heroCtas = $("[data-hero-ctas]"), contact = $("[data-contact]");
  if (bar && heroCtas && "IntersectionObserver" in window) {
    var heroVisible = true, contactVisible = false;
    var update = function () {
      var on = !heroVisible && !contactVisible;
      bar.classList.toggle("is-visible", on);
      bar.setAttribute("aria-hidden", on ? "false" : "true");
      $$("a", bar).forEach(function (a) { a.tabIndex = on ? 0 : -1; });
    };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting || e[0].boundingClientRect.top > 0; update(); }).observe(heroCtas);
    if (contact) new IntersectionObserver(function (e) { contactVisible = e[0].isIntersecting; update(); }, { rootMargin: "0px 0px -30% 0px" }).observe(contact);
  }
})();
