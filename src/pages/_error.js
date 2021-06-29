import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button, Link, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(20, "auto"),
    maxWidth: theme.spacing(90),
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(2),
      maxWidth: "100%",
      background: theme.palette.common.white,
    }
  },
  error: {
    textTransform: "uppercase",
  },
  link: {
    margin: theme.spacing(1, 0)
  }
}))

const Error = () => {
  const classes = useStyles()
  return <div className={classes.root}>
    <div>
      <Typography className={classes.error} variant="h3" color="error">Page not found!!</Typography>
      <Typography variant="body1">Oops! It seems like the page you were trying to find isn't around anymore (or at least
        isn't here).</Typography>
      <Link href="/"><Button variant="contained" color="primary" className={classes.link}>Go to Home</Button></Link>
    </div>
  </div>
}

export default Error
