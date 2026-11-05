class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary
    }
    calculatePay(taxRate: number){
        return this.salary;
    }
}

class Manager extends Employee{
    override calculatePay(){
        return this.salary + 5000;
    }
};

class Developer extends Employee{
    position: string;
    workTime: string;

    constructor(name: string, salary: number, position: string, workTime: string){
        super(name, salary);
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.workTime = workTime;
    }

    override calculatePay(taxRate: number){
        return this.salary - (this.salary*taxRate);
    }
}

const employee = new Employee("Araf", 25000);
const manager = new Manager("Toqi", 30000);
const developer = new Developer("Sams", 20000, "Junior", "9am - 5pm")

console.log(employee.calculatePay(.1));
console.log(manager.calculatePay());

console.log(developer)
console.log(developer.calculatePay(.1))


