class Farmer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
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
    getNewCordinates(){
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
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    
    }
    eat(){
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
    eat1(){
        let found = this.chooseCell(1);
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

            this.move()

        }
    }
    move(){
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
