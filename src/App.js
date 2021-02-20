import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Form from "./components/dashboard/Form";
import NavBar from "./components/dashboard/NavBar";
import UsersTable from "./components/dashboard/UsersTable";
import User from "./components/dashboard/User";
import Contact from "./components/pages/Contact";
import EditUser from "../src/components/users/EditUser";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Chart from "./components/dashboard/Chart";
import Deposits from "./components/dashboard/Deposits";
import useStyles from "./components/dashboard/useStyles";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Visa Factory Limited
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
  return (
  
    <Router>
      <div className="App">
        <NavBar />
        
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={1}>
                <Switch>
                <Grid item xs={12} md={8} lg={9}>
                  <Route exact path="/" component={Chart} /> 
                </Grid>
                </Switch>
                <Switch>
                <Grid item xs={12} md={4} lg={3}>
                <Route exact path="/" component={Deposits} /> 
                </Grid>
                </Switch>
                <Switch>
                <Grid item xs={12}>
                  <Route exact path="/" component={UsersTable} /> 
                </Grid>
                </Switch>
           
           
           <Switch>
                <Grid item xs={12} md={12} lg={12}>
                    <Route exact path="/form" component={Form} />
                </Grid>
            </Switch>
            <Switch>
                <Grid item xs={12} md={12} lg={12}>
                    <Route exact path="/contact" component={Contact} />
                </Grid>
            </Switch>    
            <Switch>
                <Grid item xs={12} md={12} lg={12}>  
                <Route exact path="/users/edit/:id" component={EditUser} />
                </Grid>
            </Switch>   
            <Switch>
                <Grid item xs={12} md={12} lg={12}>  
                <Route exact path="/users/:id" component={User} />
                </Grid>
            </Switch>           
            </Grid>
            <Box pt={4}>
                <Copyright />
               
            </Box>
            </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;