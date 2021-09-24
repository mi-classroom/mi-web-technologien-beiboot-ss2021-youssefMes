import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getUrl} from "../utils";
import Metadata from "./Metadata";
import '../App.css'
import {Button} from "@material-ui/core";
export default function ImageView({file}) {
    const [data, setData] = useState(null)
    const [updatedFields, setUpdatedFields] = useState( {})
    async function getData() {
        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/get-exif-data`, {
            params: {
                path: file.path
            }
        })
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [file])

    const handleClick = async () => {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/download`, {
            params: {
                path: file.path,
                data: data
            }
        })
        const a = document.createElement("a"); //Create <a>
        a.href = "data:application/octet-stream;base64," + res.data; //Image Base64 Goes here
        a.download = "artifact.zip"; //File name Here
        a.click(); //Downloaded file
    }
    return (
        <>
            <Button color={'primary'} onClick={handleClick}>Download Artifact</Button>
            <img className='img' alt={file.name} src={getUrl(file.path)}/>
            {data && <Metadata data={data} fields={updatedFields} updateFields={setUpdatedFields}/>}
        </>
    );
}
