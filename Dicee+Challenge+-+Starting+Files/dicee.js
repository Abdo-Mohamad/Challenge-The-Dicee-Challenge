// My solution 

var imagesArray = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
function displayImage() {

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num1 = Math.floor(Math.random() * 6); // 0...6
    var num2 = Math.floor(Math.random() * 6); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.querySelector(".img1").setAttribute("src", imagesArray[num1]);
    document.querySelector(".img2").setAttribute("src", imagesArray[num2]);

    if (num1 > num2) {
        console.log("The player1 win");
        document.querySelector("h1").innerHTML = "🎆 Play 1 Wins!";

    } else if (num2 > num1) {
        console.log("The player2 win");
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎆";
    } else {
        console.log("graw");
        document.querySelector("h1").innerHTML = "Draw!";
    }

}
//var num = Math.floor(Math.random() * (imagesArray.length + 1)); // 0...6

displayImage();


// Angela solution

//Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgeSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgeSource);

//Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImgeSource = "Images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgeSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {

document.querySelector("h1").innerHTML = "Draw!"
}