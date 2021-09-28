import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";
import '../App.css'
import {IoMdSave} from "react-icons/all";
import {LinearProgress} from "@material-ui/core";
import { Progress } from "@chakra-ui/react"

const useStyles = makeStyles({
    table: {
        width: '100%',
        height: '100%',
    },
    container: {
        float: "right",
        width: '50%'
    },
    resetButton: {
        color: "white",
        backgroundColor: "#45526e",
        margin: "10px"
    },
    submitButton: {
        color: "white",
        backgroundColor: "#4BB543"
    }
});
export default function Metadata({data, fields, updateFields, path}) {
    const handleSubmit = () => updateData()

    const updateData = async () => {
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/update-metadata`, {
            params: fields,
            path: path
        })
    }
    const handleChange = (e) => {
        updateFields({...fields, [e.target.name]: e.target.value})
    }
    return (
        <div className={'metadata'}>
            <form className={'metadata__form'}>
                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="title"
                        defaultValue={''}
                        value={fields.title || data.title}
                        onChange={handleChange}
                    />

                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.title?.length || data.title.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Titel</label><br/>
                <div style={{display: 'grid'}}>
                    <textarea
                        className={'metadata__form__input__text'}
                        name="description"
                        defaultValue={''}
                        value={fields.description || data.description}
                        onChange={handleChange}
                    />

                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.description?.length || data.description.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Dateiart / Beschreibung</label><br/>

                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="author"
                        defaultValue={''}
                        value={fields.copyright || data.copyright}
                        onChange={handleChange}
                    />
                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.copyright?.length || data.copyright.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Autor / Rechte</label><br/>
                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="source"
                        defaultValue={''}
                        value={fields.source || data.source}
                        onChange={handleChange}
                    />
                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.source?.length || data.source.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Quelle</label><br/>
            </form>
            <form className={'metadata__form'}>
                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="title"
                        defaultValue={''}
                        value={fields.title || data.title}
                        onChange={handleChange}
                    />

                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.title?.length || data.title.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Titel</label><br/>
                <div style={{display: 'grid'}}>
                    <textarea
                        className={'metadata__form__input__text'}
                        name="description"
                        defaultValue={''}
                        value={fields.description || data.description}
                        onChange={handleChange}
                    />
                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.description?.length || data.description.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Dateiart / Beschreibung</label><br/>

                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="author"
                        defaultValue={''}
                        value={fields.copyright || data.copyright}
                        onChange={handleChange}
                    />
                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.copyright?.length || data.copyright.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Autor / Rechte</label><br/>
                <div style={{display: 'grid'}}>
                    <input
                        className={'metadata__form__input'}
                        type="text"
                        name="source"
                        defaultValue={''}
                        value={fields.source || data.source}
                        onChange={handleChange}
                    />
                    <progress
                        className={'metadata__form__input__progress'}
                        value={fields.source?.length || data.source.length}
                        max="32"
                    />
                </div>
                <br/>
                <label className={'metadata__form__label'}>Quelle</label><br/>
            </form>
            <br/>
            <button
                className={'metadata__button'}
                onClick={handleSubmit}
            >
                <IoMdSave className={'metadata__button__icon'}/>
                Speichern
            </button>
        </div>
    );
}
