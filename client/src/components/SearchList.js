import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    const {list, setSelectedFile} = props
    const handleClick = file => e => {
        setSelectedFile(file)
    }
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {list.map((item, idx) => {
                    return (
                        <ListItem button onClick={handleClick(item)} style={{fontSize: "1px"}} key={idx}>
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
