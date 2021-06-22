import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Pagination} from "@material-ui/lab";
import {isMobile} from "../../../../utils/userAgent";

const useStyles = makeStyles(theme => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      justifyContent: "center",
    }
  },
}));


const PostsFooter = ({currentPage, totalPage, setPage}) => {
  const classes = useStyles()
  const mobile = isMobile()
  return <div className={classes.paginationContainer}>
    {!mobile && <Typography variant="body1">Page {currentPage} of {totalPage}</Typography>}
    <Pagination count={totalPage} page={currentPage} showFirstButton showLastButton color="primary" size="small"
                onChange={(_e, page) => setPage(page)}/>
    {!mobile && <div>-</div>}
  </div>
}

export default PostsFooter
