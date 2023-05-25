const express = require('express'),
    request = require('request');

const app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('/', function(req, res) {
    if (req.url == '/' || !req.url.includes('http')) {
        res.send('Yo!');
    } else {
        const url = new URL(req.url.slice(1));
        req.pipe(request(url.href)).pipe(res);
    }
});

app.listen(process.env.PORT || 3000);