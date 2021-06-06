import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import store from "../../../store";
import {useRouter} from "next/router";
import {setSearch} from "../../../modules/posts/actions";
import {AppBar, Button, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Search} from "@material-ui/icons";


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
  title: {display: 'none', [theme.breakpoints.up('sm')]: {display: 'block',},},
  search: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.common.white,
    maxHeight: theme.spacing(3.2),
    marginLeft: 0,
    width: "80%",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: "40%",
      maxHeight: "90%",
    },
  },
  searchIcon: {
    marginRight: theme.spacing(-2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.4),
      marginRight: theme.spacing(0),
    },
  },
  inputRoot: {
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(0.5, 2),
  }
}));

const Appbar = ({setOpenDrawer}) => {
  const classes = useStyles();
  const [userName, setUserName] = useState("")
  const [searchText, setSearchText] = useState("")
  const router = useRouter()

  const unsubscribe = store.subscribe(() => {
    const {user} = store.getState()
    const userName = user.data && user.data.name
    setUserName(userName)
  })

  const handleChange = (event) => {
    const value = event.target.value
    setSearchText(value)
    if (router.pathname !== "/posts") router.push("/posts").then()
    store.dispatch(setSearch(value))
  }

  useEffect(() => {
    userName && unsubscribe()
  }, [userName])

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
          <b>Jobs</b>Alrt
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="Search by job name, location, company, qualification..."
            onChange={handleChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={searchText}
            inputProps={{'aria-label': 'search'}}
          />
          <Button size="small" className={classes.searchIcon}>
            <Search fontSize="small"/>
          </Button>
        </div>
        <div className={classes.grow}/>
      </Toolbar>
    </AppBar>
  );
}


export default Appbar
