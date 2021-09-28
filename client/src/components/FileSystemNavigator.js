import React, {useEffect, useState} from 'react';
import axios from "axios";
import {TreeItem} from "@material-ui/lab";
import TreeView from '@material-ui/lab/TreeView';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import {getFiles, getFolders} from '../utils'
import '../style/overides.scss';

export default function FileSystemNavigator(props) {
    const [structure, setStructure] = useState({})
    const {setSelectedFile, setFiles, setFolders} = props
    useEffect(() => {
        async function fetchTree() {
            const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/tree`)
            setStructure(res.data)
            setFiles(getFiles([res.data]))
            setFolders(getFolders([res.data]))
        }
        fetchTree()
    }, []);


    const handleClick = file => e => {
        setSelectedFile(file)
    }
    const getTree = (node) => {
        if (node.type === 'file') {
            return <TreeItem
                key={node.name}
                icon={<DescriptionOutlinedIcon className={'navigator__icons'}/>}
                nodeId={node.name}
                label={node.name}
                onClick={handleClick(node)}
            />;
        } else {
            return (
                <TreeItem
                    className={'navigator__items'}
                    key={node.name}
                    icon={<FolderOpenOutlinedIcon className={'navigator__icons'}/>}
                    nodeId={node.name}
                    label={node.name}>
                    {node.children && node.children.map(child => getTree(child))}
                </TreeItem>
            );
        }
    }

    return (
        <TreeView>
            {Object.keys(structure).length !== 0 && getTree(structure)}
        </TreeView>
    )
}
