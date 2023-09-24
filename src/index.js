import './style.scss';

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{

    // const inputField = document.getElementById("user-input");
    const correctNumberBtn = document.getElementById("correct");
    const higherBtn = document.getElementById("higher");
    const lowerBtn = document.getElementById("lower");

    let numberText = document.getElementById("main__number");
    let questionText = document.getElementById("main__question");
    let correctAnswer = document.getElementById("correct-answer");


    let numRange = [0, 100];
    let myNumber = Math.round(Math.random() * (80 - 20) + 20);
    console.log("myNumber: " + myNumber);

    higherBtn.addEventListener("click", higherNumber);
    lowerBtn.addEventListener("click", lowerNumber);

    numberText.textContent  = "Is your number " + myNumber + "?";
    questionText.innerHTML  = "Or it is higher or lower?";

    function higherNumber(){
        numRange[0] = myNumber;
        myNumber = Math.round((numRange[0]+numRange[1])/2);
        console.log("numRANGE: " + numRange);
        console.log("myNumber: " + myNumber);

        findNumber();
    }

    function lowerNumber(){
        numRange[1] = myNumber;
        myNumber = Math.round((numRange[0]+numRange[1])/2);
        console.log("numRANGE: " + numRange);
        console.log("myNumber: " + myNumber);

        findNumber();
    }

    function findNumber(){
        numberText.textContent  = "Is your number " + myNumber + "?";
        questionText.innerHTML  = "Or it is higher or lower?";
    }


    correctNumberBtn.addEventListener("click", correct);
    
    function correct(){
        correctAnswer.textContent  = "💛";
    }

},);


//не давати можливість, щоб показували числа, які вже є за межами діапазону
//зробити це через арей [min, max] і звідси брати середнє Math.round((a+b)/2);
