//1. かんすうをパタメータでうけた　for Each (함수를 인수로 받는 for Each)
//배열 요소에만 사용가능 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function print(element) {
// 	console.log(element)
//	}
// numbers.forEach(element); forEach에 이미 작성된 함수를 전달하는 것은 일반적이지 않음

// numbers.forEach(function (el) {
// 	if (el % 2 === 0) {
// 		console.log(el);
// 	};
// })

// for (let el of numbers){
//console.log(el);
//} 조금 더 나중에 나온 순회 공식

const lck = [
	{
		teamName: 'T1',
		entryNum: 6
	},
	{
		teamName: 'Gen.G',
		entryNum: 5

	},
	{
		teamName: 'HLE',
		entryNum: 5
	},
	{
		teamName: 'KT',
		entryNum: 5
	}
]

lck.forEach(function (lck) {
	console.log(`${lck.teamName} - ${lck.entryNum}/10`);
})

//2. MAP 함수 --> 콜백의 return 값을 이용해서 새로운 배열을 생성
//콜백(함수) : 프로그래밍에서 다른 코드의 인수로 넘겨주는 실행가능한 코드

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubles = numbers.map(function (numbers) {
	return numbers * 2;
})
//객체배열에서 map()을 사용하는 방법
const name = lck.map(function (lck) {
	return lck.teamName.toUpperCase();
})
//3. Arrow functions 함수 표현식을 만들 때 사용

const add = (x, y) => {
	return x + y;
}

//4. arrow function 과 같은 기능을 하는 함수
// const add = function (x, y) {
// 	return x + y;
// }

const square = (x) => {//인수가 1개인 경우 ()가 안올 수도 있음
	return x * x;
}

// const rollDie = () => { //인수가 없는 경우
// 	return Math.floor(Math.random() * 6) + 1;
// }

//5. implicit return(암시적 반환)
const rollDie = () => (
	Math.floor(Math.random() * 6) + 1
)
//위와 같이 return 값 없이 중괄호를 사용하지 않고 간단하게 표현하는 방식
//()안에는 단 하나의 표현식만 올 수 있다.

//최종형태는 다음과 같이 간단하다.
const plus = (a, b) => a + b

//6. map 과 for each arrow function으로 표현

const captain = [
	{
		teamName: 'T1',
		captainName: 'Faker'
	},
	{
		teamName: 'Gen.G',
		captainName: 'Ruler'

	},
	{
		teamName: 'HLE',
		captainName: 'Peanut'
	},
	{
		teamName: 'KT',
		captainName: 'Bdd'
	}
]

// const team = captain.map(function (name) {
// 	return `${name.teamName} - ${name.captainName}`
// })

const team = captain.map(leader => (
	`${leader.teamName} - ${leader.captainName}`
))
