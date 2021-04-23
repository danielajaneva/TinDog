import React from "react";

import Navbar from "./Navbar";
import phoneImg from "../images/iphone6.png";

const Header = () => {
  return (
    <section id="title">
      <div class="container-fluid">
        <Navbar />
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <h1>Meet new and interesting dogs nearby.</h1>
            <button type="button" class="btn btn-dark btn-lg download-button">
              <i class="fab fa-apple"></i> Download
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-lg download-button"
            >
              <i class="fab fa-google-play"></i> Download
            </button>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <img class="rotated-img" src={phoneImg} alt="iphone-mockup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
