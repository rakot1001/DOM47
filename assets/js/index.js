"use strict";

const imagesDB = [
  "https://a-static.besthdwallpaper.com/code-geass-lelouch-lamperouge-cc-oboi-3840x2160-20520_54.jpg",
  "https://ae01.alicdn.com/kf/HTB1FWCnsb5YBuNjSspoq6zeNFXat/Code-Geass-Lelouch-vi-Britannia-Cosplay-Wig-Free-Shipping-for-Halloween-and-Christmas.jpg_Q90.jpg_.webp",
  "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0MjkxOTQyOTA0MjQ0MDky/anime-movie-review-code-geass-lelouch-of-the-rebellion-movie-ii-transgression-2018.jpg",
  "https://www.lunartoystore.com/media/catalog/product/cache/647a08bbdfbc103d8f5ac6fb916961ec/l/_/l.l._c.c.2.jpg",
];

const slider = new Slider(imagesDB);

const image = document.querySelector(".slide");

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container > button"
);

function pdateView() {}
