import React from "react";
import LoaderStyles from "./loader.styles";

const Loader = () => {
  return (
    <LoaderStyles.Wrapper>
      <div className="blue ball"></div>
      <div className="red ball"></div>
      <div className="yellow ball"></div>
      <div className="green ball"></div>
    </LoaderStyles.Wrapper>
  );
};

export default Loader;
