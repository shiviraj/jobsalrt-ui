import React, {createRef, useEffect, useState} from "react";
import {Button, IconButton, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Post from "./Post";
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import {redirectTo} from "../../../utils/routing";

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
  },
  postsContainer: {
    marginTop: theme.spacing(0.4),
    overflowX: "hidden",
  },
  posts: {
    display: "flex",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
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
    margin: theme.spacing(-20, 0, 0, 0),
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
    minWidth: theme.spacing(40)
  }
}))

const JobsContainer = ({title}) => {
  const post = {
    id: {timestamp: 1623314702, date: '2021-06-10T08:45:02.000+00:00'},
    name: 'BPSC District Pulic Relation Officer Re Open Online Form 2021',
    formType: 'ONLINE',
    advtNo: '02/2021',
    lastDate: '2021-07-05',
    totalVacancies: 31,
    location: 'Bihar',
    company: 'BPSC',
    qualification: 'Bachelor Degree',
    postLogo: 'http://bpsc.bih.nic.in/images/BPSC-Top.jpg',
    url: 'bpsc-district-pulic-relation-officer-re-open-online-form',
    createdAt: '2021-06-10T14:15:02.03',
    postUpdateDate: '2021-06-10T18:47:29.008',
    isUpdateAvailable: false,
    totalViews: 0
  }

  const posts = Array(24).fill(post)

  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const [widths, setWidths] = useState({})
  const [margin, setMargin] = useState(0)
  const containerRef = createRef()
  const postRef = createRef()

  useEffect(() => {
    setWidths({container: containerRef.current.offsetWidth, item: postRef.current.offsetWidth})
  }, [])

  useEffect(() => {
    const items = Math.floor(widths.container / widths.item)
    setMargin(-items * widths.item * index)
  }, [index])

  const handleBackward = () => setIndex(Math.max(index - 1, 0))
  const handleForward = () => {
    const maxIndex = Math.ceil(posts.length / (widths.container / widths.item));
    setIndex(Math.min(index + 1, maxIndex));
  }

  const handleViewAll = () => {
    redirectTo(`/${title.replaceAll(" ", '-').toLowerCase()}/posts`)
  }

  return <div className={classes.root}>
    <div className={classes.header} ref={containerRef}>
      <Typography variant="h6">{title}</Typography>
      <Button variant="contained" color="primary" size="small" onClick={handleViewAll}>View all</Button>
    </div>
    <div className={classes.postsContainer}>
      {index !== 0 && <IconButton className={classes.backArrow} onClick={handleBackward}>
        <ArrowBack fontSize="small"/>
      </IconButton>}
      <div className={classes.posts} style={{marginLeft: margin}}>
        {
          posts.map((post, index) => {
            return <div key={index} className={classes.post} ref={postRef}>
              <Post post={post}/>
            </div>
          })
        }
      </div>
      {Math.ceil(posts.length / (widths.container / widths.item)) !== index &&
      <IconButton className={classes.forwardArrow} onClick={handleForward}>
        <ArrowForward fontSize="small"/>
      </IconButton>}
    </div>
  </div>
}

export default JobsContainer
