// For Loop Syntax
// for(
// 	[initial expression]; 
// 	[condition];  --> 조건
// 	[increment Expression]; --> 증감 표현식
// )
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
// 	console.log(i);
// } 10 이하의 짝수 출력

// for (let i = 1; i <= 20; i += 2) {
// 	console.log(i);
// } 20 이하의 홀수 출력

// for (let i = 100; i > 0; i -= 10) {
// 	console.log(i);
// } 10씩 작아지는 숫자

// 무한루프에 유의할 것 !!!!!!@@@@

// const animals = ['lions', 'tigers', 'chicken'];
// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// }
//루프를 이용해서 배열을 출력하는 방법
// 대문자로 문자를 변환할 때 .toUpperCase()를 사용해야함. !!!!! () 필수 !!!!!

//<이중 루프문>
// for (let i = 1; i <= 10; i++) {
// 	console.log(`i is: ${i}`)//템플릿 리터럴
// 	for (let j = 1; j < 4; j++) {
// 		console.log(`    j is: ${j}`)
// 	}
// }


//이런 형식으로 반복됨
// i is: 1    ----> 1가 한바퀴 돌때
//      j is: 1			---> j가 3바퀴 돈다
//      j is: 2
//      j is: 3
// i is: 2
//      j is: 1
//      j is: 2
//      j is: 3
// i is: 3
//      j is: 1
//      j is: 2
//      j is: 3

// Q. 배열의 요소들을 모두 나열할 수 있는 코드를 작성하기.
// const seatingChart = [
// 	['minsoo', 'jinsu', 'chulsu'],
// 	['minji', 'najin', 'mina'],
// 	['chaelin', 'jeongmin', 'jiwoo']
// ]

// <내 답안>
// for (let i = 0; i < seatingChart.length; i++) {
// 	for (let j = 0; j < seatingChart[i].length; j++) {
// 		console.log(seatingChart[i][j]);
// 	}
// }

// <강사 답안>
// for (let i = 0; i < seatingChart.length; i++) {
// 	const row = seatingChart[i];
// 	console.log(`Row #${i + 1}`);
// 	for (let j = 0; j < row.length; j++) {
// 		console.log(row[j]);
// 	}
// }

// 변수에 저장하는 방식으로 가독성을 높이는 방법. 굿~