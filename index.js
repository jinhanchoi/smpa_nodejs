const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 80;

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index',{});
});

app.listen(port, () => console.log(`SMPA app listening on port ${port}!`))