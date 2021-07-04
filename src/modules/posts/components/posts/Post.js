import React, {useState} from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";
import {truncate} from "../../../../utils/string";
import {isMobile} from "../../../../utils/userAgent";
import {formatDate} from "../../../../utils/formatDate";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.2),
    padding: theme.spacing(0.25),
    borderRadius: 0,
    border: `1px solid ${theme.palette.grey[300]}`,
    height: theme.spacing(27),
    boxShadow: theme.shadows[0],
    cursor: "pointer",
    '&:hover': {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[100]
    },
    [theme.breakpoints.down("sm")]: {
      border: `1px solid ${theme.palette.primary.extraLight}`,
      boxShadow: theme.shadows[1],
      margin: theme.spacing(0.4, 0.2),
      padding: theme.spacing(0),
    }

  },
  down: {
    marginTop: theme.spacing(4),
  },
  cardContent: {
    transition: 'margin .4s',
    padding: theme.spacing(0.8),
    color: theme.palette.grey[800]
  },
  title: {
    textAlign: "justify", lineHeight: theme.spacing(0.15),
  },
  logoContainer: {
    display: 'flex',
    justifyContent: "center",
    padding: theme.spacing(0.5),
  },
  logo: {
    height: theme.spacing(8),
    maxWidth: "100%"
  },
}));

const Post = ({post}) => {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)
  const mobile = isMobile()

  return <Link href={`/post/${post.url}`}>
    <Card className={classes.root} onMouseLeave={() => setVisible(false)}
          onMouseEnter={() => setVisible(true)}>
      <CardContent className={classes.logoContainer}>
        <img className={classes.logo} src={post.postLogo || "/logo.png"} alt={truncate(50)(post.name)}/>
      </CardContent>
      <CardContent className={(visible || mobile) ? classes.cardContent : `${classes.cardContent} ${classes.down}`}>
        <Typography variant="subtitle2" className={classes.title}>{truncate(50)(post.name)}</Typography>
        <Typography variant="body2"><b>Form Type :</b> &nbsp; {post.formType} </Typography>
        {post.lastDate &&
        <Typography variant="body2"><b>Last Date :</b> &nbsp; {formatDate(post.lastDate)} </Typography>}
        {post.company &&
        <Typography variant="body2"><b>Organisation :</b> &nbsp; {post.company.replaceAll(/\(.*\)/g, "")} </Typography>}
        {(visible || mobile) &&
        <Typography variant="body2"><b>Vacancy :</b> &nbsp; {post.vacancies || "Not Specified"} </Typography>}
        {(visible || mobile) &&
        <Typography variant="body2"><b>Last Update :</b> &nbsp; {formatDate(post.postUpdateDate)} </Typography>}
      </CardContent>
    </Card>
  </Link>
}

export default Post
