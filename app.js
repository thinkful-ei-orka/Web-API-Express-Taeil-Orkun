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

// app.listen(8000, () => {

// })