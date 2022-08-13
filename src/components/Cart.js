import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.addToCartAndRemove);
  console.log("state in cart ==", state);

  return (
    <>
      <div className="card bg-dark text-white border-0 mt-5">
        <img
          src="https://img.freepik.com/premium-photo/shopping-concept-cartons-paper-boxes-blue-shopping-cart-pink-background-online-shopping-consumers-can-shop-from-home-delivery-service-with-copy-space_9635-4088.jpg?w=1480"
          className="card-img"
          height="700px"
          alt="bgc"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-start mb-4">
          <div className="container homeContainer">
            <h5 className="card-title display-3 fw-bolder mt-5">
              TOTAL PRODUCTS IN CART ={state.length}
            </h5>
            <Link to="/">
              <button
                type="button"
                class="btn btn-outline-success lead fw-bold mt-5"
              >
                ADD ANOTHER PRODUCTS TO THE CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

//
