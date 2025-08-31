// Shared behavior: animate any .age-banner on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    const banners = document.querySelectorAll(".age-banner");
    banners.forEach((b) => {
      // trigger entrance
      b.classList.add("enter");
      // after entrance, ensure banner stays visible and switch to idle pulse
      b.addEventListener("animationend", function handler(e) {
        if (e.animationName === "bannerEnter") {
          // force final visual state in case CSS transitions interfere
          b.style.opacity = "1";
          b.style.transform = "translateX(-50%) translateY(0) scale(1)";
          // replace enter with idle animation class
          b.classList.remove("enter");
          b.classList.add("idle");
          b.removeEventListener("animationend", handler);
        }
      });
    });
  } catch (err) {
    // fail silently
    console.warn("Shared banner script error", err);
  }
});
