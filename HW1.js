// LOOPS

// // 1. ****DONE***** 
// Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10

// console.log('0-10 evens:');
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


// // 3. ****DONE****
// write a for loop that loops through this array and logs 'odd/even' based on
//  wether the number is odd even

// console.log('odd or even:');
// let nums = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0){
//     console.log(i, 'even')
//   }else{
//     console.log(i, 'odd')
//   }
// }
// console.log('----------');


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
// console.log('----------')

// 7. *****DONE*****
//what is the value of isOdd(2) 
// 0, true
// console.log('----------')

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
//console.log('----------');



// FUNCTIONS


// 1.*****DONE*****
// Write a function that takes a positive number and prints all even numbers from 0 – number
//console.log('prints all even numbers 0-10');
// function printEvenTo(number){
//   for(let i = 0; i <= number; i++){
//     if (i % 2 === 0){
//       console.log(i)
//     }  
//   }
// }
// printEvenTo(10)
//console.log('----------');


// 2. ******DONE*****
// TRY WITH FOREACH LOOP LATER!!!!!!!!!!!!!!///
// Write a function that takes an array and returns the sum of all the numbers

// console.log('returns sum of all numbers in array');
// function getSum(numArray){
  
//   let sum = 0;
//     for(let i = 0; i <= numArray.length-1; i++){
//       sum+=numArray[i]
//       //console.log(sum)
//     }

//    return sum
// }
// console.log(getSum([0,10,20]));
// console.log('----------')


// 3. Write a function that returns the number of vowels in string
// console.log('returns number of vowels in string')
// function vowelCount(string){
//   let count = 0;
//   const vowels = ['a', 'e', 'i','o', 'u']
  
//     for(let i = 0; i <string.length; i++){
//       //i want the count to go up everytime there is a vowel in the string
//       if(string[i] === 'a' || string[i] === 'e' ||string[i] ==='i'|| string[i] === 'o' || string[i] === 'u')
//         count++;
//     } 
//    return count
// }
// console.log(vowelCount('Hi there'));
// console.log('----------')


// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
// console.log('returns math opp as string')
// function math(opp, num1, num2){
//   if (opp ==='+'){
//     return num1 + num2
//   }else if(opp ==='-'){
//     return num1 - num2
//   }else if (opp ==='*'){
//     return num1 * num2
//   }else if (opp ==='/'){
//     return num1 / num2
//   }
// }
// console.log(math('+', 1, 10))
// console.log(math('-', 11, 10))
// console.log(math('*', 1, 10))
// console.log(math('/', 100, 10))
// console.log('----------')


// 5. *****DONE*****
// Write a function that takes an array of strings and a string and returns true or false 
// if the string is in the array.
// console.log('returns array of strings and string and returns true or false if string is in array')
// function doesExist(arrayOfStrings, string){
//   for (let i = 0; i <arrayOfStrings.length; i++){
//     if(arrayOfStrings[i] === string){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(doesExist(['orange','apple', 'pear'], 'grape'))
// console.log('----------')


// 6. ******DONE*****
// write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
// console.log('returns person object as string')
// let joe = {firstname: 'joe', lastname: 'shmoe', age: 50} //create person

// function aboutPerson(person){
// return `${person.firstname} ${person.lastname} is ${person.age} years old`

// }

// console.log(aboutPerson(joe)) //pass person
// console.log('----------')


// 7. *****DONE*****
// write a function that takes an array that removes the first and last items and return that new array
// console.log('removes first and last item and returns new array')
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
// console.log('----------')


// 8. *****DONE*****
// write a function that swaps the last and first items of an array 
// console.log('swaps first and last')
// console.log('swap 1st & last array items');
// let arraySwap = ['first', 'second', 'third', 'last'];
//  [arraySwap[0], arraySwap[arraySwap.length-1]] = [arraySwap[arraySwap.length-1], arraySwap[0]]
//  console.log(arraySwap)
// console.log('----------')


// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// console.log('returns index of array')
// const arrayOfFruits = ['apple', 'orange', 'grape']

// function findIndexOfItemInArray(array, itemInArray){
//   return array.indexOf(itemInArray)
// }
// console.log(findIndexOfItemInArray(arrayOfFruits,'grape'))
// console.log('----------')


// 10. *****DONE*****
// write a function that takes a number and uses a ternary to return if the number is odd or even.
// // console.log('returns odd or even as ternary')
// function isOddOrEven(num){
//   num % 2 === 0 ? console.log(num, 'is even') : console.log(num, 'is odd')
// }

// isOddOrEven(1)
// isOddOrEven(2)
// console.log('----------')

// 11. *****DONE*****
//Write a function that prints all  numbers from 0 – 10
// console.log('prints all numbers 0-10')
// function printToTen(){
//   for(let i = 0; i<=10; i++){
//     console.log(i);
//   }
// }
// printToTen();
// console.log('----------')
