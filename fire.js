class Fire extends Parent{
    constructor(x, y){
        super(x, y);
        this.energy = 5;
    }
    mul() {
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let fire = new Fire(x, y);
            matrix[y][x] = 3;
            fireArr.push(fire);

            this.energy = 5;
        } else {
            console.error('there is no way to multiply 1');
        }
    }
    eat(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            this.energy +=1;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 3
            
            this.x = x;
            this.y = y

            if(this.energy > 100){
                this.mul()
            }
        }else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy -= 2

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy -= 10
            if(this.energy < 0){
                this.die()
            }
        }    
    }
    die(){
            for (let i = 0; i < fireArr.length; i++) {
                if( fireArr[i].x == this.x && fireArr[i].y == this.y ){
                    fireArr.splice(i, 0)
                }
            }
            matrix[this.y][this.x] = 4;
        }
}
