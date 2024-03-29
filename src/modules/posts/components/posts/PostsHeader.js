import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  titleContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    margin: theme.spacing(1, 0, 0, 2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(-1, 0, 0, 1),
    }
  },
  title: {
    textTransform: "capitalize"
  },
  postCounts: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
    }
  },
}));

const PostsHeader = ({type, currentPage, totalPosts, search}) => {
  const classes = useStyles()
  const category = type && type.replaceAll("-", " ")
  const limit = 48
  const start = Math.min(totalPosts, (currentPage - 1) * limit + 1);
  const end = Math.min(totalPosts, currentPage * limit);

  return <div className={classes.titleContainer}>
    <Typography variant="h5" className={classes.title}>{category}</Typography>
    <Typography variant="subtitle2" className={classes.postCounts}>
      (Showing {start} - {end} posts of {totalPosts} posts) {type === "search" && search && `result for "${search}"`}
    </Typography>
  </div>
}

export default PostsHeader
