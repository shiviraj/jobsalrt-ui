import {connect} from 'react-redux'
import Post from "../../modules/post";
import {getPost} from "../../modules/post/actions";
import {setDescription, setTitle} from "../../modules/common/actions";

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
    setTitle: (title) => dispatch(setTitle(title)),
    setDescription: (description) => dispatch(setDescription(description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)


