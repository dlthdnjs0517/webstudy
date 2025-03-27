// let ran = Math.random()
// if (ran < 0.5) {
// 	console.log("your number is under 0.5")
// 	console.log(ran)
// }
// if (ran >= 0.5) {
// 	console.log("your number is greater than 0.5")
// 	console.log(ran)
// }

// const dayofWeek = 'friday';
// if (dayofWeek === 'Monday') {
// 	console.log("I HATE MONDAY");
// } else if (dayofWeek === 'Saturday') {
// 	console.log("I LOVE SATURDAYS");
// } else if (dayofWeek === 'friday') {
// 	console.log("I also love fridays");
// } 

// const age = prompt('enter your age');
// if (age < 5) {
// 	console.log("You are a chiild. you get in for free!");
// } else if (age < 10) {
// 	console.log("you are a child, you pay $10");
// } else if (age < 65) {
// 	console.log("you are an adult! you pay $20");
// } else {
// 	console.log("you are a senior, pay $10");
// }

// const pwd = prompt("enter your password");
// if (pwd.length >= 6) {
// 	if (pwd.indexOf(' ') === -1) {
// 		//indexOf(' ')는 문자열에서 특정 문자열을 찾고, 검색된 문자열이 첫번째로 나타나는 위치 index를 리턴.
// 		// 이 경우 pwd에 공백이 들어있는지 확인하는 구문. 찾는 문자열이 없으면 -1 리턴.
// 		// 즉, 공백을 찾았는데 공백이 없을경우 -1을 리턴함.
// 		console.log("valid password");
// 	} else {
// 		console.log("password cannot contain spaces!");
// 	}
// }
// else {
// 	console.log("password too short! Must be 6+ characters");
// }

// const userInput = prompt("enter something");

// if (userInput) {
// 	console.log("TRUTHY!");
// } else {
// 	console.log("FALSY!"); //빈문자열은 falsy로 취급
// }

if (0) {
	console.log('TRUTHY');
} else {
	console.log("FALSY");
}
if (false) {
	console.log('TRUTHY');
} else {
	console.log("FALSY");
}
if (undefined) {
	console.log('TRUTHY');
} else {
	console.log("FALSY");
}