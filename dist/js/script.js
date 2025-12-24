// ===============================
// Safe Micro Interactions JS
// Tidak mengubah layout utama
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------
     1. Fade-in sederhana (opacity only)
     --------------------------------- */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.style.opacity = "1";
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);


  /* ---------------------------------
     2. Button click feedback (aman)
     --------------------------------- */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.opacity = "0.8";
    });

    btn.addEventListener("mouseup", () => {
      btn.style.opacity = "1";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.opacity = "1";
    });
  });


  /* ---------------------------------
     3. Info box hover highlight
     --------------------------------- */
  document.querySelectorAll(".info-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.background = "rgba(255,255,255,0.25)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.background = "rgba(255,255,255,0.15)";
    });
  });

});
