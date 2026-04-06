const fs = require('fs');
let rank = Number(fs.readFileSync(0).toString().trim());

if(rank === 1) {
  console.log('우승');
} else if(rank === 2) {
  console.log('준우승')
} else if(rank === 3) {
  console.log('3등');
} else {
  if(rank !== 5 ){
    console.log('순위 외');
  }
  else {
  console.log('특별상');    
  }
}


