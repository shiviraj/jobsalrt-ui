import React from "react";
import Link from "next/link";
import {makeStyles} from "@material-ui/styles";
import {
  BorderAll,
  DescriptionOutlined,
  FontDownloadOutlined,
  MenuBookOutlined,
  NoteAddOutlined,
  PostAddOutlined,
  SchoolOutlined
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menubar: {
    display: 'flex', [theme.breakpoints.up('md')]: {display: 'none',},
    justifyContent: "flex-start",
    overflowX: "scroll",
    "&>*": {textAlign: "center", whiteSpace: "nowrap"},
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  link: {
    padding: theme.spacing(1, 2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    borderRadius: 0,
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.extraLight,
      color: theme.palette.common.black,
    }
  }
}))


const HomeMenubar = () => {
  const classes = useStyles()
  return <div className={classes.menubar}>
    <Link href={"/all-jobs/page/1/posts"}>
      <div className={classes.link}><BorderAll/>All Jobs</div>
    </Link>
    <Link href={"/latest-jobs/page/1/posts"}>
      <div className={classes.link}><NoteAddOutlined/>Latest Jobs</div>
    </Link>
    <Link href={"/admit-cards/page/1/posts"}>
      <div className={classes.link}><FontDownloadOutlined/>Admit Cards</div>
    </Link>
    <Link href={"/results/page/1/posts"}>
      <div className={classes.link}><PostAddOutlined/>Results</div>
    </Link>
    <Link href={"/answer-keys/page/1/posts"}>
      <div className={classes.link}><DescriptionOutlined/>Answer Keys</div>
    </Link>
    <Link href={"/admissions/page/1/posts"}>
      <div className={classes.link}><SchoolOutlined/>Admissions</div>
    </Link>
    <Link href={"/syllabus/page/1/posts"}>
      <div className={classes.link}><MenuBookOutlined/>Syllabus</div>
    </Link>
  </div>
}

export default HomeMenubar
