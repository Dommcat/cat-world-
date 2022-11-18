//FUNCTIONS



let catName=prompt("What is your favorite cat?")
if (catName=="Ragdoll") {
 alert ("That's a great cat!")

} else {alert("too bad")
    
}

function likeskittens() {
    let response = prompt("Do you like Kittens?")
  
    if (response == "yes") { // this is where I start conditional logic
      alert("You've come to the right world!");
      document.write("You've come to the right world!");
    } else if (response == "no") {
      alert("What kind of person doesn't like kittens?");
      document.write("What are you doing at a cat world website?");
    } else {
      alert("I'm not sure what that means...");
      document.write("I'm not sure what you mean with that response...");
    }
  



function guesskitten() {
    let answer;

    while (answer != ragdoll) {
        answer = prompt('Guess again');
        if (answer !=7) {
            alert('Try again!');
        } else {
            alert('You are correct!');
        }
    }









// document.write()
// alert()
// prompt()
// consol.log()
// while()
//for()