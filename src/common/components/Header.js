import React, {useState} from 'react'
import Appbar from "./Header/Appbar";
import Menubar from "./Header/Menubar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {position: "fixed"}
}));

const Header = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (<React.Fragment>
    <Appbar className={classes.root} setOpenDrawer={setOpenDrawer}/>
    <Menubar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
  </React.Fragment>)
}

export default Header
