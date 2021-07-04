import React, {createRef, useEffect, useState} from "react";
import Link from "next/link"
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HomePosts from "./HomePosts";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
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

const JobsContainer = ({title, posts}) => {
  const category = title.split(" ").join('-').toLowerCase()
  const [width, setWidth] = useState(0)

  const classes = useStyles()
  const containerRef = createRef()

  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [containerRef.current])

  return <div className={classes.root}>
    <div className={classes.header} ref={containerRef}>
      <Typography variant="h6">{title}</Typography>
      <Link href={`/${category}/page/1/posts`}>
        <Button variant="contained" color="primary" size="small">View all</Button>
      </Link>
    </div>
    <HomePosts posts={posts} width={width}/>
  </div>
}

export default JobsContainer
