import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import usestyles from './style';
import logo from "../../assets/shopping-cart.png";
import { Link, useLocation } from 'react-router-dom'
function Navbar({ totalItems }) {
    const classes = usestyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' component={Link} to="/" className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height="30px" className={classes.image} />
                        E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    <div className='classes.button'>
                        {location.pathname ==='/' &&(
                        <IconButton component={Link} to='/cart' aria-label="show Cart items" color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>)}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
