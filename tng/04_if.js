let grade = 99;

if(grade > 100 || grade < 0 || typeof grade !== 'number') {
  console.log('입력값 오류')
}
else {
  if(grade <= 100) {
    console.log(`당신의 점수는 ${grade}점 입니다. A+`);
  } 
  else if(90 <= grade){
    console.log(`당신의 점수는 ${grade}점 입니다. A`);
  } 
  else if(80 <= grade) {
    console.log(`당신의 점수는 ${grade}점 입니다. B`);
  } 
  else if(70 <= grade) {
    console.log(`당신의 점수는 ${grade}점 입니다. C`);
  } 
  else {
    console.log(`당신의 점수는 ${grade}점 입니다. F`);
  }
}
