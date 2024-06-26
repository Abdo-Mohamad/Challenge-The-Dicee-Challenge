
/* document.querySelector("button").addEventListener("click", handelClick)


function handelClick() {
    alert('msg');
}
 */
/* for (let index = 0; index <= 6; index++) {
    const number = index;

    document.getElementsByClassName("drum")[number].addEventListener("click", () => { alert("hola") });
    console.log(number);
} */

/* function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
} */



var numberOfDruwBotton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDruwBotton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;



        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log(buttonInnerHTML);
                break;
        }
    });

}