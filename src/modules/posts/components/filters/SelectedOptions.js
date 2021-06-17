import React from "react";
import {Chip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {padding: theme.spacing(0, 1)},
  filter: {margin: theme.spacing(0.25)},
}));

const SelectedOptions = ({filters, setFilters}) => {
  const classes = useStyles()

  const {formType, vacancies, ageLimit, location, qualification, company} = filters

  const handleRemove = (key, value) => {
    if (value === undefined) {
      delete filters[key]
    } else {
      filters[key] = filters[key].filter(val => val !== value)
    }
    setFilters({...filters})
  }

  return <div className={classes.container}>
    {formType.length > 0 && formType.map((type) => {
      return <Chip variant="outlined" color="primary" size="small" label={type} className={classes.filter}
                   onDelete={() => handleRemove("formType", type)}/>
    })}
    {
      vacancies &&
      <Chip variant="outlined" size="small" onDelete={() => handleRemove("vacancies")} className={classes.filter}
            label={`${vacancies[0] === 0 ? "min" : vacancies[0]} - ${vacancies[1] > 5000 ? "5000+" : vacancies[1]}`}
            color="primary"/>
    }
    {
      ageLimit && ageLimit.length > 0 && ageLimit.map(age =>
        <Chip variant="outlined" size="small" onDelete={() => handleRemove("ageLimit", age)} className={classes.filter}
              label={age} color="primary"/>
      )
    }
    {
      location && location.length > 0 && location.map(l =>
        <Chip variant="outlined" size="small" onDelete={() => handleRemove("location", l)} className={classes.filter}
              label={l} color="primary"/>
      )
    }
    {
      qualification && qualification.length > 0 && qualification.map(q =>
        <Chip variant="outlined" size="small" onDelete={() => handleRemove("qualification", q)}
              className={classes.filter} label={q} color="primary"/>
      )
    }
    {
      company && company.length > 0 && company.map(c =>
        <Chip variant="outlined" size="small" onDelete={() => handleRemove("company", c)}
              className={classes.filter} label={c} color="primary"/>
      )
    }
  </div>
};

export default SelectedOptions
