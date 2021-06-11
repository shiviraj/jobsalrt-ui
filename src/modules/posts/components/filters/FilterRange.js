import React, {useEffect, useState} from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import {displayNum} from "../../../../utils/numbers";

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
    alignItems: "center"
  },
}));


const FilterRange = ({title, values, filters, setFilters, keyName}) => {
  const classes = useStyles()
  const initialState = [values[0], values[values.length - 1]]
  const [value, setValue] = useState(filters[keyName] || initialState)

  const marks = values.reduce((marks, value) => marks.concat({value}), [])

  useEffect(() => {
    setValue(filters[keyName] || initialState)
  }, [filters[keyName]])

  const handleClearAll = () => {
    delete filters[keyName]
    setFilters({...filters})
  }

  const handleChange = (val) => {
    setFilters({...filters, [keyName]: val})
  }

  const valueLabelFormat = value => {
    const lastValue = displayNum(marks[marks.length - 2].value);
    const numToDisplay = displayNum(value)
    return value === initialState[1] ? `${lastValue}+` : numToDisplay;
  };

  return <Accordion square className={classes.accordion}>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails className={classes.container}>
      <Chip label="&#x2715; &nbsp; Clear All" size="small" className={classes.chip} onClick={handleClearAll}/>
      <Slider
        value={value}
        onChange={(e, value) => handleChange(value)}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay={"auto"}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={value => value}
        min={initialState[0]}
        max={initialState[1]}
        marks={marks}
      />
      <div className={classes.input}>
        <div>
          <FormControl variant="outlined" size="small">
            <InputLabel>Min</InputLabel>
            <Select
              value={value[0]}
              onChange={(e) => handleChange([e.target.value, value[1]])}
              label="Min"
            >
              {
                marks.map((mark, index) => {
                  if (index === 0) return <MenuItem key={index} value={mark.value} selected><em> Min</em></MenuItem>
                  return value[1] > mark.value && <MenuItem key={index} value={mark.value}>{mark.value}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </div>
        <div>
          <Typography>to</Typography>
        </div>
        <div>
          <FormControl variant="outlined" size="small">
            <InputLabel>Max</InputLabel>
            <Select
              value={value[1].toString()}
              onChange={(event) => handleChange([value[0], event.target.value])}
              label="Max"
            >
              {
                marks.map((mark, index) => {
                  if (index === marks.length - 1) return <MenuItem key={index} value={mark.value}
                                                                   selected><em>{marks[index - 1].value}+</em></MenuItem>
                  return value[0] < mark.value && <MenuItem key={index} value={mark.value}>{mark.value}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </div>
      </div>
    </AccordionDetails>
  </Accordion>
}

export default FilterRange
