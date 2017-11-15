// 1. (5 points) Create a function that, given a height and a string containing a single character, it will print a diamond of the given height using the given character.  Please implement this function using recursion.

// Example: printDiamond(5, '@'); should print this:

// 2. (5 points) Implement the function specified in #1 using a 'for' loop.

//    @
//   @@@
//  @@@@@
//   @@@
//    @

// -------------------------------------------------------

// Printing diamond with recursion

const printDiamondRec = function(n, char) {
    if (n % 2 === 0) {
        n+=1;
    };

    const printRaw = function(char, n) {
        if(n === 0) {
            return'';
        }
        return (char + printRaw(char, n-1));
    };
   
    const final = function(i) {
       if (i <= n) {

            if(i > ((n + 1) / 2)) {

                console.log(printRaw(" ", i - (n + 1)/2) + printRaw(char, (n - i + 1)*2 - 1)); 

            } else {

                console.log(printRaw(" ", (n + 1)/2 - i) + printRaw(char, i*2 - 1));

            };
            final(i + 1);
        }
        
        return;
   };
   
   final(1);
};


// Printing diamond with for loop

const printDiamondFor = function(n, char) {
    if (n % 2 === 0) {
        n+=1;
    };

    const printRaw = function(char, n) {
        let str = '';
        for (let i = 1; i <= n; i++) {
            str += char;
        }

        return str;
   
    }

    for(let i = 1; i <= n; i++) {

        if(i>((n+1)/2)) {
           console.log(printRaw(" ", i - (n + 1)/2) + printRaw(char, (n - i + 1)*2 - 1)); 
        } else
        console.log(printRaw(" ", (n + 1)/2 - i) + printRaw(char, i*2 - 1));
    }
};


// TIC TAC TOE GAME STEP BY STEP


const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// 3. (10 points) A function called nextMove which is given the board and isX and returns the location where the next move should be - the location should be an array with two values in it

const nextMove = function(board) {
    for(n = 0; n < board.length; n++) {

        let rowTic = board[n];

        for(i = 0; i < rowTic.length; i++) {
            if(!rowTic[i]) {
                return [n, i];
            }
        }
    }
}

// 4. (10 points) A function called makeMove which takes the board, location and isX and changes the board to include the new move.
// This function should return -1 if it is called with an invalid location, or 0 if everything was fine.

const makeMove = function(board, arr, isX) {
    let char;
    if(isX) {
        char = 'X';
    } else {
        char = 'O';
    }

    if (arr[0] < 3 
        && arr[1] < 3 
        && arr[0] >= 0 
        && arr[1] >= 0) {

        board[arr[0]][arr[1]] = char;
        return 0;

    } else {
        return -1;
    }
}


// 5. (10 points) Implement a function called findWinner(board).  This method is responsible for finding if the game is over and who won.  Specifics:  


// If the game is not over, return undefined.

const findWinner = function(board) {
    for (let k = 0; k < board.length; k++) {
        if (board[k][0] === board[k][1] === board[k][2] && board[k][0] !== '') {

            return {
                winner: board[k][0],
                winningLocations: [[k, 0], [k, 1], [k, 2]]
            }

        } else if ( board[0][k] === board[1][k] === board[2][k] && board[0][k] !== '') {

            return {
                winner: board[0][k],
                winningLocations: [[0, k], [1, k], [2, k]]
            }
          
        } else if ( board[0][0] === board[1][1] === board[2][2] && board[0][0] !== '') {

            return {
                winner: board[0][0],
                winningLocations: [[0, 0], [1, 1], [2, 2]]
            }
           
        } else if ( board[0][2] === board[1][1] === board[2][0] && board[0][2] !== '') {
           
            return {
                winner: board[0][2],
                winningLocations: [[0, 2], [1, 2], [2, 0]]
            }
            
        // } else if () {
        // //should work only when the whole board is filled
        //     return {
        //          winner: 'none',
        } else {
            return undefined;
        }
    }
}

// findWinner(board)

// 6. (10 points) Simulate a tic tac toe game in a loop.  Begin with x and call your nextMove method to get the next move for x.  Then make the move by calling makeMove (if makeMove returns -1, show an alert saying what happened and break out of the loop).  Then call findWinner - if a winner is found or a tie, alert a proper message and break out of the loop.  If not, do the same for O and keep repeating the cycle until somebody wins.

const start = function(board, isX) {
    let char;
    if(isX) {
        char = 'X';
    } else {
        char = 'O';
    }

    for(let n = 0; n < board.length; n++) {

        let rowTic = board[n];

        for(i = 0; i < rowTic.length; i++) {

            const nextLoc = nextMove(board);
            makeMove(board, nextLoc, isX);
            const isWinner = findWinner(board)

            if(isWinner) {
                alert(isWinner.winner + 'has won!')
            }

            if(makeMove(board, nextLoc, isX) === -1) {
                alert('Please click on a valid location!');
                break;
            } 

            isX = !isX;

        }
    }

}

start(board, true)
console.log(board)

// 7. (20 points) Implement a tic tac toe game.  The game should be between the user (which clicks on the board) and the computer (your nextMove function).  Who goes first (user or computer) should be decided using a simple variable declared at the top of your code.  (Optional: get fancy by having html select element which allows me to pick who goes first, add sound, nice designs, etc...)

//ESTABLISHING THE UI BOARD

var canvas = document.getElementById('TicTac');
var context = canvas.getContext('2d');

context.beginPath(); 
// Starting point
context.moveTo(0, 150);
// End point 
context.lineTo(450, 150);
// Make the line visible
context.stroke();

context.beginPath(); 
// Starting point
context.moveTo(0, 300);
// End point 
context.lineTo(450, 300);
// Make the line visible
context.stroke();

context.beginPath(); 
// Starting point
context.moveTo(150, 0);
// End point 
context.lineTo(150, 450);
// Make the line visible
context.stroke();

context.beginPath(); 
// Starting point
context.moveTo(300, 0);
// End point 
context.lineTo(300, 450);
// Make the line visible
context.stroke();

canvas.addEventListener('click', function(evt) {
    const clickX = evt.clientX;
    const clickY = evt.clientY;

    console.log(evt)
  // evt.offsetX - x of where the user clicked
  // evt.offsetY - y of where the user clicked
  // Determine which position the user clicked in and call makeMove with that position
}, false);


// 8. (30 points) Make a screencast in which you explain the code of your entire tic tac toe game.


// Hints:

// your draw function should draw the board on the canvas
// your update function should run nextMove and makeMove if it is the computer's turn
// every time makeMove is called, you should call findWinner to see if the game is over and to end the game if needed
// canvas.addEventListener('click', function(evt) {
//   // evt.offsetX - x of where the user clicked
//   // evt.offsetY - y of where the user clicked
//   // Determine which position the user clicked in and call makeMove with that position
// }, false);


// Extra credit (40 points): Implement a smart nextMove function.  Remember that you are given a board and isX (if true then you are X, if false then you are O).  To get credit:

//   1. All the logic must be in your nextMove function (do not reference any external functions or variables)

//   2. Include a screencast in which you explain your code.  If it's unclear, you get no credit.  This video is separate from the video in which you are explaining the overall tic tac toe game code (#8).

// Please push your code to a homework 6 repository on github and submit a link to it along with links to your youtube videos (as usual).

// Due date	Sunday, 12 November 2017, 11:00 PM