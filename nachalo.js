//сложих и адаптивен дизайн за телефони/таблети
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if(btn && nav){
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
}
if (btn && nav) {
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

