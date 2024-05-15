const faqTextBox = document.querySelectorAll(".faq-text-box");
const faq = document.querySelectorAll(".faq");

faq.forEach((e, i) => {
  e.addEventListener("click", () => {
    faqTextBox[i].classList.toggle("hidden");
  });
});

const headerEl = document.querySelector(".main-header");
const navMenuEl = document.querySelector(".menu-icon");

navMenuEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
