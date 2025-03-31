// const namuwiki = ['doran', 'oner', 'faker', 'smash', 'gumayusi', 'keria'];

// for (let i = 0; i < namuwiki.length; i++) {
// 	console.log(`Visit namuwiki.com/r/${namuwiki[i]}`)
// }

// for (let namu of namuwiki) {
// 	console.log(`visit namuwiki.com/r/${namu} `)
// }

//for (let 변수 of array명){
// console.log(변수)
// }

// seatingChart 문제를 for..of 구문으로 표현하면 :
// for(let row of seatingChart){
// 	for(let student of row){
// 		console.log(student);
// 	}
// }


//array가 아닌것의 반복문 - 문자열
// for (let char of "helloworld") {
// 	console.log(char)
// } 

//객체 literal의 루프

const players = {
	Doran: 'toplaner',
	Kiin: 'toplaner',
	peanut: 'jungler',
	oner: 'jungler',
	faker: 'midlaner',
	chovy: 'midlaner',
	smash: 'adc',
	gumayusi: 'adc',
	delight: 'supporter',
	keria: 'supporter'
}

// key값을 가져오는 구문
// for (let nickname in players) {
// 	console.log(nickname);
// }
//key값과 value값을 같이 가져오는 구문
// for (let nickname in players) {
// 	console.log(`${nickname}'s position is a ${players[nickname]}`);
// }
console.log(Object.keys(players)); //키값 배열
console.log(Object.values(players)); //value값 배열 리턴
console.log(Object.entries(players)); //key-value값 배열 리턴

