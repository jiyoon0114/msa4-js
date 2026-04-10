// 요소를 찾았는데 없으면 null을 반환
// 요소 선택

//  1. id로 요소를 선택
//    document.getElementById(): 요소의 ID로 선택
const titleEle = document.getElementById('title');
titleEle.style.color = 'blue';

// 2. 요소의 태그명으로 선택 -> 안쓴다
//    document.getElementsByTagName(tagname);
const tagEle = document.getElementsByTagName('h1');

for(let i = 0; i < tagEle.length; i++) {
  tagEle[i].style.color = "#ff0000";
}

// document.getElementsByClassName() : 클래스로 요소를 선택 -> 안 쓴다
// 해당 요소들을 HTMLCollection 객체로 획득
const classEle = document.getElementsByClassName('title2');


//  **** 매우 중요 **** -> 현업에서 사용함
// CSS 선택자를 사용해 요소를 찾는 메소드
// document.querySelector(seletor): CSS 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 가장 첫번째 요소만 선택
const queryId = document.querySelector('#title');
queryId.style.color = 'skyblue';
const queryType = document.querySelector('h1');
queryType.style.color = 'green';


//  **** 매우 중요 **** -> 현업에서 사용함
// document.querySelectorAll(selector): css 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 전부 선택
// 해당 요소들을 NodeList 객체로 획득
const queryAll = document.querySelectorAll('h1');
queryAll.forEach(item => {
  item.style.fontSize = '5rem';
});

// Element.textContent: 컨텐츠를 획득 및 변경
//    순수한 텍스트 데이터를 전달
const title1 = document.querySelector('#title');
title1.textContent; // 콘텐츠 접근
title1.textContent = '테스트'; // 콘텐츠 변경
// Element.innerHTML: 컨텐츠를 획득 및 변경
// 태그는 태그로 인식해서 전달
title1.textContent = '<p></p>'; // -> 문자열로 전달하는데
title1.innerHTML = "<p>피태그</p>";

// Element.setAttribute(attributeName, value): 요소에 속성과 속성값을 추가하는 메서드
const setAttrInput = document.querySelector('.set-attr');
setAttrInput.setAttribute('placeholder', 'js에서 추가');
setAttrInput.setAttribute('style', 'color: red');

// Element.removeAttribut(attributeName)
//    요소의 특정 속성을 제거
setAttrInput.removeAttribute('placeholder');

// -----------------------
// 요소 스타일링
// -----------------------
// Element.style: 요소에 인라인 스타일 추가
title1.style.color = 'red';

// Element.classList: DOMTokenList 객체로 클래스를 제어
// Element.classList.add(''): class 추가
// Element.classList.remove(''): class 삭제
// Element.classList.toggle(''): class 있으면 빠지고 없으면 class 추가함
title1.classList.toggle('display-none');
// add와 remove는 클라스 여러개를 추가하고 제거가 가능함
title1.classList.add('display-none','test');

// -------------------------------
// 새로운 요소 생성
// -------------------------------
// document.createElement(tagName): 해당 tag요소 생성
const newP = document.createElement('p');
newP.textContent = '탕수육';
newP.style.color = '#7a427c';
newP.style.fontSize = '4em';

// Node.appendChild(node)
//    해당 부모노드의 가장 마지막 자식 노드로 추가
const parentP = document.querySelector('.container');
parentP.appendChild(newP);

// Node.insertBefore(newNode, referenceNode): 
// newNode를 referenceNode의 앞에 넣겠다
// Node: 부모노드, newNode: 새로운노드, referenceNode:부모노드의 자식노드
const newH3 = document.createElement('h3');
newH3.textContent = '짬뽕';
parentP.insertBefore(newH3, newP);

// Node.removeChild(node)
//    해당 부모 노드의 특정 자식 노드를 제거
parentP.removeChild(newH3);