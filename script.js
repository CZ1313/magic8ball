
function make_RandomNumber (max_number) {
  
  return Math.round(Math.random() * max_number);
}


let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {
  
 let randomNumber = make_RandomNumber (4);
  
  let answerResult = "";
  
  if (randomNumber ==0) {
    
    textAnswer = "Yes definity!"
  }
  
  else if (randomNumber ==1){
    textAnswer = "No, certainly not!"
  }
  
  else if (randomNumber ==2){
    textAnswer = "Nope."
  }
  
 else if (randomNumber ==3){
   textAnswer = " Ask later."
 }
  
  
  
  answer.innerHTML = textAnswer;
});