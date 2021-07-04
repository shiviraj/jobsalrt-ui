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

  const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []

  const getPosts = (category, setPosts, setLoading) => {
    setLoading(true)
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
      <JobsContainerWithUrls title="Trending Jobs" posts={posts["trending-jobs"]}/>
      <JobsContainerWithUrls title="Recommended Jobs" loading={loading} posts={recommendedPosts}/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]}/>
      <JobsContainer title="Results" posts={posts["results"]}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]}/>
      <JobsContainerWithUrls title="Recently Viewed" loading={loading1} posts={recentlyVisitedPosts}/>
    </div>
  );
};


export default Home
