import {useEffect, useState} from 'react';
import FileSystemNavigator from './components/FileSystemNavigator';
import SearchAppBar from './components/AppBar';
import Metadata from './components/Metadata';
import {getUrl} from "./utils";
import './App.css';
import {Divider} from "@material-ui/core";
import axios from "axios";

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [data, setData] = useState(null)

    async function getData() {
        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/get-exif-data`, {
            params: {
                path: selectedImage.path
            }
        })
        console.log(res)
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
                    <FileSystemNavigator className='file-navigator' setSelectedImage={setSelectedImage}/>
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
