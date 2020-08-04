const themeButton = document.getElementById("themeSwitcher");
const body = document.body;
const theme = localStorage.getItem("theme");

//cache
if (theme) {
  body.classList.add(theme)
};

// Theme Switcher
themeButton.onclick = () => {

  if (body.classList.contains("light")) {

    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");

  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }

};

//Icon Switcher
function iconSwitcher(x) {
  x.classList.toggle("fa-moon");
  x.classList.toggle("fa-sun");
}