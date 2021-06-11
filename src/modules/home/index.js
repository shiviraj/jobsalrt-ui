import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import JobsContainer from "./components/JobsContainer";

const useStyles = makeStyles(theme => ({}));


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <JobsContainer title="Latest Jobs"/>
      <JobsContainer title="Admit Cards"/>
      <JobsContainer title="Results"/>
      <JobsContainer title="Answer Keys"/>
      <JobsContainer title="Syllabus"/>
      <JobsContainer title="Admissions"/>
    </div>
  );
};

export default Home

/*
Recommended Jobs (latest Jobs, trending jobs, RecentlyVisited)
Trending Jobs (based on popularity)


Latest Jobs
Admit Cards
Results
Answer Key
Syllabus
Admission
RecentlyVisited (listOfUrls)
 */

