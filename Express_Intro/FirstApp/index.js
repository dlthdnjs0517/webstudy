const express = require("express");
const app = express(); //express를 실행하여 return값을 변수에 저장

// app.use((req, res) => {
// 	console.log("we got a new request")
// 	// res.send("hello! we got your request! this is a response!")
// 	res.send('<h1>this is my webpage!</h1>')//res.send는 한번만 실행
// }); //요청과 응답 사이에서 거쳐가는 함수들

app.get('/', (req, res) => {
	res.send('Welcome to the homepage!');
})
app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.send(`<h1> Browsing the ${subreddit} subreddit</h1>`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
	const { subreddit, postId } = req.params;//키-값 쌍이 있는 req.params
	res.send(`<h1> Viewing post Id: ${postId} and ${subreddit} subreddit</h1>`);
})
// : 은 변수이다.

app.post('/cats', (req, res) => {
	res.send('Post request to /cats!!!! this is different than a get request!')
})
app.get('/cats', (req, res) => {
	res.send('MEOW!');
})

app.get('/dogs', (req, res) => {
	res.send("WOOF!");
})

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send('Nothing found If Nothing Search! ');
	}
	res.send(`<h1> Search results for: ${q}</h1>`);
})


app.get('*splat', (req, res) => {
	res.send(`I don't know that path!`);
})
// 이 친구는 위에 명시된 루트 이외의 것이 입력되면 다음과 같이 동작한다는 뜻이다.
// 위치는 무조건 맨 마지막에 와야함


// 수업 내용과 버전이 달라서 express 공식 페이지를 확인해본 결과,
// '*' 대신 '*splat' 이나 '/{*splat}' 을 첫번쨰 인수로 넣어야 한다.

app.listen(3000, () => {
	console.log("LISTENING ON PORT 3000!")
	//서버를 시작하고 특정 포트나 호스트에 연결되는 것을 확인하는 메서드
	//서버가 실행되면 얘도 실행됨
});