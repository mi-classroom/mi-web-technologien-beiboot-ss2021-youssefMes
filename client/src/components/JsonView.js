import React, {useEffect, useState} from 'react';
import ReactJson from "react-json-view";
import {getUrl} from "../utils";
import axios from "axios";

export default function JsonView({file}) {
    const [json, setJson] = useState({})
    const getJson = async () => {
        const res = await axios.get(getUrl(file.path))
        setJson(res.data)
    }
    useEffect(() => {
        getJson()
    }, [])
    return (
        <ReactJson src={json} style={{textAlign: "left", width: "80%"}}/>
    );
}
