const chips = Array.from(document.querySelectorAll(".chip"));
const tiles = Array.from(document.querySelectorAll(".tile"));
const groups = Array.from(document.querySelectorAll("[data-group]"));

function setFilter(filter) {
  chips.forEach(c => c.classList.toggle("active", c.dataset.filter === filter));
  tiles.forEach(tile => {
    const artist = tile.dataset.artist;
    const show = (filter === "all") || (artist === filter);
    tile.style.display = show ? "" : "none";
  });

  groups.forEach(section => {
    const groupName = section.dataset.group;
    if (filter === "all") {
      section.style.display = "";
      return;
    }
    section.style.display = (groupName === filter) ? "" : "none";
  });
}

chips.forEach(chip => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

function openModal(src, alt) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = src;
  modalImg.alt = alt || "Изображение";
  modalCaption.textContent = alt || "";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  modalCaption.textContent = "";
  document.body.style.overflow = "";
}

tiles.forEach(tile => {
  const img = tile.querySelector("img");
  tile.addEventListener("click", () => openModal(img.src, img.alt));
});

modal.addEventListener("click", (e) => {
  if (e.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

setFilter("all");
