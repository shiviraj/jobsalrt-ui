import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TableCell, TableRow} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius * 1.3,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0.5, 0),
      fontSize: 14,
    }
  },
  titleBar: {
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    borderBottom: 0,
    borderRight: 0,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5),
      fontSize: 14,
    },
    "&:first-child": {
      borderLeft: "none",
    }
  },
  body: {
    fontSize: 14,
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    borderBottom: 0,
    borderRight: 0,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5),
      fontSize: 13,
    },
    "&:first-child": {
      borderLeft: "none",
    }
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child": {
      borderBottom: "none"
    }
  },
}))(TableRow);

export {StyledTableRow, StyledTableCell, useStyles}
