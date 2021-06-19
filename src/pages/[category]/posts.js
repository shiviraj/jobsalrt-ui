import {connect} from 'react-redux'
import Posts from "../../modules/posts";
import {getPosts, postsCount, setFilters, setType} from "../../modules/posts/actions";

export const mapStateToProps = state => {
  return {
    loading: state.posts.loading,
    error: state.posts.error,
    errorMessage: state.posts.errorMessage,
    posts: state.posts.data,
    filters: state.posts.filters,
    currentPage: state.posts.currentPage,
    totalPage: state.posts.totalPage,
    totalPosts: state.posts.totalPosts,
    search: state.posts.search
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    postsCount: (payload) => dispatch(postsCount(payload)),
    getPosts: (payload) => dispatch(getPosts(payload)),
    setFilters: (payload) => dispatch(setFilters(payload)),
    setType: (payload) => dispatch(setType(payload))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)


