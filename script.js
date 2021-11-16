"use strict";

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   //   console.log(s1coords);
//   //   e.target.getBoundingClientRect();
//   //   console.log("Current scroll(X/Y)", window.pageXOffset, pageYOffset);
//   //   console.log(
//   //     "heigh/width viewport",
//   //     document.documentElement.clientHeight,
//   //     document.documentElement.clientWidth
//   //   );
//   section1.scrollIntoView({ behavior: "smooth" });
// });

const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".slider__btn--right");
const left = document.querySelector(".slider__btn--left");
const auto = true;

const interval = 5000;
let slideInterval;

const nextSlide = () => {
  const show = document.querySelector(".show");
  show.classList.remove("show");

  if (show.nextElementSibling) {
    show.nextElementSibling.classList.add("show");
  } else {
    slides[0].classList.add("show");
  }
  setTimeout(() => show.classList.remove("show"));
};

const prevSlide = () => {
  const show = document.querySelector(".show");

  show.classList.remove("show");

  if (show.previousElementSibling) {
    show.previousElementSibling.classList.add("show");
  } else {
    slides[slides.length - 1].classList.add("show");
  }
  setTimeout(() => show.classList.remove("show"));
};

right.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

left.addEventListener("click", (e) => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, interval);
});

if (auto) {
  slideInterval = setInterval(nextSlide, interval);
}
