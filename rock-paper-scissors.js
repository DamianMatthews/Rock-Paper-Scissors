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
    return cpu;
}
// Prompt user for input to play
// Save users input value
// Validate the input else throw an error 
// If valid, compare CPU to user and print results
function playerSelection() {
    let player1 = prompt("Rock, paper or scisssors? ");
    return player1.toLowerCase();
}

// Compare CPU play to player1
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose, paper beats rock';
        } else {
            return 'You win, rock beats scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win, paper beats rock';
        } else {
           return 'You lose,scissors beats paper'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose, rock beats scissors'
        } else {
            return 'You win, scissors beats paper'
        }
    } else {
        return 'invalid input'
    }
}

function game () {
    let player1 = 0;
        let cpu = 0;
    for (let i = 1; i<6; i++) {
        let round = playRound(playerSelection(),computerSelection());
        if ( round === 'You win, rock beats scissors' || round === 'You win, paper beats rock' || round === 'You win, scissors beats paper') {
            player1 = player1 + 1;
        } else if ( round === 'You lose, paper beats rock' || round === 'You lose,scissors beats paper' || round === 'You lose, rock beats scissors') {
            cpu = cpu + 1;
        } else {
            cpu = cpu;
            player1 = player1;
        }
        console.log(player1);
        console.log(cpu);
        console.log(round);
    }    
    if (player1 > cpu) {
        console.log(`You won ${player1} games! CPU won ${cpu}`)
    } else if (cpu > player1) {
        console.log(`You won ${player1} games! CPU won ${cpu}`)
    } else {
        console.log(`Tie, you won ${player1} games and the CPU won ${cpu} games as well!`)
    }
}

game();