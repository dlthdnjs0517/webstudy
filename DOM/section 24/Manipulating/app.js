const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src)
// }
// 모든 img의 src 값이 출력됨

// for (let img of allImages) {
//     img.src = 'https://plus.unsplash.com/premium_photo-1709901922298-0a3eb89b7e79?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// }
//모든 사진이 바뀜

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
// }
//1) tag 이름으로 검색하는 방법
// document.querySelector('p');
//가장 처음으로 일치하는 값을 리턴한다.(실제로는 tag'p'는 여러개)

//2) id 이름으로 선택하는 방법
// document.querySelector('#banner')
// <img id="banner" src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="">

//3) class 이름으로 선택하는 방법
// document.querySelector('.square');

// 2번째 요소를 선택하는 방법
// document.querySelector('img : nth-of-type(2)')
//square 라는 클래스를 지닌 두번째 이미지의 정보 출력

//4) querySelectorAll
const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href)
}
//paraghraph 안에 있는 모든 anchor tag의 출처들을 출력