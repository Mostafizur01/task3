const express = require('express')
const app = express()

let gcd = (x, y) => {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

let lcm = (x, y) => {
    let maltiply = x * y
    let gcdValue = gcd(x, y)
    let lcmValue = maltiply / gcdValue
    return lcmValue
}

app.get('/mdmostafizurrahman704_gmail_com', (req, res) => {
    let { x, y } = req.query

    if (!x || !y || typeof x !== 'string' || typeof y !== 'string') {
        return res.send('NaN');
    }

    // 👉 এখানে পরিবর্তন! ব্র্যাকেটের পাশাপাশি ব্রাউজারের %7B এবং %7D কোডও মুছে ফেলবে
    let cleanX = x.replace(/[{} ]|%7B|%7D/gi, '');
    let cleanY = y.replace(/[{} ]|%7B|%7D/gi, '');

    if (!/^\d+$/.test(cleanX) || !/^\d+$/.test(cleanY)) {
        return res.send('NaN');
    }

    let numX = Number(cleanX);
    let numY = Number(cleanY);

    if (numX < 1 || numY < 1) {
        return res.send('NaN');
    }

    let result = lcm(numX, numY);
    res.send(result.toString());
})

app.listen(3000, () => console.log('Server run at http://localhost:3000/mdmostafizurrahman704_gmail_com'))