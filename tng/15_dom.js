const amazing = document.querySelector('.none-li:nth-child(9)');
const appleGame = document.querySelector('.none-li:nth-child(4)');
amazing.style.backgroundColor = "beige";

const parent = document.querySelector('ul');
const aboveApple = document.createElement('li');
aboveApple.textContent = '장기';
parent.insertBefore(aboveApple, appleGame);

// const ulList = document.querySelectorAll('#ul > li');

// for(let i = 0; i < ulList.length; i++) {
//   let lis = ulList[i];
//   if(i % 2 == 0){
//     lis.style.color = 'blue';
//   }
//   else {
//     lis.style.color = 'red';
//   }
// }

function setLineColor() {
  try {
    const ulChildList = document.querySelectorAll('#ul > li');
    if(ulChildList.length < 1) {
      throw new Error('노드 없음');
    }
    ulChildList.forEach((item, key) => {
      if((key + 1) % 2 === 0) {
        item.style.color = 'red';
      }
      else {
        item.style.color = 'blue';
      }
    })
  }
  catch(err) {
    console.log(err);
  }
}

setLineColor();