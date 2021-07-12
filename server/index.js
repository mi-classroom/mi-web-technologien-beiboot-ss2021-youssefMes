const express = require('express');
const cors = require('cors')
const dirTree = require("directory-tree");
const exifr = require('exifr');
const Path = require("path");
const fs   = require("fs");
const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)
const app = express();
const port = 9000;
const tree = dirTree("data");
const bodyParser = require('body-parser')



app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
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

app.post('/update-metadata', async function(req, res) {
    try {
        const {params} = req.body
        const files = getFiles(tree)
        await ep.open()
        files.map(async file => await ep.writeMetadata(file, params, ['overwrite_original'], false))
        await ep.close()
        res.send('Images Update Succesfully')
    } catch (error) {
        res.send(error.message)
    }
});


let files = []
function getFiles(tree){
    function traverseTree(tree) {
        if (tree.type === 'file') {
            if (['.jpg', '.png'].indexOf(tree.extension) > -1) {
                return files.push(tree.path)
            }
        }
        else {
            tree.children.map(node => getFiles(node))
        }
    }
    traverseTree(tree)
    return files
}
