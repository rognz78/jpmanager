import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import useStyles from "./useStyles";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import Count from "./Count";
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function NavBar() {
        //const counter = Count();
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const handleDrawerOpen = () => {
            setOpen(true);
        };
        const handleDrawerClose = () => {
            setOpen(false);
        };

        
            const [count, setCount] = useState();
            
            useEffect(() => {
              getCount();
            }, []);
        
            const getCount = async () => {
            const result = await axios.get("http://localhost:3003/users");
            setCount(result.data.length);
            }
            
    return (
   
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
            
                <Typography component="h1" variant="h6" color="white" noWrap className={classes.title}>
                <Link class="text-white" to={`/`}>
                    Visa Factory Limited
                </Link>
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={count} color="secondary">
                        <NotificationsIcon />
                            </Badge> 
                </IconButton>
           </Toolbar>
        </AppBar>
        
        <Drawer
            variant="temporary"
            className="docked"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            
            <Divider />
            <List onClick={handleDrawerClose}>{mainListItems}</List>
            <Divider />
            <List onClick={handleDrawerClose}>{secondaryListItems}</List>
            
        </Drawer>
    </div>
    
 );  
}
