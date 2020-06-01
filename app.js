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
    console.log(req.query)
    const text = req.query.text;
    const shift = +req.query.shift;
    let result = '';
    for (let i = 0; i < text.length; i++){
        let charCode = text.charCodeAt(i)
        let newCode = charCode + shift;
        console.log(charCode, newCode)
        let newLetter = String.fromCharCode(newCode)
        result += newLetter
    }
    console.log(result)
    res.send(result)
})

app.get('/lotto', (req, res) => {
    const arr = req.query.arr
    let matches = 0;
    arr.forEach(number => {
        if (parseInt(number) === Math.floor(Math.random() * 20) + 1) {
            matches += 1
        }

    })
    if (matches < 4) {
        res.send('Sorry, you lose.')
    }
    else if (matches === 4) {
        res.send('Congratulations, you  win a free ticket')
    }
    else if (matches === 5) {
        res.send('Congratulations! You win $100!')
    }
    else if (matches === 6) {
        res.send('Wow! Unbelievable You could have won the mega millions!')
    }

    
})
