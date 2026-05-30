const max = prompt("Enter the number:");
const num = Math.floor(Math.random()*max +1);
let guess = prompt("guess the number: ");

while(true){
    if(guess == quit){
        console.log("you are quit");
        break;
    }   

    if(guess == random){
        console.log("Congratulations! you guess the right number");
        break;
    }

    if(guess < quit){
        console.log("Large number please!!");
        break;
    }

    if(guess > quit){
        console.log("Small number please!!");
        break;
    }
}
