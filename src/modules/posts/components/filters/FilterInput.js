import React, {useEffect, useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Chip, MenuItem, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import API from "../../../../API";
import {isMobile} from "../../../../utils/userAgent";

const useStyles = makeStyles(theme => ({
  title: {textTransform: "capitalize"},
  chip: {width: theme.spacing(11)},
  accordion: {
    '& > *[aria-expanded=true]': {
      marginTop: theme.spacing(-1.75),
      minHeight: theme.spacing(6),
      maxHeight: theme.spacing(6),
    },
    '& > *[aria-expanded=true] + *': {
      margin: theme.spacing(-1, 0, -1.75, 0)
    }
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  chipContainer: {
    marginTop: theme.spacing(1)
  }
}));

const isInclude = (list, item) => list.find(listItem => item && listItem.toLowerCase().trim() === item.toLowerCase().trim())

const FilterInput = ({title, filters, setFilters, keyName}) => {
  const classes = useStyles()
  const [values, setValues] = useState(filters[keyName] || [])
  const [inputValue, setInputValue] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setValues(filters[keyName])
  }, [filters[keyName]])

  const handleClearAll = () => setFilters({...filters, [keyName]: []})

  const handleDelete = value => {
    filters[keyName] = values.filter(val => val.toLowerCase().trim() !== value.toLowerCase().trim())
    setFilters({...filters})
  }

  const handleAdd = (value) => {
    setFilters({...filters, [keyName]: filters[keyName].concat(value)})
    setInputValue("")
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (value.trim()) {
      API.posts.getOptions(keyName, value.trim())
        .then(s => setSuggestions(s.filter(val => !isInclude(values, val))))
        .catch(() => ({}))
    } else {
      setSuggestions([])
    }
    setInputValue(value)
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
      const value = suggestions[selectedIndex]
      if (isInclude(suggestions, value) && !isInclude(values, value)) handleAdd(value)
      setSelectedIndex(-1)
    }
  }

  const mobile = isMobile()

  return <Accordion square defaultExpanded className={classes.accordion}>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails className={classes.container}>
      {values.length > 0 &&
      <Chip label="&#x2715; &nbsp; Clear All" size="small" className={classes.chip} onClick={handleClearAll}/>}
      <div className={classes.chipContainer}>
        {
          values.map((value, index) => <Chip key={index} variant="outlined" color="primary" size="small" label={value}
                                             onDelete={() => handleDelete(value)}/>)
        }
      </div>
      {mobile && inputValue && suggestions.map((suggestion, index) => {
        return <MenuItem key={index} value={suggestion} selected={index === selectedIndex}
                         onClick={() => handleAdd(suggestion)}>{suggestion}</MenuItem>
      })}
      <TextField size="small" variant="standard" onChange={handleChange}
                 onKeyDown={handleKeyDown}
                 placeholder={`Enter ${title.toLowerCase()}...`} value={inputValue}/>
      {!mobile && inputValue && suggestions.map((suggestion, index) => {
        return <MenuItem key={index} value={suggestion} selected={index === selectedIndex}
                         onClick={() => handleAdd(suggestion)}>{suggestion}</MenuItem>
      })}
    </AccordionDetails>
  </Accordion>
}

export default FilterInput
