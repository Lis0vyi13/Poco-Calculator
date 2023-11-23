const menuElements = document.querySelectorAll(".menu-item");
const calculatorContent = document.querySelector(".calculator__content");
const contentWidth = calculatorContent.getBoundingClientRect().width;
console.log(contentWidth);
menuElements.forEach((el, i) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("active")) {
      document.querySelector(".menu-item.active").classList.remove("active");
      el.classList.add("active");
      calculatorContent.style.marginLeft = -contentWidth * i + "px";
    }
  });
});
