import React from "react";
import backgroundimg from "../../assets/images/eshop.jpg";

const Background = () => {
  return (
    <section class="landing">
      {/* <img src={backgroundimg} ClassName="landing" /> */}
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large" style={{ color: "white" }}>
            1 day Delivery
          </h1>
          <p className="lead">Shop at an amazing price and Value</p>
        </div>
      </div>
    </section>
  );
};

export default Background;
