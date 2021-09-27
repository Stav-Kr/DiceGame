'use strict';
const rollBtn = document.querySelector('.btnClick');
rollBtn.addEventListener('click', DiceRoll);


function DiceRoll(roll1, roll2) {

    var roll1 = Math.trunc(Math.random() * 6) + 1
    var roll2 = Math.trunc(Math.random() * 6) + 1

    document.querySelector(".dice_img_1").setAttribute("src",
        "dice" + roll1 + ".png");

    document.querySelector(".dice_img_2").setAttribute("src",
        "dice" + roll2 + ".png");

    if (roll1 === roll2) {
        document.querySelector("h3").innerHTML = "Draw!";

    } else if (roll1 < roll2) {
        document.querySelector("h3").innerHTML = (" Morgan wins!");

    } else {
        document.querySelector("h3").innerHTML = (" You win!");

        document.querySelector("h4").innerHTML = score;
    }

    function scoreAdd(roll1, roll2) {
        let score = 0;
        if (roll1 > roll2) {
            score++;
            document.querySelector("h4").innerHTML = score;
        } else if (roll1 < roll2) {
            score--;
            document.querySelector("h4").innerHTML = score;
        } else {
            score = score;
            document.querySelector("h4").innerHTML = score;
        }



    }


    


}