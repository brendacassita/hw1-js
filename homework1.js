// LOOPS

// // 1. ****DONE***** 
// Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
// console.log('0-10 evens:');
// let nums = [1,2,3,4,5,6,7,8,9,10]
// for (let nums = 0; nums <= 10; nums+=2) {
//   console.log(nums);
// }
// console.log('----------');



// // 2. ******DONE***** 
// Write a for that logs numbers from 10 - 0; ie 10,9,8...0
// console.log('10-0:');
// for (let nums2 = 10; nums2 >= 0; nums2--) {
//   console.log(nums2);
// }
// console.log('----------');
// console.log('odd or even:');
// console.log('finish question 3');






// // 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
// console.log('----------');
// 








// 4. ******DONE******
// write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
// console.log('0-10:');
// for (let i = 0; i <=10; i++){
//   console.log(i);
// }
// console.log('----------');


// 5. *****DONE*****
//Look closely at the code below

// const isOdd = (num) =>{
//     return num % 2 === 0
// }

// if(isOdd(2)){
//     console.log('is Odd')
// } else {
//     console.log('is Even')
// }

// 6. *****DONE*****
//what will this log?
//console.log('is odd')

// 7. *****DONE*****
//what is the value of isOdd(2) 
// true

// 8. ******DONE*****
//Fix the isOdd function to make this work
// const isOdd = (num) =>{
//     return num % 2 === 1
// }

// if(isOdd(2)){
//     console.log('is Odd')
// } else {
//     console.log('is Even')
// }




// FUNCTIONS


// 1.*****DONE*****
// Write a function that takes a positive number and prints all even numbers from 0 – number
//console.log('----------');
// function printEvenTo(number){
//   for(let i = 0; i <= number; i++){
//     if (i % 2 === 0){
//       console.log(i)
//     }  
//   }
// }
// printEvenTo(10)





// 2. ******DONE*****
//Write a function that takes an array and returns the sum of all the numbers
//console.log('----------');
// function getSum(numArray){
  
//   let sum = 0;
//     for(let i = 0; i <= numArray.length-1; i++){
//       sum+=numArray[i]
//       console.log(sum)
//     }

//    return sum
// }
// console.log(getSum([0,10,20]));







// 3. Write a function that returns the number of vowels in string

// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result

// 5. *****DONE*****
// Write a function that takes an array of strings and a string and returns true or false 
// if the string is in the array.
// function doesExist(arrayOfStrings, string){
//   for (let i = 0; i <arrayOfStrings.length; i++){
//     if(arrayOfStrings[i] === string){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(doesExist(['orange','apple', 'pear'], 'grape'))





// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"




// 7. *****DONE*****
// write a function that takes an array that removes the first and last items and return that new array
// let array = ['first', 'second', 'third', 'last']
// // array.shift() 
// // array.pop()
// //  console.log(array)

// function removesFirstAndLast(array){
//   array.shift() 
//   array.pop()
  
//    return array
//   }
//   console.log(removesFirstAndLast(['first', 'second', 'third', 'last']))
//   console.log(removesFirstAndLast(['1', '2', '3', '4']))



// 8. *****DONE*****
// write a function that swaps the last and first items of an array 
// console.log('----------');
// console.log('swap 1st & last array items');
// let arraySwap = ['first', 'second', 'third', 'last'];
//  [arraySwap[0], arraySwap[arraySwap.length-1]] = [arraySwap[arraySwap.length-1], arraySwap[0]]
//  console.log(arraySwap)


// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.






// 11. *****DONE*****
//Write a function that prints all  numbers from 0 – 10
// function printToTen(){
//   for(let i = 0; i<=10; i++){
//     console.log(i);
//   }
// }
// printToTen();
