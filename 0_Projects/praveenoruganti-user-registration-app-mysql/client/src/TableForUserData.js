import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
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

class TableForUserData extends Component {
 

  render() {
   
    return (
      
     
        <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell><h5>User Id</h5></StyledTableCell>
              <StyledTableCell><h5>Email Id</h5></StyledTableCell>
              <StyledTableCell><h5>Location</h5></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {Array.from(this.props.userData).map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.USER_NAME}</StyledTableCell>
                <StyledTableCell>{row.EMAIL_ID}</StyledTableCell>
                <StyledTableCell>{row.LOCATION}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    );
  }

}


export default TableForUserData;