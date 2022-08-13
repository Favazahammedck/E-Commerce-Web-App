import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, category, title, price } = product;
    return (
      <>
        <Link to={`/product/${id}`}>
          <div className="container">
            <div
              className="card mt-4 mb-4 productCard h-100 text-center"
              key={id}
              style={{ width: "18rem" }}
            >
              <img
                src={image}
                className="card-img-top mt-4 p-4"
                height={"250px"}
                alt={title}
              />
              <div className="card-body">
                <h5 className="card-title mb-0">{title.substring(0, 10)}...</h5>
                <p className="card-text mb-0"> {category}</p>
                <p className="card-text lead fw-bold mb-0">$ {price}</p>
                <a className="btn btn-outline-success fw-bold">BUY PRODUCT</a>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return (
    <>
      <div className="allProductHeading mt-4">
        <h1>All Product Of Took Buy's</h1>
      </div>
      <div>{renderList}</div>
    </>
  );
};
export default ProductComponents;
