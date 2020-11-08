class EmployeePayrollData {
    // properties
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...parameters) {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    // getter and setter methods
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;    
        }
        else throw "Incorrect Name!";
    }

    // method
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric"};
        const employeeDate = this.startDate === undefined ? "undefined" :
                                this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
                ", gender=" + this.gender + ", startDate=" + employeeDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "marko";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}
let newEmployeePayrollData = new EmployeePayrollData(2, "Rachel", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());