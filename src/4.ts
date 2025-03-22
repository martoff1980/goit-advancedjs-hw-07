/** @format */
class Key {
	private signature: number;

	constructor() {
		this.signature = Math.random();
	}

	getSignature(): number {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {
		this.key = key;
	}

	getKey(): Key {
		return this.key;
	}
}

abstract class House {
	protected door: boolean = false;
	protected key: Key;
	private tenants: Person[] = [];

	comeIn(person: Person): void {
		if (this.door) {
			console.log('Welcome');
			this.tenants.push(person);
		}
	}

	abstract openDoor(key: Key): void;
}

class MyHouse extends House {
	constructor(key: Key) {
		super();
		this.key = key;
	}

	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
			console.log('Opening the door');
		} else {
			console.log('Access denied');
		}
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
