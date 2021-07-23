import React from 'react';
import CartItems from './CartItems';

export default function HomePage() {
  return (
    <>
      {/* homepage header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">Floweraura</h2>
          </div>
        </div>
      </header>

      {/* shop products in homepage */}
      <section className="py-5 items-container">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <CartItems />
          </div>
        </div>
      </section>
    </>
  );
}