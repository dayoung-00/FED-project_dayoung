//배너 JS 01.가로방향 매너 슬라이드

// 메인배너 슬라이드 기능함수 불러오기
import slideFn from "./slide_fn.js";

// console.log(slideFn);
// 슬라이드함수 호출하여 실행하기
slideFn();

const swiper = new Swiper(".model-box", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
const swiper2 = new Swiper("#news-box", {
    slidesPerView: 3,
    spaceBetween: 30,
    // 중앙으로 이미지 오도록함
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 배경이미지 이름 만들기
const bgImageArr = [];
for(let i=1;i<=9;i++) bgImageArr[i] = 'awards_0'+i;
console.log(bgImageArr);

    const bgImage = document.querySelector("#news-box>img");

  // 이벤트 발생시 배경 이미지 변경하기
  swiper2.on('slideChange',()=>{
    const currIdx = swiper2.activeIndex;
    console.log(currIdx);
    bgImage.src = `./image/${bgImageArr[currIdx+1]}.jpg`;
  })

