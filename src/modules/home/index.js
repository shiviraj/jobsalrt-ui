import React from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import API from "../../API";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";

const Home = ({posts}) => {
  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs"/>
      <JobsContainerWithUrls title="Recommended Jobs"/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]}/>
      <JobsContainer title="Results" posts={posts["results"]}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]}/>
      <JobsContainerWithUrls title="Recently Viewed"/>
    </div>
  );
};

Home.getInitialProps = async () => {
  const paths = ["latest-jobs", "admit-cards", "results", "answer-keys", "syllabus", "admissions"]
  const posts = {}
  for (const path of paths) {
    posts[path] = await API.posts.getPosts(path).catch(() => ([]));
  }
  return {posts}
}

export default Home
