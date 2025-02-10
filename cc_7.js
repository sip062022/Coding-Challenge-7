// Task 1: Function Declaration //

function calculateInvoice(subtotal, taxRate, discount){ // declares the function and its variables
    let total = (subtotal + (subtotal * taxRate) - discount).toFixed(2); // declares what formula should be used, with use of .toFixed(2) to set answer to two decimal points
    return `Total Invoice: $${total}`; // Allows console.log to return amount from total formula
};

console.log(calculateInvoice(100,0.08,5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500,0.1,20)); // Expected output: "Total Invoice: $530.00"

// Task 2: Fucntion Expression //

function calculateHourlyWage(salary, hoursPerWeek){ // declares function and its variables
    let hourlyWage = (salary / (hoursPerWeek * 52)).toFixed(2); // declares formula to be used, with .toFixed(2) to set decimal point to 2 spots
    return `Hourly Wage: $${hourlyWage}`; // Returns the result from the hourly wage formula as template literal
};

console.log(calculateHourlyWage(52000,40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000,35)); // Expected output: "Hourly Wage: $41.21"