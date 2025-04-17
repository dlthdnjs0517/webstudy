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