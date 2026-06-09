const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(x, y) {
    while (y !== 0n) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    if (x === 0n || y === 0n) return 0n;
    return (x * y) / gcd(x, y);
}

app.get('/mdmostafizurrahman704_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    let { x, y } = req.query;

    if (!x || !y) {
        return res.send('NaN');
    }

    let cleanX = String(x).replace(/[{} ]|%7B|%7D/gi, '');
    let cleanY = String(y).replace(/[{} ]|%7B|%7D/gi, '');

    if (!/^\d+$/.test(cleanX) || !/^\d+$/.test(cleanY)) {
        return res.send('NaN');
    }

    let numX = BigInt(cleanX);
    let numY = BigInt(cleanY);

    if (numX < 1n || numY < 1n) {
        return res.send('NaN');
    }

    let result = lcm(numX, numY);
    res.send(String(result));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));