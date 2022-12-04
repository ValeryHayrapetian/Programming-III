let LivingCreature = require('./parent')

module.exports = class Dirt extends LivingCreature {
    
    mul() {
        this.mulTime++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.mulTime >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 6;
            var newDirt = new Dirt(newX, newY);
            dirtArr.push(newDirt);
            this.mulTime = 0;
        }
    }
}