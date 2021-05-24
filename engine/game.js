export default class Game{
    
    constructor(size){
       // INTIAL CONSTRUCTOR
        this.size = size;
        
        this.board = [];
        this.score= 0;
        this.won = false;
        this.over = false;
        this.board_S = size * size;
       
// The Game class must have a constructor that takes a single integer argument representing the width/height of the game.
// When a new Game object is created (e.g. const game = new Game(4)), a new game of size 4x4 should be set up, and the board should be initialized by randomly adding two tiles to the game.
// Your game class must support arbitrary game board sizes (i.e. 2x2, 3x3, 4x4, 5x5, etc).
       this.setupNewGame();
    }

    toString() {
        let count = 0;
        let s = "";
        this.board.forEach(e => {
            count++;
            s += ("[" + e + "]");
            if (count % this.size == 0) {
                s += "\n";
            } else {
                s+= " ";
            }
        });
        return s;
        //toString(): Returns a string representation of the game as text/ascii. See the gameState section above for an example. This will not be graded, but it useful for your testing purposes when you run the game in the console. The run_in_console.js script uses the toString() method to print the state of the game to the console after every move.
    }

// Any time a new tile is added to the game, it should have a 90% chance of being a 2 and a 10% chance of being a 4. It should be placed into a uniformly random free space on the board.

// New tiles should be added to the game only in the following situations:

// When the game is first initialized or reset, two tiles should be added to the otherwise empty board.
// After a legal move occurs, one tile should be added to the board.


    
    getRand(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    };
    
    getrandom() {
        let x = Math.random();
        if (x > 0.1) return 2;
        return 4;
    }


    setupNewGame(){

       
        
        this.move_track = [];
        this.win_track =[];
        this.lose_track = [];
        this.didIMove =false;

//

        let rand = Math.floor(Math.random() * (this.board_S))

        let r1 =  rand;
        let r2 = rand;
   //
   
   

       //creates random places on the board
       
        while(true) {
            if (r1 != r2) {
                break;
            } else {
                r2= Math.floor(Math.random() * (this.size*this.size));
            }
        }

        // gets random tile each time 
        let new_B = []
        for(let j =0; j< this.board_S; j++){
            if(j == r1){
                new_B.push(this.getRandomTile());
            }
            else if ( j == r2){
                new_B.push(this.getRandomTile());
            }else{
                new_B.push(0);
            }

        }
        this.board = new_B;
        this.score= 0;
        this.won = false;
        this.over = false;
       
    }



//     setupNewGame(){

       
        
//         this.move_track = [];
//         this.win_track =[];
//         this.lose_track = [];
//         this.didIMove =false;

// //

//         let rand = Math.floor(Math.random() * (this.board_S))

//         let r1 =  rand;
//         let r2 = rand;
//    //
   
   

//        //creates random places on the board
       
//         while(true) {
//             if (r1 != r2) {
//                 break;
//             } else {
//                 r2= Math.floor(Math.random() * (this.size*this.size));
//             }
//         }

    getRandomTile() {
        let x = Math.random();
        if( x < (1-.9)){
            return 4;
        } else{
            return 2;
        }     
    }

    loadGame(gameState){
        this.size = Math.sqrt(gameState.board.length);
  
        this.board= gameState.board;
        this.score = gameState.score;
        this.won =gameState.won;
      
        this.over = gameState.over;
    }

  

    getFull(){
        for(let i =0; i< this.board_S; i++){
            if(this.board[i] == 0){
                return false;
            } 
        }
        return true;
    }
    move(direction){
        switch (direction) {
           
           
           
           
           
           
           
            case 'up':
            this.moveUp();
                // for(let x=0;x<this.size;x++){
      
                //     for(let y=x; y<this.board_S; y=y+this.size){
                 
                //         for(let i=y+this.size; i<this.board_S; i=i+this.size){
                            
                //             if(this.board[i]==0){
                //     
                                
                //              }
                //             if(this.board[i]!=this.board[y]){
                //                 break;
                //             }
                //         }
                //     }
                // }  
                // this.getEmpt();

                // for(let x=0; x<this.size; x++){
       
                //     for(let y=x; y<this.board_S; y=y+this.size){
                //       
                //                 this.didIMove = true;
                //                 this.board[y]=this.board[i];
                //                 this.board[i]=0;
                //                 break;
                //             }
                //        }
                //     }
                // }

                this.getEmpt()
            
                
                break;
            case 'down':
                this.columnSwitch()
                this.columnSwitch()
                this.moveUp()
                this.getEmpt()
                this.columnSwitch()
                this.columnSwitch()
               
                break;

            case 'left':
                this.columnSwitch()
                this.moveUp()
                this.getEmpt()
                this.columnSwitch()
                this.columnSwitch()
                this.columnSwitch()
             
                break;
            case 'right':
                this.columnSwitch()
                this.columnSwitch()
                this.columnSwitch()
                this.moveUp()
                this.getEmpt()
                this.columnSwitch()
                // A legal move is one that causes pieces to slide or collapse on the board.
                // If a player tries to make a move that does not change the state of the board, no move should occur and no new tiles should be added to the board.
                // Once a move causes a 2048 tile to be created, the state should reflect that the game is "won".
                // Once no legal moves are available, the state should reflect that the game is "over".
                break;
            
        } 
        for(let i=0;i<this.move_track.length;i++){
            let state ={
                board: this.board,
                score: this.score,
                won: this.won,
                over: this.over
              };
               this.move_track[i](state);
    }
    
    
    if(this.won){
        for(let i=0;i<this.win_track.length;i++){
            let state ={
                board: this.board,
                score: this.score,
                won: this.won,
                over: this.over
              };
               this.win_track[i](state);
           } 
    }



        if(!this.getFull()) {
            this.addOne()
        }
 
        if(this.getFull()){
            if(this.gameOver()){
                this.columnSwitch();
                
                
                if(this.gameOver()){
                    this.columnSwitch();
                    this.columnSwitch();
                    this.columnSwitch();
                    this.over=true;
                    
                    
                    for(let i=0;i<this.lose_track.length;i++){
                        let gameState ={
                            board: this.board,
                            score:this.score,
                            won: this.won,
                            over: this.over
                        };
                        this.lose_track[i](gameState);
                    }
                }else{
                    this.columnSwitch();
                    this.columnSwitch();
                    this.columnSwitch();
                }
            }
        }
        this.didIMove = false;
    }// end of method


    getcheck(array){
        if(this.won){
           
           
            for(let i=0;i<this.array.length;i++){
                let state ={
                    board: this.board,
                    score: this.score,
                    won: this.won,
                    over: this.over
                  };
                   this.array[i](state);
               } 
        }
    }

    getLoseTrack(){
        for(let i=0;i<this.lose_track.length;i++){
            let state ={
                board: this.board,
                score:this.score,
                won: this.won,
                over: this.over
            };
    }
}

    gameOver(){
    
       
    for(let x=0;x<this.size;x++){

            for(let j=x; j<this.board_S; j=j+this.size){
                for(let i=j+this.size; i<this.board_S; i=i+this.size){
                    if(this.board[i]==0){
                        return false;
                    }
                    else if(this.board[i]==this.board[j]){
                        return false;
                    }else{
                        break;
                    }
                }
            }
        }
        return true;
    }








    addOne(){
        if(this.didIMove){
            let fullBoard = this.getFull();
            for(let i =0; i <this.board_S; i++){
                if(this.board[i] == 0 && !this.getFull()){
                    this.board[i] = this.getRandomTile();
                    break;
                }
            }
        }
    }






    go1Dto2D(){
        let new1D = [];
        while(this.board.length) {
            new1D.push(this.board.splice(0,this.size));
        }
        this.board=new1D;
    }

    
    flatten2D(arr){
        let flattened=[]
        for(let x=0;x<arr.length;x++){
            for(let y=0;y<arr.length;y++){
                flattened.push(arr[x][y]);
            }
        }
    return flattened;
    }


    

    onMove(callback){

        this.move_track.push(callback);
    }

    onWin(callback){
        
        this.win_track.push(callback);
    }

    onLose(callback){
        this.lose_track.push(callback);
    }

    getGameState(){
        //Returns a accurate gameState obrect representing the current game state
        var state={
            "board": this.board,
            "score": this.score,
            "won": this.won,
            "over": this.over
        };        
        return state;
    }

    columnSwitch() {
        this.go1Dto2D();
        
        
        const z = this.size;
        const x = Math.floor(z/2);
        const y = z - 1;
        let tempboard = this.board;


        
        for (let i = 0; i < x; i++) {
            for (let r = i; r < y - i; r++) {
                let k = tempboard[i][r];
                tempboard[i][r] = tempboard[y - r][i];
                tempboard[y - r][i] = tempboard[y - i][y - r];
                tempboard[y - i][y - r] = tempboard[r][y - i];
                tempboard[r][y - i] = k;



            }
   }

       this.board= this.flatten2D(this.board);
   }

    moveUp(){
  
        for(let x=0;x<this.size;x++){
      
            for(let y=x; y<this.board_S; y=y+this.size){
         
                for(let i=y+this.size; i<this.board_S; i=i+this.size){
                    
                    if(this.board[i]==0){
                        continue;
                    }
                    if(this.board[i]==this.board[y]){
                        
                        this.score=this.score+(this.board[i]*2);
                        this.board[i]=0;
                        this.board[y]=this.board[y]*2;
                        this.didIMove;
                        if(this.board[y] == 2048){
                            this.won = true;
                        }
                        break;
                        
                     }
                    if(this.board[i]!=this.board[y]){
                        break;
                    }
                }
            }
        }  
        this.getEmpt();
    }

   


    getEmpt(){
       
        for(let x=0; x<this.size; x++){
       
            for(let y=x; y<this.board_S; y =y +this.size){
                if(this.board[y]!=0){
                    continue;
                }
              
                for(let i=y+this.size; i<this.board_S; i = i+this.size){
                    if(this.board[i]==0){
                        continue;
                    }else{
                        this.didIMove = true;
                        this.board[y]=this.board[i];
                        this.board[i]=0;
                        break;
                    }
               }
            }
        }
    }




} 