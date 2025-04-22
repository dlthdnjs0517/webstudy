class Pet {
	constructor(name, age) {
		console.log("IN PET CONSTRUCTOR!")
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}


class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		console.log("IN CAT CONSTRUCTOR!")
		super(name, age)
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWWWW!!!!';
	}
}
// Cat의 인스턴스를 생성하면,
//IN CAT CONSTRUCTOR 실행 후 IN PET CONSTRUCTOR 가 실행된다.
//super 키워드가 super 클래스의 참조항목이 된다.






class Dog extends Pet {

	bark() {
		return 'WOOOFFF!!';
	}
	eat() {
		return `${this.name} scarfs its food!`;
	}
}
//extends 를 이용하여 Pet 의 기능을 사용할 수 있도록 한다.
//상속받은 class에 존재하는 메서드를 재정의할 수 있다.