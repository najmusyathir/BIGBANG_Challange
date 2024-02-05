
let arr = []

for (let i = 0; i < 101; i++) {


    if (i % 3 == 0 && i % 5 == 0) {
        arr.push("BIGBANG")
    }
    else if (i % 3 == 0) {
        arr.push("BIG")
    }
    else if (i % 5 == 0) {
        arr.push("BANG")
    }
    else {
        arr.push(i)
    }
}
console.log(arr)


const newarr = JSON.stringify(arr)
const fs = require('fs')

fs.writeFile('output2.json', newarr, (err) => {
    if (err) throw err;
    }
)

