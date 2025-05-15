const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/dog', (req, res) => {
	res.send('Woof!')
})


app.listen(8080, () => {
	console.log('app is listening on port 3000!')
})