import './style.scss';

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{

    const confirmButton = document.getElementById("btn");
    const inputField = document.getElementById("user-input");
    const correctNumberBtn = document.getElementById("correct");
    let numberText = document.getElementById("main__number");
    let questionText = document.getElementById("main__question");
    let correctAnswer = document.getElementById("correct-answer");

    let minNumber = 0;
    let maxNumber = 100;
    let myNumbers = [0, 100];
    let attempts = 0;
    let myNumber = Math.round(Math.random() * (80 - 20) + 20);

    confirmButton.addEventListener("click", test);


    console.log("Is your number HIGHER/LOWER than " + myNumber + "?");
    numberText.textContent  = "Is your number " + myNumber + "?";
    questionText.innerHTML  = "Or it is higher(+) or lower(-)?";

    function test(){
        if(attempts < 1){
            if(inputField.value == "+"){
                myNumber = Math.round(myNumber*1.5);
                console.log(myNumber);
            } else if (inputField.value == "-"){
                myNumber = Math.round(myNumber/2);
                console.log(myNumber);
            } else {
                console.log("VICTORY!!!");
            }
        } else {
            if(inputField.value == "+"){
                myNumbers[1] = Math.round(myNumber*1.5);
                console.log("MAX " + myNumbers[1]);
            } else if (inputField.value == "-"){
                myNumbers[0] = Math.round(myNumber/2);
                console.log("MIN " + myNumbers[0]);
            } else {
                console.log("VICTORY!!!");
            }
            myNumber = Math.round((myNumbers[0]+myNumbers[1])/2);
            console.log("MIDDLE: " + myNumber);
        }


        attempts += 1;
        console.log("Attempts: " + attempts);

        console.log(inputField.value);
        inputField.value = "";

        console.log("Is your number HIGHER/LOWER than " + myNumber + "?");
        numberText.textContent  = "Is your number " + myNumber + "?";
        questionText.innerHTML  = "Or it is higher(+) or lower(-)?";

    }

    correctNumberBtn.addEventListener("click", correct);

    function correct(){
        correctAnswer.textContent  = "💛";
    }

},);


//не давати можливість, щоб показували числа, які вже є за межами діапазону
//зробити це через арей [min, max] і звідси брати середнє Math.round((a+b)/2);
