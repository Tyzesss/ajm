/** Scroll to a home-page section, stopping just under the fixed navbar. */

function headerOffsetPx() {
  const header = document.querySelector("header");
  const height = header?.getBoundingClientRect().height ?? 88;
  // Small gap under the bar so the section eyebrow isn't flush with it.
  return height + 12;
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

  const top = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
