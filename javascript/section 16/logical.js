
// const pwd = prompt("Enter your password");
// if (pwd.length >= 6 && pwd.indexOf(' ') === -1) {
// 	console.log("VALID PASSWORD!");
// } else {
// 	console.log("INCORRECT FORMAT FOR PASSWORD!");
// }

// const age = -90;

// if (age >= 0 && age < 5 || age > 65) {
// 	console.log("FREE");
// } else if (age >= 5 && age < 10) {
// 	console.log("$10");
// } else if (age >= 10 && age < 65) {
// 	console.log("$10");
// } else {
// 	console.log("INVALID AGE");
// }

//&& 가 더 높은순위의 연산자임. ||보다 먼저 연산처리 됨.

// let firstName = prompt("ENTER YOUR FIRST NAME");
// if (!firstName) {
// 	firstName = prompt("TRY AGAIN!");
// }

// const age = -45;

// if (!(age >= 0 && age < 5 || age > 65)) {
// 	console.log("YOU ARE NOT A BABY OR A SENIOR");
// }

const day = 4;
switch (day) {
	case 1:
		console.log("monay");
	case 2:
		console.log("tuesday!");
	case 3:
		console.log("wednessday!");
	case 4:
		console.log("thursday!");
	case 5:
		console.log("friday!");
		break;
	default: console.log("we dont know!");
}

//정보처리기사 문제로도 출제되었었음. 
// 조건이 충족되어서 멈추는게 아니라 break 문이 있어야 멈춤.