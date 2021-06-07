import React from 'react';
import {Grid, Paper, Table, TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import {StyledTableCell, StyledTableRow, useStyles} from "./StyledRow";


const CustomizedTable = ({details, title}) => {
  const classes = useStyles();
  const {header = [], body} = details

  if (!body || !body.length) return <></>

  return (<Grid item xs={12}>
      <TableContainer component={Paper} className={classes.table}>
        <Typography className={classes.titleBar} variant="h6">
          {title}
        </Typography>
        <Table aria-label="customized table">
          <TableHead>
            {
              header.map((item, index) =>
                <StyledTableCell key={index}>{item}</StyledTableCell>
              )
            }
          </TableHead>
          <TableBody>
            {body.map((row, index) => (
              <StyledTableRow key={index}>
                {row.map((item, index) =>
                  <StyledTableCell key={index}>{item}</StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default CustomizedTable
