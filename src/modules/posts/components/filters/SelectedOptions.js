import React from "react";
import {Button} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  filter: {backgroundColor: theme.palette.grey[300], margin: theme.spacing(0.5), padding: theme.spacing(0.25, 0.5)},
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

  return <React.Fragment>
    {formType.length > 0 && formType.map((type) => {
      return <Button variant="contained" size="small" key={type} onClick={() => handleRemove("formType", type)}
                     className={classes.filter}>
        <Close fontSize="small"/> {type}
      </Button>
    })}
    {
      vacancies &&
      <Button variant="contained" size="small" onClick={() => handleRemove("vacancies")} className={classes.filter}>
        <Close fontSize="small"/>
        {vacancies[0] === 0 ? "min" : vacancies[0]} - {vacancies[1] > 5000 ? "5000+" : vacancies[1]}
      </Button>
    }
    {
      ageLimit &&
      <Button variant="contained" size="small" onClick={() => handleRemove("ageLimit")} className={classes.filter}>
        <Close fontSize="small"/>
        {ageLimit[0] === 14 ? "min" : ageLimit[0]} - {ageLimit[1] > 40 ? "40+" : ageLimit[1]}
      </Button>
    }
    {
      location && location.length > 0 && location.map(l =>
        <Button variant="contained" size="small" onClick={() => handleRemove("location", l)} className={classes.filter}>
          <Close fontSize="small"/> {l}
        </Button>
      )
    }
    {
      qualification && qualification.length > 0 && qualification.map(q =>
        <Button variant="contained" size="small" onClick={() => handleRemove("qualification", q)}
                className={classes.filter}>
          <Close fontSize="small"/> {q}
        </Button>
      )
    }
  </React.Fragment>
};

export default SelectedOptions
