import React from "react";
import Heading from "../../Tags/Heading";

const Error = () => {
  return (
    <>
      <div id="error">
        <div className="container">
          {/* <h1>404 not found</h1> */}
          <Heading
            className={""}
            text={"404 not found"}
            TagName={"h1"}
          />
        </div>
      </div>
    </>
  );
};

export default Error;
