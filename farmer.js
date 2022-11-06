class Farmer extends Parent{
    constructor(x, y){
        super(x, y);
        this.energy = 10;
    }
    eat3(){
        let found = this.chooseCell(3);
        let exact = random(found)

        if (exact){
            this.energy +=1;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < fireArr.length; i++) {
                if( fireArr[i].x == x && fireArr[i].y == y ){
                    fireArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1
            
            this.x = x;
            this.y = y;

            this.move()

        }
    }
    eat2(){
        let found = this.chooseCell(2);
        let exact = random(found)

        if (exact){
            this.energy +=1;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < fireArr.length; i++) {
                if( fireArr[i].x == x && fireArr[i].y == y ){
                    fireArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1
            
            this.x = x;
            this.y = y;

            this.move1()

        }
    }
    move(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1

            this.x = x;
            this.y = y;

            this.energy = 20

            if(this.energy < 0){
            }
        }else {
            this.energy = 20
            if(this.energy < 0){
            }
        }    
    }
    move1(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1

            this.x = x;
            this.y = y;

            this.energy = 20

            if(this.energy < 0){
            }
        }else {
            this.energy = 20
            if(this.energy < 0){
            }
        }    
    }

}
