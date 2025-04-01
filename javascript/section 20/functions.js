//you are bound to learn a function.
//함수를 공부할 수 밖에 없다.
//다면체 주사위를 6개를 돌려서 랜덤으로 수를 얻을 수 있는 방법
// let die1 = Math.floor(Math.random() * 6) + 1;

//1. define function
function singSong() {
	console.log('DO');
	console.log('RE');
	console.log('MI');
}//함수 정의
singSong();//함수 실행

//2.arguments(인수)가 있는 함수

function greet(firstName) {
	console.log(`first name is ${firstName}`);
}
greet('chris');

//firstName은 parameter,즉 매개변수가 되고(정의된 변수)
//'chris'는 argument,전달인자이다.(호출될때 전달되는 실제 값)

//예제
function rant(hate) {
	console.log(hate.toUpperCase());
	console.log(hate.toUpperCase());
	console.log(hate.toUpperCase());
}

rant('i hate you');
//console.log안에서도 toUpperCase사용가능

//3. 여러개의 매개변수를 받을 수 있는 함수

function greet1(firstname, lastname) {
	console.log(`Hey there, ${firstname} ${lastname}`);
}

greet1('sanghyuk', 'lee');

function repeat(str, numTimes) {
	let result = '';
	for (let i = 0; i < numTimes; i++) {
		result += str;
	}
	console.log(result);
}

repeat('my idol is faker', 10);

//4. return 
// 함수 바깥으로 결과값을 저장하고 반환할 키워드가 필요 -> return
// 그리고 함수 실행을 사실상 중단.
function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return false;
	}
	return x + y;//if 구문 내의 return, 혹은 이 return 둘 중 하나만 실행됨.
	console.log('End of function!')//Unreachable code detected.
}

//<연습문제>
function lastElement(list) {
	if (list.length === 0) {
		//배열이 비어있을 경우 null을 반환-> 배열의 길이가 0이면 빈 배열.
		return null;
	} return list[list.length - 1];
}

//<연습문제>
function returnDay(dayNum) {
	const dayOfWeek = {
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednessday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday',
		7: 'Sunday'
	}
	if (dayNum > 7 || dayNum < 1) {
		return null
	} return dayOfWeek[dayNum]
}