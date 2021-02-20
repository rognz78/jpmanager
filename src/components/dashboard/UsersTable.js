import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import Link from '@material-ui/core/Link';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Count from "./Count";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
    },
    
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

    
// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  btnRightMargin:{
    marginRight: 3,
    height:15,
    fontSize:10,
    

  }
}));



export default function UsersTable(props) {
  const counter = Count();
  const classes = useStyles();
  const [users, setUser] = useState([]);
  const [count, setCount] = useState();
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    setCount(result.data.length);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  
  const edit = async id => {
    await axios.Link (`/users/edit/${id}`);
    loadUsers();
  };
    
   return (
    
    <Paper className={classes.paper}>
    <React.Fragment>
      <Title>Home Page - {count}</Title>
      <TableContainer component={Paper}>
      <Table size="small" className={classes.Table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>User Name</StyledTableCell>
            <Hidden smDown>
            <StyledTableCell className={classes.Paper}>Email</StyledTableCell>
            </Hidden>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <StyledTableRow>
              <StyledTableCell>{index + 1} {user.id}</StyledTableCell>  
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell>{user.username}</StyledTableCell>
              <Hidden smDown>
              <StyledTableCell className={classes.Paper}>{user.email}</StyledTableCell>
              </Hidden>
               
              <StyledTableCell>
                <Link  to={`/users/${user.id}`}>
                  
                  <VisibilityOutlinedIcon color="action" fontSize="small" />
                  
                </Link>
                 
                <Link to={`/users/edit/${user.id}`}>
                  <EditTwoToneIcon fontSize="small" />
                 </Link>
                
                 <Link onClick={() => deleteUser(user.id)}>
                  <HighlightOffRoundedIcon color="secondary" fontSize="small" />
                </Link>
              </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" >
          See more orders
        </Link>
       
      </div>
      
    </React.Fragment>
    </Paper>
    
    
  );
  
}
