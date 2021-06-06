import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/styles";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
  },
}))

const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header/>
      <div className={classes.root}>{children}</div>
      <Divider/>
      <Footer/>
    </React.Fragment>
  )
};

export default Layout
