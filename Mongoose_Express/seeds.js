const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb+srv://Admin:mlPjdzKISG3wQ9PC@udemy-lecutre.hlt9efv.mongodb.net/farmStand?retryWrites=true&w=majority&appName=Udemy-lecutre')
	// 노트북 사양 때문에 atlas 사용중이라서 위와같은 url 사용해야함.
	.then(() => {
		console.log('Mongo connection open!')
	})
	.catch(err => {
		console.log(err)
	})

// const p = new Product({
// 	name: 'Ruby Grapefruit',
// 	price: 1.99,
// 	category: 'fruit'
// })

// //show collections 를 하면 collection의 명칭을 알 수 있음

// p.save().then(p => {
// 	console.log(p)
// })
// 	.catch(e => {
// 		console.log(e)
// 	})

const seedProducts = [
	{
		name: 'Fairy Eggplant',
		price: 1.00,
		category: 'vegetable'
	},
	{
		name: 'Organic Goddess Melon',
		price: 4.99,
		category: 'fruit'
	},
	{
		name: 'Mudeungsan Watermelon',
		price: 100.00,
		category: 'fruit'
	},
]

Product.insertMany(seedProducts)
	//유효성 검사 후 리스트에 있는 항목들을 모두 삽입.
	.then(res => {
		console.log(res)
	}).catch(e => {
		console.log(e)
	})