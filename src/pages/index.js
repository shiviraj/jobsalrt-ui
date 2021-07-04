import Home from "../modules/home";
import API from "../API";

export async function getStaticProps() {
  const paths = ["latest-jobs", "admit-cards", "results", "answer-keys", "syllabus", "admissions"]
  const result = await Promise.all(paths.map(path => API.posts.getPosts(path).catch(() => ([]))))
  const posts = result.reduce((allPosts, posts, index) => Object.assign(allPosts, {[paths[index]]: posts}), {})
  return {props: {posts}}
}

export default Home
