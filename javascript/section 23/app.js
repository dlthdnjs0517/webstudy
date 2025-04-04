// function rollDie(numSides) {
// 	if (numSides === undefined) {
// 		numSides = 6 // default 값을 6 으로 지정
// 	}
// 	return Math.floor(Math.random() * numSides) + 1;
// }

//01. 함수의 default 값을 지정하는 또다른 방법
function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'Hey there', punc = '!') {
	console.log(`${msg},${person}${punc}`)
}

//02. spread
const nums = [9, 3, 2, 6, 234324, 41, 1, 2]//중복요소 있음
Math.max(nums);//NaN, Math.max는 인자로 숫자를 받기 때문에 array는 NaN으로 인식.
Math.max(...nums);
//max(...values: number[]) array를 저장해놓은 변수 앞에 ...를 붙여야 nums의 각 요소를 인식 가능
Math.min(...nums);
console.log(nums);
//>[9, 3, 2, 6, 234324, 41, 1, 2]
console.log(...nums);
//>9 3 2 6 234324 41 1 2
console.log('hello');
//>hello
console.log(...'hello');
//>h e l l o

const gamerDog = ['Goorum', 'Morning', 'Doongi'];
const friendDog = ['Tori', 'Mangchi', 'Gangchi'];

const allDogs = [...gamerDog, ...friendDog, 'Luna'];//combined array

//03. object literals spread

const t1 = { midLaner: 'Faker', Jungler: 'Oner' };
const Geng = { midLaner: 'Chovy', adCarry: 'Ruler' };

//{...t1}
//>{midLaner: 'Faker', Jungler: 'Oner'}
// Jungler : "Oner"
// midLaner : "Faker"
// [[Prototype]] : Object

//{...t1,teamColor : 'red'}
//>{midLaner: 'Faker', Jungler: 'Oner'}
// Jungler : "Oner"
// midLaner : "Faker"
// teamColor : 'red'
//단 , t1은 여전히 2개의 특성을 보유하고 있다. color는 추가되지 않음

const lckTeam = { ...t1, ...Geng }
console.log(lckTeam);
//midLaner라는 특성이 겹친다.

//>{midLaner: 'Chovy', Jungler: 'Oner', adCarry: 'Ruler'}

//1.t1의 midLaner값이 먼저 복사된다.
//2.그 다음 geng의 midLaner 값이 복사되면서 티원의 미드 값에 덮어쓰기를 한다.

console.log({ ...[2, 4, 6, 8] });
//결과값: {0: 2, 1: 4, 2: 6, 3: 8}
//인덱스의 값이 key 값이 됨.

const dataForm = {
	email: 'lovefaker@naver.com',
	password: 'faker123!',
	username: 'cnldjqrldnjs'
}
const newUser = { ...dataForm, id: 2345, isAdmin: false };

//04.REST 

// function sum(...nums) {
// 	console.log(nums)
// }
//입력: sum(4,5,6,7,8,10)
//결과: [4, 5, 6, 7, 8, 10] (인수를 모아서 배열로 만들었음)

function sum(...nums) {
	return nums.reduce((total, el) => total + el)
}
//결과: 인자로 입력한 인수들의 총 합(reduce함수의 영향)

function raceResults(gold, silver, ...everyone) {
	console.log(`GOLD MEDAL GOES TO ${gold}`)
	console.log(`SILVER MEDAL GOES TO ${silver}`)
	console.log(`AND THANKS TO : ${everyone}`)
}
//입력: raceResults('faker','oner','doran','gumayusi','smash')
// 결과:
// GOLD MEDAL GOES TO faker
// SILVER MEDAL GOES TO oner
// AND THANKS TO : doran,gumayusi,smash
//인덱스 [2] 값으로 doran,gumayusi,smash를 모두 모아놓은 것.
//spread 와 정반대로 적용됨
