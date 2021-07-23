import { useContext } from 'react';
import { cartContext } from './App';
import MyCartItems from './MyCartItems';
import { Link } from 'react-router-dom';
import React from 'react';

export default function MyCart() {
  const { numOfItemsInCart } = useContext(cartContext);
  return (
    <>
      {/* users cart header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">Floweraura</h2>
            <p className="lead fw-normal text-white-50 mb-0">My Cart Items</p>
          </div>
        </div>
      </header>

      {/* items added in user's cart */}
      <section className="py-5 items-container">
        <div className="container px-4 px-lg-5 mt-5">
          {numOfItemsInCart === 0 ? (
            <>
              <h4 className="incart-message">
                Sorry, There are no Items in your Cart
              </h4>
              <br />
              <h5>
                Click here to choose Items from our <Link to="/">SHOPCART</Link>
              </h5>
            </>
          ) : (
            <></>
          )}
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <MyCartItems />
          </div>
        </div>
      </section>
    </>
  );
}