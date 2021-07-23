import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartFill } from 'react-bootstrap-icons';
import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { CartItemsList } from './CartItemsList';
import MyCart from './MyCart';
import HomePage from './HomePage';

export const cartContext = createContext(null);

function App() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [inCartArr, setInCartArr] = useState([]);
  const [cartItemsArr, setCartItemsArr] = useState(CartItemsList);
  let ratingObj = {};
  CartItemsList.map(ele => {
    let tempObj = { starRating: ele.starCount };
    ratingObj[ele.id] = tempObj;
  });
  const [starRatingObj, setStarRatingObj] = useState(ratingObj);

  useEffect(() => {
    setCartItemsArr(CartItemsList);
  }, []);

  return (
    //context provider for states
    <cartContext.Provider
      value={{
        numOfItemsInCart,
        setNumOfItemsInCart,
        inCartArr,
        setInCartArr,
        cartItemsArr,
        setCartItemsArr,
        starRatingObj,
        setStarRatingObj,
        CartItemsList
      }}
    >
      <div className="App">
        {/* navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link">Home</a>
                  </li>
                </Link>
                <li className="nav-item">
                  <a
                    className="nav-link about-us"
                    onClick={() => {
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>
              <form className="cart-box">
                <Link to="/mycart">
                  <button className="btn btn-outline-dark" type="submit">
                    <CartFill />
                    Cart&ensp;
                    <span className="badge bg-danger text-white ms-1 rounded-pill">
                      {numOfItemsInCart}
                    </span>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>

        {/* route switch for home and mycart */}
        <Switch>
          <Route path="/mycart">
            <MyCart />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        {/* footer section of app */}
        <footer className="py-5 bg-dark">
          <div className="container text-center text-white">
            <p className="m-0 text-center text-white">
              Copyright &copy; SHOPCART 2021
            </p>
            <div style={{ fontSize: '0.7em' }}>
              shopcart team:
              <br />
              Contact Us At: *987654321
            </div>
          </div>
        </footer>
      </div>
    </cartContext.Provider>
  );
}

export default App;