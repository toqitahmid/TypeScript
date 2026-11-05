class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  get baseSalary(): number {
    return this.baseSalary;
  }

  set salaryWithBonus(newSalary: number){
    this.salary = newSalary;
  }
}

const employee = new Employee("Araf", 20000);
employee.salary = 40000;
console.log(employee.salary);
