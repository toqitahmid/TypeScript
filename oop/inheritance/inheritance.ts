class Employee{
    name: string;
    protected _salary: number;


    constructor(name: string, salary: number){
        this.name = name;
        this._salary = salary
    }

    describe(): string {
        return `
        Employee Name: ${this.name}
        Employee Salary: ${this._salary} BDT
        `
    }
}

class Manager extends Employee{
    employeeRole: string;
    teamMember: number;
    constructor(name: string, salary: number, employeeRole: string, teamMember: number){
        super(name, salary);
        this.name = name;
        this._salary = salary
        this.employeeRole = employeeRole;
        this.teamMember = teamMember
    }
    describe(): string {
        return `
        Employee Name: ${this.name}
        Employee Role: ${this.employeeRole}
        Employee Salary: ${this._salary}
        Team Member: ${this.teamMember}
        `
    }
}

const manager = new Manager("Araf", 25000,"Manager", 10);
console.log(manager);
console.log(manager.describe());