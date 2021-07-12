import React, {useEffect, useState} from 'react';
import FileSystemNavigator from './components/FileSystemNavigator';
import SearchAppBar from './components/AppBar';
import Metadata from './components/Metadata';
import SearchField from './components/SearchField';
import {getUrl, renderComponent} from "./utils";
import './App.css';
import {Divider} from "@material-ui/core";
import axios from "axios";
import SearchList from "./components/SearchList";
import ImageView from "./components/ImageView";
import JsonView from "./components/JsonView";

export default function App() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [files, setFiles] = useState([])
    const [searchResult, setSearchResult] = useState([])
    return (
        <div>
            <SearchAppBar/>
            <div className='columns'>
                <div className='column column-tree'>
                    <SearchField files={files} setResult={setSearchResult}/>
                    <FileSystemNavigator setSelectedFile={setSelectedFile} setFiles={setFiles}/>
                    <Divider orientation="horizontal" />
                    <SearchList list={searchResult} setSelectedFile={setSelectedFile}/>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className='column img-div'>
                    {selectedFile && renderComponent(selectedFile)}
                </div>

            </div>
        </div>
    );
}
