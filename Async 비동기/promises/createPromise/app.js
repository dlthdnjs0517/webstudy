
// -----------------------------------------
// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		const rand = Math.random();
// 		setTimeout(() => {
// 			if (rand < 0.7) {
// 				resolve('YOUR FAKE DATA HERE');
// 			}
// 			reject('Request Error!')
// 		}, 1000)
// 	})
// }
// //결과 : fakeRequest의 status 는 fulfilled.
// // resolved(결과가 정해진 상태) = fulfilled (성공)/ rejected(실패)
// //참고로 pending은 아직 결과가 나오지 않은 것을 뜻함


// fakeRequest('/dogs/1')
// 	.then((data) => {
// 		console.log("DONE WITH REQUEST!")
// 		console.log("data is :", data)
// 	})
// 	.catch((err) => {
// 		console.log("oh no!", err)
// 	})
// -----------------------------------------

const delayColorChange = (color, delay) => {
	return new Promise((fulfilled, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			fulfilled();
		}, delay)
	})
}

//기존의 코드 
// const exDelayColorChange = (newColor, delay, doNext) => {
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = newColor;
// 		doNext?.();
// 	}, delay)
// }

delayColorChange('red', 1000)
	.then(() => delayColorChange('orange', 1000))
	.then(() => delayColorChange('yellow', 1000))
	.then(() => delayColorChange('green', 1000))
	.then(() => delayColorChange('blue', 1000))
	.then(() => delayColorChange('purple', 1000))