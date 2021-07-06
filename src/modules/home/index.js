import React, {useEffect, useState} from 'react';
import JobsContainer from "./components/JobsContainer";
import HomeMenubar from "./components/HomeMenubar";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import {getStorage} from "../../utils/storage";
import {StorageKeys} from "../../constants/storage";
import API from "../../API";

const Home = ({posts}) => {
  const [recentlyVisitedPosts, setRecentlyVisitedPosts] = useState([])

  useEffect(() => {
    const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []
    API.posts.getPostsWithUrls("RECENTLY_VIEWED", recentlyViewed)
      .then(p => {
        setRecentlyVisitedPosts(p);
        posts["recommended-jobs"] = p.concat(posts["recommended-jobs"])
          .sort((_a, _b) => Math.random() - 0.5)
          .sort((_a, _b) => Math.random() - 0.5)
          .slice(0, 24)
      })
      .catch(() => ({}))
  }, [])

  return (
    <div>
      <HomeMenubar/>
      <JobsContainerWithUrls title="Trending Jobs" posts={posts["trending-jobs"]}/>
      <JobsContainerWithUrls title="Recommended Jobs" posts={posts["recommended-jobs"]}/>
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]}/>
      <JobsContainer title="Results" posts={posts["results"]}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]}/>
      <JobsContainerWithUrls title="Recently Viewed" posts={recentlyVisitedPosts}/>
    </div>
  );
};


export default Home
