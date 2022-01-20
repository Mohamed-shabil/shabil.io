import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/Product/Product';
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);

  }

  const fetchCart = async () => {
    const cartData = await commerce.cart.retrieve()
    setCart(cartData);
  }


  const handleAddCart = async (productId, quantity) => {
    const addProduct = await commerce.cart.add(productId, quantity)
    setCart(addProduct);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const UpadateCartQty = await commerce.cart.update(productId,{quantity});
    setCart(UpadateCartQty);
  }

  const handleRemoveCart = async (productId) => {
    const RemoveCart = await commerce.cart.remove(productId)
    setCart(RemoveCart);
  }
  const handleEmptyCart = async () => {
    const EmptyCart = await commerce.cart.empty();
    setCart(EmptyCart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App

