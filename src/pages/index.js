import {connect} from 'react-redux'
import Home from "../modules/home";
import {setFilters} from "../modules/posts/actions";

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
