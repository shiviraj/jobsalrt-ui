import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useRouter} from "next/router";

const useStyles = makeStyles(theme => ({
  titleContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    margin: theme.spacing(1, 0, 0, 2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 0, 1),
    }
  },
  title: {
    textTransform: "capitalize"
  },
  postCounts: {marginLeft: theme.spacing(1)},
}));

const PostsHeader = ({currentPage, totalPosts}) => {
  const classes = useStyles()
  const {query} = useRouter()
  const category = query.category ? query.category.replaceAll("-", " ") : ""

  const limit = 48
  const start = Math.min(totalPosts, (currentPage - 1) * limit + 1);
  const end = Math.min(totalPosts, currentPage * limit);

  return <div className={classes.titleContainer}>
    <Typography variant="h5" className={classes.title}>{category}</Typography>
    <Typography variant="subtitle2" className={classes.postCounts}>
      (Showing {start} - {end} posts of {totalPosts} posts)
    </Typography>
  </div>
}

export default PostsHeader
