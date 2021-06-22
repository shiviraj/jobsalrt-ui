import React, {createRef, useEffect, useState} from "react";
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {redirectTo} from "../../../utils/routing";
import HomePosts from "./HomePosts";
import API from "../../../API";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
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

const JobsContainer = ({title}) => {
  const category = title.split(" ").join('-').toLowerCase()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [width, setWidth] = useState(0)

  const classes = useStyles()
  const containerRef = createRef()

  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [containerRef.current])

  useEffect(() => {
    setLoading(true)
    API.posts.getPosts(category)
      .then(p => setPosts(p))
      .catch(() => ({}))
      .then(() => setLoading(false))
  }, [])

  const handleViewAll = () => {
    redirectTo(`/${category}/page/1/posts`)
  }

  return <div className={classes.root}>
    <div className={classes.header} ref={containerRef}>
      <Typography variant="h6">{title}</Typography>
      <Button variant="contained" color="primary" size="small" onClick={handleViewAll}>View all</Button>
    </div>
    <HomePosts posts={posts} loading={loading} width={width}/>
  </div>
}

export default JobsContainer
