import React, {useEffect, useState} from 'react';
import axios from "axios";
import {TreeItem} from "@material-ui/lab";
import TreeView from '@material-ui/lab/TreeView';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

export default function FileSystemNavigator(props) {
    const [structure, setStructure] = useState({})
    const {setSelectedImage} = props
    useEffect(() => {
        async function fetchTree() {
            const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/tree`)
            setStructure(res.data)
        }
        fetchTree()
    }, []);


    const handleClick = image => e => {
        setSelectedImage(image)
    }
    const getTree = (node) => {
        if (node.type === 'file') {
            return <TreeItem
                key={node.name}
                icon={<DescriptionOutlinedIcon style={{color: '#ff928b'}}/>}
                nodeId={node.name}
                label={node.name}
                onClick={handleClick(node)}
            />;
        } else {
            return (
                <TreeItem
                    key={node.name}
                    icon={<FolderOpenOutlinedIcon style={{color: '#ff928b'}}/>}
                    nodeId={node.name}
                    label={node.name}>
                    {node.children && node.children.map(child => getTree(child))}
                </TreeItem>
            );
        }
    }

    return <TreeView>{Object.keys(structure).length !== 0 && getTree(structure)}</TreeView>
}
