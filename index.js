const express = require('express');
require('./subscribe-evento');
require('./publica-evento');

const app = express();
app.get("/", function (req, res) {
    res.send('Hello Word');
});
app.listen(3000, function () {
   console.log('Exaple app listening on port 3000');
});


