import React, {useState} from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import API from "../../API";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";

const Home = ({posts}) => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs" loading={loading} setLoading={setLoading}/>
      <JobsContainerWithUrls title="Recommended Jobs" loading={loading} setLoading={setLoading}/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]} loading={loading}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]} loading={loading}/>
      <JobsContainer title="Results" posts={posts["results"]} loading={loading}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]} loading={loading}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]} loading={loading}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]} loading={loading}/>
      <JobsContainerWithUrls title="Recently Viewed" loading={loading} setLoading={setLoading}/>
    </div>
  );
};

Home.getInitialProps = async () => {
  const paths = ["latest-jobs", "admit-cards", "results", "answer-keys", "syllabus", "admissions"]
  const result = await Promise.all(paths.map(path => API.posts.getPosts(path).catch(() => ([]))))
  return {
    posts: result.reduce((allPosts, posts, index) => Object.assign(allPosts, {[paths[index]]: posts}), {})
  }
}

export default Home
