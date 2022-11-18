//FUNCTIONS


function catName() {
    let catName = prompt("What is your favorite cat?")
    if (catName == "ragdoll") {
        alert ("That's a great cat!")
    } else {
        alert("You should try a ragdoll");
        }
}


function guessmycats() {

    let output = '';
    let rating = prompt('How many cats do you think I have?');
    for(let i = 0; i < rating; i++){
    output += "<img class='catpic' src='catphoto.jpg' alt='cute kitty'/>";
    }

    return document.write(output);
}



function likecats() {
    let response = prompt("Do you like cats?")
  
    if (response == "yes") { 
      alert("You've come to the right cat world!");
      document.write("You've come to the right cat world!");
    } else if (response == "no") {
      alert("What kind of person doesn't like cats?");
      document.write("What are you doing at a cat world website?");
    } else {
      alert("I'm not sure what that means...");
      document.write("Dude, I'm not sure what you mean with that response...");
    }
}

function howmanycats() {
    let response = prompt("Guess how many cats I have?");
    let guesses = 3;
  for (let i=0; i<guesses; i++);
  
    if (response == 7){
    alert ("Your Correct!");}
   
    else if (response >7) {
    alert ("too high");}

     else if (response <7) {
    alert("too Low");
     }
}




catName()
likecats()
howmanycats()
guessmycats() 