const themeButton = document.getElementById("themeSwitcher");
const body = document.body;
const theme = localStorage.getItem("theme");
const iconSwitch = document.getElementById("iconSwitch");

//cache
if (theme) {
  body.classList.add(theme)
};

// Theme Switcher
themeButton.onclick = () => {
  if (body.matches(".light.dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");

  } else if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");

  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }

};
//Icon Switcher (Cache)
if (theme === "light") {
  console.log("test");
  iconSwitch.classList.add("fa-sun");
} else {
  iconSwitch.classList.toggle("fa-moon");
}

function iconSwitcher(x) {
  x.classList.toggle("fa-moon");
  x.classList.toggle("fa-sun");
};