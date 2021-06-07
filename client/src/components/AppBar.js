import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from "../style/style";


export default function SearchAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className='app-bar'>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Exif Reader
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
