const { publicDecrypt } = require('crypto')
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var fs = require('fs')
const { deflateSync } = require('zlib')


app.use(express.static('.'))

app.get('/', function (req, res) {
    res.redirect('index.html')
})
server.listen(3000)

function generate(matLen,gr,grEat, pred, fire, farmer, dirt) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < fire; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }

    for (let i = 0; i < farmer; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }

    for (let i = 0; i < dirt; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }

    return matrix
}

matrix = generate(30, 100, 50, 50, 50, 50, 50)

io.sockets.emit('send matrix', matrix)

grassArr = []
grassEaterArr = []
predArr = []
fireArr = []
farmerArr = []
dirtArr = []
days = 0;

let objectCount = {
    grass: 0,
    grassEater: 0,
    predator: 0,
    fire: 0,
    farmer: 0,
    dirt: 0,
    daysCount: 0,
}

Grass = require('./grass')
GrassEater = require('./grasseater')
Predator = require('./predator')
Farmer = require('./farmer')
Fire = require('./fire')
Dirt = require('./dirt')

function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gret = new GrassEater(x, y)
                grassEaterArr.push(gret)
            } else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predArr.push(pr)
            } else if (matrix[y][x] == 4) {
                let fr = new Fire(x, y)
                fireArr.push(fr)
            } else if (matrix[y][x] == 5) {
                let fa = new Farmer(x, y)
                farmerArr.push(fa)
            } else if (matrix[y][x] == 6) {
                let dr = new Dirt(x, y)
                dirtArr.push(dr)
            }
        }  
            
    }
        let data = JSON.stringify(objectCount, null, 2)
        fs.writeFileSync('statAnalysis.json', data)
        io.sockets.emit('send matrix', matrix)
}

function gamePlay() {
    ++days;
    

    for(var i in grassArr){
        grassArr[i].mul()
    }

    for(let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predArr) {
        predArr[i].eat()
    }
    for(let i in fireArr) {
        fireArr[i].eat()
    }

    for (let i in farmerArr) {
        farmerArr[i].move()
    }

    for (let i in dirtArr) {
        dirtArr[i].mul()
    }
        objectCount = {
        grass: grassArr.length,
        grassEater: grassEaterArr.length,
        predator: predArr.length,
        fire: fireArr.length,
        farmer: farmerArr.length,
        dirt: dirtArr.length,
        daysCount: days,
    }

    io.sockets.emit('send matrix', matrix)
}




setInterval(gamePlay, 2000)
    

io.on('connection', function () {
    createObject(matrix)

    
    
    


})