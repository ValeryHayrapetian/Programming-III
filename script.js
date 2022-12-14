var socket = io();
var side = 20;

function setup() {
    frameRate(5);
    canvas = createCanvas(30 * side, 30 * side);
    canvas.parent('canva')
    background('#acacac');
}

function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("darkcyan")
            }
            else if (matrix[y][x] == 6) {
                fill("rgb(70, 25, 25)")
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on('send matrix', drawMatrix)
