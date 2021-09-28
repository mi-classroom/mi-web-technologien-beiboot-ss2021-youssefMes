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
        <ReactJson
            src={json}
            enableClipboard={false}
            style={{textAlign: 'left', backgroundColor: 'black'}}
            collapsed={3}
            theme={{
                base00: "rgba(255,255,255,0.1)",
                base01: "black",
                base02: "black",
                base03: "#B4B4B4",
                base04: "#B4B4B4",
                base05: "#FFCC00",
                base06: "#FFCC00",
                base07: "#FFCC00",
                base08: "#444",
                base09: "#B4B4B4",
                base0A: "#B4B4B4",
                base0B: "#B4B4B4",
                base0C: "#B4B4B4",
                base0D: "#B4B4B4",
                base0E: "#B4B4B4",
                base0F: "#B4B4B4"
            }}
        />
    );
}
