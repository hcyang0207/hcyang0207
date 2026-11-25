const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  const mobileLayout = window.matchMedia("(max-width: 768px)");

  function setMenuOpen(isOpen) {
    mainNav.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  menuToggle.closest(".site-header").classList.add("nav-enhanced");
  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") === "false");
  });

  mainNav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || !mobileLayout.matches) return;

    if (link.getAttribute("href").startsWith("#")) {
      const section = document.getElementById(link.hash.slice(1));
      if (section) {
        section.setAttribute("tabindex", "-1");
        section.focus({ preventScroll: true });
      }
    }
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileLayout.addEventListener("change", () => {
    const focusWasInNav = mainNav.contains(document.activeElement);
    setMenuOpen(false);
    if (mobileLayout.matches && focusWasInNav) menuToggle.focus();
  });
}
