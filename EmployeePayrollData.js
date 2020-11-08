class EmployeePayrollData {
    // properties
    id;
    salary;

    // constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter methods
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    // method
    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Jonathan";
employeePayrollData.salary = 35000;
console.log(employeePayrollData.toString());