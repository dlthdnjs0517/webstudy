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
// const faker = new Player({ nickName: 'Faker', birthYear: 1996, team: 'T1', captain: true })

//node REPL 접속
// -> faker.save()하면 mongodb에 해당 인스턴스 생성됨.

Player.insertMany([
	{ nickName: 'Oner', birthYear: 2002, team: 'T1', captain: false },
	{ nickName: 'Keria', birthYear: 2002, team: 'T1', captain: false },
	{ nickName: 'Gumayusi', birthYear: 2002, team: 'T1', captain: false },
	{ nickName: 'Smash', birthYear: 2006, team: 'T1', captain: false },
	{ nickName: 'Doran', birthYear: 2000, team: 'T1', captain: false },
])
	.then(data => {
		console.log('it worked!')
		console.log(data);
	})