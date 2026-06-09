const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function getGcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function getLcm(x, y) {
    if (x === 0 || y === 0) return 0;
    return (x * y) / getGcd(x, y);
}

app.get('/mdmostafizurrahman704_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    let { x, y } = req.query;

    if (!x || !y) {
        return res.send('NaN');
    }

    let strX = String(x).trim();
    let strY = String(y).trim();

    if (!/^\d+$/.test(strX) || !/^\d+$/.test(strY)) {
        return res.send('NaN');
    }

    let numX = Number(strX);
    let numY = Number(strY);

    if (numX < 1 || numY < 1) {
        return res.send('NaN');
    }

    if (numX > Number.MAX_SAFE_INTEGER || numY > Number.MAX_SAFE_INTEGER) {
        return res.send('NaN');
    }

    let result = getLcm(numX, numY);

    if (isNaN(result) || !isFinite(result)) {
        return res.send('NaN');
    }

    res.send(String(result));
});

app.use((err, req, res, next) => {
    res.send('NaN');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));