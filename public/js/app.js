const header = document.querySelector(".outer-nav");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
