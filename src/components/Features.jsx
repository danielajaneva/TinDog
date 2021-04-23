import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <i class="feature-icons fas fa-check-circle"></i>
          <h3 class="h3-futures">Easy to use.</h3>
          <p class="grey-p">So easy to use, even your dog could do it.</p>
        </div>
        <div class="col-lg-4 col-md-4">
          <i class="feature-icons fas fa-bullseye"></i>
          <h3 class="h3-futures">Elite Clientele</h3>
          <p class="grey-p">We have all the dogs, the greatest dogs.</p>
        </div>
        <div class="col-lg-4 col-md-4">
          <i class="feature-icons fas fa-heart"></i>
          <h3 class="h3-futures">Guaranteed to work.</h3>
          <p class="grey-p">
            Find the love of your dog's life or your money back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
