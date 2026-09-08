/** Scroll to a home-page section under the fixed navbar (uses CSS scroll-margin). */

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

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
