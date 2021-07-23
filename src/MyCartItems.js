import { cartContext } from './App';
import { useContext } from 'react';
import React from 'react';

export default function MyCartItems() {
  const {
    inCartArr,
    setInCartArr,
    cartItemsArr,
    setCartItemsArr,
    setNumOfItemsInCart,
    numOfItemsInCart
  } = useContext(cartContext);

  //All items users cart
  return (
    <>
      {cartItemsArr
        .filter(ele => inCartArr.includes(ele.id))
        .map((ele, index) => {
          return (
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ele.imageUrl}
                  alt="..."
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{ele.itemName}</h5>

                    {ele.offer === true ? (
                      <>
                        <span
                          className="price-text text-decoration-line-through"
                          style={{ textDecorationLine: 'line-through' }}
                        >{`${ele.originalPrice}`}</span>
                        <span className="price-text">{`${
                          ele.currentPrice
                        }`}</span>
                      </>
                    ) : (
                      <span className="price-text">{`${
                        ele.currentPrice
                      }`}</span>
                    )}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => {
                        let filteredArr = inCartArr.filter(id => {
                          if (ele.id !== id) {
                            return true;
                          }
                        });
                        setInCartArr(filteredArr);
                        setNumOfItemsInCart(x => x - 1);
                      }}
                    >
                      Remove from cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}