const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:mlPjdzKISG3wQ9PC@udemy-lecutre.hlt9efv.mongodb.net/shopApp?retryWrites=true&w=majority&appName=Udemy-lecutre')
	// 노트북 사양 때문에 atlas 사용중이라서 위와같은 url 사용해야함.
	.then(() => {
		console.log('connection open!')
	})
	.catch(err => {
		console.log(err)
	})


const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 20
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	onSale: {
		type: Boolean,
		default: false
	},
	// default : 직접 지정하지 않아도 기본 값을 설정한다.
	// ex) const bike = new Product({ name: 'Bike Helmet', price: 29.99 })
	categories: [String],//categories = 배열 요소
	qty: {
		online: {
			type: Number,
			default: 0
		},
		inStore: {
			type: Number,
			default: 0
		}
	}

});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike Helmet', price: 29.99 })
bike.save()
	.then(data => {
		console.log('it worked!')
		console.log(data);
	})
	.catch(err => {
		console.log('oh no error!')
		console.log(err)
	})