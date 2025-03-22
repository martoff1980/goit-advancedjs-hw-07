/**
 * Ваше завдання полягатиме у створенні двох класів – Employee та Manager.
 *
 *   Клас Employee повинен включати:
 *
 *   властивість name, яка буде доступна всім.
 *   властивість department, яка буде доступна лише всередині класу Employee.
 *   salary, яке буде доступне лише всередині класу Employee та його підкласів.
 *
 *
 *   Клас Manager повинен бути підклас класу Employee
 *
 *   Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.
 *
 * @format
 */

class Employee {
	// Заповніть модифікатори доступу
	public name: string;
	public department: string;
	public salary: number;

	constructor(name: string, department: string, salary: number) {
		this.name = name;
		this.department = department;
		this.salary = salary;
	}

	getEmployeeDetails() {
		return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
	}
}

class Manager extends Employee {
	// Реалізуйте конструктор та збільшіть salary на 10000
	constructor(name: string, department: string, salary: number) {
		super(name, department, salary);
		this.salary += 10000;
	}
}

const employee = new Employee('John Smith', 'IT', 5000);
const manager = new Manager('Jane Wine', 'IT', 5000);
console.log(employee.getEmployeeDetails()); // Name: John Smith, Department: IT, Salary: 5000
console.log(manager.getEmployeeDetails()); // Name: Jane Wine, Department: IT, Salary: 15000

export {};
