import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    gender: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  const classes = useStyles();
  return (
    <Paper>
       
    <div className="container">
        
    <div className="pb-4" >
    <Typography component="h2" variant="h5" color="secondary" align="center"  gutterBottom>
      User - {user.name} 
    </Typography>
     
    <form className={classes.root} noValidate autoComplete="off">
            <TextField disabled id="outlined" label="Name" variant="outlined" value={user.name} />
            <TextField disabled id="outlined" label="Username" variant="outlined" value={user.username} />
            <TextField disabled id="outlined" label="User Email" variant="outlined" value={user.email} />
            <TextField disabled id="outlined-" label="User Phone" variant="outlined" value={user.phone} />
            <TextField disabled id="outlined-" label="User Website" variant="outlined" value={user.website} />
            <TextField disabled id="outlined-" label="User Gender" variant="outlined" value={user.gender} />
    </form>
          
        
      </div>
    </div>
    </Paper>
  );
};

export default User;