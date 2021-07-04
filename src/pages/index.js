import Home from "../modules/home";
import API from "../API";

export const getStaticProps = async () => {
  const paths = ["latest-jobs", "admit-cards", "results", "answer-keys", "syllabus", "admissions"]
  const result = await Promise.all(paths.map(path => API.posts.getPosts(path).catch(() => ([]))))
  const posts = result.reduce((allPosts, posts, index) => Object.assign(allPosts, {[paths[index]]: posts}), {})
  posts["trending-jobs"] = await API.posts.getPostsWithUrls("TRENDING_JOBS", [])
  return {props: {posts}, revalidate: 3600}
};

export default Home
