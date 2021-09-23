import React from "react";
import ImageView from "./components/ImageView";
import JsonView from "./components/JsonView";

export function getUrl(path) {
    const url = path.replace('data', '')
    return process.env.REACT_APP_API_STATIC + url
}

export function getFiles(nodes){
    const files = [];
    function traverseTree(nodes) {
        nodes.map(node => {
            if (node.type === 'directory') {
                traverseTree(node.children)
            } else {
                files.push(node)
            }
        })
    }
    traverseTree(nodes)
    return files
}

export function renderComponent(file) {
    switch (file.extension) {
        case '.jpeg':
        case '.jpg':
        case '.png':
            return <ImageView file={file}/>
        case '.json':
            return <JsonView file={file}/>
        case '.dzi':
            return <div>No Preview Available</div>

    }
}
