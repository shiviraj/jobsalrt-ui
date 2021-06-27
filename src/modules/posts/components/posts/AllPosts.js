import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PostSkeleton from "../../../../common/components/PostSkeleton";
import Post from "./Post";

const useStyles = makeStyles(theme => ({
  container: {margin: theme.spacing(1)},
  noPost: {margin: theme.spacing(20), color: theme.palette.error.light},
}));

const AllPosts = ({posts, loading, type}) => {
  const classes = useStyles()

  if (loading || !type) return Array(12).fill("").map((_, index) => <PostSkeleton key={`key-${index}`}/>)
  if (!posts.length) return <Typography variant="h3" className={classes.noPost}>No Post Found...</Typography>
  return <Grid container className={classes.container}>
    {
      posts.map((post, index) => <Grid item sm={6} lg={3} md={4} xs={12} key={`${post.source}_${index}`}>
        <Post post={post}/>
      </Grid>)
    }
  </Grid>
}


export default AllPosts
