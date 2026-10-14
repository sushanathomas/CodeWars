const rps = (p1, p2) => {
  // first, check if both players picked 
  if(p1 === p2){
    return "Draw!"
  }
  
  // Check all the ways Player 1 can win
  
  if (
  (p1 === 'rock' && p2 === 'scissors') ||
  (p1 === 'scissors' && p2 === 'paper') ||
  (p1 === 'paper' && p2 === 'rock')
  ) {
    return "Player 1 won!"; 
  }
  
  // If it's not a draw and Player 1 didn't win, then Player 2 must have won
  
  return 'Player 2 won!'; 
  
};