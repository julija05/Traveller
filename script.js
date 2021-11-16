"use strict";

const gallery = document.querySelectorAll(".row .image"),
  galleryBox = document.querySelector(".gallery"),
  preview = document.querySelector(".preview"),
  previewImg = document.querySelector("#previewimg"),
  closeIcon = document.querySelector(".icon"),
  previewNext = document.querySelector(".next"),
  previewPrev = document.querySelector(".prev");
const currentImg = document.querySelector(".current-img");

let show = false;

console.log(gallery);
let current = 0;
window.onload = () => {
  document.body.onclick = (e) => {
    preview.classList.remove("show");
  };

  previewNext.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (current + 1 >= gallery.length) {
      current = 0;
    } else {
      current++;
    }
    currentImg.innerHTML = current + 1;
    previewImg.src = gallery[current].src;
  };

  previewPrev.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (current <= 0) {
      current = gallery.length - 1;
    } else {
      current--;
    }
    currentImg.innerHTML = current + 1;
    previewImg.src = gallery[current].src;
  };

  preview.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  for (let i = 0; i < gallery.length; i++) {
    gallery[i].onclick = (e) => {
      let c = i;
      e.preventDefault();
      e.stopPropagation();
      let selectedUrl = gallery[i].src;
      previewImg.src = selectedUrl;
      current = c;
      // console.log(previewImg.src);
      currentImg.innerHTML = current + 1;

      preview.classList.add("show");

      closeIcon.onclick = (e) => {
        preview.classList.remove("show");
      };
    };
  }
};

const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".slider__btn--right");
const left = document.querySelector(".slider__btn--left");
const auto = false;

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
  e.preventDefault();
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

left.addEventListener("click", (e) => {
  e.preventDefault();
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, interval);
});

if (auto) {
  slideInterval = setInterval(nextSlide, interval);
}
