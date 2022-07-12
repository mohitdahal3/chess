class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.piece
    }

    show() {
        noStroke()
        if(((this.x % 2 == 0) && (this.y % 2 == 0)) || ((this.x % 2 != 0) && (this.y % 2 != 0))){
            fill(195)
        }else{
            fill(20 , 52 , 100);
        }
        rect(this.x * w, this.y * w, w, w);



        if (this.piece) {
            imageMode(CORNER)
            image(this.piece, this.x * w, this.y * w, w, w)
        }
    }

    containsMouse(){
        return ((mouseX > this.x*w && mouseX < (this.x*w)+w ) && (mouseY > this.y*w && mouseY < (this.y*w)+w ) )
    }

    removePiece(){
        this.piece = null
    }

    addPiece(piece){
        this.piece = piece
    }

}


class Grid {
    constructor() {
        this.cells = make2darray(8, 8)
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells[i][j] = new Cell(i, j)
            }
        }

        this.cells[0][0].piece = pieces.black_rook
        this.cells[7][0].piece = pieces.black_rook
        this.cells[1][0].piece = pieces.black_knight
        this.cells[6][0].piece = pieces.black_knight
        this.cells[2][0].piece = pieces.black_bishop
        this.cells[5][0].piece = pieces.black_bishop
        this.cells[4][0].piece = pieces.black_king
        this.cells[3][0].piece = pieces.black_queen
        this.cells[0][1].piece = pieces.black_pawn
        this.cells[1][1].piece = pieces.black_pawn
        this.cells[2][1].piece = pieces.black_pawn
        this.cells[3][1].piece = pieces.black_pawn
        this.cells[4][1].piece = pieces.black_pawn
        this.cells[5][1].piece = pieces.black_pawn
        this.cells[6][1].piece = pieces.black_pawn
        this.cells[7][1].piece = pieces.black_pawn
        
        
        this.cells[0][7].piece = pieces.white_rook
        this.cells[7][7].piece = pieces.white_rook
        this.cells[1][7].piece = pieces.white_knight
        this.cells[6][7].piece = pieces.white_knight
        this.cells[2][7].piece = pieces.white_bishop
        this.cells[5][7].piece = pieces.white_bishop
        this.cells[3][7].piece = pieces.white_queen
        this.cells[4][7].piece = pieces.white_king
        this.cells[0][6].piece = pieces.white_pawn
        this.cells[1][6].piece = pieces.white_pawn
        this.cells[2][6].piece = pieces.white_pawn
        this.cells[3][6].piece = pieces.white_pawn
        this.cells[4][6].piece = pieces.white_pawn
        this.cells[5][6].piece = pieces.white_pawn
        this.cells[6][6].piece = pieces.white_pawn
        this.cells[7][6].piece = pieces.white_pawn


    }

    show() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells[i][j].show();
            }
        }
    }
}

