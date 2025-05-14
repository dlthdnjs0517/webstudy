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
		min: [0, 'price must be positive ya dodo!']
		//첫번째 인자에는 적용시킬 최소수량, 두번째 인자는 에러메세지
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
	},
	size: {
		type: String,
		enum: ['S', 'M', 'L']
		//enum: 이 필드는 정해진 값 중 하나만 가질수있다,하고 범위를 제한하는 기능을 수행함.
	}

});
// productSchema.methods.greet = function () {
// 	console.log('HELLOO !! HI !!! HOWDY!')
// 	console.log(`-from ${this.name}`)
// } 인사 함수용

productSchema.methods.toggleOnSale = function () {
	this.onSale = !this.onSale;
	return this.save();
	// foundProduct.onSale = !foundProduct.onSale
	// foundProduct.save() 랑 같은 역할
}//onSale 항목 토글하는 함수

productSchema.statics.fireSale = function () {
	return this.updateMany({}, { onSale: true, price: 0 })
}

// productSchema.methods.addCategory = function (newCat) {
// 	this.categories.push(newCat);
// 	return this.save();
// }

const Product = mongoose.model('Product', productSchema);

// const findProduct = async () => {
// 	const foundProduct = await Product.findOne({ name: 'Bike Helmet' })
// 	foundProduct.greet();
// } 인사 함수



// const findProduct = async () => {
// 	const foundProduct = await Product.findOne({ name: 'Bike Helmet' })
// 	console.log(foundProduct)
// 	await foundProduct.toggleOnSale();
// 	console.log(foundProduct)// 특정 product 에 대한 onSale 특성을 토글하는 메서드
// 	await foundProduct.addCategory('Outdoors')
// 	console.log(foundProduct)
// }

Product.fireSale().then(res => { console.log(res) })

// findProduct();
//결과 :
//HELLOO !! HI !!! HOWDY!
//-from Bike Helmet



// const bike = new Product({ name: 'Cycling Jersy', price: 59.50, categories: ['Cycling'], size: 'S' })
// bike.save()
// 	.then(data => {
// 		console.log('it worked!')
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		console.log('oh no error!')
// 		console.log(err)
// 	})

// Product.findOneAndUpdate({ name: 'Tire pump' }, { price: -10.99 }, { new: true, runValidators: true })
// 	.then(data => {
// 		console.log('it worked!')
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		console.log('oh no error!')
// 		console.log(err)
// 	})
//==========================================
//database의 특성상 유효성 검사는 create에만 이루어져서 -10.99가 적용되어 버림 
//update 할때도 유효성 검사 시행-> runValidators:true 로 설정하기