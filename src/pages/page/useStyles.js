import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.8),
    },
  },
  paper: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    '& p': {
      margin: theme.spacing(2),
    },
    '& ul': {
      listStyleType: '→',
    },

    '& li': {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      '& p': {
        margin: theme.spacing(1),
      },
    },
  },
}));

export default useStyles;
