// console.log('sending request to server!');//js가 처리
// setTimeout(() => {
// 	console.log('here is your data from the server...')
// }, 3000)//setTimeOut, 즉 시간 기록은 브라우저가 처리
// console.log('I am the at the end of the file');// js가 처리



//n초 뒤 background 색깔이 바뀌는 코드를 작성하기
//중첩
// setTimeout(() => {
// 	document.body.style.backgroundColor = 'red'
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = 'orange'
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = 'yellow'
// 			setTimeout(() => {
// 				document.body.style.backgroundColor = 'green'
// 				setTimeout(() => {
// 					document.body.style.backgroundColor = 'blue'
// 				}, 1000)
// 			}, 1000)
// 		}, 1000)
// 	}, 1000)
// }, 1000)

//generic function
const delayedColorChange = (newColor, delay, doNext) => {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor;
		doNext?.();//doNext가 존재할 때만 실행
		//그냥 donext() 함수만 실행한다고 가정했을때, 
		// 만약 doNext가 undefined/null이면 TypeError
	}, delay)
}

delayedColorChange('red', 3000, () => {
	delayedColorChange('orange', 3000, () => {
		delayedColorChange('yellow', 3000, () => {

		})
	})
});

//콜백 함수의 중첩:

searchMoviesAPI('amadeus', () => {
	saveToMyDB(movies, () => {
		//if it works, run this:
	}, () => {
		//if it doesn't work, run this:
	})
}, () => {
	//if API is down, or request failed.
})

//만약 API를 이용해서 영화를 찾으려고 할때, 찾는 영화를 db로 추가한다고 하면
//1. 제대로 작동했을 경우, 2. 제대로 작동하지 않았을 경우로 나눠서 생각해야하고
// API 자체가 작동했는지 안했는지도 판단해야 한다.
//이 모든것을 염두에 두고 코드를 짜게 되면 callback 함수 지옥에 빠진다