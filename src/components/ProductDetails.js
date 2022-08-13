import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart
  
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log("product id", productId);
  const dispatch = useDispatch();
  const addProduct=(product)=>{

    dispatch(addToCart(product))
  }

  const product = useSelector((state) => state.product);
  const { title, image, price, description, rating, category } = product;
  console.log("product =>", product);

  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error of Signle product fetching", err);
      });
    dispatch(selectedProduct(response.data));
    // console.log("response",response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className="loading">
        <h1>Your Proucts Are Loading...</h1>
         
         <span
              className="spinner-grow spinner-grow-md"
              role="status"
              aria-hidden="true"
            ></span>
            <span
              className="spinner-grow spinner-grow-md"
              role="status"
              aria-hidden="true"
            ></span><span
            className="spinner-grow spinner-grow-md"
            role="status"
            aria-hidden="true"
          ></span><span
          className="spinner-grow spinner-grow-md"
          role="status"
          aria-hidden="true"
        ></span>
        </div>
      ) : (
        <div>
          <section style={{ "background-color": "#eee" }}>
            <div className="container py-5 mt-4">
              <div className="row justify-content-center">
                <div
                  className="col-md-8 col-lg-6 col-xl-4"
                  className="singleProduct"
                >
                  <div className="card" style={{ "border-radius": "15px" }}>
                    <div
                      className="bg-image hover-overlay ripple ripple-surface ripple-surface-light d-flex justify-content-center"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={image}
                        style={{
                          "border-top-left-radius":
                            "15px; border-top-right-radius: 15px",
                        }}
                        alt={title}
                        height={"400px"}
                        className="mt-5"
                      />
                      <a href="#!">
                        <div className="mask"></div>
                      </a>
                    </div>
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h1 className="text-dark lead fw-bold d-flex justify-content-center">
                            <mark>{title}</mark>
                          </h1>
                          <p>
                            Description: <br /> {description}
                          </p>
                        </div>
                        <div>
                          <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <p className="small text-muted border border-dark-muted">
                            Rated: {rating.rate}
                          </p>
                          <p className="small text-muted border border-dark-muted">
                            Count: {rating.count}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between">
                        <p className="lead fw-bold">$ {price}</p>
                        <p className="lead fw-bold">Category: {category}</p>
                      </div>
                      <p className="small text-muted">TOOK BUY PRODUCTS</p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                        <Link to="/">
                          <button
                            type="button"
                            className="btn btn-outline-danger lead fw-bold"
                          >
                            Go Back
                          </button>
                        </Link>
                        <button
                          onClick={()=>addProduct(product)}
                          type="button"
                          className="btn btn-outline-success lead fw-bold"
                        >
                          <i class="fa-solid fa-cart-plus"></i> ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

