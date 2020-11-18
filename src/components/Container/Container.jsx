import React from "react";
import "./Container.css";
import Image from "../../images/socialnetworking2.svg";

const Container = () => (
  <section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="promo-title">Welcome!</p>
          <p class="text">Don't <b>Google. </b> Just Ask.</p>
          <button type="button" class="btn btn-primary">
            Get Started
          </button>
        </div>
        <div class="col-md-6 text-center">
          <img src={Image} class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);

export default Container;
