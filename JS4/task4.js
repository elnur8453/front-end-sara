// Tapshiriq 1

let a = 12345;
let b = 98765;
let digit = a*b;
let c = digit.toString();
console.log(c);
console.log(c[5]);


// Tapshiriq 2

let user = prompt("Write your full name");

// 1.
console.log(user.replaceAll(" ","").length);

// 2.
console.log(user.includes("e"));

// 3.
console.log(user.startsWith("code"));

// 4.
console.log(user.endsWith("code"));

// 5.
console.log(user.replaceAll("t","####"));