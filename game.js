 const score = {
        wins: 0,
        losses: 0,
        Ties: 0
    };
    function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        if(playerMove === 'Rock'){
            if(computerMove === 'Rock'){
                result = 'Tie';
            }
            else if(computerMove === 'Paper'){
                result = 'You lose.';
            }
            else if(computerMove === 'Scissor'){
                result = 'You win.'
            }
        }
        else if(playerMove === 'Paper'){
            
            if(computerMove=== 'Paper'){
                result = 'Tie';
            }
            else if(computerMove === 'Rock'){
                result = 'You win.';
            }
            else if(computerMove === 'Scissor'){
                result = 'You lose.'
            }
        }
        else if(playerMove === 'scissor'){
            
        if(computerMove === 'Scissor'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You win.';
        }
        else if(computerMove === 'Rock'){
            result = 'You lose.';
        }
        }
        if(result==='You win.'){
            score.wins += 1;
        }
        else if(result==='You lose.'){
            score.losses += 1;
        }
        else if(result==='Tie'){
            score.Ties += 1;
        }
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.Ties}`);
    }
    function pickComputerMove(){
         const randomNumber = Math.random();
        if(randomNumber>=0 && randomNumber< 1/3){
            computerMove = 'Rock';
        }
        else if(randomNumber>=1/3 && randomNumber< 2/3){
         computerMove = 'Paper';
        }
        else{
            computerMove = 'Scissor'
        }
        return computerMove;
    }