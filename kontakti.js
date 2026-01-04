const reason = document.getElementById("reason");
const orderFields = document.getElementById("orderFields");

function toggleOrderFields() {
  const isOrder = reason.value === "order";
  orderFields.hidden = !isOrder;
}

if (reason && orderFields) {
  reason.addEventListener("change", toggleOrderFields);
  toggleOrderFields();
}
const form = document.getElementById("contactForm");

function encode(s) {
  return encodeURIComponent(s || "");
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const type = document.getElementById("reason").value;

    let subject = "Запитване към Естествено изкуство";
    let body = `Име: ${name}\nE-mail: ${email}\nТип: ${type}\n\nСъобщение:\n${msg}\n`;

    subject = `Поръчка на картина – ${artist}`;
    body =
        `Здравейте,\n\nИскам да направя поръчка на картина.\n` +
        `Художник: ${artist}\n` +
        `Размер: ${size || "-"}\n` +
        `Бюджет: ${budget || "-"} лв\n` +
        `Срок: ${deadline || "-"}\n\n` +
        `Контакти:\nИме: ${name}\nE-mail: ${email}\n\n` +
        `Описание:\n${msg}\n`;

    const to = "126973@students.ue-varna.bg";
    const mailto = `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`;

    window.location.href = mailto;
  });
}
