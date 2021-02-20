import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import useStyles from "./useStyles";
import clsx from 'clsx';
import  Count from "./Count";

function preventDefault(event) {
  event.preventDefault();
}


export default function Deposits() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const counter = Count();
    
  return (
  
    
    <Paper className={fixedHeightPaper}>
    <React.Fragment>
      <Title>Total Records</Title>
      <Typography component="p" variant="h6">
        {counter}
        </Typography>
        <Typography component="p" variant="h6">
       
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      As on {  moment().format("MMMM Do YYYY")}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
    </Paper>
    
  );
}
