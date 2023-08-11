// Get the total number of drum buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button and add a click event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
    // Attach a "click" event listener to the current drum button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Get the innerHTML (the letter on the button) of the clicked button
        var buttoninnerHTML = this.innerHTML;

        // Call the makeSound function with the button's letter as an argument
        makeSound(buttoninnerHTML);

        // Call the buttonAnimation function with the button's letter as an argument
        buttonAnimation(buttoninnerHTML);
    });
}

// Add a global event listener for keydown events
document.addEventListener("keydown", function(event) {
    // Call the makeSound function with the pressed key as an argument
    makeSound(event.key);

    // Call the buttonAnimation function with the pressed key as an argument
    buttonAnimation(event.key);
});

// Function to play a specific sound based on the provided key
function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            alert(key + " Does not play a sound");
    }
}

// Function to add a temporary "pressed" class for button animation
function buttonAnimation(currentKey) {
    // Select the button element with a class corresponding to the pressed key
    var activeButton = document.querySelector("." + currentKey);

    // Add the "pressed" class to the button to create a visual effect
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after a short delay to revert the effect
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
