class Parent{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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
}