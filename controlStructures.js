let num1 = 30;
let num2 = 1;
let num3 = 19 ;

if(num1 > num2) {
    console.log(num1)
} 
else if(num1 == num2 ) {
    console.log("the first number equal second number")
}

else {
    console.log(num2)

}

console.log(" ")

if(num1 % 2 == 0) {
    console.log(`${num1} is even`)
}
else {
    console.log(`${num1} is odd`)
}

console.log(" ")


if (num1 < num2 && num2 < num3) {
    console.log(num1 , num2 , num3);
} else if (num1 < num3 && num3 < num2){
    console.log(num1 , num3 , num2);
} else if (num2 < num1 && num1 < num3){
    console.log(num2 , num1 , num3);
} else if (num2 < num3 && num3 < num1){
    console.log(num2 , num3 , num1);
} else if (num3 < num1 && num1 < num2){
    console.log(num3 , num1 , num2);
} else {
    console.log(num3 , num2 , num1);
} 


console.log("");
console.log("");


let amount = "raghad";
detr = 0;

if(amount < 0 ) {
    console.log("please enter a positive number");
} 
else if (isNaN(typeof(detr))) {
    console.log("Please enter a number"); 
} else {
    console.log(amount); 

}

console.log("");
console.log("");


let username = "raghadqu";
let password = 123456789;
if(username.length > 6 && password.length >= 8) {
    console.log("login successful"); 
} else {
    console.log("login failed"); 

}

console.log("");
console.log("");

let numbers = 0;
for(i = 20; i >= numbers; i--){
    console.log(i);
} 

console.log("");
console.log("");



let x = 0 ;
while (x <= 20) {
    console.log(x);
    x++;
   
    
}

console.log("");
console.log("");

let num = 20;
for(y = 1 ; y <= num ; y++){
    if (y % 2 === 0) {
        console.log(y);

        
    }

}

console.log("");
console.log("");

/*
// يعرض الارقام الي بين القوسين 
let startRange = (1,5);
let endRange = (5,10);

let range = 0;
for(let r = startRange[0]; r <startRange[1] ; r++ ) {

console.log(r);

}
*/




for(index = 0; index <= 5; index++) {
    console.log("*".repeat(index));
}



