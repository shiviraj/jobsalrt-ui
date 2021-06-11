import React from "react";
import {Chip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {padding: theme.spacing(0, 1)},
  filter: {margin: theme.spacing(0.25)},
}));

const SelectedOptions = ({filters, setFilters}) => {
  const classes = useStyles()

  const {formType, vacancies, ageLimit, location, qualification} = filters

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
      ageLimit &&
      <Chip variant="outlined" size="small" onDelete={() => handleRemove("ageLimit")} className={classes.filter}
            label={`${ageLimit[0] === 14 ? "min" : ageLimit[0]} - ${ageLimit[1] > 40 ? "40+" : ageLimit[1]}`}
            color="primary"/>
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
  </div>
};

export default SelectedOptions
