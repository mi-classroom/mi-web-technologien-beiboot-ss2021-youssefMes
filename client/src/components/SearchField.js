import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "../style/style";
import Fuse from 'fuse.js';
import {debounce} from 'lodash';

export default function SearchField(props) {
    const classes = useStyles();
    const {files, setResult} = props
    const fuse = new Fuse(files, {
         keys: ['name'],
         includeScore: true
     });
    const delayedHandleChange = debounce((value) => {
        const res = fuse.search(value).map(el => el.item)
        setResult(res)
    }, 1000);

    const handleChange = (event) => {
        const {value} = event.target
        delayedHandleChange(value)
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
