const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b
    let c = parseInt(a) + parseInt(b)
    res.send(`The sum of ${a} and ${b} is ${c}`)
})

app.listen(3000)

app.get('/cipher', (req, res) => {
    const text = req.query.text;
    const shift = req.query.shift;
    let result = '';
    for (let i = 0; i < text.length; i++){
        let charCode = text.charCodeAt(i)
        let newCode = charCode + shift;
        let newLetter = String.fromCharCode(newCode)
        result += newLetter
    }
    res.send(result)
})

