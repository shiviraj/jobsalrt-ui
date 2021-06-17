import React, {useEffect, useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Chip, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";

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
    width: "auto",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center"
  },
}));


const FilterAge = ({title, filters, setFilters, keyName}) => {
  const classes = useStyles()
  const [values, setValues] = useState(filters[keyName] || [])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setValues(filters[keyName] || [])
    if (filters[keyName] && !filters[keyName].length) delete filters[keyName]
  }, [filters[keyName]])

  const handleClearAll = () => {
    delete filters[keyName]
    setFilters({...filters})
  }

  const handleClear = (value) => {
    setFilters({...filters, [keyName]: values.filter(val => val !== value)})
  }

  const handleChange = (event) => setInputValue(event.target.value)

  const handleKeyDown = (event) => {

    if (event.key === "Enter" && inputValue && !Number.isNaN(+inputValue)) {
      if (!values.includes(+inputValue)) values.push(+inputValue)
      setFilters({...filters, [keyName]: values})
      setInputValue("")
    }
  }

  return <Accordion square defaultExpanded className={classes.accordion}>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails className={classes.container}>

      {values.length > 0 &&
      <>
        <Chip label="&#x2715; &nbsp; Clear All" size="small" className={classes.chip} onClick={handleClearAll}/>
        <div className={classes.chipContainer}>
          {values.map(value => <Chip key={value} variant="outlined" color="primary" size="small" label={value}
                                     onDelete={() => handleClear(value)}/>)}
        </div>
      </>
      }
      <TextField type="number" size="small" variant="standard" onChange={handleChange} onKeyDown={handleKeyDown}
                 placeholder={`Enter ${title.toLowerCase()}...`} value={inputValue}/>

    </AccordionDetails>
  </Accordion>
}

export default FilterAge
