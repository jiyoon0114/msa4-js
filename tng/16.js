const btn = document.querySelector('button');
btn.addEventListener('click', ()=>alert('안녕하세요.\n숨어있는 div를 찾아주세요'));

const box = document.querySelector('.box');

let maxX = window.innerWidth;
let maxY = window.innerHeight;

let randomX = Math.floor(Math.random() * (maxX - 150));
let randomY = Math.floor(Math.random() * (maxY - 150)); 

box.style.top = `${randomX}px`;
box.style.left = `${randomY}px`;

function hide() {
  alert('숨는다');  
  box.classList.remove('act');
  randomX = Math.floor(Math.random() * (maxX - 150));
  randomY = Math.floor(Math.random() * (maxY - 150));
  box.style.top = `${randomX}px`;
  box.style.left = `${randomY}px`;
}

box.addEventListener('mouseenter', () => {
  if(!box.classList.contains('act')) {
    alert('두근두근');
  }
});

box.addEventListener('click', () => {
  if(!box.classList.contains('act')){
    alert('들켰다');
    box.classList.add('act');
  }
  else {
    hide();
  }
});

