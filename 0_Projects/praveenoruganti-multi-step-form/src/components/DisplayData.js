import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const DisplayData = () => {
    const { finalData } = useContext(multiStepContext)
    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell>Last Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell>State</StyledTableCell>
                            <StyledTableCell>City</StyledTableCell>
                            <StyledTableCell>Landmark</StyledTableCell>
                            <StyledTableCell>Postal Code</StyledTableCell>
                            <StyledTableCell>Contact Number</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => (
                            <StyledTableRow key={data.email}>
                                <StyledTableCell>{data.firstname}</StyledTableCell>
                                <StyledTableCell>{data.lastname}</StyledTableCell>
                                <StyledTableCell>{data.email}</StyledTableCell>
                                <StyledTableCell>{data.country}</StyledTableCell>
                                <StyledTableCell>{data.state}</StyledTableCell>
                                <StyledTableCell>{data.city}</StyledTableCell>
                                <StyledTableCell>{data.landmark}</StyledTableCell>
                                <StyledTableCell>{data.postalcode}</StyledTableCell>
                                <StyledTableCell>{data.contactnumber}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default DisplayData;