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

const JobsContainerWithUrls = ({title, loading, posts}) => {
  const category = title.split(" ").join('_').toUpperCase()
  const [width, setWidth] = useState(0)

  const classes = useStyles()
  const containerRef = createRef()

  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [containerRef.current, category])


  return <div className={classes.root}>
    <div className={classes.header} ref={containerRef}>
      <Typography variant="h6">{title}</Typography>
    </div>
    <HomePosts posts={posts} loading={loading} width={width}/>
  </div>
}

export default JobsContainerWithUrls
