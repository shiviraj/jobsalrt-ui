import React, {useEffect, useState} from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import API from "../../API";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import {isClient} from "../../utils/userAgent";

const Home = ({posts}) => {
  const [client, setClient] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setClient(isClient())
  }, [posts])

  return (
    <div>
      <HomeMenubar/>
      {client && <JobsContainerWithUrls title="Trending Jobs" loading={loading} setLoading={setLoading}/>}
      {client && <JobsContainerWithUrls title="Recommended Jobs" loading={loading} setLoading={setLoading}/>}
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]} loading={loading}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]} loading={loading}/>
      <JobsContainer title="Results" posts={posts["results"]} loading={loading}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]} loading={loading}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]} loading={loading}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]} loading={loading}/>
      {client && <JobsContainerWithUrls title="Recently Viewed" loading={loading} setLoading={setLoading}/>}
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
