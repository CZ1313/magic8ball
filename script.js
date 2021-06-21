




let myImages  = document.getElementById("mainImage");
let imageArray = [ "img/a1.png", "img/a2.png", "img/empty.png"];


function eightBallAnswers() {
    let answer = Math.floor(Math.random() * imageArray.length);
    myImages.src = imageArray[answer];
}
   





    


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