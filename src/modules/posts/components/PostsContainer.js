import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import PostsHeader from "./posts/PostsHeader";
import AllPosts from "./posts/AllPosts";
import PostsFooter from "./posts/PostsFooter";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
  },
  postContainer: {
    display: "flex", flexWrap: "wrap", justifyContent: 'center',
  },
  divider: {margin: theme.spacing(1, 0)}
}));

const PostsContainer = (props) => {
  const {currentPage, setPage, totalPosts, totalPage, getPosts, posts, loading, setTitle} = props
  const classes = useStyles()

  return <div className={classes.root}>
    <PostsHeader currentPage={currentPage} totalPosts={totalPosts} setTitle={setTitle}/>
    <Divider className={classes.divider}/>

    <div className={classes.postContainer}>
      <AllPosts posts={posts} loading={loading}/>
    </div>

    <Divider className={classes.divider}/>
    <PostsFooter currentPage={currentPage} totalPage={totalPage} setPage={setPage}/>
  </div>
}

export default PostsContainer
