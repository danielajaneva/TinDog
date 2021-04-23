import React from "react";
import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Press from "./Press";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Footer from "./Footer";

import "../css/styles.css";

const App = () => {
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
