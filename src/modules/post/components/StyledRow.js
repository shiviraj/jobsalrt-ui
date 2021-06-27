import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TableCell, TableRow} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0.5, 0),
      fontSize: 14,
    }
  },
  titleBar: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5, 0.8),
      fontSize: 14,
    }
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 18,
    // border: `1px solid ${theme.palette.primary.light}`,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5),
      fontSize: 14,
    }
  },
  body: {
    fontSize: 14,
    // border: `1px solid ${theme.palette.primary.light}`,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5),
      fontSize: 13,
    }
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export {StyledTableRow, StyledTableCell, useStyles}
