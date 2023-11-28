//Prompt 
//Write a JavaScript program that uses a for loop to print the even numbers from 2 to 10 to the console.


for ( var i=2; i<=10; i++){
    console.log(i)
}

//Create a program that prints the multiplication table for the number 5 using a for loop. Print the results to the console.

for (var i=1; i<=10; i++){
    console.log ( "multiplication ", i, "X",  5* i)
}

//Write a JavaScript program that uses a for loop to print the countdown from 10 to 1 to the console

//Write a function called printNumbers that takes a parameter n and prints the numbers from 1 to n on the console

function printNumber(n){
    for(let i=1; i<=n; i++) {
        console.log(i)
    }
}

printNumber(5)

//Write a function called calculateFactorial that takes a number as a parameter and calculates its factorial using a for loop.


function calculateFactorial(num) {
    let factorial = 1; 
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial; 
  }
  

console.log(calculateFactorial(10));

//Write a function called printEvenNumbers that takes a parameter n and prints all even numbers from 1 to n.

function printEvenNumbers(n){
    for(let i=2; i<=n; i+= 2){
        console.log(i);

    }
}

printEvenNumbers(32);

//Write a function called printMultiplicationTable that takes a number as a parameter and prints its multiplication table up to 10.
function printMultiplication(n){
    for( let i=1; i<=10; i++) {
        console.log(`Multiplication of ${n} *${i} = ${n*i}`)
    }
} 

printMultiplication(5)

//Write a function called calculateSum that takes an array of numbers as a parameter and calculates their sum using a for loop.

function calculateSum(num){
    let sum = 0; {
    for (let i=0; i<=num.length; i++)
    sum +=num[i];
}
return sum;
}

console.log(calculateSum([1,56,676,2232]));