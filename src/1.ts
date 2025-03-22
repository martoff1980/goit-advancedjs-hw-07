/**
 * Клас Student, який містить три властивості: name, age та grade.
 *   Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення,
 *   напишіть скорочену ініціалізацію.
 *
 * @format
 */

class Student {
	constructor(public name: string, public age: number, public grade: string) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}
}

// Приклад використання класу Student
const user = new Student('John Smith', 20, 'A');
console.log(user);

export {};
