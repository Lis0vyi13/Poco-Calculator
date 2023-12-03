const menuElements = document.querySelectorAll(".menu-item");
const app = document.querySelector(".app");
const navbar = document.querySelector(".app__navbar");
const calculatorContent = document.querySelector(".calculator__content");
const contentWidth = calculatorContent.getBoundingClientRect().width;
const applications = document.querySelectorAll("figure");
let activeMenu = document.querySelector(".menu-item.active");
menuElements.forEach((el, i) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("active")) {
      document.querySelector(".menu-item.active").classList.remove("active");
      el.classList.add("active");
      calculatorContent.style.marginLeft = -contentWidth * i + "px";
      activeMenu = document.querySelector(".menu-item.active");
    }
  });
});
applications.forEach(function (application) {
  application.addEventListener("click", function (e) {
    const div = createDiv();
    app.append(div);
  });
});
function createDiv() {
  const div = document.createElement("div");
  div.style.height = `${
    app.getBoundingClientRect().height - navbar.getBoundingClientRect().height
  } px`;
  div.style.width = `${app.getBoundingClientRect().width}`;
  div.style.position = "absolute";
  return div;
}

export { applications };
