
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



let numberOfDruwBotton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDruwBotton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });

}