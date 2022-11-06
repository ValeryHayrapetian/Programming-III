class Grass extends Parent{
    constructor(x, y){
        super(x, y);
        this.energy = 2;
    }
    mul() {
        this.energy++;
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 0;
        } else {
            console.error('there is no way to multiply');
        }
    }
}
//k5wl2tk