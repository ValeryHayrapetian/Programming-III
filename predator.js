let LivingCreature = require('./parent')

module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 10;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character, character2) {
        this.getNewCoordinates()
        return super.chooseCell(character, character2);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]

            var newPredator = new Predator(newX, newY);
            predArr.push(newPredator)
            this.energy = 10;
        }
    }

    move() {
        this.battery--
        var emptyCells = this.chooseCell(0, 4);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 0) {
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
            }
                
        } else {
            this.die()
        }
    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if(newCell) {
            this.energy += 10
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
        if(this.energy >= 12) {
            this.mul()
        }
        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break;
            }
        }
    }
}