
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
	.then(() => delayColorChange('white', 1000))


const fakeRequest = (url) => {//url을 받아서 Promise를 return 하는 함수
	return new Promise((fulfilled, reject) => {
		const delay = Math.floor(Math.random() * (4500)) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject("connection time out ;(")
			} else {
				fulfilled(`here is your fake data from ${url}`)
			}
		}, delay)
	})
}

async function makeTwoRequests() {
	try {
		let data1 = await fakeRequest('/page1');
		//fakeRequest('/page1')이 끝날때까지 기다림.
		console.log(data1);//결과는 data1에 저장되고 출력됨.
		let data2 = await fakeRequest('/page2');//첫요청이 끝나야 두번째 요청 시작됨
		console.log(data2);
	} catch (e) {//fakeRequest()중 하나라도 실패하면 catch 블록이 실행됨
		//e는 error itself.
		console.log("caught an error!");
		console.log("error is:", e);
		//promise가 reject 된 값
	}
}