const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;
const mod = (x, y) => x % y;

//console.log(module.exports); -> {} 비어있는 객체로 시작한다.
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
//module.exports에 square 라는 이름의 속성(key)을 만들고,
// 그 값(value)을 square 함수로 지정한다는 뜻. 
// 코드 실행후의 module.exports:
//{square: function(x){return x*x}}

exports.mod = mod; //exports 단축키