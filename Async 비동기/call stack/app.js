const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
	square(a) + square(b) === square(c)
)

//isRightTriangle (3,4,5) -> true
// square(3)+square(4) ===square(5)
//square(3) = multiply(3,3)
//multiply(3,3) = 3 * 3
//위 과정을 반복

//과정을 보고 싶다면 latentfilp/loupe