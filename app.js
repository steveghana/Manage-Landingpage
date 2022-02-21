let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // slidesPerGroup: 3,
  slidesPerView: "auto",
  loop: true,
  // loopFillGroupWithBlank: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
  },
});

// let testimonialSection = document.querySelector(".testimonialbox");
// let slider = document.querySelectorAll(".test");
// let leftArrow = document.querySelector(".shuffleleft");
// let rightArrow = document.querySelector(".shuffleright");
// const numSlides = slider.length;
// let slideWidth = slider[0].offsetWidth;

// //  let slideMarginRight = parseInt(getComputedStyle(slider[0]).marginRight);
// let moveX = slideWidth; /*  + slideMarginRight */

// let firstClone = slider[0].cloneNode(true);
// let lastClone = slider[slider.length - 1].cloneNode(true);
// firstClone.setAttribute("id", "first-clone");
// lastClone.setAttribute("id", "last-clone");
// testimonialSection.appendChild(firstClone);
// testimonialSection.prepend(lastClone);
// let allSlides = document.querySelectorAll(".test");

// testimonialSection.style.transform = `translateX(${-moveX}px)`;

// let counter = 1;

// rightArrow.addEventListener("click", () => {
//   counter++;
//   testimonialSection.style.transition =
//     "transform 0.5s ease-in-out, opacity 0.2s";
//   testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
//   if (counter >= allSlides.length) counter = numSlides;
//   console.log(counter);
// });

// leftArrow.addEventListener("click", () => {
//   counter--;
//   testimonialSection.style.transition =
//     "transform 0.5s ease-in-out, opacity 0.2s";
//   testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
//   if (counter < 0) counter = 0;
// });
// testimonialSection.addEventListener("transitionend", () => {
//   if (allSlides[counter + 1].id === "first-clone") {
//     testimonialSection.style.transition = "none";
//     counter = 1;
//     testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
//     // alert('i')
//   }

//   if (allSlides[counter].id === "last-clone") {
//     testimonialSection.style.transition = "none";
//     counter = numSlides;
//     testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
//   }
// });

// window.addEventListener("resize", () => {
//   slideWidth = slider[0].offsetWidth;
//   slideMarginRight = parseInt(getComputedStyle(slider[0]).marginRight);
//   moveX = slideWidth /* + slideMarginRight */;
//   testimonialSection.style.transition = "none";
//   testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
// });
// window.addEventListener("load", () => {
//   slideWidth = slider[0].offsetWidth;
//   slideMarginRight = parseInt(getComputedStyle(slider[0]).marginRight);
//   moveX = slideWidth /* + slideMarginRight */;
//   testimonialSection.style.transition = "none";
//   testimonialSection.style.transform = `translateX(${-(moveX * counter)}px)`;
// });
// // testimonialSection.lastChild
// // console.log(item)
