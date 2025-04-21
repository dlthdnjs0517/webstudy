// function hex(r, g, b) {
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
// 	return `rgb(${r},${g},${b})`;
// }


function makeColor(r, g, b) {
	const color = {}; //객체를 생성
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function () {
		const { r, g, b } = this;
		//여기서 this 는 color 객체를 가리킨다.
		return `rgb(${r},${g},${b})`;
	};
	color.hex = function () {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	// 팩토리 함수나 객체 리터럴에서 자주 쓰는 패턴.
	//객체 color 에 hex 라는 이름을 가진 함수를 추가하는 패턴이다.

	return color; //객체를 반환
}
const firstColor = makeColor(35, 255, 150);
