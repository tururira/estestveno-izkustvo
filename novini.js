const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}
const search = document.getElementById("search");
const filter = document.getElementById("typeFilter");
const emptyState = document.getElementById("emptyState");

const cards = Array.from(document.querySelectorAll(".news-card"));

function normalize(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function applyFilters() {
  const q = normalize(search?.value);
  const type = filter?.value || "all";

  let visibleCount = 0;

  cards.forEach(card => {
    const cType = card.dataset.type || "";
    const title = normalize(card.dataset.title || card.querySelector("h3")?.textContent);
    const text = normalize(card.textContent);

    const matchesType = (type === "all") || (cType === type);
    const matchesQuery = !q || title.includes(q) || text.includes(q);

    const show = matchesType && matchesQuery;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
}

if (search) search.addEventListener("input", applyFilters);
if (filter) filter.addEventListener("change", applyFilters);

applyFilters();
