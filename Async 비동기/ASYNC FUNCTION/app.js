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