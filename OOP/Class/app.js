// function hex(r, g, b) {
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
// 	return `rgb(${r},${g},${b})`;
// }


// function makeColor(r, g, b) {
// 	const color = {}; //객체를 생성
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function () {
// 		const { r, g, b } = this;
// 		//여기서 this 는 color 객체를 가리킨다.
// 		return `rgb(${r},${g},${b})`;
// 	};
// 	color.hex = function () {
// 		const { r, g, b } = this;
// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	}
// 	// 팩토리 함수나 객체 리터럴에서 자주 쓰는 패턴.
// 	//객체 color 에 hex 라는 이름을 가진 함수를 추가하는 패턴이다.

// 	return color; //객체를 반환
// }
// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();//'#23ff96'
// firstColor.rgb();//'rgb(35,255,150)'

// const black = makeColor(0, 0, 0);
// black.rgb(); //'rgb(0,0,0)'
// black.hex();//'#000000'

// black.hex === firstColor.hex
// //false, ===은 해당 항목이 같은 함수를 참조하는지 여부를 확인함.

// "h1".slice === "bye".slice
//true, 모든 배열은 Array라는 생성자 함수로 만들어진다.
//두 구문 모두 Array.prototype 을 참조하고 있어서 true라는 결과값이 나온것.
//메서드들이 공통으로 들어있기 때문에 배열 메서드를 사용했을 경우 모든 배열은 같은 곳에서 참조를 한다.

// -------생성자 함수의 프로토타입 객체들----------
// 배열 → Array.prototype
// 문자열 → String.prototype
// 객체 → Object.prototype
// 함수 → Function.prototype


// -------------생성자 함수----------------

// function Color(r, g, b) {

// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// Color.prototype.rgb = function () { //color에 대한 생성자 함수
// 	const { r, g, b } = this; //구조분해할당
// 	return `rgb(${r},${g},${b})`;
// 	// return `rgb(${this.r},${this.g},${this.b})`;
// }
// Color.prototype.hex = function () {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r},${g},${b},${a})`;
// };



// const color1 = new Color(255, 30, 100) // 새로운 빈 객체를 생성후 변수 저장
// const color2 = new Color(0, 0, 0);
//new 를 사용하게 되면 생성된 객체가 자동으로 prototype 객체와 연결됨
//즉, new 키워드: 객체 생성+ __proto__연결까지 자동으로 해주는 키워드

// color1.hex === color2.hex
//결과: true | 같은 prototype 메서드를 참조 했기 때문임

// -------------클래스 ----------------
class Color { //클래스, 생성자 함수명은 대문자로 시작
	constructor(r, g, b, name) {
		//constructor -> 인스턴스가 생성될 때 실행됨. 초기값을 지정할때 사용한다.
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
		//우선 객체의 속성을 먼저 추가해주고
	}
	innerRGB() {
		const { r, g, b } = this;
		// 그 다음 구조분해할당을 한다. 여기서 this 는 Color클래스로 생성한 인스턴스
		return `${r},${g},${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})` //같은 함수내에서의 메서드 호출방법
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()},${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%,${l}%)`;
	}
	fullySaturated() {
		const { h, s, l } = this;
		return `hsl(${h},100%,${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;//나머지 값
		return `hsl(${newHue},${s}%,${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this; // 이 함수에서 엑세스하는 값
		r /= 255;
		g /= 255;
		b /= 255;

		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			h = (b - r) / delta + 2;
		else
			h = (r - g) / delta + 4;
		h = Math.round(h * 60);

		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;

	}

}


const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

