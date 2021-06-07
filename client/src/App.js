import React, {useEffect, useState} from 'react';
import FileSystemNavigator from './components/FileSystemNavigator';
import SearchAppBar from './components/AppBar';
import Metadata from './components/Metadata';
import SearchField from './components/SearchField';
import {getUrl} from "./utils";
import './App.css';
import {Divider} from "@material-ui/core";
import axios from "axios";
import SearchList from "./components/SearchList";


export default function App() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [data, setData] = useState(null)
    const [files, setFiles] = useState([])
    const [searchResult, setSearchResult] = useState([])
    async function getData() {
        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/get-exif-data`, {
            params: {
                path: selectedImage.path
            }
        })
        setData(res.data)
    }
    useEffect(() => {
        if (selectedImage) {
            getData()
        }
    }, [selectedImage])
    return (
        <div>
            <SearchAppBar/>
            <div className='columns'>
                <div className='column column-tree'>
                    <SearchField files={files} setResult={setSearchResult}/>
                    <FileSystemNavigator setSelectedImage={setSelectedImage} setFiles={setFiles}/>
                    <Divider orientation="horizontal" />
                    <SearchList list={searchResult} setSelectedImage={setSelectedImage}/>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className='column img-div'>
                    {selectedImage && <img className='img' alt={selectedImage.name} src={getUrl(selectedImage.path)}/>}
                </div>
                <Divider orientation="vertical" flexItem />
                <div className='column exif'>
                    {data && <Metadata data={data}/>}
                </div>
            </div>
        </div>
    );
}
