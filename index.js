const express = require('express'),
    request = require('request');

const app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('/', function(req, res) {
    if (!req.url) {
        res.send('Yo!')
    } else {
        req.pipe(request(req.url)).pipe(res);
    }
});

app.listen(process.env.PORT || 3000);