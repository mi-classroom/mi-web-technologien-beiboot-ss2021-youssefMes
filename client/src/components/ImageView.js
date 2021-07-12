import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getUrl} from "../utils";
import Metadata from "./Metadata";
import '../App.css'
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

    return (
        <>
            <img className='img' alt={file.name} src={getUrl(file.path)}/>
            {data && <Metadata data={data} fields={updatedFields} updateFields={setUpdatedFields}/>}
        </>
    );
}
