// An array of dice image filenames
let images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
];

// Select all the img elements on the page (the dice images)
let dice = document.querySelectorAll("img");

// Function that simulates rolling the dice
function roll() {
    // Add a "shake" class to each dice image to create a shaking animation
    dice.forEach(function(die){
        die.classList.add("shake");
    });

    // After a delay of 1000ms (1 second), execute the following code
    setTimeout(function(){
        // Remove the "shake" class from each dice image to stop the shaking animation
        dice.forEach(function(die){
            die.classList.remove("shake");
        });

        // Generate random values for the two dice
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        // Display the random values in the console
        console.log(dieOneValue, dieTwoValue);

        // Update the src attribute of the dice images to show the rolled values
        document.querySelector("#die-1").setAttribute("src", "images/" + images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", "images/" + images[dieTwoValue]);

        // Calculate the total of the two dice values and display it in the "total" paragraph
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
    1000 // Delay of 1000ms (1 second)
    );
}

// Initial roll when the script is first loaded
roll();
