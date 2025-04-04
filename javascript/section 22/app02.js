// 01. setTimeOut
//정해놓은 시간이 흐를때까지 아무것도 실행시키지 않는 함수
console.log("HELLO!!!-01")
setTimeout(() => {
	console.log("ARE YOU STILL THERE? -02")
}, 3000)

console.log("GOODBYE!!-03")

// 순서 01,03 거의 동시에 출력 후 3초뒤 02출력

//02. setInterval 전달할 함수를 호출하는데, 콜백을 설정해놓은 초마다 호출

const id = setInterval(() => {
	console.log(Math.random())
}, 2000)

clearInterval(id) //-- > 몇초마다 반복되는 행위를 멈춤

//03. filter() 기존 array에서 부분집합을 모아 새 배열을 만드는데 쓰임

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

numbers.filter(n => {
	return n < 10
}) // 결과값 [1,2,3,4,5,6,7,8,9]
//filter는 인자(argument)로 함수를 받는다 filter(callback funtion())이렇게

const leaders = [
	{
		name: 'Faker',
		birth: 1996,
		matchCount: 1000
	},
	{
		name: 'Ruler',
		birth: 1998,
		matchCount: 595

	},
	{
		name: 'Bdd',
		birth: 1999,
		matchCount: 759
	},
	{
		name: 'Peanut',
		birth: 1998,
		matchCount: 743
	},
	{
		name: 'Showmaker',
		birth: 2000,
		matchCount: 587
	},
	{
		name: 'Lehends',
		birth: 1998,
		matchCount: 624
	},
	{
		name: 'Morgan',
		birth: 2001,
		matchCount: 312
	},
	{
		name: 'Clear',
		birth: 2002,
		matchCount: 105
	},
	{
		name: 'Teddy',
		birth: 1998,
		matchCount: 649
	},
	{
		name: 'Pyosik',
		birth: 2000,
		matchCount: 390
	}
]

const elder = leaders.filter(leader => {
	return leader.birth < 1999
})
const elderLeader = elder.map(e => e.name)

// 04. <arrow function 방식>
// const elder = leaders.filter(l=> l.birth < 1999)
//return 을 생략하고  => 를 이용하여 값을 자동반환시킴.

const young = leaders.filter(youth => {
	return youth.birth >= 1999
})

// const youngLeader = young.map(y => y.name)
//위 코드를 한줄로 정리하면 다음과 같음
const youngLeader = young.filter(y => y.birth >= 1999).map(y => y.name)

// (예제) 10글자 이내인 이름을 저장하는 배열 반환

// 방법 1. 
const validUserNames = usernames => usernames.filter(u => u.length < 10)

//방법 2.function validUserNames(usernames) {
// return usernames.filter(username => username.length < 10)
// }

//05. every, some

const a = leaders.some(leader => leader.matchCount > 300) //true
//해당되는 것이 하나라도 있으면 true를 반환.

//Q.숫자 배열에 포함된 숫자가 모두 짝수인 경우 true를 반환, 그렇지 않으면 false 반환
const allEvens = list => list.every(l => l % 2 === 0)
