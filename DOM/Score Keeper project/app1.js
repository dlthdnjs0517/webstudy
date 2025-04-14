const p1 = {
	score: 0,
	button: document.querySelector('#p1Btn'),
	display: document.querySelector('#firstSpan')
}
const p2 = {
	score: 0,
	button: document.querySelector('#p2Btn'),
	display: document.querySelector('#secondSpan')
}


const resetBtn = document.querySelector('#resetBtn');
const scoreSelect = document.querySelector('#scoreSelect');
let winScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
	if (!gameOver) {
		player.score += 1;
		if (player.score === winScore) {
			gameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
		//innerText는 display:none일 경우 무시됨.
		//목표점수에 도달하면 클릭을 하지 못하게 설정함
	}
}


p1Btn.addEventListener("click", function () {
	updateScores(p1, p2);
})
p2Btn.addEventListener("click", function () {
	updateScores(p2, p1);
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

	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
	// p1.score = 0;
	// p2.score = 0;
	// p1.display.textContent = 0;
	// p2.display.textContent = 0;
	// p1.display.classList.remove('has-text-success', 'has-text-danger');
	// p2.display.classList.remove('has-text-success', 'has-text-danger');
	// p1.button.disabled = false;
	// p2.button.disabled = false;
}