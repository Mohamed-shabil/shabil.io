import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './style'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'



function Cart({ cart ,handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) {
    const classes = useStyles();


    function EmptyCart() {
        return (
            <Typography variant="h3">Your Cart Is Empty
                <Link to="/" className={classes.link}>Hello World</Link>
            </Typography>
        )
    }
    function FilledCart() {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h6'>
                        Subtotal : {cart.subtotal.formatted_with_symbol}
                    </Typography>

                    <div>
                        <Button className={classes.emptyButton} onClick={handleEmptyCart()} size='medium' variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size='medium' variant="contained" color="Primary">CheckOut</Button>
                    </div>
                </div>
            </>
        )
    }
    if (!cart.line_items) return (
        <Typography style={{ margin: '20% 45%' }} varian='h4' Color='secondary'>
            Loading...
        </Typography>
    )
    return (
        <Container>
            <div style={{ margin: " 10% 0" }} className="classes.topbar">
                <Typography className="classes.title" variant="h4" gutterBottom>Your Shopping Cart </Typography>
                {!cart.line_items ? <EmptyCart /> : <FilledCart />}
            </div>
        </Container>
    )
}

export default Cart
