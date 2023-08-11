let numClick = -1;
let userPatern = [];
let correctPattern = [];
let possibleColours = ["red","blue","yellow","green"];

let level = 0;
let highScore = 0;

$('.btn').click(function(buttonClicked){
    numClick++;
    let color = buttonClicked.target.id;
    animation("#" + color);
    playAudio(color);
    checkAnswer(color);

});

function checkAnswer(color){
    userPatern.push(color);
    if(color == correctPattern[numClick]){
        if(userPatern.length == correctPattern.length){
            setTimeout(function(){
                userPatern = [];
                numClick = -1;
                nextSequence();
               
            }, 1000);
           
        } 
    } else {
        $("h2").text("Game Over! hit another key to try again!");
        userPatern = [];
        correctPattern = [];
        if (level > highScore){
            highScore = level;
            $("#high").text(level)
        }
        level = 0;
        numClick = -1;
    }
};

function nextSequence(){
    level++;
    $("#score").text(level);
    let random = Math.floor(Math.random()*4);
    let color = possibleColours[random];
    correctPattern.push(color);
    playAudio(color);
    animation("#" + color);
};

function playAudio(color){
    let relPath = ` sounds/${color}.mp3 `;
    let audio = new Audio(relPath);
    audio.play();
};

function animation(id){
    $(id).fadeOut(100).fadeIn(100);
};

$(document).keydown(function(){
    if (level <= 0){
        nextSequence()
        $("h2").text("You can do it!");
    };
}); 