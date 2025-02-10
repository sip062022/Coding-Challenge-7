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

// Task 3: Arrow Function //

const calculateLoyaltyDiscount = (amount, years) => { // defines the function and its variables
    let discount = 0;  // declares discount variable
    if (years >= 5) discount = (amount * .85).toFixed(2); // If years are >=5, the final discounted price is a 15% discount (amount * .85)
    else if (years >= 3) discount = (amount * .9).toFixed(2); // If years are >= 3, final discounted price is 10% discount (amount * .9)
    else discount = (amount * .95).toFixed(2); // for all other years (less than 3 years), final discounted price is 5% discount (amount * .95)
    console.log(`Discounted Price: $${discount}`); // logs discounted price based off discount formula using template literal
};

calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments //

function calculateShippingCost(weight, location, expedited = false) { // defines function and variables
    let shipping = 0; // declares the shipping cost variable
    if (location === "USA") shipping = (weight*0.5)+5; // If location is USA and expedited is false, weight equals 0.5*weight plus $5
    else if (location === "Canada") shipping = (weight*0.7)+10; // If location is Canada and expedited is false, weight equals 0.7*weight plus $10
    if (expedited === true) { // adds additional condition that if the package is expedited
        shipping += 10; // $10 are added to shipping cost
      };  
    console.log(`Shipping Cost: $${shipping.toFixed(2)}`); // logs shipping cost as template literal
};

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"