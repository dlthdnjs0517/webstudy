const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');

mongoose.connect('mongodb+srv://Admin:mlPjdzKISG3wQ9PC@udemy-lecutre.hlt9efv.mongodb.net/farmStand?retryWrites=true&w=majority&appName=Udemy-lecutre')
	// 노트북 사양 때문에 atlas 사용중이라서 위와같은 url 사용해야함.
	.then(() => {
		console.log('Mongo connection open!')
	})
	.catch(err => {
		console.log(err)
	})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ exteneded: true }))
app.use(express.json());
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];



app.get('/products', async (req, res) => {
	const products = await Product.find({})
	res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
	res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	res.redirect(`products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id)
	res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id)
	res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findByIdAndUpdate(id, req.body, {
		runValidators: true, new: true
	});
	// findById는 개별 특성을 업데이트 하고 유효성 검사를 실행하는 .save를 사용하면 된다.
	//혹은 runvalidator : true 로 설정하면 됨
	res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
	const { id } = req.params;
	const deletedProduct = await Product.findByIdAndDelete(id);
	res.redirect('/products');

})

app.listen(8080, () => {
	console.log('app is listening on port 8080!')
})