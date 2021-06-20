import React from 'react';
import JobsContainer from "./components/JobsContainer";

const Home = ({setTitle}) => {
  setTitle("JobsAlrt | HOME")

  return (
    <div>
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
RecentlyViewed (listOfUrls)
 */

