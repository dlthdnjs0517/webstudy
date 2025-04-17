//JSON JavaScript Object Notation, 계속해서 데이터를 전송하는 포맷
const data = `{
  "ticker": {
    "base": "BTC",
    "target": "USD",
    "price": "19237.26068690",
    "volume": "10958.37590084",
    "change": "-62.86038928"
  },
  "timestamp": 1662622923,
  "success": true,
  "error": ""
}`;
//api 호출시 실행되는 결과값
//유효한 javascript 객체로 전환하려면 JSON.parse()명령어를 사용하면 된다.
//만약 위 코드에서 가격값만 추출하고 싶다면,
const parsedData = JSON.parse(data);
parsedData.ticker.price// ticker 내부에 여러 값 중 price만 추출


//객체를 json 포맷으로 바꾸는 방법: JSON.stringfy()
const dog = { breed: 'lab', color: 'black', isAlive: true, owner: undefined }
console.log("결과값:", '{"breed":"lab","color":"black","isAlive":true}')

//HTTP VERB - GET Request : 정보를 가져올 때 사용하는 명령어

//HTTP STATUS CODE : http 응답 코드 ex) 404 not found, 200 정상

//URL에 바꿀 수 있는 변수가 있는 경우\
console.log(" ':' 변수를 표시하는 방법 ");
console.log("https://api.tvmaze.com/schedule?country=US&date=2014-12-01")
//-> 두개의 쿼리문자열을 활용한 경우

//HTTP HEADER : 헤더는 요청과 함께 정보를 전달하는 방식. 
//메타데이터 같은 키-값 쌍에 해당한다.

//XHR : XMLHttpRequest 를 통한 요청 방법
const req = new XMLHttpRequest();
req.onload = function () {
	//error가 없을 떄 실행됨
	console.log("IT LOADED!");
	const data = JSON.parse(this.responseText);
	console.log(data.name, data.height);
};
req.onerror = function () {
	//error가 있을 때 실행됨
	console.log("ERROR!!!");
	console.log(this);
};
req.open("GET", "https://swapi.info/api/people/1")
req.send();