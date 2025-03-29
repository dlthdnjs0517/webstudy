let max = parseInt(prompt("Enter the maximum number!"));
//parseInt -> 형변환 연산자, 문자열에 포함된 숫자를 찾아서 number로 형변환.
//문자열이 숫자로 시작되면 숫자만을 리턴.
//문자로 시작하거나 숫자를 포함하지 않는 문자열은 NaN 반환.
//boolean값에서 false로 평가되는 값(falsy)
//if(false),if(null),if(undefined),if(0),if(NaN),if('')
while (!max) {
	//max가 truthy한 값이면 false, max가 falsy한 값이면 true. 
	// 즉, max가 숫자면 !max가 false가 되어 루프 종료. 
	// max가 NaN이면 !max는 true가 되어 루프 반복
	max = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
	if (guess === 'q') break;
	attempts++;
	if (guess > targetNum) {
		guess = prompt("TOO high! Enter a new guess");
	} else {
		guess = prompt("TOO low! Enter a new guess");
	}
}
if (guess === 'q') {
	console.log("OK,YOU QUIT!")
}
console.log("CONGRATS YOU WIN!");
console.log(`you got it! It took you ${attempts} guesses`);