const express = require('express'),
    request = require('request');

const app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('', function(req, res) {
    console.log(req.url);
    if (req.url == '/' || !req.url.includes('http')) {
        res.send('Yo!')
    } else {
        req.pipe(request(req.url)).pipe(res);
    }
});

app.listen(process.env.PORT || 4000);