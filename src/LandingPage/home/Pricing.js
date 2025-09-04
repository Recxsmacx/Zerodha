import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3">Unbeatable Pricing</h1>
          <p>Get access to our premium features at a fraction of the cost.</p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border ">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutuals funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
