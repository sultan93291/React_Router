import React from "react";

const Heading = ({ text, className, TagName }) => {
  return <TagName className={className}> {text} </TagName>;
};

export default Heading;
