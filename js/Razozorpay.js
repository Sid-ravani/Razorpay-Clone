const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});


const clamp = (x, min, max) => Math.max(min, Math.min(x, max));
const list = document.querySelector("#list");
const cards = Array.from(document.querySelectorAll("#card"));
list.addEventListener("scroll", (e) => {
  cards.forEach((card, i) => {
    const scale = clamp((400 - list.scrollTop + i * 72) / 100, 0, 1);

    // const scale = clamp(1 - (list.scrollTop - i * 50) / 600, 0.85, 1); //modified code

    const opacity = clamp((360 - list.scrollTop + i * 72) / 60, 0, 1);
    card.style.transform = `scale(${scale})`;
    card.style.opacity = `${opacity}`;
  });
});

let sliderContainer = document.getElementById('slider-container');
let slider = document.getElementById('slider');
let crds = slider.getElementsByTagName('li');

let elementsToShow = 4;

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = crds.length * cardWidth + 'px';

slider.style.transition='margin';
slider.style.transitionDuration = '0.6s';

for (let index = 0; index < crds.length; index++) {
  const element = crds[index];
  element.style.width = cardWidth+'px';
}

function prev(){
  if (+slider.style.marginLeft.slice(0, -2)!=0){
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
  }
}

function next(){
  if (+slider.style.marginLeft.slice(0, -2)!=(-cardWidth*(crds.length-elementsToShow))){
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
  }
}


