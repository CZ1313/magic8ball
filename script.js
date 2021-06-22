
//Create functon for random number
function generate_random(max_number) {

    //Create random number from 0 to max_number
    return Math.round(Math.random()*max_number);
}

//Select button element and img element
let button = document.querySelector("button");
let answers = document.querySelector("#answers"); 

//Button click event
button.addEventListener("click", function() {
  
//Create random number. Max_number is changed to 21 because thats how many images we have.
let randomNumber = generate_random(21);
console.log(randomNumber);

//Turn random number into an answer using the key above.
let answerText = "";
 if (randomNumber == 0) {

  answerText ="Yes definitely!" //try this later var img1 =new Image()
 }                              //                    img.src ="";  
else if (randomNumber == 1) {

answerText = "No, certainly not!"
}

else if (randomNumber == 2) {

  answerText = "I really don't care!"
  }

//Display the answer in the 
answers.innerHTML = answerText;

});

//function shake() {

  //const ball = document.getElementById("ball")
    
    //ball.classList.add("shake")
    //setTimeout(function() {ball.classListList.remove("shake");}, 1000)
    //setTimeout(function() {answers();}, 1000)
//}
  

 //function answers() {

   // const getImage = document.getElementById("ball");
    //const images = new Array[ "img/empty.png", "img/a1.png", "img/a2.png", "img/a3.png"];
    //let pickImage = image [Math.floor(Math.random()* image.length)]; 

    //let showAnswer = document.getElementById("answers")
    //let message = document.createElement("div")
    //message.setAttribute('id',"message")
 // }



    //let answer = Math.floor(Math.random() * imageArray.length);
    //myImages.src = imageArray[answer];
 


   // myImages.setAttribute("src", imageArray[imageIndex]);
   // imageIndex++;

   // if(imageIndex > 3) {imageIndex =0;}
    
    



//let myImages = new Array ('img/a1.png', 'img/a2.png', 'img/a3.png', 'img/a4.png',
  //              'img/a5.png', 'img/a6.png', 'img/a7.png', 'img/a8.png',
    //            'img/a9.png', 'img/a10.png', 'img/a11.png', 'img/a12.png',
      //          'img/a13.png', 'img/a14.png', 'img/a15.png', 'img/a16.png',
        //        'img/a17.png', 'img/a18.png', 'img/a19.png', 'img/a20.png');

 //document.getElementById(myButton).addEventListener('click', changeImage);          
                           
//function eightBallAnswers() {
  //  let randNum = Math.floor(Math.random() * myImages.length);
    //document.getElementById("answers") .innerHTML[randNum];
    //}