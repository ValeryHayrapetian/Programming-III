let LivingCreature = require('./parent')

module.exports = class Farmer extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8
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
            matrix[newY][newX] = 6;

            var newFarmer = new Farmer(newX, newY);
            farmerArr.push(newFarmer);
            this.energy = 8
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0, 1);
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
        var emptyCells = this.chooseCell(2, 4);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
             
        if(this.energy >= 10) {
            this.mul()
        }
        }else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in farmerArr) {
            if (this.x == farmerArr[i].x && this.y == farmerArr[i].y) {
                farmerArr.splice(i, 1);
                break;
            }
        }
    }
}