// Write a function that returns the number of vowels in string
// count vowels in string



function vowelCount(string){
  let count = 0;
  const vowels = ['a', 'e', 'i','o', 'u']
  
    for(let i = 0; i <string.length; i++){
      //i want the count to go up everytime there is a vowel in the string
      if(string[i] === 'a' || string[i] === 'e' ||string[i] ==='i'|| string[i] === 'o' || string[i] === 'u')
        count++;
    } 
   return count
}
console.log(vowelCount('Hi there'));