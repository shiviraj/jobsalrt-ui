import {connect} from 'react-redux'
import Home from "../modules/home";
import {setFilters} from "../modules/posts/actions";
import {setTitle} from "../modules/common/actions";

export const mapStateToProps = state => {
  return {
    loading: state.posts.loading,
    error: state.posts.error,
    errorMessage: state.posts.errorMessage,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setFilters: (payload) => dispatch(setFilters(payload)),
    setTitle: (payload) => dispatch(setTitle(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
