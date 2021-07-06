import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "../style/style";
import Fuse from 'fuse.js';



export default function SearchField(props) {
    const classes = useStyles();
    const {files, setResult} = props
    const fuse = new Fuse(files, {
         keys: ['name'],
         includeScore: true
     });
    const handleChange = (event) => {
        setResult(fuse.search(event.target.value).map(el => el.item))
    }
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
            />
        </div>
    );
}
