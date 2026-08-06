/* Theme panel (desktop float) + aside theme (mobile) */
const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const dayNightButtons = document.querySelectorAll(".day-night");
const alternateStyles = document.querySelectorAll(".alternate-style");
const THEME_KEY = "portfolio-theme";
const COLOR_KEY = "portfolio-color";

if (styleSwitcherToggle && styleSwitcher) {
  styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });
}

window.addEventListener("scroll", () => {
  if (styleSwitcher && styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  localStorage.setItem(COLOR_KEY, color);
};

window.setActiveStyle = setActiveStyle;

const applyTheme = (theme) => {
  const isDark = theme !== "light";
  document.body.classList.toggle("dark", isDark);
  dayNightButtons.forEach((btn) => {
    const icon = btn.querySelector("i");
    if (!icon) return;
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add(isDark ? "fa-sun" : "fa-moon");
  });
};

dayNightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
});

applyTheme(localStorage.getItem(THEME_KEY) || "dark");

const savedColor = localStorage.getItem(COLOR_KEY);
if (savedColor) {
  setActiveStyle(savedColor);
}
