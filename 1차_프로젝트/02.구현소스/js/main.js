//배너 JS 01.가로방향 매너 슬라이드

// 메인배너 슬라이드 기능함수 불러오기
import slideFn from "./slide_fn.js";

// console.log(slideFn);
// 슬라이드함수 호출하여 실행하기
slideFn();

var swiper = new Swiper(".model-box", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

