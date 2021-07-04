import React, {createRef, useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HomePosts from "./HomePosts";
import API from "../../../API";
import {getStorage} from "../../../utils/storage";
import {StorageKeys} from "../../../constants/storage";

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

const JobsContainerWithUrls = ({title}) => {
  const category = title.split(" ").join('_').toUpperCase()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [width, setWidth] = useState(0)

  const classes = useStyles()
  const containerRef = createRef()
  const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []

  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [containerRef.current, category])

  useEffect(() => {
    setLoading(true)
    API.posts.getPostsWithUrls(category, recentlyViewed)
      .then(p => setPosts(p))
      .catch(() => ({}))
      .then(() => setLoading(false))
  }, [])

  return <div className={classes.root}>
    <div className={classes.header} ref={containerRef}>
      <Typography variant="h6">{title}</Typography>
    </div>
    <HomePosts posts={posts} loading={loading} width={width}/>
  </div>
}

export default JobsContainerWithUrls
