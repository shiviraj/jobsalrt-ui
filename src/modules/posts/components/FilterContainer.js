import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Chip, Divider, Typography} from "@material-ui/core";
import FilterOptions from "./filters/FilterOptions";
import FilterRange from "./filters/FilterRange";
import FilterInput from "./filters/FilterInput";
import SelectedOptions from "./filters/SelectedOptions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(1),
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2)
  },
  chip: {width: theme.spacing(11)},
  title: {marginBottom: theme.spacing(1)},
  filter: {backgroundColor: theme.palette.grey[300], margin: theme.spacing(0.5), padding: theme.spacing(0.25, 0.5)},
  divider: {marginTop: theme.spacing(1)}
}));


const FilterContainer = ({filters, setFilters}) => {
  const classes = useStyles()

  const handleClearAll = () => setFilters({formType: [], location: [], qualification: [], company: []});

  return <div className={classes.root}>
    <div className={classes.titleBar}>
      <Typography variant="h6" className={classes.title}>Filters</Typography>
      <Chip label="&#x2715; &nbsp; Clear All" size="small" onClick={handleClearAll} className={classes.chip}/>
    </div>
    <SelectedOptions filters={filters} setFilters={setFilters}/>
    <Divider className={classes.divider}/>
    <FilterOptions filters={filters} setFilters={setFilters} title="Form Type"/>
    <FilterRange title="Vacancies" values={[0, 100, 500, 1000, 2000, 3000, 5000, 5500]} filters={filters}
                 setFilters={setFilters} keyName="vacancies"/>
    <FilterRange title="Age Limit" values={[14, 16, 18, 20, 22, 25, 30, 35, 40, 45]} filters={filters}
                 setFilters={setFilters} keyName="ageLimit"/>
    <FilterInput title="Location" filters={filters} keyName="location" setFilters={setFilters}/>
    <FilterInput title="Education" filters={filters} keyName="qualification" setFilters={setFilters}/>
    <FilterInput title="Organisation" filters={filters} keyName="company" setFilters={setFilters}/>
  </div>
}

export default FilterContainer
