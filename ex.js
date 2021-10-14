let str = "heLLo World"
let control = "upper" 

if (control === "upper"){
    // convert to upper case
    str = str.toUpperCase();
    console.log(str);

} else {
        // convert to lower case
    str = str.toLowerCase();

}
console.log(str);


console.log(" ")


let word = "aBcDeFgE";
let reveseCase = ""; // نعرف نوع المتغير string
for(index = 0; index < word.length ; index++) {
    if(word[index].toLowerCase() === word[index]){
        reveseCase += word[index].toUpperCase(); // reveseCase = reveseCase + word[index].toUpperCase();
    } 
 else {
    
        reveseCase += word[index].toLowerCase(); 
    }

}

console.log( "reveseCase = " , reveseCase);


 

let startRange = (1,5);
let endRange = (5,10);

for (rang = startRange; rang <= endRange; rang++) {
    console.log(rang);
}
// for( r = startRange[0]; r <startRange[1] ; r++ ) {

    


