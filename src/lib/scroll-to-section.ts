/** Scroll to a home-page section, stopping just under the fixed navbar. */

/** Sekcje z klasycznym offsetem (bez wjeżdżania w padding). */
const CLASSIC_OFFSET_IDS = new Set(["o-nas", "faq", "opinie"]);

function scrollOffsetPx(el: HTMLElement, id: string) {
  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 88;

  if (CLASSIC_OFFSET_IDS.has(id)) {
    return headerH + 12;
  }

  const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
  // Wjeżdżamy w padding sekcji — treść bliżej navbara (np. Kontakt).
  const intoPadding = Math.max(0, padTop - 8);
  return headerH - intoPadding;
}

export function scrollToSection(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  if (!id) return;

  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.hash !== "#top") {
      history.replaceState(null, "", "#top");
    }
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  if (location.hash !== `#${id}`) {
    history.replaceState(null, "", `#${id}`);
  }

  const top = el.getBoundingClientRect().top + window.scrollY - scrollOffsetPx(el, id);
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
