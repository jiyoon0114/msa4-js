const amazing = document.querySelector('.none-li:nth-child(9)');
const appleGame = document.querySelector('.none-li:nth-child(4)');
amazing.style.backgroundColor = "beige";

const parent = document.querySelector('ul');
const aboveApple = document.createElement('li');
aboveApple.textContent = '장기';
parent.insertBefore(aboveApple, appleGame);

const ulList = document.querySelectorAll('#ul > li');

for(let i = 0; i < ulList.length; i++) {
  let lis = ulList[i];
  if(i % 2 == 0){
    lis.style.color = 'blue';
  }
  else {
    lis.style.color = 'red';
  }
}
