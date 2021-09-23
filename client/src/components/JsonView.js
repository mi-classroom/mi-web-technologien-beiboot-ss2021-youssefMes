import React from 'react';
import ReactJson from "react-json-view";

export default function JsonView({file}) {
    return (
        <ReactJson src={file} style={{textAlign: "left", width: "80%"}}/>
    );
}
