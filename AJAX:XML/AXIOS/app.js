//AXIOS : HTTP 요청의 생성과 처리를 최대한 간소화할 목적으로 만들어짐.
//: A library for making http Requests.
// axios.get("https://swapi.info/api/people") //요청
// 	.then(res => { // 요청 성공시 응답 
// 		console.log("RESPONSE :", res); //return 된 promise 값
// 	})
// 	//이전에 쓰던 메서드와 달리 이미 json이 구문분석되어 결과가 data 필드에 있음
// 	.catch((e) => {
// 		console.log("ERROR", e)
// 	})


const getStarWarsPerson = async (id) => {
	try {
		const res = await axios.get(`https://swapi.info/api/people/${id}`)
		console.log(res.data);
	} catch (e) {
		console.log("Error", e);
	}
}
getStarWarsPerson(5);
getStarWarsPerson(10);

// ===============================
const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');
const addNewJoke = async () => {
	const jokeText = await getDadJoke();
	const newLI = document.createElement('li')
	newLI.append(jokeText);
	jokes.append(newLI)
}
const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } }
		//header 따로 지정
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		//공식: axios.get(url, config)
		//url → 요청을 보낼 주소 (필수)
		// config → 헤더, 파라미터, 인증, 타임아웃 등 각종 옵션 설정 (선택)
		return res.data.joke
	}
	catch (e) {
		return "no jokes avaliable, sorry"
	}

}
btn.addEventListener('click', addNewJoke)

