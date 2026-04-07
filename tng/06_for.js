for(let i = 0; i < 5; i++) {
  console.log('*****');
}

for(let i = 0; i < 5; i++) {
  let result ='';
  for(let j = 0; j <= i; j++) {
    result += '*';
  }
  console.log(result);
}


let ast ='';
for(let i = 0; i < 5; i++) {
  ast += '*';
  console.log(ast);
}

for(let i = 0; i < 5; i++) {
  let result ='';
  for(let j = i; j < 4; j++) {
    result += ' ';
  }
  for(let j = 0; j <= i; j++) {
    result += '*';
  }
  console.log(result);
}

let space = '     ';
let star = '';
for(let i = 0; i < 5; i++) {
  star += '*';
  console.log(`${space.slice(1, space.length - i)}${star}`);
}

for(let i = 1; i <= 5; i++) {
  let result ='';
  for(let j = i; j < 5; j++) {
    result += ' ';
  }
  for(let j = 1; j < i*2; j++) {
    result += '*';
  }
  for(let j = i; j < 5; j++) {
    result += ' ';
  }
  console.log(result);
}

