//01. reduce 함수 --> 2개의 인수를 가지고 있음

// [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// });
//accumulator는 배열안에 있는 요소들의 합, currentValue는 각각의 개별요소

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0;
// for (let price of prices) {
// 	total += price
// }
// console.log(total);

const total = prices.reduce((total, price) => {
	return total + price
})

const minPrice = prices.reduce((min, price) => {
	if (price < min) {
		return price;
	}
	return min;
})


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


const highCount = leaders.reduce((highestCount, count) => {
	if (count.matchCount > highestCount) {
		return count.matchCount
	} return highestCount
})

//위 과정처럼 마지막 요소 하나만 남길 수 있음. 연산처리만 하는 것이 아니라 비교도 가능

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)
//	두번째 요소 (,100)로 accmulator를 몇으로 시작할 것인지 지정가능

const person = {
	firstName: 'Lee',
	lastName: 'Sanghyuk',
	fullname: function () {
		return `${this.firstName} ${this.lastName}`
	},
	shoutName: function () {
		setTimeout(() => {
			console.log(this.fullname())

		}, 3000)
	}
}
//화살표 함수의 this 와 화살표 함수가 아닌 일반함수의 this는 다르게 동작
// 화살표 함수일 때 this는 undefined로 뜸 -> arrow function안에 있는 this 키워드는 함수의 범위를 가리킴
//this 객체가 윈도우 객체를 가리킴.
//this를 활용하고 싶으면 일반함수를 사용.