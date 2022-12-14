let LivingCreature = require('./parent')

module.exports = class Grass extends LivingCreature {
    
    mul() {
        this.mulTime++;
        var emptyCells = super.chooseCell(0, 6);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.mulTime >= 4) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;
            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.mulTime = 0;
        }
    }
}