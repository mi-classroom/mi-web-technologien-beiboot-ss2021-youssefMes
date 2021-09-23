import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import axios from "axios";
import _ from 'lodash'
import '../App.css'
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
export default function Metadata({data, fields, updateFields}) {
    const classes = useStyles();
    const handleReset = () => updateFields({})
    const handleSubmit = () => updateData()

    const updateData = async () => {
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/update-metadata`, {
            params: fields
        })
    }
    const handleChange = (e) => {
        updateFields({...fields, [e.target.name]: e.target.value})
    }
    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width="60%" colSpan={_.isEmpty(fields) ? 2 : 1}>Metadata</TableCell>
                            {!_.isEmpty(fields) && (
                                <TableCell>
                                    <Button className={classes.resetButton} onClick={handleReset}>Discard</Button>
                                    <Button className={classes.submitButton} onClick={handleSubmit}>Submit</Button>
                                </TableCell>
                            )}
                            </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries({...data, ...fields}).map(([key, value]) => {
                        return (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {key}
                                </TableCell>
                                <TableCell align="right">
                                    <input name={key} value={typeof value === 'object' ? value['value'] : value}
                                           onChange={handleChange} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
