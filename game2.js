// 1.stroing the userscore and compscore and setting to zero
let userscore = 0;
let compscore = 0;
// 5.the compchoice is generated by using math function and firstly take them in an array as the strings cant be in random so we take arrays bcz numbers can be random
const gencompChoice = () =>{
    const options = ["rock","paper","scissors"]
    const rndIdx = Math.floor(Math.random()*3);
    return options[rndIdx]
};
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "the game was draw, play again"
    msg.style.backgroundColor = "black"
}
// 7.here it shows the winner based on user and compchoice
const showWinner =(userwin , userChoice,compChoice) => {
    if(userwin){
        userscore++; // increases the userscore if won
        userscorepara.innerText = userscore // prints the user score
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"

    }else{
        compscore++; // increases the comp score if we r lost
        compscorepara.innerText = compscore //prints the comp score
        msg.innerText = msg.innerText = `You Lost! your ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
        }

 };

 // 4. this userschoice is stored in a variable here we will gen the userchoice
const playGame = (userChoice) =>{
    console.log("userChoice=",userChoice)
    // generate comp choice
    const compChoice = gencompChoice();
    console.log("compChoice=",compChoice);
// 6. after generation of compchoice there will be a fight b/w user and comp so for this we use this 
if(userChoice===compChoice) {  
    drawGame();
} else{
    let userwin = true;
    if (userChoice === "rock"){
        userwin = compChoice==="paper" ? false:true;
    }
    else if(userChoice==="paper"){
        userwin = compChoice === "scissors" ? false:true;
    } else{
        userwin = compChoice ==="rock"? false:true;
    }
     showWinner(userwin , userChoice,compChoice); // showwinner function call
}
}
const choices = document.querySelectorAll(".choice") // 2.accessing the 3 choices 
const msg = document.querySelector("#msg") // accessing the msg for displaying win or lose
const userscorepara = document.querySelector("#user-scr") // for dispalying score of user accessing the score of user 
const compscorepara = document.querySelector("#comp-scr") // for displaying score of comp accessing the score of comp

//3. for selecting the 3 choices we are using eventlisteners here
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id") // here in console we can know which choice is selected ,by getattribute by giving id 
        playGame(userChoice);
    })
});
