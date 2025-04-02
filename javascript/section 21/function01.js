//1. 전역변수와 지역변수
// function collectEggs() {
// 	let totalEggs = 6;
// 	console.log(totalEggs); -> 인식됨
// }
// console.log(totalEggs); -> 인식 안됨
// <해결법>
// let totalEggs = 0;
// function collectEggs() {
// 	let totalEggs = 6;

// }
// console.log(totalEggs); --> 0
// collectEggs();
// console.log(totalEggs); --> 6

// 예제)
// let deadlyAnimal = "Blue-Ringed Octopus";

// function handleAnimal() {
// 	let deadlyAnimal = "Scorpionfish";
// 	console.log(deadlyAnimal);
// }

// handleAnimal(); --> Scorpionfish
// console.log(deadlyAnimal)-- > handleAnimal()-- > blue - ringed octuopus
// 함수 내부에서는 deadlyAnimal이 재선언 됐지만,
// 	함수 바깥에서는 여전히 blue - ringed octuopus임.

// let radius = 8;
// if (radius > 3) {
// 	const PI = 3.14159;
// 	let msg = 'HIIII!'
// }
// console.log(radius);
// block은 !!!함수를 제외한!!! 중괄호가 있는 모든 곳을 가리킴.

// for (let i = 0; i < 5; i++) {
// 	let msg = 'ASDASFASD'; --> let이나 const를 사용하면 변수 범위는 블록으로 한정됨.
// }
// console.log(msg); // error
// console.log(i); // 5

//<lexical scope> 
// 정의된 특정한 구역 내에서 사용하는 방식, 선언된 위치를 기준으로 scope를 정한다.

function bankRobbery() {
	const heroes = ['Gwen', 'Caitlyn', 'Vi', 'Jinx', 'Viego'];
	function cryForHelp() {
		for (let hero of heroes) {
			console.log(`PLEASE HELP ME ${hero.toUpperCase()}`);
		}
	}
	cryForHelp();
}
//하위 함수들은 상위 함수 요소들을 참조할 수 있지만, 그 역은 안된다.
//SOLID 원칙 