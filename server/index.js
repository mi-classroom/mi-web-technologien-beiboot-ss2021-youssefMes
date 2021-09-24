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
const AdmZip = require("adm-zip");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/static', express.static(__dirname + '/data', {setHeaders: setHeaders}));

function setHeaders (res, path) {
    res.header("Access-Control-Allow-Origin", "*");
}
app.use(cors());

app.listen(port, function() {
    console.log('app started');
});

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
        res.send(error)
    }
});

app.post('/download', function(req, res) {
    try {
        const {path, data} = req.body.params
        const zip = new AdmZip();
        zip.addLocalFile(path);
        zip.addFile("image-data.json", Buffer.from(JSON.stringify(data, null, 3), "utf8"), "entry comment goes here");
        const buff = zip.toBuffer()
        res.send(buff.toString('base64'))
    } catch (error) {
        res.send(error)
    }
});

let files = []
function getFiles(tree){
    function traverseTree(tree) {
        if (tree.type === 'file') {
            if (['.jpg', '.png', '.jpg_original'].indexOf(tree.extension) > -1) {
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
