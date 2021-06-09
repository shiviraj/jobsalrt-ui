import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Chip, FormControl, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import FormCheckBox from "../../../../common/components/FormCheckBox";

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
}));

const options = [
  {name: "Online", value: "ONLINE"},
  {name: "Offline", value: "OFFLINE"}
]

const FilterOptions = ({filters, setFilters, title}) => {
  const classes = useStyles()
  const {formType} = filters
  const handleClearAll = () => setFilters({...filters, formType: []})

  const handleChange = (value) => {
    if (formType.includes(value)) filters.formType = formType.filter(type => type !== value)
    else filters.formType.push(value)
    setFilters({...filters})
  }

  return <Accordion square defaultExpanded className={classes.accordion}>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormControl component="fieldset">
        {formType && formType.length !== 0 &&
        <Chip label="&#x2715; &nbsp; Clear All" size="small" className={classes.chip} onClick={handleClearAll}/>}
        {
          options.map((option, index) => {
            return <FormCheckBox key={`${option.name}_${index}`} value={option.value} label={option.name}
                                 checked={formType.includes(option.value)} onChange={handleChange}/>
          })
        }
      </FormControl>
    </AccordionDetails>
  </Accordion>
}

export default FilterOptions
