import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <Link to={"/aboutPage"}>
        <div className="card bg-dark text-white border-0">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_548887-136.jpg?t=st=1658519695~exp=1658520295~hmac=f2371f58dd656bdbf15e004d4a84d4c68107b9062f5f6c2cb774979881ec33b7&w=1800"
            alt="aboutIcon"
            className="card-img"
            height="760px"
            
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center mb-4">
            <div className="container homeContainer">
              <h5 className="card-title display-3 fw-bolder mb-0">
                Took Buy !!!!
              </h5>

              <p className="card-text display-3 mb-0">
                Together,
                <br />
                We Dare <br />
                To Maximize
              </p>
              <p className="card-text fs-2">
                {" "}
                We are maximisers. We're out on our own <br /> journeys to
                maximise - be the best at what <br /> we choose and care about
                the most - <br /> whether it be our impact, voice, potential,
                <br /> ideas, influence, well-being or more. <br /> Because when
                we maximise ourselves in - <br /> our inclusive teams, TookBuy
                is able to- <br /> deliver the best imaginable value for our{" "}
                <br /> customers,stakeholders and the planet!
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AboutPage;
