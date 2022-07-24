import React, { forwardRef } from "react";
import "./style.scss";

const GetFactButton = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="select-none cursor-pointer font-bold get-fact-btn"
    >
      Click here to make it say something!
    </div>
  );
});

export default GetFactButton;
