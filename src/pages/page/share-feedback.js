import React, {useState} from 'react';
import {Button, Chip, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import FormInput from "../../common/components/FormInput";
import API from "../../API";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    maxWidth: theme.spacing(80),
    margin: "0 auto",
    padding: theme.spacing(2),
    boxShadow: theme.shadows[2]
  },
  form: {
    width: "100%"
  },
  submit: {
    marginTop: theme.spacing(1)
  },
  response: {
    backgroundColor: theme.palette.success.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white
  }
}));


const ShareFeedback = () => {
  const classes = useStyles();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!(name.trim() || subject.trim() || message.trim())) {
      return
    }
    setError("")
    setResponse("")
    API.contact.save({name, email, subject, message, isFeedback: true})
      .then(res => setResponse("Thanks for your valuable feedback!!")
      )
      .catch(() => {
        setError("Something went wrong!!")
      })
  }


  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Typography variant="h5">Share Your Feedback</Typography>
        {(error || response) &&
        <Chip variant="outlined" className={error ? classes.error : classes.response}
              label={error || response}/>}
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormInput value={name} label="Name" onChange={setName} required/>
          <FormInput value={email} label="Email" onChange={setEmail} type="email"/>
          <FormInput value={subject} label="Subject" onChange={setSubject} required/>
          <FormInput value={message} label="Message" onChange={setMessage} multiline required/>
          <Button variant="contained" color="primary" type="submit" size="large" className={classes.submit}>
            Submit Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ShareFeedback;
