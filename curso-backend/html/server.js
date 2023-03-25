const express = require('express');

const app = express();

app.use('/static',express.static('static',{
    etag: false,
    maxAge: '5h'
}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    //res.sendFile('index.html', {
    //    root: __dirname
    //});
    res.render('index');
});

app.listen(3000);