import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getUrl} from "../utils";
import Metadata from "./Metadata";
import '../App.css'
import {Button, Drawer} from "@material-ui/core";
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import {AiOutlineUnorderedList, BiRectangle, ImFloppyDisk} from "react-icons/all";

export default function ImageView({file}) {
    const [data, setData] = useState(null)
    const [updatedFields, setUpdatedFields] = useState( {})
    const [isOpen, setIsOpen] = useState( false)
    const [size, setSize] = useState( 'small')
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

    const toggle = () => {
        setSize(size === 'small' ? 'big' : 'small')
    }

    return (
        <div style={{width: '100%'}}>
            <img className='img' alt={file.name} src={getUrl(file.path)}/>
            <div className={`viewer__image__drawer viewer__image__drawer--${size}`}>
                {data && <div className={'metadata__header'}>
                    <span style={{float: 'left'}}>
                        <BiRectangle className={'metadata__header_icon'}/>
                         Größe: {data.size || ''}
                    </span><br/><br/>
                    <span style={{float: 'left'}}>
                        <AiOutlineUnorderedList
                            className={'metadata__header_icon'}
                            onClick={toggle}
                        /> IPTC:-
                    </span>
                </div>}
                <br/>
                {size === 'big' && data &&
                    <Metadata data={data} fields={updatedFields} updateFields={setUpdatedFields} path={file.path}/>
                }
            </div>
            {/*<Button color={'primary'} onClick={handleClick}>Download Artifact</Button>*/}
            {/*{data && <Metadata data={data} fields={updatedFields} updateFields={setUpdatedFields} path={file.path}/>}*/}
        </div>
    );
}
