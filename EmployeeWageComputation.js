console.log("Welcome to Employee Wage Computation Program\n"); 

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_A_MONTH = 160;

function getEmployeeHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOUR; 
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}

function calulateWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let totalEmpHours = 0;
let totalWorkingDays = 0;
let employeeDailyWageArray = new Array();
while (totalEmpHours <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getEmployeeHours(empCheck);
    employeeDailyWageArray.push(calulateWage(empHours));
    totalEmpHours += empHours;
    if(totalEmpHours > 160 ) totalEmpHours = 160;
}

// Total Wage Using Array forEach or Reduce method
let totalEmployeeWage = 0;
function sum(dailyWage) {
    totalEmployeeWage += dailyWage;
}

employeeDailyWageArray.forEach(sum);
console.log("Total Working Days: "+ totalWorkingDays +" Hours: " + totalEmpHours +
             " Employee Wage: "+ totalEmployeeWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("Total Wage Using Reduce: " + employeeDailyWageArray.reduce(totalWages));

// Day With Day's Wage Using Array Map Helper Function
let dayCounter = 0;
function mapDayWithDayWage(dailyWage) {
    dayCounter++;
    return dayCounter + " = " + dailyWage;
}
let mapDayWithDayWageArray = employeeDailyWageArray.map(mapDayWithDayWage);
console.log("Daily Wage Map ")
console.log(mapDayWithDayWageArray);

// Days When Employee Earned Full Time Wage
function checkFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithDayWageArray.filter(checkFullTimeWage);
console.log("Days When Full Time Wage Earned");
console.log(fullDayWageArray);

// The First Occurrence when Fulltime wage was earned
console.log("First Time FullTime Wage was earned on Day: " + mapDayWithDayWageArray.find(checkFullTimeWage));

// Check if every element of Full Day Wage Array is having fulltime wage
console.log("Is all element have full time wage: " + fullDayWageArray.every(checkFullTimeWage));

// Check If Employee has worked part time any day
function checkPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("If Any Part Time Wage: " + mapDayWithDayWageArray.some(checkPartTimeWage));

// Number Of Days Employee Worked
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0) return numberOfDays+1;
    return numberOfDays;
}
console.log("Number Of Days Employee Worked: " + employeeDailyWageArray.reduce(totalDaysWorked,0));