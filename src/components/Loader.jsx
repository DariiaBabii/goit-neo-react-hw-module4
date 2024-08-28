import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <BallTriangle
        height={80}
        width={80}
        color="purple"
        visible={true}
        ariaLabel="ball-triangle-loading"
      />
    </div>
  );
};

export default Loader;
