const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 177,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

// THESE ALL ARE METHODS ON ARRAYS
// ALL OF THESE METHODS PASS A FUNCTION TO
// THEY ARE GOING TO BE DIFFERENT WHAT THEY RETURN
// THEY ALL (EXCEPT) SORT DO NOT MUTATE THEY ARRAY THAT CALLED IT

//***FOREACH ***/
// GOES THROUGH EACH THING AND PERFORMS FUNCTION
// RETURNS UNDEFINED
// let returnValueEach = characters.forEach((c)=>{
//   console.log(c.name)
// })
// console.log('return of forEach')
// console.log(returnValueEach) //


//***MAP*** 
// CHANGE AN ARRAY
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THAT IT PERFORMS IT COLLECTS THE RETURN OF THAT IN
// A NEW ARRAY AN RETURNS THAT ARRAY
// let returnValueMap = characters.map((c)=>{
//   return {name: c.name, eye_color:c.eye_color}
// })
// console.log('return of map')
// console.log(returnValueMap)

//1. Get array of all names
// let names = characters.map((c)=>{
//   return {name: c.name}
// })
// console.log('return of all names')
// console.log(names)

//2. Get array of all heights
// let heights = characters.map((c)=>{
//   return {height: c.height}
// })
// console.log('return of all height')
// console.log(heights)

//3. Get array of objects with just name and height properties
// let nameAndHeights = characters.map((c)=>{
//   return {name: c.name, height: c.height}
// })
// console.log('return of name & height')
// console.log(nameAndHeights)


//4. Get array of all first names
// let firstNames = characters.map((c)=> c.name.split(' ')[0]);
// console.log('first names')
// console.log(firstNames)



//***REDUCE***
//
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THIS FUNCTION HAS TWO PARAM, THE RETURN VALUE OF THE PREVIOUS(ACCUM)
// FUNCTION AND CURRENT ITEM
// RETURN THE FINAL RETURN OF FUNCTION(ACUMM)
// THE TYPE IT CAN RETURN IS ANYTYPE
// let nums = [2,3,4,5,6]
// let sum = nums.reduce((accum, num)=>{
//   console.log('accum:', accum)
//   console.log('num:', num)
//   return accum + num
// },0)
// console.log('return of reduce')
// console.log(sum)

//1. Get total mass of all characters
// let mass =[177, 136, 49, 84]
// let totalMass = mass.reduce((accum, num)=>{
//   return accum + num
// },0)
// console.log('return of total mass')
// console.log(totalMass)

//2. Get total height of all characters
// 
// let totalHeight = height.reduce((accum, num)=>{
//   return accum + num.height
// },0)
// console.log('return of total height')
// console.log(totalHeight)

//3. Get total number of characters by eye color
// let blueEyes =[1,1]
// let brownEyes = [1]
// let yellowEyes = [1]
// let totalBlueEyes = blueEyes.reduce((accum, num)=>{
//   return accum + num
// },0)
// console.log('return of total blue eyes')
// console.log(totalBlueEyes)
// let totalBrownEyes = brownEyes.reduce((accum, num)=>{
//   return accum + num
// },0)
// console.log('return of total brown eyes')
// console.log(totalBrownEyes)
// let totalYellowEyes = yellowEyes.reduce((accum, num)=>{
//   return accum + num
// },0)
// console.log('return of total yelloweyes')
// console.log(totalYellowEyes)



//4. Get total number of characters in all the character names
let totalNameCharacters = characters.reduce((accum, num)=>{
    return accum + num.name.length}, 0)
console.log(totalNameCharacters)



//***FILTER***
// REMOVE ITEMS
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESN'T
// A NEW FILTERED ARRAY AN RETURNS THAT ARRAY



//1. Get characters with mass greater than 100
// let allOver100 = characters.filter((c)=>{
//   return c.mass >= 100
// })
// console.log('return of filter')
// console.log(allOver100)


//2. Get characters with height less than 200
// let allUnder200 = characters.filter((c)=>{
//   return c.height < 200
// })
// console.log('height under 200')
// console.log(allUnder200)

//3. Get all male characters
// let maleCharacters = characters.filter((c)=>{
//   return c.gender === 'male'
// })
// console.log('male characters')
// console.log(maleCharacters)

//4. Get all female characters
// let femaleCharacters = characters.filter((c)=>{
//   return c.gender === 'female'
// })
// console.log('female characters')
// console.log(femaleCharacters)

//***FIND***
// ONLY FIND ONE MATCH 
// GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESN'T
// THE FIRST MATCH IT FINDS || UNDEFINED IF NO MATCH FOUND

// let firstOver100 = characters.find((c)=>{
//   return c.mass >= 100
// })
// console.log('return of find')
// console.log(firstOver100)

// //***SORT***

//1. Sort by mass
// characters.sort((a,b)=>{
//   if(a.mass > b.mass){
//       return 1
//   }
//   if(a.mass < b.mass){
//       return -1
//   }
//   return 0
// })
// console.log('sort of mass')
// console.log(characters)

//2. Sort by height
// characters.sort((a,b)=>{
//   if(a.height > b.height){
//       return 1
//   }
//   if(a.height < b.height){
//       return -1
//   }
//   return 0
// })
// console.log('sort of height')
// console.log(characters)

//3. Sort by name
// characters.sort((a,b)=>{
//   if(a.name > b.name){
//       return 1
//   }
//   if(a.name < b.name){
//       return -1
//   }
//   return 0
// })
// console.log('sort by name')
// console.log(characters)

//4. Sort by gender
// characters.sort((a,b)=>{
//   if(a.gender > b.gender){
//       return 1
//   }
//   if(a.gender < b.gender){
//       return -1
//   }
//   return 0
// })
// console.log('sort by gender')
// console.log(characters)







//***Bonus***/
//***EVERY***
//1. Does every character have blue eyes?
// const BlueEyes = characters.every((character)=>{
//   return character.eye_color === 'blue'
// })
// console.log(BlueEyes)
//2. Does every character have mass more than 40?
// const massMore40 = characters.every((character)=>{
// //   return character.mass > 40
// // })
// // console.log(massMore40)
//3. Is every character shorter than 200?
// const shorter200 = characters.every((character)=>{
//     return character.height < 200
//   })
//   console.log(shorter200)
//4. Is every character male?
// const allMale = characters.every((character)=>{
//     return character.gender === 'male'
//   })
//   console.log(allMale)

//***SOME***
//1. Is there at least one male character?
// const oneMaleCharacter = characters.some((character)=>{
//   return character.gender === 'male'
// })
// console.log(oneMaleCharacter)
//2. Is there at least one character with blue eyes?
// const oneBlueEyed = characters.some((character)=>{
//   return character.eye_color === 'blue'
// })
// console.log(oneBlueEyed)
//3. Is there at least one character taller than 210?
// const oneTaller210 = characters.some((character)=>{
//   return character.height > 210
// })
// console.log(oneTaller210)
//4. Is there at least one character that has mass less than 50?
// const oneMassLessThan50 = characters.some((character)=>{
//   return character.mass < 50
// })
// console.log(oneMassLessThan50)