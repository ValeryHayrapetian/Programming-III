var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var fireArr = [];
var farmerArr = []; 
var side = 20;


for (let y = 0; y < 0; y++) {
    matrix[y] = []; 
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 40 && a < 60) {
            matrix[y][x] = 1; 
        }
        else if (a >= 60 && a < 75) {
            matrix[y][x] = 2; 
        }
        else if (a >= 60 && a < 75) {
            matrix[y][x] = 3; 
        }
        else if (a >= 60 && a < 75) {
            matrix[y][x] = 4; 
        }

    }
}

function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, fireCount){
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) { 
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < fireCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < fireCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
        }

    }
    matrixGenerator(34, 40, 10, 15, 10)
    
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1){
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2){
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3){
                let fire = new Fire(x, y);
                fireArr.push(fire);
            }
            else if (matrix[y][x] == 4){
                let farmer = new Farmer(x, y);
                farmerArr.push(farmer);
            }

        }
    }
}

function draw() {

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
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("aqua");
            }

            rect(x * side, y * side, side, side);

        }
    }


    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < fireArr.length; i++) {
        const fire = fireArr[i];
        fire.eat();
    }
    for (let i = 0; i < farmerArr.length; i++) {
        const farmer = farmerArr[i];
        farmer.eat3();
        farmer.eat1();
        farmer.eat2();
    }
}