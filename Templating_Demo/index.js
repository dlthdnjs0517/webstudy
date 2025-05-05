const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');//확장자가 .ejs 임을 명시하는 문장
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
	res.render('home');//home.ejs 라고 작성하지 않아도 됨
})
app.get('/dogs', (req, res) => {
	const dogs = [
		'Mangchi', 'Owol', 'Gangchi', 'Dream'
	]
	res.render('dogs', { dogs })
})
app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (data) {
		res.render('subreddit', { ...data });
	} else {
		res.render('notfound', { subreddit })
	}

})
app.get('/rand', (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
})

app.listen(3000, () => {
	console.log("listening on port 3000");
})
