const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + 'dist'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + 'dist/index.html')
})

let port = process.env.PORT
http.listen(port, () => {
    console.log('running on port' + port)
})