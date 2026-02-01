// function  -> 2 number addition
function sum(x,y){
    s = x+y;
    return s;

}
let result = sum(5,10);
console.log(result);

//Arrow functions
const sum = (x, y) => {
    return x + y;
}
let arrowsum = (x, y) => {
    return x + y;
};

//some array method
//filter
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => num > 2);
console.log(filtered);

//reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//map
let doubled = numbers.map(num => num * 2);
console.log(doubled);
