import {IconButton} from "@material-ui/core";
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import HomePost from "./HomePost";
import React, {createRef, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  postsContainer: {
    marginTop: theme.spacing(0.4),
    overflowX: "hidden",
  },
  posts: {
    display: "flex",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    },
    transition: "margin 1s"
  },
  backArrow: {
    position: "absolute",
    margin: theme.spacing(14, 0, 0, -3),
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  forwardArrow: {
    position: "absolute",
    right: 0,
    margin: theme.spacing(-16, 0, 0, 0),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  post: {
    minWidth: theme.spacing(36.7),
    padding: theme.spacing(0.25),
  }
}))

const HomePosts = ({posts, width}) => {
  const item = 298
  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const [margin, setMargin] = useState(0)
  const postRef = createRef()

  useEffect(() => {
    if (posts.length && width) {
      const itemsInRow = Math.floor(width / item);
      setMaxIndex(Math.floor(posts.length / itemsInRow));
    }
  }, [width])

  useEffect(() => {
    if (width) {
      const items = Math.floor(width / item)
      const margin = (maxIndex === index && maxIndex !== 0) ? (posts.length * item) - width : (Math.floor(items * item * index))
      setMargin(-margin)
    }
  }, [index])

  const handleBackward = () => setIndex(Math.max(index - 1, 0))
  const handleForward = () => setIndex(Math.min(index + 1, maxIndex))

  return <div className={classes.postsContainer}>
    {index !== 0 && <IconButton className={classes.backArrow} aria-label="backward" onClick={handleBackward}>
      <ArrowBack fontSize="small"/>
    </IconButton>}
    <div className={classes.posts} style={{marginLeft: margin}}>
      {
        posts.map((post, index) => {
          return <div key={index} className={classes.post} ref={index === 0 ? postRef : null}>
            <HomePost post={post}/>
          </div>;
        })
      }
    </div>
    {maxIndex !== index &&
    <IconButton className={classes.forwardArrow} aria-label="forward" onClick={handleForward}>
      <ArrowForward fontSize="small"/>
    </IconButton>}
  </div>
}

export default React.memo(HomePosts)
