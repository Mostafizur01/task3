const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    if (x === 0 || y === 0) return 0;
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

    let numX = Number(cleanX);
    let numY = Number(cleanY);

    if (numX < 1 || numY < 1) {
        return res.send('NaN');
    }

    let result = lcm(numX, numY);
    res.send(String(result));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));