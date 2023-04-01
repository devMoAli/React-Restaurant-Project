import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div className="cutlery">
    <p className="p__cormorant">{title}</p>
    <img src={images.cutlery} alt="cutlery__img" className="cutlery__img" />
  </div>
);

export default SubHeading;
