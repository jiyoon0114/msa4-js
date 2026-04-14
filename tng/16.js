// const btn = document.querySelector('button');
// btn.addEventListener('click', ()=> alert('안녕하세요.\n숨어있는 div를 찾아주세요'));

// const box = document.querySelector('.box');

// let maxX = window.innerWidth;
// let maxY = window.innerHeight;

// let randomX = Math.floor(Math.random() * (maxX - 150));
// let randomY = Math.floor(Math.random() * (maxY - 150)); 

// box.style.top = `${randomX}px`;
// box.style.left = `${randomY}px`;

// function hide() {
//   alert('숨는다');  
//   box.classList.remove('act');
//   randomX = Math.floor(Math.random() * (maxX - 150) + 1);
//   randomY = Math.floor(Math.random() * (maxY - 150) + 1);
//   box.style.top = `${randomY}px`;
//   box.style.left = `${randomX}px`;
// }

// box.addEventListener('mouseenter', () => {
//   if(!box.classList.contains('act')) {
//     alert('두근두근');
//   }
// });

// box.addEventListener('click', () => {
//   if(!box.classList.contains('act')){
//     alert('들켰다');
//     box.classList.add('act');
//   }
//   else {
  //     hide();
  //   }
  // });

const setRandomBoxBackGroundColor = (ele) => {
  
  const randomRgbRed = Math.round(Math.random() * 255);
  const randomRgbGreen = Math.round(Math.random() * 255); 
  const randomRgbBlue = Math.round(Math.random() * 255); 

  ele.style.backgroundColor = `rgb(${randomRgbRed}, ${randomRgbGreen}, ${randomRgbBlue})`;
};
  
const randomPosition = () => {
  // 보너스 문제 -> 다시 숨을 때 랜덤한 위치로 이동
  const container = document.querySelector('.container');

  const randomX = Math.floor(Math.random() * (window.innerWidth - container.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - container.offsetHeight));

  container.style.top = `${randomY}px`;
  container.style.left = `${randomX}px`;
  
};

const hide = () => {
  const box = document.querySelector('.box');
  const container = document.querySelector('.container');

  alert('숨는다');
  box.classList.remove('act');
  // 숨는다 클릭 이벤트 추가
  box.removeEventListener('click', hide);
  randomPosition();
  box.style = '';

  // 들켰다 클릭 이벤트 추가
  box.addEventListener('click', busted);
  container.addEventListener('mouseenter', dokidoki);
};

const dokidoki = () => {
  alert('두근두근');
}

const busted = () => {
  const box = document.querySelector('.box');
  const container = document.querySelector('.container');

  box.classList.add('act');
  container.removeEventListener('mouseenter',dokidoki);

  box.addEventListener('click', hide);
  // 들켰다 클릭이벤트 제거
  box.removeEventListener('click', busted);
  setRandomBoxBackGroundColor(box);
  
  alert('들켰다');
};


(() => {
  // 즉시실행 함수 -> 처음에 실행하는 함수
  const btn = document.querySelector('button');
  btn.addEventListener('click', ()=> alert('안녕하세요.\n숨어있는 div를 찾아주세요'));
  const box = document.querySelector('.box');
  randomPosition();
  const container = document.querySelector('.container');
  container.addEventListener('mouseenter', dokidoki);
  box.addEventListener('click', busted);
})();

