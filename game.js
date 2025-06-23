let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


// COMPUTER'S CHOICE    

const gencompChoice = () => {
    let options = ["Rock" , "Paper" ,"Scissors"];
    const randomIDX = Math.floor(Math.random() * 3);
    return options[randomIDX]; 
     // this line means : A randomly generated number between 0 and 2 ,Retrieves the element at the randomly generated index.  if randomIDX is 1, then:
    //return options[1]; // Returns "Paper"
}

// DRAW FUNCTION    

const drawGame = () =>{
    msg.innerText = "ITS A DRAW , PLAY AGAIN"
};

// WINNER FUNCTION

const showWinner = (userWin , userChoice ,compChoice) => { 
    //We pass userChoice and compChoice so showWinner can display them in the message. Without them, the user wouldn't see which choice won/lost.
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you  Lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor ="red";
    }
};


const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = gencompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
         //We call showWinner(userWin, userChoice, compChoice) inside playGame because playGame has all the required data.it have the requid data which will trigger when i click
    }
};


// USER CHOICE

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});
















