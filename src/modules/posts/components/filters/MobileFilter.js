import React, {useEffect, useState} from "react";
import FullSizeModal from "../../../../common/components/FullSizeModal";
import FilterContainer from "../FilterContainer";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {ArrowBack} from "@material-ui/icons";
import API from "../../../../API";
import {useRouter} from "next/router";

const useStyles = makeStyles(theme => ({
  appBar: {
    maxHeight: theme.spacing(5),
  },
  toolBar: {
    marginTop: theme.spacing(-1),
  },
  icon: {color: theme.palette.common.white},
  title: {
    marginLeft: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: theme.palette.common.white,
  },
  filterContainer: {
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.common.white,
    overflowY: "scroll",
    overflowX: "hidden"

  },
  buttonContainer: {
    display: "flex",
    marginBottom: theme.spacing(7),
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.grey[200],
    height: theme.spacing(7),
  }
}))

const MobileFilter = ({filters, setFilters, open, setOpen}) => {
  const classes = useStyles()
  const [tempFilter, setTempFilter] = useState(filters)
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    setTempFilter(filters)
  }, [filters])

  const handleApplyFilter = () => {
    setFilters(tempFilter);
    setOpen(false)
  }

  const {category} = useRouter().query

  useEffect(() => {
    if (category) {
      API.posts.postsCount(category, tempFilter)
        .then(result => setPostCount(result.totalPost))
        .catch(() => ({}))
    }
  }, [tempFilter])

  return <FullSizeModal open={open} setOpen={setOpen}>
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton size="small" onClick={() => setOpen(false)} className={classes.icon}>
            <ArrowBack/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Filters
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <div className={classes.filterContainer}>
          <FilterContainer filters={tempFilter} setFilters={setTempFilter}/>
        </div>
        <div className={classes.buttonContainer}>
          <Typography>{postCount} Jobs Found</Typography>
          <Button color="primary" variant="contained" size="small" onClick={handleApplyFilter}>Apply Filers</Button>
        </div>
      </div>
    </React.Fragment>
  </FullSizeModal>
}


export default MobileFilter
