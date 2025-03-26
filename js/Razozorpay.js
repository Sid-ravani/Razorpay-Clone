const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,
  speed: 600,
  autoplay:{
    delay:3000,
  },


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

// slide-2
let sliderContainer2 = document.getElementById('slider-Container');
let slider2 = document.getElementById('Slider');
let crds2 = slider2.getElementsByTagName('li');

let elementsToShow2 = 3;

let sliderContainerWidth2 = sliderContainer2.clientWidth;

let cardWidth2 = sliderContainerWidth2/elementsToShow2;

slider2.style.width = crds2.length * cardWidth2 + 'px';

slider2.style.transition='margin';
slider2.style.transitionDuration = '0.6s';

for (let index = 0; index < crds2.length; index++) {
  const element = crds2[index];
  element.style.width = cardWidth2+'px';
}

function prev2(){
  if (+slider2.style.marginLeft.slice(0, -2)!=0){
    slider2.style.marginLeft =
      +slider2.style.marginLeft.slice(0, -2) + cardWidth + "px";
  }
}

function next2(){
  if (+slider2.style.marginLeft.slice(0, -2)!=(-cardWidth2*(crds2.length-elementsToShow2))){
    slider2.style.marginLeft =
      +slider2.style.marginLeft.slice(0, -2) - cardWidth2 + "px";
  }
}


// <img alt="" width="1760" height="1408" decoding="async" data-nimg="1" class="max-w-none flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 w-full" style="color:transparent" src="/_next/static/media/profile@2xrl.04d4e021.webp"></img>
