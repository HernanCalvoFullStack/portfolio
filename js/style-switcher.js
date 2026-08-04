/* Theme panel */
const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const dayNight = document.querySelector(".day-night");
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
  if (!dayNight) return;
  const isDark = theme !== "light";
  document.body.classList.toggle("dark", isDark);
  const icon = dayNight.querySelector("i");
  if (!icon) return;
  icon.classList.remove("fa-sun", "fa-moon");
  icon.classList.add(isDark ? "fa-sun" : "fa-moon");
};

if (dayNight) {
  dayNight.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

applyTheme(localStorage.getItem(THEME_KEY) || "dark");

const savedColor = localStorage.getItem(COLOR_KEY);
if (savedColor) {
  setActiveStyle(savedColor);
}
