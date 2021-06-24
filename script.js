
function make_RandomNumber (max_number) {
  
  return Math.round(Math.random() * max_number);
}


let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {
  
 let randomNumber = make_RandomNumber (13);
  
  let answerResult = "";
  
  if (randomNumber ==0) {
    
    textAnswer = "Yes!"
  }
  
  else if (randomNumber ==1){
    textAnswer = "Better not tell you."
  }
  
  else if (randomNumber ==2){
    textAnswer = "Nope."
  }
  
 else if (randomNumber ==3){
   textAnswer = " Ask later."
 }
  
 else if (randomNumber ==4){
  textAnswer = "Damn! I don't know."
}

else if (randomNumber ==5){
  textAnswer = "Call your astrologist."
}

else if (randomNumber ==6){
 textAnswer = " Call Ghostbusters."
}
else if (randomNumber ==7){
  textAnswer = "Great Scott!..no."
}

else if (randomNumber ==8){
  textAnswer = "Run."
}

else if (randomNumber ==9){
 textAnswer = " Bodies will fall."
}
else if (randomNumber ==10){
  textAnswer = "Bribe me."
}

else if (randomNumber ==11){
  textAnswer = "Don't worry. Be happy."
}

else if (randomNumber ==12){
 textAnswer = " Um..yes?"
}

  
  answer.innerHTML = textAnswer;
});