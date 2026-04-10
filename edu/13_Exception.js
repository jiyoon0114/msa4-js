// 코드 실행 중에 발생하는 예외나 오류 때문에 전체 시스템의 비정상 동작을 방지하는 기술
// 우리가 만든 소스 코드로 수습 할수있는 경우 예외처리라고함

// Try 문
try {
  // 내가 실행할 처리를 작성
  console.log('아아아');
  console.log('아아아');
  user.name // -> 이런 에러가 발생할시 서비스가 완전히 다운되어버림 -> 그래서 예외처리로 다운 방지
} catch(error) {
  // try문에서 에러가 발생시 처리할 로직 작성
  console.log('에러 발생');
  console.log(error.name); //ReferenceError
  console.log(error.message) // user is not defined
  console.log(error.stack); // 발생한 에러 상세 -> 어디 파일에서 에러 떴는지 무슨 모듈이 발생했는지
} finally {
  // 예외 여부와 상관없이 무조건 실행시켜야할 로직 작성
  console.log('파이널리~~~~~~');
}
console.log('아아아');
console.log('아아아');

try {
  // 강제 예외 발생
  console.log('트라이 시작');
  // 예러 객체가 발생했을때 catch문으로 이동함
  // but 기본적으로 제공하는 객체 종류가 부족하기 때문에 
  // 일부로 에러 객체를 만들어서 catch문으로 가게 만듦
  const error = Error('내가 강제로 일으킨 에러');
  if(/*유저가 잘못 입력했을때*/ true) {
    error.name = '커스텀 에러'
    throw error;
  }
  console.log('트라이 끝');
} catch(error) {
  console.log(error.stack);
} 

// 에러를 종류에 따라 다르게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을 때, instanceof 연산자를 사용하여 예외를 구체적으로 처리
try {
  throw new SyntaxError();
} 
catch(error) {
  if(error instanceof SyntaxError) {
    console.log('싱텍스 에러');
  } 
  else if(error instanceof ReferenceError) {
    console.log('참조참조');
  }
  else {
    console.log('짜장면');
  }
}