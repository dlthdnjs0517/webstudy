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

//4)  ****** THIS ******* 진짜 중요 !!!!!!!

const dog = {
	name: 'Mangchi',
	color: 'white',
	breed: 'Spitz',
	woof() {
		console.log(`${this.name} says Woooof!!`);
	}
}
//this 키워드가 이제부터 강아지라는 객체를 가리킨다.여러특성에 접근할 때 유용.
//dog라는 객체에 color 라는 특성이 있음. 해당 특성에 접근하려고 this.를 씀.
//this.특성 --> 이 메서드가 정의하는 객체를 가리킴.

const woof2 = dog.woof; // woof2는 함수를 저장한 변수, 즉 woof2는 함수.
//-> 결과값: "says Wooooof!!"
//dog.woof()는 'dog'라는 객체의 '함수'를 호출함
//woof2의 this는 window 객체를 가리킴.(default 값)
//함수의 인자로 무엇을 받든지 '.'의 왼쪽을 가리킴.

//예제
let hen = {
	name: 'Helen',
	eggCount: 0,
	layAnEgg() {
		this.eggCount += 1;
		return 'EGG';
	}
}
//console.log('EGG') ->얘는 값을 출력만 하고 값을 다시 사용할 수는 없음.
//return 'EGG' -> 메서드 실행이 끝난 후 값을 반환,메서드를 호출한 곳에서 사용 가능.
//즉, 메서드가 호출될때마다 'egg'라는 값을 반환해야 하기 때문에 return 이 사용됨.

//5) try & catch

// try {
// 	hello.toUpperCase();//오류 발생 코드
// } catch {
// 	//뭔가 잘못되어서 try안에서 예외나 오류가 나왔을 때 실행하는 코드 블록
// 	console.log("ERROR!!!")
// }

function yell(msg) {
	try {
		console.log(msg.toUpperCase().repeat(3));
		// yell(34234) 처럼 문자열이 아닌 것을 인자로 받을 경우 오류 발생
	} catch (e) {
		console.log('please pass a string next time!')
	}
}