import React from 'react';
import {Grid, Paper, Table, TableBody, TableContainer, Typography} from "@material-ui/core";
import {StyledTableCell, StyledTableRow, useStyles} from "./StyledRow";
import {formatDate} from "../../../utils/formatDate";

const CustomizedTable = ({details}) => {
  const classes = useStyles();

  return (<Grid item xs={12}>
      <TableContainer component={Paper} className={classes.table}>
        <Typography className={classes.titleBar} variant="h6">{details.name}</Typography>
        <Table aria-label="customized table">
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>Form Type</StyledTableCell>
              <StyledTableCell>{details.formType}</StyledTableCell>
            </StyledTableRow>
            {details.lastDate && <StyledTableRow>
              <StyledTableCell>Last Date</StyledTableCell>
              <StyledTableCell>{formatDate(details.lastDate)}</StyledTableCell>
            </StyledTableRow>}
            {details.location && <StyledTableRow>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>{details.location}</StyledTableCell>
            </StyledTableRow>}
            {details.totalVacancies && <StyledTableRow>
              <StyledTableCell>Total Vacancies</StyledTableCell>
              <StyledTableCell>{details.totalVacancies}</StyledTableCell>
            </StyledTableRow>}
            {details.company && <StyledTableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell>{details.company}</StyledTableCell>
            </StyledTableRow>}
            {details.qualification && <StyledTableRow>
              <StyledTableCell>Qualification</StyledTableCell>
              <StyledTableCell>{details.qualification}</StyledTableCell>
            </StyledTableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default CustomizedTable
