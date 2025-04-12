const p1 = document.querySelector('#p1Btn');
const p2 = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#resetBtn');
const firstSpan = document.querySelector('#firstSpan');
const secondSpan = document.querySelector('#secondSpan');
const scoreSelect = document.querySelector('#scoreSelect');


let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let gameOver = false;


p1.addEventListener("click", () => {
	if (!gameOver) {
		p1Score += 1;
		if (p1Score === winScore) {
			gameOver = true;
		}
		firstSpan.textContent = p1Score;
		//innerText는 display:none일 경우 무시됨.
		//목표점수에 도달하면 클릭을 하지 못하게 설정함
	}
})
p2.addEventListener("click", () => {
	if (!gameOver) {
		p2Score += 1;
		if (p2Score === winScore) {
			gameOver = true;
		}
		secondSpan.textContent = p2Score;
	}
})
scoreSelect.addEventListener('change', function () {
	//!!!!화살표 함수 안에서 this는 상위 스코프의 this를 따라감!!!!(쓰면 안됨)
	//그래서 undefined로 떴던 것
	winScore = parseInt(this.value);
	reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	firstSpan.textContent = 0;
	secondSpan.textContent = 0;
}