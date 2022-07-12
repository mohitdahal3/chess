let w;
let grid;
let pieces = {}
let chosenPiece;
let holding = false

function preload() {
    pieces = {
        black_king: loadImage('./assets/black_king.png'),
        black_queen: loadImage('./assets/black_queen.png'),
        black_rook: loadImage('./assets/black_rook.png'),
        black_bishop: loadImage('./assets/black_bishop.png'),
        black_knight: loadImage('./assets/black_knight.png'),
        black_pawn: loadImage('./assets/black_pawn.png'),
        white_king: loadImage('./assets/white_king.png'),
        white_queen: loadImage('./assets/white_queen.png'),
        white_rook: loadImage('./assets/white_rook.png'),
        white_bishop: loadImage('./assets/white_bishop.png'),
        white_knight: loadImage('./assets/white_knight.png'),
        white_pawn: loadImage('./assets/white_pawn.png')
    }
}

function setup() {
    if (window.innerHeight <= window.innerWidth) {
        createCanvas(window.innerHeight - 10, window.innerHeight - 10)
    }else{
        createCanvas(window.innerWidth - 10, window.innerWidth - 10)
        
    }
    w = floor(width / 8);
    grid = new Grid();
}

function draw() {
    background(255);
    grid.show();
    if (holding) {
        imageMode(CENTER);
        if (chosenPiece) {
            image(chosenPiece, mouseX, mouseY, w, w)
        }
    }
}


function make2darray(rows1, cols1) {
    let arr = new Array(rows1);
    for (let i = 0; i < rows1; i++) {
        arr[i] = new Array(cols1);
    }
    return arr
}

function mousePressed() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            try {
                if (grid.cells[i][j].containsMouse()) {
                    chosenPiece = grid.cells[i][j].piece
                    grid.cells[i][j].removePiece();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    holding = true
}

function mouseReleased() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            try {
                if (grid.cells[i][j].containsMouse()) {
                    grid.cells[i][j].addPiece(chosenPiece)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    holding = false;
}


