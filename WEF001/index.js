console.log("Hello, World!")
let sum = 1 + 1;
sum += 1;
//equals to sum = sum + 1;
console.log(sum);

var x = 1;
let y = 2;
const z = 3;
w = 123;

console.log("x + y:" + (x + y));
console.log(`y - z: ${y - z}`);
console.log(`z * w: ${z * w}`);
console.log(`w / x: ${w / x}`);
console.log(`w % x: ${w % x}`);

const PTS = 27.5;
const REB = 8.5;
const AST = 8.0;
const STL = 1.3;
const BLK = 0.6;
const missedFG = 19.8 - 10.2;
const missedFT = 7.7 - 5.1;
const T0 = 3.5;
const GP = 51;

const efficiency = (PTS + REB + AST + STL + BLK - missedFG - missedFT - T0) / GP;

console.log("Efficiency of Leborn James is "+efficiency);