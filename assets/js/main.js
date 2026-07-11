const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
  const close = () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    mobileMenu.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForms = document.querySelectorAll("[data-contact-form]");

contactForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    const endpoint = form.getAttribute("action") || "";
    if (!endpoint.includes("formspree.io/f/") || endpoint.includes("YOUR_FORM_ID")) {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      status?.classList.add("is-visible");
      status?.focus();
    }
  });
});
