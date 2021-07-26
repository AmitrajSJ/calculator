const express = require('express');
const app =express();
const port= 3000;

app.use(express.static('stnsc'))
app.use('/css',express.static(__dirname+ 'stnsc/css'))
app.use('/script',express.static(__dirname+ 'stnsc/script'))

app.get('', (req, res) =>{
    res.sendFile(__dirname +'/html/index.html')
})


app.listen(port);