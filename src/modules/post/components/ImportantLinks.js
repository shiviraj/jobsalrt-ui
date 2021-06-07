import React from 'react';
import {Grid, Link, Paper, Table, TableBody, TableContainer, Typography} from "@material-ui/core";
import {StyledTableCell, StyledTableRow, useStyles} from "./StyledRow";

const ImportantLinks = ({details}) => {
  const classes = useStyles();
  const {body} = details

  if (!body || !body.length) return <></>

  return (<Grid item xs={12}>
      <TableContainer component={Paper} className={classes.table}>
        <Typography className={classes.titleBar} variant="h6">Important Links</Typography>
        <Table aria-label="customized table">
          <TableBody>
            {body.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row[0]}</StyledTableCell>
                <StyledTableCell><Link href={row[1]} target="_blank">Click Here</Link></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ImportantLinks
