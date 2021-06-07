import {connect} from 'react-redux'
import Post from "../../modules/post";
import {getPost} from "../../modules/post/actions";

export const mapStateToProps = state => {
  return {
    loading: state.post.loading,
    error: state.post.error,
    errorMessage: state.post.errorMessage,
    post: state.post.data,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getPost: (url) => dispatch(getPost(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)


