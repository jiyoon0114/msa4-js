// Event 이벤트
// 웹페이지에서 유저의 행위에 따라 특정 처리를 실행되도록 하는 처리

// inline 방식 -> 잘 안씀
// 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법
// HTML문서에 JS가 혼재되므로 관리상의 문제가 발생

// property Listener 방식
// HTML에는 작성을 안함 -> DOM을 이용해서 해당 노드에 이벤트 프로퍼티를 통해 지정하는 방법
// const btn1 = document.querySelector('button');
// btn1.onclick = () => {
//   alert('프로퍼티 리스너');
// }

// addEventListener 방식
// DOM 요소에 이벤트 리스터를 추가하는 가장 현대적인 방법으로 권장
// 동일한 이벤트를 여러번 사용 가능
/*
const btnAEL = document.querySelector('#currentBtn');
btnAEL.addEventListener('click', () => alert('첫번째 클릭 이벤트'));

// removeEventListener
// DOM 요소에 추가된 이벤트를 제거하는 방법
window.removeEventListener('scroll', printScroll);
*/
function printScroll() {
  console.log('스크롤 실행');
}

window.addEventListener('scroll', printScroll);

const deleteBTN = document.querySelector('#btnDelete');
deleteBTN.addEventListener('click', () => {
  window.removeEventListener('scroll', printScroll);
});


// 이벤트 객체
// 이벤트가 발생 했을 때 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector('#btnObj');
// 이때 이벤트 객체를 파라미터로 받아올수있음
// 이벤트 핸들러 함수: 이벤트가 발생했을때 실행되는 함수
btnObj.addEventListener('click', (e) => {
  console.log(e);
  // e.target => event가 발생했을때 그 요소를 가져옴
  e.target.textContent = 'hi';
});

function eventInfomation(e) {
  console.log(e);
}

const container = document.querySelector('.container');
container.addEventListener('scroll', eventInfomation);