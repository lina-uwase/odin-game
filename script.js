function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    // Check for all possible player wins
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  
    // If none of the above conditions are met, the computer wins
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${i + 1}:`);
      console.log(`Player chooses ${playerSelection}`);
      console.log(`Computer chooses ${computerSelection}`);
      
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      // Update scores
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
  
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log('---------------------');
    }
  
    // Determine the overall winner
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game. Better luck next time!');
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();
  