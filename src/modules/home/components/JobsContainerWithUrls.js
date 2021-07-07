import React, {createRef, useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HomePosts from "./HomePosts";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0.6),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0.2),
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

const JobsContainerWithUrls = ({title, posts}) => {
  const category = title.split(" ").join('_').toUpperCase()
  const [width, setWidth] = useState(0)

  const classes = useStyles()
  const containerRef = createRef()

  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [containerRef.current, category])


  return <div className={classes.root}>
    <Typography className={classes.header} ref={containerRef} variant="h6">{title}</Typography>
    <HomePosts posts={posts} width={width}/>
  </div>
}

export default JobsContainerWithUrls
