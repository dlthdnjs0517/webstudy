const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:mlPjdzKISG3wQ9PC@udemy-lecutre.hlt9efv.mongodb.net/shopApp?retryWrites=true&w=majority&appName=Udemy-lecutre')
	// 노트북 사양 때문에 atlas 사용중이라서 위와같은 url 사용해야함.
	.then(() => {
		console.log('connection open!')
	})
	.catch(err => {
		console.log(err)
	})


const personSchema = new mongoose.Schema({
	first: String,
	last: String
})

personSchema.virtual('fullName').get(function () {
	return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
	this.first = 'Yeo'
	this.last = 'chaelin'
	console.log('About to save!!!')
})

personSchema.post('save', async function () {
	console.log('just saved!!!')
})



const Person = mongoose.model('Person', personSchema);
