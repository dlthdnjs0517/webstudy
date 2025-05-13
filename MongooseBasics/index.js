const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:mlPjdzKISG3wQ9PC@udemy-lecutre.hlt9efv.mongodb.net/progamerRoster?retryWrites=true&w=majority&appName=Udemy-lecutre')
	// 노트북 사양 때문에 atlas 사용중이라서 위와같은 url 사용해야함.
	.then(() => {
		console.log('connection open!')
	})
	.catch(err => {
		console.log(err)
	})


// main().catch(err => console.log(err));
// async function main() {
// 	await mongoose.connect('mongodb://127.0.0.1:27017/progamerRoster')
// 	console.log('connection open!')
// }


const rosterSchema = new mongoose.Schema({
	nickName: String,
	birthYear: Number,
	team: String,
	captain: Boolean

})

const Player = mongoose.model('Player', rosterSchema);
//mongoose는 내가 정의한 모델명(Player,대문자 시작 단수형)을 보고 자동으로
//복수형 컬렉션 이름으로 바꿔서 DB에 연결한다. 
//즉 mongo db에 players 라는 컬렉션명이 붙여짐.

// const faker = new Player({ nickName: 'Faker', birthYear: 1996, team: 'T1', captain: true })
const zeus = new Player({ nickName: 'Zeus', birthYear: 2004, team: 'HLE', captain: false })

//node REPL 접속
// -> faker.save()하면 mongodb에 해당 인스턴스 생성됨.

// Player.insertMany([
// 	{ nickName: 'Oner', birthYear: 2002, team: 'T1', captain: false },
// 	{ nickName: 'Keria', birthYear: 2002, team: 'T1', captain: false },
// 	{ nickName: 'Gumayusi', birthYear: 2002, team: 'T1', captain: false },
// 	{ nickName: 'Smash', birthYear: 2006, team: 'T1', captain: false },
// 	{ nickName: 'Doran', birthYear: 2000, team: 'T1', captain: false },
// ])
// 	.then(data => {
// 		console.log('it worked!')
// 		console.log(data);
// 	})

//Player.find({}).then(data => console.log(data))
//find({})=>조건 없이 전부 조회
//save 없이도 db에 바로 조회됨.

//==================================
//mongoose로 Player.updateOne을 통해 
// [
// 	{
// 	  _id: ObjectId('6822e564a35e247c62e383ec'),
// 	  nickName: 'Faker',
// 	  birthYear: 1996,
// 	  team: 'skt t1',
// 	  captain: true,
// 	  __v: 0
// 	},
// 	{
// 	  _id: ObjectId('6822eb178fb9a415f09094b0'),
// 	  nickName: 'Oner',
// 	  birthYear: 20021224,
// 	  team: 'T1',
// 	  captain: false,
// 	  __v: 0
// 	},
// 	{
// 	  _id: ObjectId('6822eb178fb9a415f09094b1'),
// 	  nickName: 'Keria',
// 	  birthYear: 2002,
// 	  team: 'T1',
// 	  captain: false,
// 	  __v: 0
// 	},
// 	{
// 	  _id: ObjectId('6822eb178fb9a415f09094b2'),
// 	  nickName: 'Gumayusi',
// 	  birthYear: 2002,
// 	  team: 'T1',
// 	  captain: false,
// 	  __v: 0
// 	},
// 	{
// 	  _id: ObjectId('6822eb178fb9a415f09094b3'),
// 	  nickName: 'Smash',
// 	  birthYear: 2006,
// 	  team: 'T1 esports Academy',
// 	  captain: false,
// 	  __v: 0
// 	},
// 	{
// 	  _id: ObjectId('6822eb178fb9a415f09094b4'),
// 	  nickName: 'Doran',
// 	  birthYear: 2000,
// 	  team: 'HLE',
// 	  captain: false,
// 	  __v: 0
// 	}
//   ]
//라는 데이터 셋 적용.
// mongoose에
// Player.updateMany({nickName:{$in:['Doran','Smash','Faker']}},{team:'T1'})
// .then(res=>console.log(res)) 
//결과->'Doran','Smash','Faker'의 team이 T1으로 업데이트 됨

// 이제 remove는 없어졌고 deleteOne , deleteMany만 적용됨.
// 만약 방금 지운게 무엇인지 알고 싶다면 findOneAndDelete을 사용해야함