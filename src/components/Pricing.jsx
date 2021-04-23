import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      {/* <!-- CARDS --> */}
      <div class="row">
        <div class="col-lg-4 col-md-6 pricing-column">
          <div class="card">
            <div class="card-header">
              <h3>Chihuahua</h3>
            </div>
            <div class="card-body">
              <h2>Free</h2>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button
                type="button"
                class="btn btn-lg btn-outline-dark btn-block pricing"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 pricing-column">
          <div class="card">
            <div class="card-header">
              <h3>Labrador</h3>
            </div>
            <div class="card-body">
              <h2>$49 / mo</h2>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button
                type="button"
                class="btn btn-lg btn-dark btn-block pricing"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 pricing-column">
          <div class="card">
            <div class="card-header">
              <h3>Mastiff</h3>
            </div>
            <div class="card-body">
              <h2>$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button
                type="button"
                class="btn btn-lg btn-dark btn-block pricing"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
