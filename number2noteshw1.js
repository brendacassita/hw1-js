// 2. Write a function that takes an array and returns the sum of all the numbers

// [1,2,3,4] => 10
// [1,2,3] => 6

// function declaration
// function getSum(nums){
//     console.log('here')
// }

// arrow function
// const getSum = (nums) => {
//   let sum = 0
//   for(var i = 0; i <= nums.length; i++){
//     sum += nums[i]
//   }
//   return sum
// };

// let sum1 = getSum([1,2,3,4]) // 10
// let sum2 = getSum([1,2,3]) // 6

// console.log(sum1)
// console.log(sum2)

// DO this again but with a forEach loop
// iterate over an array and do stuff

// forEach loop - that goes through every item in array and performs a function
// you pass it the function to perform


// (thing)=>{
    // do stuff here
// }

// creating an array 'object' behind scenes
let numbers = [1,2,3,4]
console.log(numbers) //[1,2,3,4]
// expecting numbers to be an array of numbers
// this numbers parameter is scoped to the function
// overriding the variable
function getSum1(numbers){
    let sum = 0
    // console.log('here')
    // console.log(numbers)
    numbers.forEach((number)=>{
        sum += number
    })
    return sum
}

let s1 = getSum1([1,2,3,4])
let s2 = getSum1(numbers)
console.log(s1 )
console.log(s1 + s2)