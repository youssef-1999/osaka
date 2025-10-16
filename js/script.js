const navLinks = document.querySelectorAll(".nav-link");
const collapse = document.querySelector(".collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    collapse.classList.remove("show"); // Bootstrap uses .show to control visibility
  });
});
