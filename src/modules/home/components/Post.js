import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {redirectTo} from "../../../utils/routing";
import {truncate} from "../../../utils/string";
import {formatDate} from "../../../utils/formatDate";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.25),
    padding: theme.spacing(0.25),
    borderRadius: 0,
    height: theme.spacing(32),
    cursor: "pointer",
    border: `1px solid ${theme.palette.primary.extraLight}`,
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[100]
    },
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
    height: theme.spacing(12),
  },
  logo: {
    maxWidth: "95%",
    height: "auto"
  },
}));

const Post = ({post}) => {
  const classes = useStyles()

  return <Card className={classes.root} onClick={() => redirectTo(`/post/${post.url}`)}>
    <CardContent className={classes.logoContainer}>
      <img className={classes.logo} src={post.postLogo || "/logo.png"} alt={post.postLogo}/>
    </CardContent>
    <CardContent className={classes.cardContent}>
      <Typography variant="subtitle2" className={classes.title}>{truncate(50)(post.name)}</Typography>
      <Typography variant="body2"><b>Form Type :</b> &nbsp; {post.formType} </Typography>
      {post.lastDate && <Typography variant="body2"><b>Last Date :</b> &nbsp; {formatDate(post.lastDate)} </Typography>}
      {post.company && <Typography variant="body2"><b>Company :</b> &nbsp; {truncate(32)(post.company)} </Typography>}
      <Typography variant="body2"><b>Vacancy :</b> &nbsp; {post.totalVacancies || "Not Specified"} </Typography>
      <Typography variant="body2"><b>Last Update :</b> &nbsp; {formatDate(post.postUpdateDate)} </Typography>
    </CardContent>
  </Card>
}

export default Post
