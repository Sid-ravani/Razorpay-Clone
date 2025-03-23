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


// <img alt="" width="1760" height="1408" decoding="async" data-nimg="1" class="max-w-none flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 w-full" style="color:transparent" src="/_next/static/media/profile@2xrl.04d4e021.webp"></img>


// const $cardsWrapper = document.querySelector("#cards");
// const $cards = document.querySelectorAll(".card__content");

// // Pass the number of cards to the CSS because it needs it to add some extra padding.
// // Without this extra padding, the last card won’t move with the group but slide over it.
// const numCards = $cards.length;
// $cardsWrapper.style.setProperty("--numcards", numCards);

// // Each card should only shrink when it’s at the top.
// // We can’t use exit on the els for this (as they are sticky)
// // but can track $cardsWrapper instead.
// const viewTimeline = new ViewTimeline({
//   subject: $cardsWrapper,
//   axis: "block",
// });

// $cards.forEach(($card, index0) => {
//   const index = index0 + 1;
//   const reverseIndex = numCards - index0;
//   const reverseIndex0 = numCards - index;

//   // Scroll-Linked Animation
//   $card.animate(
//     {
//       // Earlier cards shrink more than later cards
//       transform: [`scale(1)`, `scale(${1 - 0.1 * reverseIndex0}`],
//     },
//     {
//       timeline: viewTimeline,
//       fill: "forwards",
//       rangeStart: `exit-crossing ${CSS.percent((index0 / numCards) * 100)}`,
//       rangeEnd: `exit-crossing ${CSS.percent((index / numCards) * 100)}`,
//     }
//   );
// });
