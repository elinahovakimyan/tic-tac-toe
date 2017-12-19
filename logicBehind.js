// // TIC TAC TOE GAME STEP BY STEP

const board = [
    [document.getElementById("id1"), document.getElementById("id2"), document.getElementById("id3")],
    [document.getElementById("id4"), document.getElementById("id5"), document.getElementById("id6")],
    [document.getElementById("id7"), document.getElementById("id8"), document.getElementById("id9")]
];

const addEventListenerByClass = function(className, event, func) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, func, false);
    }
}

const fillSquare = function(e, isX) {
  let char;
  (isX) ? char = "X" : char = "O";
  document.getElementById(e.target.id).innerHTML = char;
  setTimeout(function() {
    makeMove(board, nextMove(board), false);
  }, 500)
}

addEventListenerByClass('item', 'click', function(e) {fillSquare(e, true)});

const nextMove = function(board) {
    for(let n = 0; n < board.length; n++) {

        let rowTic = board[n];

        for(let i = 0; i < rowTic.length; i++) {
            if(!rowTic[i].innerHTML) {
                return [n, i];
            }
        }
    }
}

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

        board[arr[0]][arr[1]].innerHTML = char;
        return 0;

    } else {
        return -1;
    }
}

//
// const findWinner = function(board) {
//     for (let k = 0; k < board.length; k++) {
//         if (board[k][0].innerHTML === board[k][1].innerHTML === board[k][2].innerHTML && board[k][0].innerHTML !== '') {
//
//             return {
//                 winner: board[k][0],
//                 winningLocations: [[k, 0], [k, 1], [k, 2]]
//             }
//
//         } else if ( board[0][k] === board[1][k] === board[2][k] && board[0][k] !== '') {
//
//             return {
//                 winner: board[0][k],
//                 winningLocations: [[0, k], [1, k], [2, k]]
//             }
//
//         } else if ( board[0][0] === board[1][1] === board[2][2] && board[0][0] !== '') {
//
//             return {
//                 winner: board[0][0],
//                 winningLocations: [[0, 0], [1, 1], [2, 2]]
//             }
//
//         } else if ( board[0][2] === board[1][1] === board[2][0] && board[0][2] !== '') {
//
//             return {
//                 winner: board[0][2],
//                 winningLocations: [[0, 2], [1, 2], [2, 0]]
//             }
//
//         // } else if () {
//         // //should work only when the whole board is filled
//         //     return {
//         //          winner: 'none',
//         } else {
//             return undefined;
//         }
//     }
// }
//
//
// const start = function(board, isX) {
//     let char;
//     if(isX) {
//         char = 'X';
//     } else {
//         char = 'O';
//     }
//
//     for(let n = 0; n < board.length; n++) {
//
//         let rowTic = board[n];
//
//         for(i = 0; i < rowTic.length; i++) {
//
//             const nextLoc = nextMove(board);
//             makeMove(board, nextLoc, isX);
//             const isWinner = findWinner(board)
//
//             if(isWinner) {
//                 alert(isWinner.winner + 'has won!')
//             }
//
//             if(makeMove(board, nextLoc, isX) === -1) {
//                 alert('Please click on a valid location!');
//                 break;
//             }
//
//             isX = !isX;
//         }
//     }
// }
//
// start(board, true)
// console.log(board)
//
// const gameStart = function(board, isX) {
//     let char;
//     if(isX) {
//         char = 'X';
//     } else {
//         char = 'O';
//     }
//
//     board[1][1] = char;
//     const nextLocation = nextMove(board)
//     makeMove(board, nextLocation, isX)
//
//     canvas.addEventListener('click', function(evt) {
//         const clickX = evt.clientX;
//         const clickY = evt.clientY;
//
//         const img = new Image;
//
//         if(isX) {
//             img.src = 'x.gif' //local image
//         } else{
//             img.src = 'o.gif' //local image
//         }
//
//         if(clickX > 0 && clickX < 150 && clickY > 300 && clickY < 450 ) {
//             context.drawImage(img, 75, 375)
//         }
//
//     }, false);
//
//     isX = !isX
// }
//
// gameStart(board, true)
