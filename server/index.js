const express = require('express');
const cors = require('cors')
const dirTree = require("directory-tree");
const exifr = require('exifr');

const app = express();
const port = 9000;
const tree = dirTree("data");

app.use('/static', express.static(__dirname + '/data'));
app.use(cors());
// start the server
app.listen(port, function() {
    console.log('app started');
});

// route our app
app.get('/tree', function(req, res) {
    res.send(tree);
});
app.get('/get-exif-data', function(req, res) {
    const {path} = req.query
    console.log("path", path)
    if (path === "undefined") {
        res.send(new Error('path is not provided'))
    }
    try {
        exifr.parse(path, true)
            .then(output => res.send(output))
    } catch (error) {
        res.send(error.message)
    }
});
