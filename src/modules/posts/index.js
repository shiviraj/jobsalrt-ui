import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import PostsContainer from "./components/PostsContainer";
import FilterContainer from "./components/FilterContainer";
import {useRouter} from "next/router";
import * as querystring from "querystring";
import {Button, Typography} from "@material-ui/core";
import MobileFilter from "./components/filters/MobileFilter";
import * as state from "./reducer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  postContainer: {
    position: "relative",
    width: '80%',
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5.8),
      width: '100%',
    }
  },
  mobileFilter: {
    borderRadius: 0,
    zIndex: 1,
    width: "100vw",
    position: "fixed",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    margin: theme.spacing(-0.6, -0.5),
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "block",
      margin: theme.spacing(-1.2, -1),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(-0.6, -0.5),
    },
  },
  filterContainer: {
    width: '19.5%',
    display: "block",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }
  }
}));

const parseFilters = rest => {
  return Object.keys(rest).reduce((filters, key) => {
    if (typeof rest[key] !== "object") filters[key] = [rest[key]]
    else filters[key] = rest[key]
    return filters
  }, {});
};

const Posts = (props) => {
  const {filters, currentPage, setPage, search, setSearch, postsCount, getPosts, setFilters, setType} = props
  const classes = useStyles()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const {category, search, page, ...rest} = router.query
      const restFilters = parseFilters(rest);
      if (category) {
        await setPage(currentPage || page)
        search && await setSearch(search)
        category !== "search" && await setSearch("")
        await setType(category)
        await setFilters({...state.defaultState().filters, ...restFilters})
      }
    })()
  }, [router.query.category, currentPage])

  useEffect(() => {
    const category = search ? "search" : router.query.category
    if (category && currentPage) {
      const query = category === "search" && search
        ? querystring.stringify({...filters, search})
        : querystring.stringify(filters)
      router.push(`/${category}/page/${currentPage}/posts?${query}`).then((a) => {
        postsCount()
        getPosts()
      })
    }
  }, [filters, search, currentPage])

  return <div className={classes.root}>
    <Button className={classes.mobileFilter} onClick={() => setOpen(!open)}>
      <Typography variant="h6" className={classes.title}>Filter</Typography>
    </Button>
    <div className={classes.postContainer}>
      <PostsContainer  {...props}/>
    </div>
    <div className={classes.filterContainer}>
      <FilterContainer filters={filters} setFilters={setFilters}/>
    </div>
    <MobileFilter filters={filters} setFilters={setFilters} open={open} setOpen={setOpen}/>
  </div>
}

export default Posts
