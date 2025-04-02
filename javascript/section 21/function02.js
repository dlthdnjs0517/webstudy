//1. 함수 재정의
//이름이 없는 함수를 변수에 저장해서 정의하는 방법.
const add = function (x, y) {
	return x + y;
}
//javascript에서 함수는 값이다. 함수도 저장하고 전달할 수 있다.

//2.고차함수
//1)함수를 인수로 전달하는 방식
function callTwice(func) {
	func();
	func();//인수로 받는 함수를 2번 호출
}
function callTenTimes(f) {
	for (let i = 0; i < 10; i++) {
		f();//인수로 받는 함수를 10번 호출
	}
}
function rollDie() {
	const roll = Math.floor(Math.random() * 6) + 1;
	console.log(roll);
}

//2) 반환함수
function makeMysteryFunc() {
	const rand = Math.random();
	if (rand > 0.5) {
		return function () {
			console.log('CONGRATS, I AM A GOOD FUNCTION!');
		}
	}
	else {
		return function () {
			alert('YOU HAVE INFECTED BY A COMPUTER VIRUS!');
			alert('STOP TRYING TO CLOSE THIS WINDOW!');
			alert('STOP TRYING TO CLOSE THIS WINDOW!');
			alert('STOP TRYING TO CLOSE THIS WINDOW!');
			alert('STOP TRYING TO CLOSE THIS WINDOW!');
			alert('STOP TRYING TO CLOSE THIS WINDOW!');
		}
	}

}
//<범위를 체크해주는 함수>--필요할 때마다 만들고 있음
// function isBetween(num) {
// 	return num >= 50 && num <= 100; //returns a boolean value
// }
// function isBetween2(num) {
// 	return num >= 1 && num <= 10;
// }

//함수를 만들어주는 함수, 반환함수
function makeBetweenFunc(min, max) {
	return function (num) {
		return num >= min && num <= max;
	}
}
//활용방법:
const isChild = makeBetweenFunc(0, 18);
//특정 값을 저장하고 싶을 때 변수를 지정하여 할당해주기
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
//범위에 속하는 나이인지 참,거짓을 판별할 때 활용 가능

// 3)메서드와 함수
const myMath = {
	PI: 3.14159,
	square(num) {
		return num * num;
	},
	//원본
	//square : function(num){
	//return num * num
	//}


	cube(num) {
		return num ** 3;
	}
}
//활용예시 > myMath.PI, myMath.cube(3) .. etc
//myMath["cube"](4) -> 64


