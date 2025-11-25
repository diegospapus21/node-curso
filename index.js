//let username = 'diego'
//let age = 30
//let hasHobbie = false
//let points = [10, 20, 30]
//let user = {
//name: 'Diego',
//lastname: 'Gabriel'
//}
//const PI = 3.1416

//console.log(username)
//console.log(age)
//console.log(hasHobbie)
//console.log(points)
//console.log(user)
//console.log(PI)

/* const age = 10

if (age >=18){
    console.log("you are an adult")
}else if (age >=13) {
    console.log("You are a teenager")
}else {
    console.log ("You are a Child")
} */

// const names = ['joe','jphn','marco']

// for(let i = 0; i< names.length; i++){
//     console.log(names[i])
// }

//Esta forma es con js mas viejp
// function showUserInfo(userName, userAge){
//     return  ` The username is ${userName}, the user is ${userAge} years old`
// }

//este es lo mismo que el de arriba pero con js mas moderno , mas usado
const showUserInfo = (userName, userAge) =>
  ` The username is ${userName}, the user is ${userAge} years old`;

console.log(showUserInfo("joe", 30));
console.log(showUserInfo("Mateo", 50));
