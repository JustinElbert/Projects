let score = JSON.parse(localStorage.getItem('score'));

        if(score === null){
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }

        updateScore();

        let isAutoPlaying = false;
        let intervalId;
        
        function autoPlay(){
            if(!isAutoPlaying){
                intervalId = setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000);
                isAutoPlaying = true;
            }else{
                clearInterval(intervalId);  
                isAutoPlaying = false;
            }
        }

        document.querySelector('.rock-btn')
            .addEventListener('click', () => {
                playGame('rock');
            });

        document.querySelector('.paper-btn')
            .addEventListener('click', () => {
                playGame('paper');
            });

        document.querySelector('.scissors-btn')
            .addEventListener('click', () => {
                playGame('scissors');
            });

        document.body.addEventListener('keydown', (event) =>{
            if(event.key === 'r'){
                playGame('rock');
            }else if(event.key === 'p'){
                playGame('paper');
            }else if(event.key === 's'){
                playGame('scissors');
            }
        });

        function playGame(playerMove){
            const computerMove = pickComputerMove();

            let result = '';

            if(playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You Lose';
                    score.losses += 1
                }else if(computerMove === 'paper'){
                    result = 'You Win';
                    score.wins += 1
                }else if(computerMove === 'scissors'){
                    result = 'Tie';
                    score.ties += 1
                }
            }else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                    result = 'Tie';
                    score.ties += 1
                }else if(computerMove === 'paper'){
                    result = 'You Lose';
                    score.losses += 1
                }else if(computerMove === 'scissors'){
                    result = 'You Win';
                    score.wins += 1
                }
            }else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'You Win';
                    score.wins += 1
                }else if(computerMove === 'paper'){
                    result = 'Tie';
                    score.ties += 1
                }else if(computerMove === 'scissors'){
                    result = 'You Lose';
                    score.losses += 1
                }
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result')
               .innerHTML = `${result}`;

            document.querySelector('.js-moves')
               .innerHTML = `You ${playerMove} - Computer ${computerMove}.`;
        }

        function updateScore(){
            document.querySelector('.js-score')
               .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
        }

        function pickComputerMove(){
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }
            
            return computerMove;
        }

        function resetScore(){
            score.wins = 0
            score.losses = 0
            score.ties = 0
            localStorage.removeItem('score');
            updateScore();
            alert('Score Resetted!')
        }