abstract class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    abstract display(): string;
}

class Developer extends Employee{
    display():string{
      return `
        Employee Name : ${this.name}
        Employee Salart : ${this.salary}
        `;
    }
}

const developer = new Developer("Araf", 25000);
console.log(developer)