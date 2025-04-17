// fetch("https://swapi.info/api/people/1")//get요청이 자동으로
// 	//fetch가 promise를 return함. url에 send request 됨.
// 	.then(res => {//성공하게 된다면 .then()구문이 실행됨
// 		console.log("fulfilled!", res)
// 		//fetch 하자마자 응답 : res(객체)가 화면에 표시됨
// 		return res.json()
// 		// res.json().then(data => (console.log("JSON DONE", data)))
// 		//res의 본문이 불완전하고 몇몇 정보가 빠져있기 떄문에 .json()으로 promise를 반환.
// 	})
// 	.then(data => {
// 		console.log(data);
// 	})

// 	.catch(e => {
// 		console.log("ERROR!!", e)
// 	})


// fetch("https://swapi.info/api/people/1")//비동기함수로 데이터 요청
// 	.then(res => {//요청 성공시
// 		console.log("fulfilled!", res) //fulfilled 문구와 함께 res 출력
// 		return res.json() // 응답의 body를 json으로 파싱(정보 누락 및 객체형식으로 리턴) 
// 	})
// 	.then(data => {
// 		console.log(data);//파싱된 데이터를 출력
// 		return fetch("https://swapi.info/api/people/2")//그리고 2번째 요청
// 	})
// 	.then(res => {//2번째 요청 성공시
// 		console.log("SECOND REQUEST FULFILLED");
// 		return res.json();
// 	})
// 	.then(data => {
// 		console.log(data);//처리 성공! 파싱된 데이터를 출력
// 	})


// 	.catch(e => { //요청이 실패할 경우
// 		console.log("ERROR!!", e)
// 	})

const loadStarWarsChar = async () => {
	try {
		const res = await fetch("https://swapi.info/api/people/1");
		const data = await res.json();
		console.log(data)
		const res2 = await fetch("https://swapi.info/api/people/2");
		const data2 = await res2.json();
		console.log(data2)

	}
	catch (e) {
		console.log("ERROR!!", e);
	}
};
loadStarWarsChar();