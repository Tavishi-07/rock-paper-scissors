  rockBtn.addEventListener('click', () => handleClick('ROCK'))
  paperBtn.addEventListener('click', () => handleClick('PAPER'))
  scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))


  
    function handleClick (_chosen) {
        
        let playerSelection;
        playerSelection = _chosen.toUpperCase();
        game(playerSelection)
        
    }
  
  

  

    let playerScore = 0
    let computerScore = 0
    let winner 

  

  function game(playerSelection) {
      
    
     
        
        const computerSelection = computerPlay();
        function computerPlay() {
            let randomNumber= Math.floor(Math.random()*3)
            switch (randomNumber) {
            case 0:
                return "ROCK"
            case 1:
                return "PAPER"
            case 2:
                return "SCISSORS"
            }
        }
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    
        
    

    function playRound(playerSelection, computerSelection) {
        // your code here!
        if (playerSelection===computerSelection){
            document.getElementById("finalResult").innerHTML = ("tie")
        }
        if (
            (playerSelection==="ROCK" && computerSelection==="SCISSORS") ||
            (playerSelection==="PAPER" && computerSelection==="ROCK") ||
            (playerSelection==="SCISSORS" && computerSelection==="PAPER") 
        ){
            playerScore++
            document.getElementById("finalResult").innerHTML =  ["You Win", playerSelection, "Beats", computerSelection]
            
        }
        if (
            (computerSelection==="ROCK" && playerSelection==="SCISSORS") ||
            (computerSelection==="PAPER" && playerSelection==="ROCK") ||
            (computerSelection==="SCISSORS" && playerSelection==="PAPER") 
        ){
            computerScore++
            
            document.getElementById("finalResult").innerHTML =  ["You Loose", computerSelection, "Beats", playerSelection]
        }
        
      }

      
     
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore===5 || computerScore===5){
        msg="Game Over"
        if (playerScore===5){
            winner="CONGRATULATIONS! YOU WON!!"
            document.getElementById("finalMsg").innerHTML = winner;
        }
        if (computerScore===5){
            winner="YOU LOSE! BETTER LUCK NEXT TIME!!"
            document.getElementById("finalMsg").innerHTML = winner;
        }
        else {
            winner="OOPS, IT'S A TIE"
            document.getElementById("finalMsg").innerHTML = winner;
        }
        
        document.getElementById("finalResult").innerHTML = msg;
        playerScore = 0
        computerScore = 0
        winner = ""
        
    }

  
  }



 


