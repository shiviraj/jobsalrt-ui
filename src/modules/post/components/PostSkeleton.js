import React from "react";
import {Skeleton} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  postContainer: {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    backgroundColor: theme.palette.common.white,
  },
  skeletonContainer: {
    padding: theme.spacing(2, 2, 0, 2),
    marginBottom: theme.spacing(2),
    "&:last-child": {
      paddingBottom: theme.spacing(4)
    }
  },
  skeleton: {
    width: "100%",
    backgroundColor: theme.palette.grey[100],
    "&:last-child": {
      marginBottom: theme.spacing(-2),
    },
  },
}));

const PostSkeleton = () => {
  const classes = useStyles()
  return <div className={classes.postContainer}>
    <div className={classes.skeletonContainer}>
      <Skeleton variant="rect" animation="wave" height={40} className={classes.skeleton}/>
    </div>
    <div className={classes.skeletonContainer}>
      <Skeleton variant="rect" animation="wave" height={120} className={classes.skeleton}/>
    </div>
  </div>
};

export default PostSkeleton
