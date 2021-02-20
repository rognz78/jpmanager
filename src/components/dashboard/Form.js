import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: "",
    gender: ""
  });

  const { name, username, email, phone, website, gender } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
     
    
    <Paper>
       
    <div className="container">
        
    <div className="pb-4" >
    <Typography component="h2" variant="h5" color="secondary" align="center"  gutterBottom>
      Add a User
    </Typography>
     
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
            required
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group" >
          <FormControl style={{marginRight:30}}>
            <InputLabel id="gender">Gender</InputLabel>
                <Select style={{minWidth:300}}
                  labelId="gender"
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={e => onInputChange(e)}
                  
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
            <InputLabel id="gender">Gender</InputLabel>
                <Select style={{minWidth:300}}
                  labelId="gender"
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={e => onInputChange(e)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    </Paper>
   
  );
};

export default AddUser;