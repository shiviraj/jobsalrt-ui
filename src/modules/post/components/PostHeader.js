import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: theme.spacing(1, 2)
  },
}));

const PostHeader = () => {
  const classes = useStyles()

  return <div className={classes.titleContainer}>
    <Typography variant="h5">Post Details</Typography>
  </div>
}

export default PostHeader
