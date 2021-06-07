import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Fab, Grid, Link, Paper, Typography, useScrollTrigger, Zoom} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {flexGrow: 1},
  scrollTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  gridContainer: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
  },
  paper: {
    background: theme.palette.primary.main,
    boxShadow: 'none',
    display: 'flex',
    color: '#fff',
    flexDirection: 'column',
    '& h3': {
      fontSize: theme.spacing(3),
    },
    '& a': {
      color: theme.palette.grey['300'],
      marginLeft: theme.spacing(3),
      padding: theme.spacing(1) / 5,
      width: 'auto',
    },
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    backgroundColor: theme.palette.grey[300],
  },
}));

const ScrollTop = (props) => {
  const {children, window} = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        JobsAlrt is one of the best government jobs website in India. At
        JobsAlrt we try to bring only those things that are 100% genuine
        (checked by our team) and useful for our users. If you are new on
        jobsAlrt and want to check current govt jobs updates or other alert like
        written exam results, admit cards, syllabus, admissions, answer key on
        your mobile then you can bookmark jobalrt and create your account or
        keep visiting our site for fresh content. JobsAlrt is trying to bring
        innovative features for our users, like use of filters to find jobs
        easily, alerts on your mobile for a particular job and many more. Hope
        you will find JobsAlrt's efforts useful and will keep supporting us.{' '}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </Typography>
      <div className={classes.gridContainer}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography variant="h3">Important Links</Typography>
              <Link href="/page/disclaimer" color="primary">
                Disclaimer
              </Link>
              <Link
                href="/page/terms-of-service"
                color="primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/page/privacy-policy"
                color="primary"
              >
                Privacy Policy
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography variant="h3">Navigation</Typography>
              <Link href="/page/about-us" color="primary">
                About Us
              </Link>
              <Link href="/page/contact-us" color="primary">
                Contact Us
              </Link>
              <Link
                href="/page/share-feedback"
                color="primary"
              >
                Share Feedback
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography variant="h3">Connect with Us</Typography>
              <Link
                component="a"
                href="https://www.facebook.com/alrt.jobsalrt/?modal=admin_todo_tour"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Page
              </Link>
              <Link
                component="a"
                href="https://www.facebook.com/groups/2677640842448736/?ref=bookmarks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Group
              </Link>
              <Link
                component="a"
                href="https://twitter.com/ShivamR31533404"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                component="a"
                href="https://www.instagram.com/jobsalrt5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp/>
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Footer;
