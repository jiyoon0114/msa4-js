// String(문자열) 객체 -> char이랑 String이랑 같은 객체라도 퉁침
let str1 = "쌍따옴표";
let str2 = '홑따옴표';
let str3 = `백틱`;

const string = new String('객체로 생성'); //-> 원래는 이렇게 해야 String 메서드를 쓸수있는데
const str = '객체로 생성' // -> 이렇게 해도 쓸수있게 js가 내부적으로 잠깐 String으로 wrapper함

// length: 문자열 길이 반환
console.log(str1.length);

// String.charAt(index): String
//    문자열에서 해당 인덱스에 맞는 문자를 반환함
let str4 = "문자열입니다";
console.log(str4.charAt(3));

// String.indexOf(searchStr, idx): Number
//    문자열에서 해당 검색어를 찾아 최초의 인덱스를 반환
//    없을 경우 -1 반환
let str5 = "문자열입니다. 문자열입니다.";
console.log(str5.indexOf('열')); // 2
// 찾을 시작지점을 인덱스 4부터 시작 하도록 한다
console.log(str5.indexOf('열', 4)); // 10: 
console.log(str5.indexOf('입니다')); // 3
console.log(str5.indexOf('아아')); // -1

// String.replace(pattern, replacement): String
//    문자열에서 해당 패턴의 첫번째 문자열을 찾아서, 
//    대체문자열로 변경하고 변경한 문자열을 반환함
let str6 = "문자열입니다. 문자열입니다.";
console.log(str6.replace('열', '돈까스').replace('열', 'hello'));

// String.replaceAll(pattern, replacement): String
//    문자열에서 해당 패턴의 모든 문자열을 찾아서, 
//    대체문자열로 변경하고 변경한 문자열을 반환함
let str7 = "문자열입니다. 문자열입니다";
console.log(str7.replaceAll('문자열', '돈까스'));

// String.substring(startIndex, endIndex): String
//    문자열에서 시작인덱스부터 끝 인덱스까지 자른 문자열을 반환
//    끝인덱스 생략시, 시작 인덱스부터 끝까지 자른 문자열을 반환함
let str8 = "문자열입니다. 문자열입니다";
console.log(str8.substring(2, 3));

// String.split(separator, limit(생략가능)): Array
//    문자열에서 구분자를 기준으로 잘라 각 문자열을 배열로 만들어 반환
//    limit 배열의 길이를 조절 -> 보통은 생략해서 씀
let str9 = '짜장면, 짬뽕, 탕수육, 라조기, 크림새우';
let str9Array = str9.split(', ');
console.log(str9Array);

// String.trim(): String
//    문자열에서 시작과 끝의 공백을 제거한 문자열을 반환 -> \n과 ' '을 없애줌
//    문자 사이의 공백은 없어주지 않음 '아 자아' 아와 자 사이 공백은 유지시켜준다
let str10 = '                   아아아아 ';
console.log(str10.trim());

// String.toUpperCase(), String.toLowerCase();
//    문자열을 대소문자로 변경해서 반환함
let str11 = 'dfhakhdfjDAGDskAFTSdh'
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());
