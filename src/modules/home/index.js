import React, {useEffect, useState} from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import {getStorage} from "../../utils/storage";
import {StorageKeys} from "../../constants/storage";
import API from "../../API";

const Home = ({posts}) => {
  const [loading, setLoading] = useState(true)
  const [recentlyVisitedPosts, setRecentlyVisitedPosts] = useState([])

  useEffect(() => {
    setLoading(true)
    const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []
    API.posts.getPostsWithUrls("RECENTLY_VIEWED", recentlyViewed)
      .then(p => {
        setRecentlyVisitedPosts(p);
        posts["recommended-jobs"] = p.concat(posts["recommended-jobs"])
          .sort((_a, _b) => Math.random() - 0.5)
          .sort((_a, _b) => Math.random() - 0.5)
          .slice(0, 48)
      })
      .catch(() => ({}))
      .then(() => setLoading(false))
  }, [])

  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs" posts={posts["trending-jobs"]} loading={loading}/>
      <JobsContainerWithUrls title="Recommended Jobs" loading={loading} posts={posts["recommended-jobs"]}/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]} loading={loading}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]} loading={loading}/>
      <JobsContainer title="Results" posts={posts["results"]} loading={loading}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]} loading={loading}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]} loading={loading}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]} loading={loading}/>
      <JobsContainerWithUrls title="Recently Viewed" loading={loading} posts={recentlyVisitedPosts}/>
    </div>
  );
};


export default Home
