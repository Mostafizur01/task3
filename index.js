const express = require('express')
const app = express()

let gcd = (x, y) => {
    if ( y === 0 ) {
        return x
    } else {
        return gcd(y, x % y)
    }
}
let lcm = (x, y) => {
    let maltiply = x * y
    let gcdValue = gcd(x, y)
    let lcmValue = maltiply / gcdValue
    return lcmValue
}

app.get('/mdmostafizurrahman704_gmail_com', (req, res) => {
    let {x, y} = req.query

    if (!x || !y) {
        return res.send('NaN')
    }

    let numX = Number(x)
    let numY = Number(y)

    if (!Number.isInteger(numX) || !Number.isInteger(numY) || numX < 1 || numY < 1 || !/^\d+$/.test(x.trim()) || !/^\d+$/.test(y.trim())) {
        return res.send('NaN')
    }

    let result = lcm(numX, numY)
    res.send(result.toString())
})

app.listen(3000, () => console.log('Server run at http://localhost:3000/mdmostafizurrahman704_gmail_com'))