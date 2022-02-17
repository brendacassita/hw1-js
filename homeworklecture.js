// variables: let, const, var 
// let & var similar - let is preferred - const is variable we can not change

let age = 18
let names =  ['tony', 'liz']
let bob = {name:'bob', age:21, hasFelony: true}
let jon = {name:'jon', age:21, hasFelony: false}
let sally = {name:'sally', age:17, hasFelony: false}



// i am expecting person to be an object{string:name, age:number, hasFelony:boolean}
function canVote(person){
  if (person.age >= 18 && !person.hasFelony){
    return `${person.name} can vote`
  }else{
    console.log `${person.name} can not vote`
  }
}

const aboutPerson = (person)=>{
  // as if else
  // let felonyAbout;
  // if (person.hasFelony){
  //   felonyAbout = 'has felony'
  // }else{
  //   felonyAbout = 'does not have felony'
  // }
  // as ternary
  // let someVar = condition? 'return if condition is truthy': 'return if condition is falsy'
  let felonyAbout = person.hasFelony ? "has felony" : "does not have felony"
  return`${person.name} is ${person.age} years old and ${felonyAbout}`
}

  // ${person.name} is ${person.age} years old and ${felonyAbout}` + can/cant vote
  const aboutPersonWithVoteStatus = (person)=>{
    //get about person string
    let personString = aboutPerson(person)
    // todo get vote string
    let voteString = canVote(person)
    // todo combine two things
    return `${personString}, ${voteString}`
  }
  console.log('----before aboutPersonWithVoteStatus')
  let aboutSallyVoteStatus =  aboutPersonWithVoteStatus(sally)
  console.log(aboutSallyVoteStatus)

  // console.log('---before aboutPerson')
  // let aboutSally = aboutPerson(sally)
  // console.log(aboutSally)
  // console.log('---after aboutPerson')


// // conditions
// if (jon.age >= 18 && !jon.hasFelony){
//   console.log(`${jon.name} can vote`)
// }else{
//   console.log(`${jon.name} can not vote`)
// }

// if (bob.age >= 18 && !bob.hasFelony){
//   console.log(`${bob.name} can vote`)
// }else{
//   console.log(`${bob.name} can not vote`)
// }


  
  // canVote(bob)
  // canVote(jon)
  // canVote(sally)