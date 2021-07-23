import { useContext } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { cartContext } from './App';
import React from 'react';

function showStarFun(starCount) {
  let starContent = [];
  for (let i = 0; i < starCount; i++) {
    starContent.push(<StarFill />);
  }
  return starContent;
}
export default function CartItems() {
  const {
    setNumOfItemsInCart,
    inCartArr,
    setInCartArr,
    cartItemsArr,
    starRatingObj,
    setStarRatingObj,
    CartItemsList
  } = useContext(cartContext);

  //All cart products in Homepage
  return (
    <>
      {cartItemsArr.map((ele, index) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
              {ele.offer === true ? (
                <>
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                </>
              ) : (
                ''
              )}
              <img
                className="card-img-top"
                src={ele.imageUrl}
                alt="..."
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{ele.itemName}</h5>

                  {ele.showStar === true ? (
                    <>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {showStarFun(starRatingObj[ele.id].starRating)}
                      </div>
                      <div style={{ fontSize: '10px' }}>
                        <button
                          className="update-rating"
                          onClick={() => {
                            let rating = prompt(
                              'Provide your rating for the product (1 to 5)'
                            );
                            if (['1', '2', '3', '4', '5'].includes(rating)) {
                              let tempObj = { ...starRatingObj };
                              tempObj[ele.id].starRating = rating;
                              setStarRatingObj(tempObj);

                              CartItemsList.map(item => {
                                if (item.id === ele.id) {
                                  item.starCount = rating;
                                }
                              });
                            } else {
                              alert(
                                'Sorry, Rating value should be between 1-5, pls try again'
                              );
                            }
                          }}
                        >
                          Update your rating
                        </button>
                      </div>
                    </>
                  ) : (
                    ''
                  )}

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
                    <span className="price-text">{`${ele.currentPrice}`}</span>
                  )}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {inCartArr.includes(ele.id) ? (
                    <a className="btn btn-success btn-outline-dark mt-auto disabled">
                      Added to cart
                    </a>
                  ) : (
                    <a
                      className="btn btn-warning btn-outline-dark mt-auto"
                      onClick={() => {
                        setInCartArr([...inCartArr, ele.id]);
                        setNumOfItemsInCart(x => x + 1);
                      }}
                    >
                      Add to cart
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}