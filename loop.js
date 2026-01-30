/*console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");*/

//calculate the sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("The sum of the first 10 natural numbers is: " + sum);

//while loop
let i = 1;
let add = 0;
while (i <= 10) {
    add += i;
    i++;
}
console.log("The addition of the first 10 natural numbers is: " + add);

//do while loop
let j = 1;
let total = 0;
do {
    total += j;
    j++;
} while (j <= 10);
console.log("The addition of the first 10 natural numbers is: " + total);

//for-of loop
let total_sum = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    total_sum += num;
}
console.log("The addition of the first 10 natural numbers is: " + total_sum);