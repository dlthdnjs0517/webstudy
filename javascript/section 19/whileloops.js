// <while loops>
// while (조건문) { 조건문이 참인 동안 실행할 구문이 계속 실행됨.
// 	실행할 구문
// }
// let num = 0;
// while (num < 10) {
// 	console.log(num);
// 	num++;
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//num은 10까지 증가하기는 하는데, while 조건문인 (num<10)에 위반되기 떄문에
//실행되지는 않음.

//-무한루프 while문 예시 -
//정답을 맞출때까지 계속 루프됨

// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code. . .");
// while (guess !== SECRET) {
// 	guess = prompt("enter the secret code . . .");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey,say something!")
// while (true) {
// 	input = prompt(input); // 프롬프트가 떴을 때 입력한 것이 프롬프트 구문으로 뜸.
// 	if (input.toLowerCase() === "stop copying me") break;//stop copying me 가 입력될때까지 반복.
// }
// console.log("ok you win!")
