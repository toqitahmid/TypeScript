class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary
    }

    get baseSalary(): number{
        return this.baseSalary;
    }
}

const employee = new Employee("Araf", 20000);
console.log(employee.salary)