import './style.scss';

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{

    // const inputField = document.getElementById("user-input");
    const correctNumberBtn = document.getElementById("correct");
    const higherBtn = document.getElementById("higher");
    const lowerBtn = document.getElementById("lower");
    const restartBtn = document.getElementById("restart-btn");
    const attemptCounter = document.getElementById("attempts");

    let numberText = document.getElementById("main__number");
    let questionText = document.getElementById("main__question");
    let correctAnswer = document.getElementById("correct-answer");


    let numRange = [-1, 101];
    let myNumber = Math.round(Math.random() * (80 - 20) + 20);
    let attemptsCounter = 1;
    console.log("!!!!! GAME STARTED !!!!!");
    console.log("myNumber: " + myNumber);

    higherBtn.addEventListener("click", higherNumber);
    lowerBtn.addEventListener("click", lowerNumber);

    numberText.textContent  = "Is your number " + myNumber + "?";
    questionText.innerHTML  = "Or it is higher or lower?";

    function higherNumber(){
            lowerBtn.style.opacity = 100;
            lowerBtn.style.visibility = "visible";

            numRange[0] = myNumber;
            myNumber = Math.round((numRange[0]+numRange[1])/2);
            console.log("numRANGE: " + numRange);
            console.log("myNumber: " + myNumber);
            higherBtn.style.opacity = 100;

            // if(myNumber >= 100){
            //     higherBtn.style.opacity = 0;
            //     higherBtn.style.visibility = "hidden";
            // } 

            if(numRange[1] - myNumber == 1){
                higherBtn.style.opacity = 0;
                higherBtn.style.visibility = "hidden";
            } 

            if(numRange[1] - numRange[0] == 2 || numRange[1] == myNumber){
                numberFound();
            }
            
            findNumber();
    }

    function lowerNumber(){
        higherBtn.style.opacity = 100;
        higherBtn.style.visibility = "visible";

        numRange[1] = myNumber;
        myNumber = Math.round((numRange[0]+numRange[1])/2);
        console.log("numRANGE: " + numRange);
        console.log("myNumber: " + myNumber);

        if(myNumber <= 0){
            lowerBtn.style.opacity = 0;
            lowerBtn.style.visibility = "hidden";
        } 

        if(numRange[1] - numRange[0] == 2){
            numberFound();
        }

        findNumber();
    }

    function findNumber(){
        attemptsCounter += 1;
        numberText.textContent  = "Is your number " + myNumber + "?";
        questionText.innerHTML  = "Or it is higher or lower?";
        attemptCounter.textContent = "Attempt: " + attemptsCounter;
        console.log("Attempt: " + attemptsCounter);
    }

    function numberFound(){
        correctAnswer.classList.remove("hidden-js");
        correctAnswer.classList.add("visible-js");
        correctAnswer.textContent  = "Your number is " + Math.round((numRange[1]+numRange[0])/2) + " 😉";
    }


    correctNumberBtn.addEventListener("click", correct);
    
    function correct(){
        correctAnswer.textContent  = "🎉 " + myNumber + " 🎉";
        correctAnswer.classList.remove("hidden-js");
        correctAnswer.classList.add("visible-js");
    }

    restartBtn.addEventListener("click", restartEverything);

    function restartEverything(){
        console.log("!!!!! GAME WAS RESTARTED !!!!!")
        numRange = [-1, 101];
        myNumber = Math.round(Math.random() * (80 - 20) + 20);
        numberText.textContent  = "Is your number " + myNumber + "?";
        questionText.innerHTML  = "Or it is higher or lower?";
        console.log("myNumber(new): " + myNumber);
        correctAnswer.classList.remove("visible-js");
        correctAnswer.classList.add("hidden-js");
        attemptsCounter = 0;
        lowerBtn.style.opacity = 100;
        lowerBtn.style.visibility = "visible";
        higherBtn.style.opacity = 100;
        higherBtn.style.visibility = "visible";
        attemptCounter.textContent = "Attempt: " + attemptsCounter;
    }

},);


//не давати можливість, щоб показували числа, які вже є за межами діапазону
