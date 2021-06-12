import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.common.white, padding: theme.spacing(2),
    '& p': {margin: theme.spacing(2),},
    '& ul': {listStyleType: '→',},
    '& li': {marginLeft: theme.spacing(3),},
    [theme.breakpoints.down('sm')]: {padding: theme.spacing(1), '& p': {margin: theme.spacing(1),},},
  },
}));

const Disclaimer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Disclaimer for Jobs Alrt</Typography>
        <Typography variant="body1">
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at
          alrt.jobs@gmail.com.
        </Typography>

        <Typography variant="h5">Disclaimers for Jobs Alrt</Typography>

        <Typography variant="body1">
          All the information on this website - https://www.jobsalrt.com/ - is
          published in good faith and for general information purpose only. Jobs
          Alrt does not make any warranties about the completeness, reliability
          and accuracy of this information. Any action you take upon the
          information you find on this website (Jobs Alrt), is strictly at your
          own risk. Jobs Alrt will not be liable for any losses and/or damages
          in connection with the use of our website.
        </Typography>

        <Typography variant="body1">
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </Typography>

        <Typography variant="body1">
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </Typography>

        <Typography variant="h5">Consent</Typography>

        <Typography variant="body1">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </Typography>

        <Typography variant="h5">Update</Typography>

        <Typography variant="body1">
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </Typography>
      </Paper>
    </div>
  );
};

export default Disclaimer;
