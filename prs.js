let score = 0;
let wins = 0;
let losses = 0;
let draws = 0;

    function game(playerMove, computerMove){

// asking a user for his move
        let answer = prompt('paper, scissors or rock?');
    
        playerMove = answer;

// making an error message if the usersname is too long
        if(playerMove === "paper" || playerMove === "rock" || playerMove === "scissors"){playerMove = answer;}
        else{
            alert("error");
            answer = prompt('paper, scissors or rock?');
            rounds = rounds;
        };

// randomizing computer's moves
        computerMove = Math.floor(Math.random() * 3);
    
// assinging random numbers between 0 and 2 numbers to rock, scissors and paper
        if (computerMove === 0){
            computerMove = 'rock';
        }
        else if (computerMove === 1){
            computerMove = 'paper';
        } 
        else if (computerMove === 2){
            computerMove = 'scissors';
        };
        
// Making if statements with all possible results

        if(playerMove === computerMove){
            draws = draws+1;
            return 0;
        
        };

        if (playerMove === "rock"){
            if (computerMove === "paper"){
                score = score - 1;
                losses = losses + 1;
                return -1;
            }
        };

        if (playerMove === "rock"){
            if (computerMove === "scissors"){
                score = score + 1;
                wins = wins + 1
                return 1;
            }
        };

        if (playerMove === "paper"){
            if (computerMove === "rock"){
                score = score + 1;
                wins = wins + 1;
                return 1;
            }};

        if (playerMove === "paper"){
            if (computerMove === "scissors"){
                score = score - 1;
                losses = losses + 1;
                return -1;
             }};
                
        if (playerMove === "scissors"){
            if (computerMove === "rock"){
                score = score - 1;
                losses = losses +1;
                return -1;
                 }}
                
         if (playerMove === "scissors"){
                if (computerMove === "paper"){
                score = score + 1;
                wins = wins + 1;
                return 1;
                     }};
      
    };

// asking user for their name

    let username = prompt("what's your username?");

// checking if the user name starts with a letter

// while (username.charAt(0) !== /^[a-zA-Z]/){
//     alert("username should start with a letter");
//     username = prompt("what's your username?");
// };


// checking if the user name starts with a capital letter

    while(username[0] !== username[0].toUpperCase()){
        alert("username should start with a capital letter");
        username = prompt("what's your username?");
    };

// restricting the length of the username

    while(username.length>10){
        alert("your username is too long. ");
        username = prompt("what's your username?");
    }

// making a welcome message

    alert("hello " + username + ". let's play a game.")

// making a variable to store the number of rounds
    let rounds = 0;

// making a while loop and asking user if they want to keep playing 
    let keepPlaying= true;

    while (keepPlaying === true){
        game();
        rounds = rounds + 1;
        alert(`rounds: ${rounds}\nscore: ${score}\nwins: ${wins}\nlosses: ${losses}\ndraws: ${draws}`);
     
        keepPlaying=confirm('do you want to play again?');
        
        
    };
