const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
	{
		username: 'fakermygoat',
		comment: 'lol this is so funny!'
	},
	{
		username: 'fakerpenguin',
		comment: 'he is so cute'
	},
	{
		username: 'onerluv',
		comment: 'what the!'
	},
	{
		username: 'geniusmonster',
		comment: 'i am insane!'
	},
]

app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
})
app.get('/comments/new', (req, res) => {
	res.render('comments/new');
})
app.post('/comments', (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment })
	res.redirect('/comments')
})



app.get('/tacos', (req, res) => {
	res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
	const { meat, qty } = req.body;
	res.send(`OK, here are your ${qty} ${meat}`);
})


app.listen(3000, () => {
	console.log('On port 3000!');
})