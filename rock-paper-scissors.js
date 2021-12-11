// Pseudocode - Creating Rock Paper Scissors
// Generate CPU play randomly
// Generate Rock, Paper or Scissors
// Return the CPU play from a function 

// Prompt user for input to play
// Save users input value
// Validate the input else throw an error 
// If valid, compare CPU to user and print results

// Count that round and save the value
// Once we have reached 5 rounds, declare a winner overall
// Display number of rounds and who won



// Generate CPU play randomly
// Generate Rock, Paper or Scissors
// Return the CPU play from a function 
const start = document.querySelector('.startGame');
start.addEventListener('click', reset);


// document.getElementById("mainScreen").innerHTML = computerSelection ();

function computerSelection () {
    let cpu = Math.floor(Math.random()*3+1);
    switch(cpu){
        case 1:
            cpu = 'rock';
            break;
        case 2:
            cpu = 'paper';
            break;
        case 3:
            cpu = 'scissors';
            break;    
    }
    // return cpu;
    document.getElementById("cpu").innerHTML = cpu;
    return cpu;
}
// Prompt user for input to play
// Save users input value
// Validate the input else throw an error 
// If valid, compare CPU to user and print results

document.getElementById("rock").addEventListener("click", function() {
    playerSelection('rock');
    playRound(playerSelection('rock'), computerSelection());
}); 
document.getElementById("paper").addEventListener("click", function() {
    playerSelection('paper');
    playRound(playerSelection('paper'), computerSelection());
}); 
document.getElementById("scissors").addEventListener("click", function() {
    playerSelection('scissors');
    playRound(playerSelection('scissors'), computerSelection());
}); 

function playerSelection(choice) {
    let player1 = "";
    console.log(choice);
    if (choice === "rock") {
        player1 = 'rock';
    } else if (choice === "paper") {
        player1 = 'paper';
    } else {
        player1 = 'scissors'
    }
    document.getElementById("player1").innerHTML = player1;
    return player1.toLowerCase();
}

let win=0;
let lose=0; 
// Compare CPU play to player1
function playRound (playerSelection, computerSelection) {
    if (win===4 && lose<4) {
        document.getElementById("upperMiddle").innerHTML =`You won ${win+1} games! CPU won ${lose+1}`;
                win = 0;
                lose = 0;
                document.getElementById("player1").innerHTML = playerSelection;
                document.getElementById("player1").innerHTML = computerSelection;
                alert("YOU WIN!!!");
            } else if (lose===4 && win<4) {
                document.getElementById("upperMiddle").innerHTML=`You won ${win+1} games! CPU won ${lose+1}`;
                win = 0;
                lose =0;
                document.getElementById("player1").innerHTML = playerSelection;
                document.getElementById("player1").innerHTML = computerSelection;
                alert("YOU LOSE!!!");
            } else {
    if (playerSelection === computerSelection) {
        document.getElementById("upperMiddle").innerHTML = 'Tie!';
        console.log(`${win}, 'wins', ${lose}, 'losses`);
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            document.getElementById("upperMiddle").innerHTML = 'You lose, paper beats rock';
            ++lose;
            console.log(`${win}, 'wins', ${lose}, 'losses`);
        } else {
            document.getElementById("upperMiddle").innerHTML = 'You win, rock beats scissors';
            ++win;
            console.log(`${win}, 'wins', ${lose}, 'losses`);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            document.getElementById("upperMiddle").innerHTML = 'You win, paper beats rock';
            ++win;
            console.log(`${win}, 'wins', ${lose}, 'losses`);      
        } else {
            document.getElementById("upperMiddle").innerHTML = 'You lose, scissors beats paper';
            ++lose;
            console.log(`${win}, 'wins', ${lose}, 'losses`);
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            document.getElementById("upperMiddle").innerHTML = 'You lose, rock beats scissors';
            ++lose;
            console.log(`${win}, 'wins', ${lose}, 'losses`);
        } else {
            document.getElementById("upperMiddle").innerHTML = 'You win, scissors beats paper';
            ++win;
            console.log(`${win}, 'wins', ${lose}, 'losses`);
        }
    } else {
        console.log('invalid input');
   
    }
}
document.getElementById("win").innerHTML = win;
document.getElementById("lose").innerHTML = lose;
}

function reset () {
    document.getElementById("upperMiddle").innerHTML = "";
    document.getElementById("win").innerHTML = 0;
    document.getElementById("lose").innerHTML = 0;
    win=0;
    lose=0; 
}
// function game (gamePLay) {
//     let player1 = 0;
//         let cpu = 0;
//     while (player1 < 5 && cpu < 5) {
//         let round = gamePLay;
//         if ( round === 'You win, rock beats scissors' || round === 'You win, paper beats rock' || round === 'You win, scissors beats paper') {
//             player1 = player1 + 1;
//         } else if ( round === 'You lose, paper beats rock' || round === 'You lose,scissors beats paper' || round === 'You lose, rock beats scissors') {
//             cpu = cpu + 1;
//         } else {
//             cpu = cpu;
//             player1 = player1;
//         }
//         console.log(player1);
//         console.log(cpu);
//         console.log(round);
//     }    
//     if (player1 > cpu) {
//         console.log(`You won ${player1} games! CPU won ${cpu}`)
//     } else if (cpu > player1) {
//         console.log(`You won ${player1} games! CPU won ${cpu}`)
//     } else {
//         console.log(`Tie, you won ${player1} games and the CPU won ${cpu} games as well!`)
//     }
// }

