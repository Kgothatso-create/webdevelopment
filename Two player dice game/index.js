// Generate a random number between 1 and 6 for Player 1's dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Generate a random number between 1 and 6 for Player 2's dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the filename of the dice image for Player 1 using the random number
var randomImage1 = "dice" + randomNumber1 + ".png";

// Create the filename of the dice image for Player 2 using the random number
var randomImage2 = "dice" + randomNumber2 + ".png";

// Create the complete path to the image for Player 1
var randomImagePath1 = "./images/" + randomImage1;

// Create the complete path to the image for Player 2
var randomImagePath2 = "./images/" + randomImage2;

// Select the first image element on the page (Player 1's dice)
var image1 = document.querySelectorAll("img")[0];

// Set the "src" attribute of Player 1's dice image to the generated image path
image1.setAttribute("src", randomImagePath1);

// Select the second image element on the page (Player 2's dice)
var image2 = document.querySelectorAll("img")[1];

// Set the "src" attribute of Player 2's dice image to the generated image path
image2.setAttribute("src", randomImagePath2);

// Compare the random numbers to determine the winner or if it's a draw
if (randomNumber1 > randomNumber2) {
    // Update the content of the h1 element to declare Player 1 as the winner
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    // Update the content of the h1 element to declare Player 2 as the winner
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    // Update the content of the h1 element to declare a draw
    document.querySelector("h1").innerHTML = "Draw";
}
