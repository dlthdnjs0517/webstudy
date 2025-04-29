// const { PI, square } = require('./math');
//-> 이 문장은 구조분해였구나!
const math = require('./math'); //같은 디렉토리 안에 있기 때문에 ./math
const cats = require('./shelter')
// console.log(math.PI)
// console.log(math.square(4))

console.log("Required An Entire Directory!", cats);