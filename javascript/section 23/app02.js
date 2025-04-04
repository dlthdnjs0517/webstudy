//01.destructuring from array
//array나 object의 요소들을 꺼내거나 해체하거나 singling out-선발,집어내는 방식

const scores = [929321, 960507, 899341, 888336, 656545];

const [gold, silver, bronze, ...everyone] = scores; //여러 값중 3개의 값을 단독변수로 지정
//결과:
// gold
// >929321
// silver
// >960507
// bronze
// >899341
//everyone
//>[888336, 656545]

//02. desturucturing from object

const champion = {
	email: 'viegotheking@gmail.com',
	password: 'goatFaker123',
	firstName: 'Viego',
	lastName: 'Heigaari',
	born: '1988',
	died: '2050',
	bio: 'the ruined king',
	city: 'Helia',
	states: 'Shadow Isles'

}

const champion2 = {
	email: 'gwenScissor@gmail.com',
	password: 'SnipSnip!!',
	firstName: 'Gwen',
	lastName: null,
	born: 1980,
	city: 'Helia',
	states: 'Shadow Isles'
}

// const firstName = champion.firstName;
// const lastName = champion.lastName;

// const { email, firstName, lastName, city, states } = champion;
// const email = champion.email; 와 같은 표현식

// const { born: birthYear, died: deceasedDate } = champion;
// born이라는 변수를 birthYear로 변경하는 방법

// const { city, states, died = 'N/A' } = champion2
//존재하지 않는 값을 추가하게 되면 undefined로 뜬다.
//이때 default값을 지정해준다면 해당 값이 뜬다. 

//03. 

// function fullName(champion) {
// 	return `${champion.firstName} ${champion.lastName}`
// }
// function fullName(champion) {
// 	const { firstName, lastName } = champion;
// 	return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}
//매개변수 자리에 firstName,lastName을 입력해 구조분해를 한다.
//결과값은 위 두 버전의 코드와 똑같이 나온다.


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

//1. matchcount 가 500보다 큰 사람들을 골라내는 방법 
// leaders.filter(l => l.matchCount > 500)
//2번쨰 방법
// leaders.filter(({ matchCount }) => matchCount > 500)

//map을 이용한 경우
// leaders.map(l => {
// 	return `${l.name} has played ${l.matchCount} games at LCK`
// })
//위 코드를 간단하게
leaders.map(({ name, birth, matchCount }) => {
	return `${name} (${birth})has played ${matchCount} games at LCK`
})




