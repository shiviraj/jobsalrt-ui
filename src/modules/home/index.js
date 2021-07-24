import React, {useEffect, useState} from 'react';
import {getStorage} from "../../utils/storage";
import {StorageKeys} from "../../constants/storage";
import API from "../../API";
import HomeMenubar from "./components/HomeMenubar";
import JobsContainerWithUrls from "./components/JobsContainerWithUrls";
import JobsContainer from "./components/JobsContainer";

const Home = ({posts}) => {
  const [recentlyVisitedPosts, setRecentlyVisitedPosts] = useState(null)

  useEffect(() => {
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
  }, [])

  return (
    <React.Fragment>
      <HomeMenubar/>
      {/*<JobsContainerWithUrls title="Trending Jobs" posts={posts["trending-jobs"]}/>*/}
      {/*<JobsContainerWithUrls title="Recommended Jobs" posts={posts["recommended-jobs"]}/>*/}
      <JobsContainer title="Latest Jobs" posts={posts["latest-jobs"]}/>
      <JobsContainer title="Admit Cards" posts={posts["admit-cards"]}/>
      <JobsContainer title="Results" posts={posts["results"]}/>
      <JobsContainer title="Answer Keys" posts={posts["answer-keys"]}/>
      <JobsContainer title="Syllabus" posts={posts["syllabus"]}/>
      <JobsContainer title="Admissions" posts={posts["admissions"]}/>
      {recentlyVisitedPosts && <JobsContainerWithUrls title="Recently Viewed" posts={recentlyVisitedPosts}/>}
    </React.Fragment>
  );
};


export default Home
