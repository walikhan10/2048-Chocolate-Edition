import Game from "./engine/game.js";
let initialize = false;

export const setup = function(game) {
    
    for(let i = 0; i<game.board.length;i++) {
        document.getElementById((i+1).toString()).innerHTML = game.board[i]
    }
    


    for (let i=0; i < game.board.length; i++) {
    if  (game.board[i] == "0") document.getElementById((i+1).toString()).style.backgroundColor  = '#ffe4c4'
        else if  (game.board[i] == "2") document.getElementById((i+1).toString()).style.backgroundColor = '#fadfad'
        else if (game.board[i] == "4") document.getElementById((i+1).toString()).style.backgroundColor = '#cd9575' 
        else if (game.board[i] == "8") document.getElementById((i+1).toString()).style.backgroundColor = '#c19a6b' 
        else if (game.board[i] == "16") document.getElementById((i+1).toString()).style.backgroundColor = '#ba8759' 
        else if (game.board[i] == "32") document.getElementById((i+1).toString()).style.backgroundColor = '#cd853f' 
        else if (game.board[i] == "64") document.getElementById((i+1).toString()).style.backgroundColor = '#bb6528' 
        else if (game.board[i] == "128") document.getElementById((i+1).toString()).style.backgroundColor = '#b5651d' 
        else if (game.board[i] == "256") document.getElementById((i+1).toString()).style.backgroundColor = '#6f4e37' 
         else if (game.board[i] == "512") document.getElementById((i+1).toString()).style.backgroundColor = '#6b4423' 
         else if (game.board[i] == "1024") document.getElementById((i+1).toString()).style.backgroundColor = '#644117' 
         else if (game.board[i] == "2048") document.getElementById((i+1).toString()).style.backgroundColor = '#3d0c02' 
     


}

for (let i=0; i < game.board.length; i++) {

    if  (game.board[i] == "0"||game.board[i] == "2"|| game.board[i] == "4"|| game.board[i] == "8" || game.board[i] == "16" || game.board[i] == "32" ) document.getElementById((i+1).toString()).style.color  = '#000000'
    else if (game.board[i] == "64") document.getElementById((i+1).toString()).style.color  = '#FFFFFF'
    else if (game.board[i] == "128") document.getElementById((i+1).toString()).style.color  = '#FFFFFF'
    else if (game.board[i] == "256") document.getElementById((i+1).toString()).style.color  = '#FFFFFF'
    else if(game.board[i] == "1024") document.getElementById((i+1).toString()).style.color  = '#FFFFFF'
    else if (game.board[i] == "2048" ) document.getElementById((i+1).toString()).style.color  = '#FFFFFF'

}

 


}

// When the page first loads, the game must be initialized to a random starting state.
// The player must be able to input moves by pressing the arrow keys on the keyboard.
// The game board must be displayed on the page and updated as moves are made.
// The score must be displayed on the page and updated as moves are made.
// A button must be included in the user interface that allows the player to reset the game to an initial starting position.
// When the game is over, the user interface must visually display that the game is over. Do not use the alert() function for this.
// If the player wins the game, the user interface must visually display that the game is won. Do not use the alert() function for this.


export const keys = function(key, board){
    switch (key) {
        case '&':
            board.move('up');
            break;
        case '(':
            board.move('down');
            break;
        case '%':
            board.move('left');
            break;
        case '\'':
            board.move('right');
            break;
        default:
            break;
    }
}

export const newGame = function(game){
    document.getElementById("score").innerHTML = "Score: " + game.score;
    if(initialize == false){
        initialize = true;
        $('#reset').on("click", function(){
            game.setupNewGame();
            newGame(game);
            document.getElementById("end").innerHTML = "";
        });
        $(document).keydown(function(e){
            var s = String.fromCharCode(e.which);
            keys(s, game);
            update(game);
        });
    }
    setup(game);
};

export const update = function(game){
    setup(game);
    document.getElementById("score").innerHTML = "Score: " + game.score;
    if(game.over == true){
        document.getElementById("end").innerHTML = "You Lost! Score: " + game.score + ". Press Reset Game"
        + "<img src= https://i.imgflip.com/i0kp9.jpg alt = sad_choc>"
    }
    if(game.won){
        document.getElementById("end").innerHTML = "Congrats! You can keep going :)";
    }
}

$(document).ready(function () {
    let game = new Game(4);
    newGame(game);
});