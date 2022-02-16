//1. Write a function that takes a positive number and prints all even numbers from 0 – number

function printEvenTo(number){
  for(let i = 0; i <= number; i++){
    if (i % 2 === 0){
      console.log(i)
    }  
  }
}
printEvenTo(10)

