class Employee{
    name: string;
    private salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary
    }
}


const employee = new Employee("Araf", 25000);
// employee.salary = 30000;
console.log(employee)