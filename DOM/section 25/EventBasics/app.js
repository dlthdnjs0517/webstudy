const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}
function scream() {
    console.log('AHHHHHHHHH');
    console.log('STOP TOUCHING ME!');

}
btn.onmouseenter = scream; // console창을 확인해야 볼 수 있음

document.querySelector('h1').onclick = alert('you clicked the h1!');
//위 코드를 실행한 경우 h1을 클릭하지 않아도 alert가 뜸. 즉 함수가 바로 실행되어버림.
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
//위 코드를 실행해야 h1을 눌렀을 때 alert 함수가 실행됨. 

//어떠한 이벤트도 모두 전달할 수 있는 제너릭 메서드
//가장 많이 쓰이는 것은 ! addEventListener !

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert("clicked!")
})

function twist() {
    console.log('TWIST!');
}
function shout() {
    console.log('SHOUT!');
}
const tasBtn = document.querySelector('#tas');
// tasBtn.onclick = twist;// 버튼 클릭시 twist 함수 호출
// tasBtn.onclick = shout;// 버튼 클릭시 shout 함수 호출
//특성처럼 한가지만 가능함, shout로 덮어쓰기 된 것

//해결방법:
tasBtn.addEventListener('click', twist, { once: true });
//세번쨰 인자로 {once : true}를 추가하면, 함수가 한번만 실행됨
tasBtn.addEventListener('click', shout);