import React, {useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import {getFiles} from "../utils";

export default function SearchList(props) {
    const {list, setSelectedFile, setSelectedFolder} = props
    const [itemList, setItemList] = useState(list)

    useEffect(() => {
        setItemList(list);
    }, [list])

    const handleClick = item => e => {
        setSelectedFile(item)
        if (item.type === 'directory') {
            setItemList(item.children)
            setSelectedFolder(item)
        }
    }
    return (
        <div style={{marginTop: '2rem'}}>
            <List component="nav">
                {itemList.map((item, idx) => {
                    return (
                        <ListItem button onClick={handleClick(item)} style={{fontSize: "1px"}} key={idx}>
                            <ListItemIcon>
                                {
                                    item.type === 'file'
                                    ? <DescriptionOutlinedIcon className={'navigator__icons'}/>
                                    : <FolderOpenOutlinedIcon className={'navigator__icons'}/>
                                }
                            </ListItemIcon>
                                <ListItemText className={'navigator__items'}>{item.name}</ListItemText>
                        </ListItem>
                    )
                })
                }
            </List>
        </div>
    );
}
