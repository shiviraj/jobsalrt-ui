import React from 'react';
import JobsContainer from "./components/JobsContainer";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import HomeMenubar from "./components/HomeMenubar";

const Home = () => {
  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs"/>
      <JobsContainerWithUrls title="Recommended Jobs"/>
      <JobsContainer title="Latest Jobs"/>
      <JobsContainer title="Admit Cards"/>
      <JobsContainer title="Results"/>
      <JobsContainer title="Answer Keys"/>
      <JobsContainer title="Syllabus"/>
      <JobsContainer title="Admissions"/>
      <JobsContainerWithUrls title="Recently Viewed"/>
    </div>
  );
};

export default Home
