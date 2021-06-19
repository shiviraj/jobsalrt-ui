import {Button, InputBase, MenuItem} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import store from "../../../store";
import {makeStyles} from "@material-ui/styles";
import {setSearch} from "../../../modules/posts/actions";
import * as querystring from "querystring";
import API from "../../../API";

const useStyles = makeStyles(theme => ({
  searchContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "inherit",
    width: "80%",
    borderRadius: theme.shape.borderRadius / 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: "40%",
      maxHeight: "90%",
    },
  },
  suggestions: {
    position: "absolute",
    backgroundColor: theme.palette.grey[50],
    boxShadow: theme.shadows[2],
    color: theme.palette.primary.main,
    marginTop: theme.spacing(3.4),
    width: "100%",

  },
  search: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.common.white,
    maxHeight: theme.spacing(3.2),
    marginLeft: 0,
    width: "100%",
    borderRadius: theme.shape.borderRadius / 2,
    [theme.breakpoints.up('sm')]: {
      maxHeight: "90%",
    },
  },
  searchIcon: {
    marginRight: theme.spacing(-2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.4),
      marginRight: theme.spacing(0),
    },
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(0.5, 2),
  }
}))

const Searchbar = () => {
  const classes = useStyles()
  const [inputText, setInputText] = useState(store.getState().posts.search || "")
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState([])
  const router = useRouter()

  const setSearchText = payload => store.dispatch(setSearch(payload))
  const searchText = store.getState().posts.search

  useEffect(() => {
    const {search, category} = router.query
    if (search || category === "search") {
      setInputText(search || "")
    }
    if (category !== "search") {
      setInputText("")
    }
  }, [router.query.search, router.query.category])

  const handleAdd = (value) => {
    value = value.trim()
    const query = querystring.stringify({search: value})
    router.push(`/search/posts?${query}`).then()
    setSearchText(value)
    setSelectedIndex(-1)
    setInputText(value)
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (value.trim()) {
      API.posts.getSearchOptions(value.trim())
        .then(s => setSuggestions(s))
        .catch(() => ({}))
    } else {
      setSuggestions([])
    }
    setInputText(value)
    setSelectedIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex(Math.min(selectedIndex + 1, suggestions.length - 1))
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex(Math.max(selectedIndex - 1, 0))
    }
    if (e.key === "Enter") {
      const value = (selectedIndex === -1) ? inputText : suggestions[selectedIndex]
      handleAdd(value)
    }
  }

  return <div className={classes.searchContainer}>
    <div className={classes.search}>
      <InputBase
        placeholder="Search by job name, location, company, qualification..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={inputText}
        inputProps={{'aria-label': 'search'}}
      />
      <Button size="small" className={classes.searchIcon} onClick={() => handleAdd(inputText)}>
        <Search fontSize="small"/>
      </Button>
    </div>
    <div className={classes.suggestions}>
      {inputText && searchText !== inputText && suggestions.map((suggestion, index) => {
        return <MenuItem key={index} value={suggestion} selected={index === selectedIndex}
                         onClick={() => handleAdd(suggestion)}>{suggestion}</MenuItem>
      })}
    </div>
  </div>
}

export default Searchbar
