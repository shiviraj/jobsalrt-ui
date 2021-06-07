import React, {useEffect} from 'react'
import {Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import PostSkeleton from "./components/PostSkeleton";
import CustomizedTable from "./components/CustomizedTables";
import ImportantLinks from "./components/ImportantLinks";
import BasicDetails from "./components/BasicDetails";

const Post = (props) => {
  const router = useRouter()
  const {url} = router.query
  const {post, loading, getPost} = props

  useEffect(() => {
    url && getPost(url)
  }, [url])

  if (loading || !post) return <><PostSkeleton/><PostSkeleton/><PostSkeleton/><PostSkeleton/></>

  return (<Grid container>
      <BasicDetails details={post.basicDetails}/>
      {post.dates && <CustomizedTable details={post.dates} title="Important Dates"/>}
      {post.feeDetails && <CustomizedTable details={post.feeDetails} title="Fee Details"/>}
      {post.ageLimit && <CustomizedTable details={post.ageLimit} title="Age Limit"/>}
      {post.vacancyDetails && <CustomizedTable details={post.vacancyDetails} title="Vacancy Details"/>}
      {
        Object.keys(post.others).map((keyName, index) =>
          <CustomizedTable key={keyName} details={post.others[keyName]} title={keyName}/>
        )
      }
      {post.selectionProcess && <CustomizedTable details={post.selectionProcess} title="Selection Process"/>}
      {post.howToApply && <CustomizedTable details={post.howToApply} title="How To Apply"/>}
      {post.importantLinks && <ImportantLinks details={post.importantLinks}/>}
    </Grid>
  )
}

export default Post

