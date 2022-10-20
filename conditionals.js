//CAMPARISON OPERATORS
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
let rating= 2;
if(rating === 3) {
    console.log("YOU ARE A SUPERSTAR");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
//Declares a variable called days and give it a default of value 7
//use if and if statement to print the 7 days 0f the week
let days =7;
if (days ===7){
    console.log("sunday");
}
else if (days === 6) {
    console.log("saturday");
    
}
//create a variable with the name password and give any value
//the value of the must be a string
//value of password must be greater than or equals to 6 character
//ensure the value of the password has no spaces between

let password = "emman]";
if(password.length >= 6){
    if (password.indexOf(" ") === -1){
        console.log("THE PASWORDIS CORRECT");
    }
    else {
        console.log("INCORRECT PASSWORD");
    }
}
let age =20;
console.log(age=== 20 ?"correct age" : "wrong age");
//switch staatements
// switch (days)
//     case 1:"monday"
//         break,
//  case 2:"tuesday"
// break,
// case :3"wednesday"
// break,
// case 4"thursday"
// break,
// case 5:"friday"
// break,
// case 6:"saturday"
// break,
// case 7:"sunday"
// break,

