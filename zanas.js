const nums = Array.from(document.querySelectorAll("[data-count]"));

function animate(el) {
  const target = Number(el.dataset.count || 0);
  let current = 0;

  const step = () => {
    current += Math.ceil(target / 30);
    if (current >= target) current = target;
    el.textContent = current;
    if (current < target) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

if (nums.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  nums.forEach(n => io.observe(n));
}
