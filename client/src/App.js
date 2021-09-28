import React, {useState} from 'react';
import FileSystemNavigator from './components/FileSystemNavigator';
import SearchField from './components/SearchField';
import {renderComponent} from "./utils";
import './style/style.scss';
import './style/overides.scss';
import {Divider, IconButton} from "@material-ui/core";
import SearchList from "./components/SearchList";
import {HiDownload} from "react-icons/all";
import {Button} from "@chakra-ui/react";
import axios from "axios";

export default function App() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectFolder, setSelectedFolder] = useState(null)
    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState('')

    const downloadFolder = async () => {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/download`, {
            params: {
                path: selectFolder.path,
            }
        })
        const a = document.createElement("a");
        a.href = "data:application/octet-stream;base64," + res.data;
        a.download = "artifact.zip";
        a.click();
    }
    console.log(selectFolder)
    return (
        <div>
            <div className={'navigator'}>
                <div className={'navigator__title'}>cda_</div>
                <SearchField files={files} folders={folders} setResult={setSearchResult} setSearchText={setSearchText}/>
                {selectFolder &&
                    <IconButton
                        onClick={downloadFolder}
                    >
                        <HiDownload/>
                        Download folder
                    </IconButton>}
                {
                    searchText === ''
                    ? <FileSystemNavigator setSelectedFile={setSelectedFile} setFiles={setFiles} setFolders={setFolders}/>
                    : <SearchList list={searchResult} setSelectedFile={setSelectedFile} setSelectedFolder={setSelectedFolder}/>
                }
            </div>
            <div className={'viewer'}>
                {selectedFile && selectedFile.type ==='file' && renderComponent(selectedFile)}
            </div>
            {/*<div className='columns'>*/}
            {/*    <div className='column column-tree'>*/}
            {/*        <SearchField files={files} setResult={setSearchResult}/>*/}
            {/*        <SearchList list={searchResult} setSelectedFile={setSelectedFile}/>*/}
            {/*        <FileSystemNavigator setSelectedFile={setSelectedFile} setFiles={setFiles}/>*/}
            {/*        <Divider orientation="horizontal" />*/}
            {/*    </div>*/}
            {/*    <Divider orientation="vertical" flexItem />*/}
            {/*    <div className='column img-div'>*/}
            {/*        {selectedFile && renderComponent(selectedFile)}*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    );
}
