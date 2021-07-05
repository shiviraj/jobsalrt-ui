import React, {useEffect, useState} from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import {getStorage} from "../../utils/storage";
import {StorageKeys} from "../../constants/storage";
import API from "../../API";

const Home = ({posts}) => {
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState(true)
  const [recommendedPosts, setRecommendedPosts] = useState([])
  const [recentlyVisitedPosts, setRecentlyVisitedPosts] = useState([])

  const getPosts = (category, setPosts, setLoading) => {
    setLoading(true)
    const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []
    API.posts.getPostsWithUrls(category, recentlyViewed)
      .then(p => setPosts(p))
      .catch(() => ({}))
      .then(() => setLoading(false))
  }

  useEffect(() => {
    getPosts("RECOMMENDED_JOBS", setRecommendedPosts, setLoading)
    getPosts("RECENTLY_VIEWED", setRecentlyVisitedPosts, setLoading1)
  }, [])

  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs" posts={posts["trending-jobs"]} loading={loading || loading1}/>
      <JobsContainerWithUrls title="Recommended Jobs" loading={loading} posts={recommendedPosts}/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]} loading={loading || loading1}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]} loading={loading || loading1}/>
      <JobsContainer title="Results" posts={posts["results"]} loading={loading || loading1}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]} loading={loading || loading1}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]} loading={loading || loading1}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]} loading={loading || loading1}/>
      <JobsContainerWithUrls title="Recently Viewed" loading={loading1} posts={recentlyVisitedPosts}/>
    </div>
  );
};


export default Home
