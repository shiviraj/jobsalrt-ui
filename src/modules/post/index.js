import React, {useEffect} from 'react'
import {Grid, Typography} from "@material-ui/core";
import CustomizedTable from "./components/CustomizedTables";
import ImportantLinks from "./components/ImportantLinks";
import BasicDetails from "./components/BasicDetails";
import {getStorage, setStorage} from "../../utils/storage";
import {StorageKeys} from "../../constants/storage";
import {makeStyles} from "@material-ui/styles";
import {getPost} from "./actions";
import {wrapper} from "../../store";
import {setDescription, setTitle} from "../common/actions";
import HeadTag from "../../common/components/HeadTag";
import {useRouter} from "next/router";

const useStyles = makeStyles(theme => ({
  noPost: {
    margin: theme.spacing(20, 0), textAlign: "center",
    [theme.breakpoints.down("sm")]: {}
  },
}))

const createDescription = basicDetails => {
  const keys = ["name", "formType", "advtNo", "lastDate", "vacancies", "location", "company", "qualification"]
  return keys.reduce((result, key) => {
    if (Object.keys(basicDetails).includes(key) && basicDetails[key]) {
      const keyText = key[0].toUpperCase() + key.slice(1)
      result += ` ${keyText}: ${basicDetails[key]};`
    }
    return result
  }, "") + "..."
}

const Post = (props) => {
  const classes = useStyles()
  const {post} = props.initialProps
  const router = useRouter()

  useEffect(() => {
    const recentlyViewed = getStorage(StorageKeys.RECENTLY_VIEWED) || []
    if (router.query.url) {
      recentlyViewed.unshift(router.query.url)
      const urls = recentlyViewed.filter((item, index) => !recentlyViewed.slice(0, index).includes(item))
        .slice(0, 48);
      setStorage(StorageKeys.RECENTLY_VIEWED, urls)
    }
  }, [router.query.url])

  if (!post) return <Typography variant="h2" color="error" className={classes.noPost}>No post found!!</Typography>

  return (<Grid container>
      <HeadTag state={props.initialState.common}/>
      <BasicDetails details={post.basicDetails}/>
      {post.dates && <CustomizedTable details={post.dates} title="Important Dates"/>}
      {post.feeDetails && <CustomizedTable details={post.feeDetails} title="Fee Details"/>}
      {post.ageLimit && <CustomizedTable details={post.ageLimit} title="Age Limit"/>}
      {post.vacancyDetails && <CustomizedTable details={post.vacancyDetails} title="Vacancy Details"/>}
      {
        post.others && Object.keys(post.others).map((keyName, index) =>
          <CustomizedTable key={keyName} details={post.others[keyName]} title={keyName}/>
        )
      }
      {post.selectionProcess &&
      <CustomizedTable details={{body: post.selectionProcess.map(item => [item])}} title="Selection Process"/>}
      {post.howToApply && <CustomizedTable details={{body: post.howToApply.map(item => [item])}} title="How To Apply"/>}
      {post.importantLinks && <ImportantLinks details={post.importantLinks}/>}
    </Grid>
  )
}

Post.getInitialProps = wrapper.getInitialPageProps((store) => async (pathName) => {
    await store.dispatch(getPost(pathName.query.url))
    const state = store.getState()
    const post = state.post.data
    if (post && post.basicDetails) {
      await store.dispatch(setTitle(post.basicDetails.name))
      await store.dispatch((setDescription(createDescription(post.basicDetails))))
    }
    return {
      loading: state.post.loading,
      error: state.post.error,
      errorMessage: state.post.errorMessage,
      post: state.post.data,
    }
  }
)

export default Post

