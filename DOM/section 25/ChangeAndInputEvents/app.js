const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', (e) => {
//     console.log("aaaaaaaa");
//     //타이핑인 요소의 값이 바뀐 뒤 포커스를 상실했을 때:
//     //값을 입력후 엔터를 쳤을 때,엔터를 치고 새로운 요소를 추가후 엔터를 눌렀을 때
//     //input 요소에 변경값이 있고, input 값 area 바깥을 클릭했을때
// })
// --------------------------
input.addEventListener('input', (e) => {
    console.log('input event!');
    //입력된 요소가 있을 때 이벤트 발생
    //ctrl c v 도 input 요소로 인식
    // 쉬프트,방향키는 영향을 주지 않는다
    console.log(e);
})

input.addEventListener('input', (e) => {
    h1.innerText = input.value;
    //입력되는 요소들이 실시간으로 h1에 입력되는 형식의 코드
})