import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SearchList(props) {
    const classes = useStyles();
    const {list, setSelectedImage} = props
    const handleClick = image => e => {
        setSelectedImage(image)
    }
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {list.map(item => {
                    return (
                        <ListItem button onClick={handleClick(item)} style={{fontSize: "1px"}}>
                            <ListItemIcon>
                                <DescriptionOutlinedIcon style={{color: '#ff928b'}} fontSize={"small"}/>
                            </ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                        </ListItem>
                    )
                })
                }
            </List>
        </div>
    );
}
