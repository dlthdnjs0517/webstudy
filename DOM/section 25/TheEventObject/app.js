document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);//객체에 대한 정보를 담고 있음
})

const input = document.querySelector('input');
// input.addEventListener('keydown', () => {
//     console.log("KEYDOWN");
// //키를 누르면 console 창에 keydown을 띄움
// })
// input.addEventListener('keyup', () => {
//     console.log("KEYUP");//키를 눌렀다가 떼면 console 창에 keyup을 띄움
//두 경우 모두 어떤 키를 눌렀는지는 알 수 없음
// -----------------------------------------------

input.addEventListener('keydown', (e) => {
    // console.log(e.key);// w
    // console.log(e.code);// 키보드의 실제 위치값
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("Down!");
            break;
        case 'ArrowLeft':
            console.log("Left!");
            break;
        case 'ArrowRight':
            console.log("Right!");
            break;
        default:
            console.log("Ignored!");

    }
})