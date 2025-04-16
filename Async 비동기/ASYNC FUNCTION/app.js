// Promise 를 더 깔끔하게 정리해 주는 역할. 조미료의 역할을 수행함

// const sing = async () => {
// 	// throw new Error("uh oh")
// 	throw "OH  NO, PROBLEM!"//throw:개발자가 의도적으로 에러를 발생시키는 키워드
// 	return 'la la la'
// }

// sing()
// 	.then((data) => {
// 		console.log("promise fulfilled with :", data)
// 	})
// 	.catch(err => {
// 		console.log("OH NO, Promise rejected!")
// 		console.log(err)
// 	})
// 결과값:
// OH NO, Promise rejected!
// OH NO, PROBLEM!
// 에러가 발생했기 때문에 catch 함수를 콜백한 것을 확인 할 수 있음.




const login = async (username, password) => {
	if (!username || !password) throw 'Missing Credentials'
	if (password === 'asdfasdf') return 'WELCOME'
	throw 'Invalid Password'
}

login('asdf')
	.then(msg => {
		console.log('LOGGED IN!')
		console.log(msg)
	})
	.catch(err => {
		console.log('error!')
		console.log(err)
	})


const delayColorChange = (color, delay) => {
	return new Promise((fulfilled, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			fulfilled();
		}, delay)
	})
}
// delayColorChange('red', 1000)
// 	.then(() => delayColorChange('orange', 1000))
// 	.then(() => delayColorChange('yellow', 1000))
// 	.then(() => delayColorChange('green', 1000))
// 	.then(() => delayColorChange('blue', 1000))
// 	.then(() => delayColorChange('purple', 1000))

async function rainbow() {
	//await 키워드를 사용하면 지정된 시간이 지나고, 함수 실행뒤 다음 문장으로 넘어감
	await delayColorChange('red', 1000)
	await delayColorChange('yellow', 1000)
	await delayColorChange('orange', 1000)
	await delayColorChange('green', 1000)
	await delayColorChange('blue', 1000)
	await delayColorChange('indigo', 1000)
	return "all done!"
}

// rainbow().then(() => console.log("end of rainbow!"))

async function printRainbow() {
	await rainbow();
	console.log("end of rainbow!")
}
//console.log를 추가하면 .then을 쓰지 않아도 된다
//await: 비동기함수(promise)가 끝날때까지 기다려주는 역할을 한다.
//.then() : 비동기 작업 이후에 실행할 콜백을 등록
//async: 해당 함수 내에서 await를 쓸 수 있게 한다