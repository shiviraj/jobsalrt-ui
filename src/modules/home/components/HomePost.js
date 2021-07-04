import React, {useEffect, useState} from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
import Link from "next/link"
import {makeStyles} from "@material-ui/core/styles";
import {truncate} from "../../../utils/string";
import {formatDate} from "../../../utils/formatDate";
import {isClient} from "../../../utils/userAgent";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(36),
    padding: theme.spacing(0.25),
    borderRadius: 0,
    height: theme.spacing(27),
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
    height: theme.spacing(8),
  },
  logo: {
    maxWidth: "95%",
    height: "auto"
  },
}));

const HomePost = ({post}) => {
  const classes = useStyles()
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(isClient())
  }, [post])

  return <Link href={`/post/${post.url}`}>
    <Card className={classes.root}>
      <CardContent className={classes.logoContainer}>
        {client && <img className={classes.logo} src={post.postLogo || "/logo.png"} alt={truncate(50)(post.name)}/>}
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" className={classes.title}>{truncate(50)(post.name)}</Typography>
        <Typography variant="body2"><b>Form Type :</b> &nbsp; {post.formType} </Typography>
        {post.lastDate &&
        <Typography variant="body2"><b>Last Date :</b> &nbsp; {formatDate(post.lastDate)} </Typography>}
        {post.company &&
        <Typography variant="body2"><b>Organisation :</b> &nbsp; {truncate(32)(post.company.replace(/\(.*\)/g, ""))}
        </Typography>}
        <Typography variant="body2"><b>Vacancy :</b> &nbsp; {post.vacancies || "Not Specified"} </Typography>
        <Typography variant="body2"><b>Last Update :</b> &nbsp; {formatDate(post.postUpdateDate)} </Typography>
      </CardContent>
    </Card>
  </Link>
}

export default HomePost
