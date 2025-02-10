// Task 1: Function Declaration //

function calculateInvoice(subtotal, taxRate, discount){ // declares the function and its variables
    let total = (subtotal + (subtotal * taxRate) - discount).toFixed(2); // declares what formula should be used, with use of .tofixed(2) to set answer to two decimal points
    return `Total Invoice: $${total}`; // Allows console.log to return amount from total formula
};

console.log(calculateInvoice(100,0.08,5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500,0.1,20)); // Expected output: "Total Invoice: $530.00"