import React from 'react';
import Link from "next/link"
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import Searchbar from "./Searchbar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: theme.spacing(5.4),
  },
  toolBar: {
    marginTop: theme.spacing(-1),
    [theme.breakpoints.up('sm')]: {marginTop: theme.spacing(-1.3),},
  },
  menuButton: {
    margin: theme.spacing(1, 1, 1, -1),
    display: 'block', [theme.breakpoints.up('md')]: {display: 'none',}
  },
  grow: {flexGrow: 1,},
  title: {
    display: 'none',
    color: theme.palette.common.white,
    "&>a:hover": {textDecoration: "none"},
    [theme.breakpoints.up('sm')]: {display: 'block',},
  },
}));

const Appbar = ({setOpenDrawer}) => {
  const classes = useStyles();

  return (<AppBar className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.grow}/>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon/>
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link href="/"><span><b>Jobs</b>Alrt</span></Link>
        </Typography>
        <Searchbar/>
        <div className={classes.grow}/>
      </Toolbar>
    </AppBar>
  );
}


export default Appbar
