import Post from "../../modules/post";
import API from "../../API";

export const getStaticProps = async ({params}) => {
  const post = await API.post.getPost(params.url)
  return {props: {post}, revalidate: 3600}
}

export const getStaticPaths = async () => {
  const type = "all-jobs"
  const posts = []
  const {page} = await API.posts.postsCount(type).catch(console.error)
  const array = new Array(page).fill("")
  await Promise.all(array.map(async (_, page) => {
    const data = await API.posts.getPosts(type, {}, "", page + 1)
    posts.concat(data)
  }))
  const paths = posts.map((post) => ({params: {url: post.url}}))
  return {
    paths,
    fallback: true
  }
}

export default Post


