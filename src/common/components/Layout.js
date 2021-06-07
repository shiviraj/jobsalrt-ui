import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/styles";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(6.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.extraLight
  }
}))

const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header/>
      <div className={classes.root}>{children}</div>
      <Divider className={classes.divider}/>
      <Footer/>
    </React.Fragment>
  )
};

export default Layout
