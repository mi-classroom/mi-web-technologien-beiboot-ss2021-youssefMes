import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "../style/style";
import Fuse from 'fuse.js';
import {debounce} from 'lodash';

export default function SearchField(props) {
    const {files, folders, setResult, setSearchText} = props
    const fuse = new Fuse([...files, ...folders], {
         keys: ['name'],
         includeScore: true
     });
    const delayedHandleChange = debounce((value) => {
        const res = fuse.search(value).map(el => el.item)
        setSearchText(value)
        setResult(res)
    }, 1000);

    const handleChange = (event) => {
        const {value} = event.target
        delayedHandleChange(value)
    }

    return (
        <div className={'navigator__search'}>
            <SearchIcon className={'navigator__search__icon'}/>
            <InputBase
                className={'navigator__search__input'}
                onChange={handleChange}
            />
        </div>
    );
}
