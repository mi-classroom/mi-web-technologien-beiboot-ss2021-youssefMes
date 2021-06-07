import {TreeItem} from "@material-ui/lab";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import React from "react";

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
