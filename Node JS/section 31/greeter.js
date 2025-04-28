const args = process.argv.slice(2);
for (let arg of args) {
	console.log(`hi there,${arg}`);
}
//slice(2)는 process.argv의 0번째, 1번째 항목을 제외하고 나머지 추출
//즉, 명령줄 인수만을 추출.

//터미널 코드
// node js % node greeter.js mangchi tori
//결과
// hi there,mangchi
// hi there,tori

