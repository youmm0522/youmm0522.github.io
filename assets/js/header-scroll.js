(() => {
  const header = document.querySelector("header");
  if (!header) return;

  let lastY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;

      if (y < window.innerHeight) {
        header.classList.remove("is-hidden");
      } else if (y > lastY) {
        header.classList.add("is-hidden");
      } else if (y < lastY) {
        header.classList.remove("is-hidden");
      }

      lastY = y;
    },
    { passive: true }
  );
})();
