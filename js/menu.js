const menuElements = document.querySelectorAll(".menu-item");
menuElements.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("active")) {
      document.querySelector(".menu-item.active").classList.remove("active");
      el.classList.add("active");
    }
  });
});
