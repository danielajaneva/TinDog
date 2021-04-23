import React from "react";

import bliziImg from "../images/bizinsider.png";
import techImg from "../images/TechCrunch.png";
import tnwImg from "../images/tnw.png";
import mashImg from "../images/mashable.png";

const Press = () => {
  return (
    <section id="press">
      <img class="press-logo" src={techImg} alt="tc-logo" />
      <img class="press-logo" src={tnwImg} alt="tnw-logo" />
      <img class="press-logo" src={bliziImg} alt="biz-insider-logo" />
      <img class="press-logo" src={mashImg} alt="mashable-logo" />
    </section>
  );
};

export default Press;
